from django.contrib import admin
from django.contrib.admin.decorators import register

from . import models

admin.site.register(models.Question)
admin.site.register(models.Category)
admin.site.register(models.Results)