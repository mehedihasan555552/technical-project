from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from . models import * 
from . serializers import *



# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/products',
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    # query = request.query_params.get('keyword')
    # print('query:', query)
    # if query == None:
    #     query = ''

    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)