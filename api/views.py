from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser, JSONParser
from .serializers import ProductSerializer, PostViewSetSerializer
from .models import Product
from django.shortcuts import get_object_or_404



class ProductViews(APIView):

    #post
    def post(self, request, *args, **kwargs):
        print(request.FILES.getlist('product_images'))
        product_images = request.FILES.getlist('product_images', None)
        print(product_images)
        data = request.data.copy()
        # data.pop('product_images')
        print(data)
        
        serializer = PostViewSetSerializer(data=data, context = {'product_images': product_images})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    # get
    def get(self, request, id = None):
        # id = request.query_params.get('id', None)
        print(id)
        if id:
            item = Product.objects.get(id=id)
            serializer = ProductSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        category = request.query_params.get('category', None)
        print(category)
        if category:
            items = Product.objects.filter(category = category)
            print(items)
            serializer = ProductSerializer(items, many = True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        



        items = Product.objects.all()
        serializer = ProductSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

    # update
    def patch(self, request, id=None):
        item = Product.objects.get(id=id)
        serializer = ProductSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        else:
            return Response({"status": "error", "data": serializer.errors})
    
    # delete
    def delete(self, request, id=None):
        item = get_object_or_404(Product, id=id)
        item.delete()
        return Response({"status": "success", "data": "Item Deleted"})