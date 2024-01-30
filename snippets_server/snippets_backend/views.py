from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import generics, status, permissions
from rest_framework.decorators import APIView
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


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


@csrf_protect
class LoginView(APIView):
    serializer_class = UserSerializer
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        csrf_token = get_token(request)
        data = {'csrf_token': csrf_token}
        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Successfully logged out'})


def send_csrf_token(request):
    csrf_token = get_token(request)
    data = {'csrf_token': csrf_token}
    return JsonResponse(data)