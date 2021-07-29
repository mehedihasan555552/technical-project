from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes,name='route' ),
    path('products/', views.getProducts,name='products' ),

]