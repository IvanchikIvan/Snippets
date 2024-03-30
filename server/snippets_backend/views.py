from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import generics, status, permissions
from rest_framework.decorators import APIView, api_view, permission_classes
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect, get_token
from .models import Snippet
from .serializers import SnippetSerializer, UserSerializer


def check_auth(request):
    if request.user.is_authenticated:
        return JsonResponse({'status': 'authenticated', 'username': request.user.username})
    else:
        return JsonResponse({'status': 'not_authenticated'})


class SnippetList(generics.ListCreateAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class SnippetPage(generics.RetrieveAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    lookup_field = 'id'


class UserSnippetList(generics.ListAPIView):
    serializer_class = SnippetSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        print(self.request.user)
        return Snippet.objects.filter(user=user)


class SnippetCreate(generics.CreateAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ObtainAuthToken().serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        print(token)
        return Response({'token': token.key, 'user_id': user.pk})


class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Successfully logged out'})


def send_csrf_token(request):
    csrf_token = get_token(request)
    data = {'csrf_token': csrf_token}
    return JsonResponse(data)


