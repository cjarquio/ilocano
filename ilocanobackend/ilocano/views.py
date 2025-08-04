import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from rest_framework import viewsets
from ilocano.models import Word
from ilocano.serializers import WordSerializer

# Create your views here.
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully logged in.'})

def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'detail': 'You\'re not logged in.'}, status=400)

    logout(request)
    return JsonResponse({'detail': 'Successfully logged out.'})

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
