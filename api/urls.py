from django.urls import path
from .views import ProductViews

urlpatterns = [
    path('products/', ProductViews.as_view()),
    path('products/<int:id>', ProductViews.as_view())
]