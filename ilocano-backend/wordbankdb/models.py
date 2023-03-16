"""Module providing function to define db model"""
from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class WordBank(models.Model):
    """A model for Ilocano word with pronunciation and English translation"""
    ilokano = models.CharField(max_length=20)
    english = models.CharField(max_length=30)
    category = models.CharField(max_length=20 , null=True, blank=True)
    variations = ArrayField(models.CharField(max_length=20), null=True, blank=True)
    lesson_number = models.IntegerField(null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.ilokano} {self.english}"
    