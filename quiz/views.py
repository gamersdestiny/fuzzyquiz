from django.shortcuts import render

def home(request):
	return render(request, 'quiz/home.html')

def categories(request):
	return render(request, 'quiz/categories.html')