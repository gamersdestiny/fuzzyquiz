from django.db import router
from django.urls import path
from django.urls.conf import include

from . import views
from .views import CategoryViewSet
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from rest_framework import routers

router = routers.DefaultRouter()
router.register('questions-api', views.QuestionViewSet)
router.register('category-api', CategoryViewSet)

urlpatterns = [
	path('', views.home, name='home'),
	path('categories/', views.categories, name='categories'),
	path('question/', views.question, name='question'),
	path('', include(router.urls))

]+ staticfiles_urlpatterns()
