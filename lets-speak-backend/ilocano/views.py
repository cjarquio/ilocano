"""Module providing function to render api call"""
from rest_framework import viewsets
from django.db.models import Prefetch
from ilocano.serializers import WordBankSerializer, LessonSerializer, DialogSerializer, SectionSerializer
from ilocano.models import WordBank, Lesson, Dialog, Section

# Create your views here.


class LessonView(viewsets.ModelViewSet):
    """Query for all objects in Lesson"""
    serializer_class = LessonSerializer

    def get_queryset(self):
        queryset = Lesson.objects.all()
        current_lesson = self.request.query_params.get('current_lesson')
        if current_lesson is not None:
            return queryset.filter(pk=current_lesson)
        return queryset


class DialogView(viewsets.ModelViewSet):
    """Query for all objects in Lesson"""
    serializer_class = DialogSerializer

    def get_queryset(self):
        queryset = Dialog.objects.all()
        return queryset


class SectionView(viewsets.ModelViewSet):
    """Query for all objects in Lesson"""
    serializer_class = SectionSerializer

    def get_queryset(self):
        queryset = Section.objects.all()
        return queryset


class WordBankView(viewsets.ModelViewSet):
    """Query for all objects in Wordbank"""
    serializer_class = WordBankSerializer

    def get_queryset(self):
        queryset = WordBank.objects.all()
        return queryset
