
from django.conf.urls.static import static
from django.views.static import serve
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from xdd import settings
from cc.UserAuth import app_auth

urlpatterns = [
    path('api/app_auth/', app_auth.as_view(), name="app_auth"),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+static(settings.DOCUMENT_URL, document_root=settings.DOCUMENT_ROOT)
