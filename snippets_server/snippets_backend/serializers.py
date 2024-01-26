from rest_framework import serializers
from .models import Snippet
from django.contrib.auth.models import User

class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'name', 'code', 'creation_date', 'user']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'password', 'last_login', 'is_superuser', 'username', 'last_name', 'email', 'is_staff', 'is_active', "date_joined", 'first_name']