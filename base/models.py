from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    availability = models.BooleanField(default=True)
    needing_repair = models.BooleanField(default=False)
    durability = models.IntegerField(max_length=200)
    max_durability = models.IntegerField(max_length=200)
    mileage = models.IntegerField(max_length=200,null=True,blank=True)
    price = models.IntegerField(max_length=200)
    minimum_rent_period = models.IntegerField(max_length=200)

    def __str__(self):
        return self.name
