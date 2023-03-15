"""Module providing function to create serializer model"""
from rest_framework import serializers
from wordbankdb.models import WordBank

class WordBankSerializer(serializers.ModelSerializer):
    """Serializer model for Wordbank"""
    class Meta:
        """Information from word bank to be converted"""
        model = WordBank
        fields = ('id', 'ilokano', 'english', 'category', 'variations', 'lesson_number')
