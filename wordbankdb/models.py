"""Module prvoding function to define db model"""
from django.db import models

# Create your models here.
class Word(models.Model):
    """A model for Ilocano word with pronunciation and English translation"""
    word = models.CharField(max_length=20)
    pronunciation = models.CharField(max_length=30)
    translation = models.CharField(max_length=20)
    