from django.contrib import admin
# from .models import *
# Register your models here.
# admin.site.register(Blogs)
from django.apps import apps

myapp = apps.get_app_config('myapp_test')
for model in myapp.get_models():
    admin.site.register(model)