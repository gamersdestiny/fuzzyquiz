from django.db.models import fields
from rest_framework import serializers
from . import models

class ChoiceSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Category
		fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Question
		fields = '__all__'