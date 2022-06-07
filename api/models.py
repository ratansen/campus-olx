from distutils.command.upload import upload
from email.policy import default
from pyexpat import model
from tkinter.ttk import Separator
from django.db import models
import uuid
from django.forms import IntegerField

# Create your models here.
class Product(models.Model):
    
    category_list = (
        ('Electronics', 'Electronics'),
        ('Stationary', 'Stationary'),
        ('Sports', 'Sports'),
        ('Vehicle', 'Vehicle'),
        ('Music', 'Music'),
        ('Fashion', 'Fashion'),
        ('Miscellaneous', 'Miscellaneous'),
    )

    id = models.SlugField(primary_key=True, default=uuid.uuid4)
    title = models.CharField(max_length=1023)
    category = models.CharField(max_length=63, choices=category_list, default='Electronics')
    price = models.PositiveIntegerField()
    description = models.TextField()
    images = models.ImageField(upload_to = "ads_images", null = True, blank = True)
    negotiable = models.BooleanField(default=False)


    def __str__(self):
        return str(self.title)   


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name="product_images", on_delete=models.CASCADE, null = True)
    image = models.ImageField(upload_to = "ads_images", null = True, blank = True)

    def __str__(self):
        return (str(self.image))