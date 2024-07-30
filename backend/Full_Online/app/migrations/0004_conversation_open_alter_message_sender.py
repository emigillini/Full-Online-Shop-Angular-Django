# Generated by Django 5.0.6 on 2024-07-26 11:41

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_remove_conversation_admin'),
    ]

    operations = [
        migrations.AddField(
            model_name='conversation',
            name='open',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='message',
            name='sender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]