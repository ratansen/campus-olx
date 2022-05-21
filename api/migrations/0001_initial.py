# Generated by Django 4.0.4 on 2022-05-21 09:13

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
                ('product_name', models.CharField(max_length=255)),
                ('product_price', models.PositiveBigIntegerField()),
                ('product_quantity', models.PositiveBigIntegerField()),
            ],
        ),
    ]
