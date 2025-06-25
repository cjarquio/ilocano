from django.db import models

# Create your models here.
class Word(models.Model):
    ilocano = models.CharField(max_length=255, unique=True)
    english = models.TextField()
    lesson_number = models.IntegerField(blank=True, null=True)
    part_of_speech = models.CharField(max_length=50, blank=True, null=True)
    example_sentence = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.ilocano} - {self.english}'
