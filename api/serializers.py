from rest_framework import serializers
from rest_framework import exceptions
from .models import Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('image',)

class ProductSerializer(serializers.ModelSerializer):

    product_images = ProductImageSerializer(many = True)

    class Meta():
        model = Product
        fields = ['id', 'title', 'category', 'price', 'negotiable', 'description', 'product_images']
        
 

class PostViewSetSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        images = self.context['product_images']
        product = Product.objects.create(**validated_data)
        for image in images:
            ProductImage.objects.create(product=product, image=image)
        return product

    class Meta:
        model = Product
        fields = '__all__'