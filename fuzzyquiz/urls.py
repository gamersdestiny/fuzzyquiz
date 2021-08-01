
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('quiz.urls')),
    path('api-auth', include('rest_framework.urls'))
] 