from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(max_length=255)
    product_price = serializers.FloatField()
    product_quantity = serializers.IntegerField(required=False, default=1)

    class Meta:
        model = Product
        fields = ('__all__')