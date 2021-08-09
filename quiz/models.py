from django.db import models
	
class Question(models.Model):
	question = models.TextField()
	category = models.ForeignKey('Category', default=1, on_delete=models.DO_NOTHING, related_name='question')
	choice1 = models.CharField(max_length=50)
	choice2 = models.CharField(max_length=50)
	choice3 = models.CharField(max_length=50)
	choice4 = models.CharField(max_length=50)
	answer = models.CharField(max_length=50)
	answer2 = models.CharField(max_length=50, blank=True)
	answer3 = models.CharField(max_length=50, blank=True)
	answer4 = models.CharField(max_length=50, blank=True)
	

	def __str__(self):
		return self.question
	
 	
class Category(models.Model):
	categoryName = models.CharField(max_length=50)
	categoryDetails = models.TextField(blank=True)
	
	def __str__(self):
		return self.categoryName

	def get_category(self):
		return self.question__set.all()


class Results(models.Model):
	question = models.ForeignKey(Question, on_delete=models.CASCADE) 
	category = models.ForeignKey(Category, on_delete=models.CASCADE) 
	  
