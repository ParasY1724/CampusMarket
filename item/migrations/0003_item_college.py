# Generated by Django 5.0.3 on 2024-04-13 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0002_category_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='college',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
