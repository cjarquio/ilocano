from django.contrib import admin
from ilocano.models import Word
# Register your models here.

class WordAdmin(admin.ModelAdmin):
    list_display = ('ilocano', 'english', 'part_of_speech', 'example_sentence')
    search_fields = ('ilocano', 'english', 'part_of_speech')
    
admin.site.register(Word, WordAdmin)
