
from django.conf.urls.static import static
from django.views.static import serve
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from xdd import settings
from cc.UserAuth import app_auth, spcbgnr, spcntmdt, spcadvanced, quabeginner, quaintermediate, quaadvanced,\
      register, egnssbeginner, egnssintermediate, egnssadvanced, score_pass

urlpatterns = [
    path('api/app_auth/', app_auth.as_view(), name="app_auth"),
    path('api/spcbgnr/', spcbgnr.as_view(), name="spcbgnr"),
    path('api/spcntmdt/', spcntmdt.as_view(), name="spcntmdt"),
    path('api/spcadvanced/', spcadvanced.as_view(), name="spcadvanced"),
    path('api/quabeginner/', quabeginner.as_view(), name="quabeginner"),
    path('api/quaintermediate/', quaintermediate.as_view(), name="quaintermediate"),
    path('api/quaadvanced/', quaadvanced.as_view(), name="quaadvanced"),
    path('api/register/', register.as_view(), name="register"),
    path('api/egnssbeginner/', egnssbeginner.as_view(), name="egnssbeginner"),\
    path('api/egnssintermediate/', egnssintermediate.as_view(), name="egnssintermediate"),
    path('api/egnssadvanced/', egnssadvanced.as_view(), name="egnssadvanced"),
    path('api/score_pass', score_pass.as_view(), name="score_pass"),



]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+static(settings.DOCUMENT_URL, document_root=settings.DOCUMENT_ROOT)
