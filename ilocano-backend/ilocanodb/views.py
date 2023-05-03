"""Module providing function to render api call"""
from rest_framework import viewsets
from django.db.models import Prefetch
from ilocanodb.serializers import WordBankSerializer, LessonSerializer, DialogSerializer, SectionSerializer, RoutesSerializer
from ilocanodb.models import WordBank, Lesson, Dialog, Section

# Create your views here.


class LessonView(viewsets.ModelViewSet):
    """Query for all objects in Lesson"""
    serializer_class = LessonSerializer

    def get_queryset(self):
        queryset = Lesson.objects.all()
        current_lesson = self.request.query_params.get('current_lesson')
        current_section = self.request.query_params.get('current_section')
        if current_lesson is not None and current_section is not None:
            return queryset.filter(pk=current_lesson).prefetch_related(
                Prefetch('section', queryset=Section.objects.filter(pk=current_section)))
        elif current_lesson is not None:
            return queryset.filter(pk=current_lesson)
        return queryset


class RouteView(viewsets.ModelViewSet):
    """Query for all objects in Lesson"""
    serializer_class = RoutesSerializer

    def get_queryset(self):
        queryset = Lesson.objects.all()
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
