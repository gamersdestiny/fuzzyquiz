from django.db.models import fields
from rest_framework import serializers
from . import models

class QuestionSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = models.Question
		fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
	question = QuestionSerializer(read_only=True, many=True)
	class Meta:
		model = models.Category
		fields = '__all__'
