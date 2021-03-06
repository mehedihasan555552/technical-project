# Generated by Django 3.2.4 on 2021-07-29 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('code', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=200)),
                ('availability', models.BooleanField(default=True)),
                ('needing_repair', models.BooleanField(default=False)),
                ('durability', models.IntegerField(max_length=200)),
                ('max_durability', models.IntegerField(max_length=200)),
                ('mileage', models.IntegerField(blank=True, max_length=200, null=True)),
                ('price', models.IntegerField(max_length=200)),
                ('minimum_rent_period', models.IntegerField(max_length=200)),
            ],
        ),
    ]
