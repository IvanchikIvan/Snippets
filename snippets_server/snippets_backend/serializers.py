from rest_framework import serializers
from .models import Snippet
from django.contrib.auth.models import User

class SnippetSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = Snippet
        fields = ['id', 'name', 'code', 'creation_date', 'user', 'user_name']

    def get_user_name(self, obj):
        if obj.user:
            return obj.user.username
        return None


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password', 'username',]