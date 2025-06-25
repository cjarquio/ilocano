from django.shortcuts import render
from rest_framework import viewsets
from ilocano.models import Word
from ilocano.serializers import WordSerializer

# Create your views here.
class WordViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Word instances.
    """
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned words to a given part of speech,
        by filtering against a 'part_of_speech' query parameter in the URL.
        """
        queryset = super().get_queryset()
        part_of_speech = self.request.query_params.get('part_of_speech', None)
        if part_of_speech is not None:
            queryset = queryset.filter(part_of_speech=part_of_speech)
        return queryset
