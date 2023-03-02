"""Module providing function to define db model"""
from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class WordBank(models.Model):
    """A model for Ilocano word with pronunciation and English translation"""
    category = models.CharField(max_length=20 , null=True, blank=True)
    english = models.CharField(max_length=30)
    ilokano = models.CharField(max_length=20)
    variations = ArrayField(models.CharField(max_length=20), null=True, blank=True)
    lesson_number = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)

    def __str__(self) -> str:
        return str(self.ilokano)
    