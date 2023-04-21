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
from ilocanodb import views

router = routers.DefaultRouter()
router.register(r'lessons', views.LessonView, 'lessons')
router.register(r'words', views.WordBankView, 'wordbank')
router.register(r'dialog', views.DialogView, 'dialog')
router.register(r'section', views.SectionView, 'section')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/lessons/?current_lesson=<int:current_lesson>&current_section=<int:current_section>', views.LessonView.as_view({'get': 'list'})),
    path('api/', include(router.urls))
]
