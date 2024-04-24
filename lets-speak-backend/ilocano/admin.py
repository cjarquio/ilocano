"""Module providing functtion to create admin model"""
from django.contrib import admin
from django.contrib.postgres.fields import ArrayField
from django.forms import Textarea
from ilocano.models import Lesson, WordBank, Dialog, Section

# Register your models here.
class LessonAdmin(admin.ModelAdmin):
    """Admin model for wordbank"""
    list_display = ('id', 'title')
    
class WordbankAdmin(admin.ModelAdmin):
    """Admin model for wordbank"""
    list_display = ('ilocano', 'english', 'category', 'lesson_number')
    formfield_overrides = {
        ArrayField: {'widget': Textarea(attrs={'rows': 8, 'cols': 60})},
    }
    
class DialogAdmin(admin.ModelAdmin):
    """Admin model for wordbank"""
    list_display = ('lesson_number', 'dialog')
    formfield_overrides = {
        ArrayField: {'widget': Textarea(attrs={'rows': 8, 'cols': 60, 'placeholder': 'Separate each dialog by a " | "'}), 'delimiter': '|'},
    }

    
class SectionAdmin(admin.ModelAdmin):
    """Admin model for wordbank"""
    list_display = ('section_type', 'description')

admin.site.register(Lesson, LessonAdmin)
admin.site.register(WordBank, WordbankAdmin)
admin.site.register(Dialog, DialogAdmin)
admin.site.register(Section, SectionAdmin)
