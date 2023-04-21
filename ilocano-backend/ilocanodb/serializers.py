"""Module providing function to create serializer model"""
from rest_framework import serializers
from ilocanodb.models import WordBank, Lesson, Dialog, Section


class DialogWordTableSerializer(serializers.ModelSerializer):
    """Serializer for wordbank table"""
    class Meta:
        model = WordBank
        fields = ('ilocano', 'english')

class WordBankSerializer(serializers.ModelSerializer):
    """Serializer model for Wordbank"""
    class Meta:
        """Information from word bank to be converted"""
        model = WordBank
        fields = ('ilocano', 'english', 'category', 'lesson_number')
        
class DialogSerializer(serializers.ModelSerializer):
    """Serializer model for Conversation Dialog"""
    class Meta:
        model = Dialog
        fields = ('lesson_number', 'dialog')

class SectionSerializer(serializers.ModelSerializer):
    """Serializer model for each Section"""
    class Meta:
        model = Section
        fields = ('section_type', 'description')

class LessonSerializer(serializers.ModelSerializer):
    """Serializer model for Lessons"""
    class Meta:
        model = Lesson
        fields = ('id', 'title', 'section', 'words_for_lesson', 'dialog')
    
    words_for_lesson = DialogWordTableSerializer(many=True, read_only=True)
    # Section and dialog shouldn't be arrays when serialized
    section = SectionSerializer(many=True, read_only=True)
    dialog = serializers.SlugRelatedField(read_only=True, slug_field='dialog')
