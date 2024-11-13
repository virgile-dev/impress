# Generated by Django 5.1.2 on 2024-11-08 07:59

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_document_link_reach'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='language',
            field=models.CharField(choices="(('en-us', 'English'), ('fr-fr', 'French'), ('de-de', 'German'))", default='en-us', help_text='The language in which the user wants to see the interface.', max_length=10, verbose_name='language'),
        ),
        migrations.CreateModel(
            name='DocumentFavorite',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, help_text='primary key for the record as UUID', primary_key=True, serialize=False, verbose_name='id')),
                ('created_at', models.DateTimeField(auto_now_add=True, help_text='date and time at which a record was created', verbose_name='created on')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='date and time at which a record was last updated', verbose_name='updated on')),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorited_by_users', to='core.document')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorite_documents', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Document favorite',
                'verbose_name_plural': 'Document favorites',
                'db_table': 'impress_document_favorite',
                'constraints': [models.UniqueConstraint(fields=('user', 'document'), name='unique_document_favorite_user', violation_error_message='This document is already targeted by a favorite relation instance for the same user.')],
            },
        ),
    ]