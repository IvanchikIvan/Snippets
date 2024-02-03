from django.contrib import admin
from django.urls import path
from snippets_backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/snippets/', views.SnippetList.as_view(), name='snippet-list'),
    path('api/register/', views.RegisterView.as_view(), name='register'),
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('api/check-auth/', views.check_auth, name='check_auth'),
    path('api/logout/', views.LogoutView.as_view(), name='logout'),
    path('api/csrf_token/', views.send_csrf_token, name='csrf_token'),
]
