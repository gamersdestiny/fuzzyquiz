from django.urls import path

from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
	path('', views.home, name='home'),
	path('categories/', views.categories, name='categories')
]+ staticfiles_urlpatterns()
