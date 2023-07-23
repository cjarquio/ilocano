"""ilocano-backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from ilocanodb import views as ilocano_views
from userdb import views as user_views


router = routers.DefaultRouter()
router.register(r'lessons', ilocano_views.LessonView, 'lessons')
router.register(r'words', ilocano_views.WordBankView, 'wordbank')
router.register(r'dialog', ilocano_views.DialogView, 'dialog')
router.register(r'sections', ilocano_views.SectionView, 'sections')

urlpatterns = [
    path('api/lessons/?current_lesson=<int:current_lesson>',
         ilocano_views.LessonView.as_view({'get': 'retrieve'})),
    path('api/lessons/', ilocano_views.LessonView.as_view({'get': 'list'})),
     path('api/register/', user_views.UserRegister.as_view(), name='register'),
    path('api/user/', user_views.UserView.as_view(), name='user'),
    path('api/login/', user_views.UserLogin.as_view(), name='login'),
    path('api/logout/', user_views.UserLogout.as_view(), name='logout'),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
