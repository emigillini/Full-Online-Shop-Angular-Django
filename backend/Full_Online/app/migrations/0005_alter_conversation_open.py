# Generated by Django 5.0.6 on 2024-07-26 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_conversation_open_alter_message_sender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='open',
            field=models.BooleanField(default=True),
        ),
    ]
