# Generated by Django 5.0.6 on 2024-07-01 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_purchasedetail_purchase'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='adress',
            field=models.CharField(blank=True, max_length=45, null=True),
        ),
    ]