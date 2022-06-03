from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    # product_name = serializers.CharField(max_length=255)
    # product_price = serializers.FloatField()
    # product_quantity = serializers.IntegerField(required=False, default=1)
    category_list = (
        ('Electronics', 'Electronics'),
        ('Stationary', 'Stationary'),
        ('Sports', 'Sports'),
        ('Vehicle', 'Vehicle'),
        ('Music', 'Music'),
        ('Fashion', 'Fashion'),
        ('Miscellaneous', 'Miscellaneous'),
    )
    title = serializers.CharField(max_length=1023)
    category = serializers.CharField(max_length=63)
    price = serializers.IntegerField()
    description = serializers.CharField()
    images = serializers.ImageField(required = False)
    class Meta:
        model = Product
        fields = ('__all__')