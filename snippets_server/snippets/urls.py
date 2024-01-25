from django.contrib import admin
from django.urls import path
from snippets_backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/snippets/', views.SnippetList.as_view(), name='snippet-list'),
]
