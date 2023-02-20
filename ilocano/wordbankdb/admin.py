"""Module providing functtion to create admin model"""
from django.contrib import admin
from wordbankdb.models import WordBank

# Register your models here.
class WordbankAdmin(admin.ModelAdmin):
    """Admin model for wordbank"""
    list_display = ('word', 'pronunciation', 'translation', 'lesson_number')

admin.site.register(WordBank, WordbankAdmin)
