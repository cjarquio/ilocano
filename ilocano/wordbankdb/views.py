"""Module providing function to render api call"""
from django.shortcuts import render
from rest_framework import viewsets
from wordbankdb.serializers import WordBankSerializer
from wordbankdb.models import WordBank

# Create your views here.
class WordBankView(viewsets.ModelViewSet):
    """Query for all objects in Wordbank"""
    serializer_class = WordBankSerializer
    queryset = WordBank.objects.all()
