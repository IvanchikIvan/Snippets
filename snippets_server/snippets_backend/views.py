from rest_framework import generics
from .models import Snippet
from django.contrib.auth.models import User
from .serializers import SnippetSerializer, UserSerializer
from rest_framework import generics, permissions


class SnippetList(generics.ListCreateAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

