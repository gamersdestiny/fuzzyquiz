from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers

def home(request):
	return render(request, 'quiz/home.html')

def categories(request):
	return render(request, 'quiz/categories.html')

def question(request):
	return render(request, 'quiz/question.html')

class CategoryViewSet(viewsets.ModelViewSet):
	queryset = models.Category.objects.all()
	serializer_class = serializers.ChoiceSerializer

class QuestionViewSet(viewsets.ModelViewSet):
	queryset = models.Question.objects.all()
	serializer_class = serializers.QuestionSerializer
