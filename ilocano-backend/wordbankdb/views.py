"""Module providing function to render api call"""
from django.shortcuts import render
from rest_framework import viewsets
from wordbankdb.serializers import WordBankSerializer
from wordbankdb.models import WordBank

# Create your views here.
class WordBankView(viewsets.ModelViewSet):
    """Query for all objects in Wordbank"""
    serializer_class = WordBankSerializer

    def get_queryset(self):
        queryset = WordBank.objects.all()
        current_lesson = self.request.query_params.get('lesson_number')
        if current_lesson is not None:
            queryset = queryset.filter(lesson_number = current_lesson).order_by('ilokano')
        return queryset