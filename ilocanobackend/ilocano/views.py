import json

from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.http import require_POST
from django.contrib.auth import authenticate, login, logout
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from rest_framework import viewsets
from ilocano.models import Word
from ilocano.serializers import WordSerializer

def get_csrf(request):
    response = JsonResponse({'detail': 'CSRF cookie set'})
    response['X-CSRFToken'] = get_token(request)
    return response

@require_POST
def login_view(request):
    print("Login view called")
    print("Request body:", request.body)
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


class SessionView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @staticmethod
    def get(request, format=None):
        return JsonResponse({'isAuthenticated': True})


class WhoAmIView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @staticmethod
    def get(request, format=None):
        return JsonResponse({'username': request.user.username})

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
