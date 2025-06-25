from rest_framework import serializers
from ilocano.models import Word

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ['id', 'ilocano', 'english', 'part_of_speech', 'example_sentence']
        read_only_fields = ['id']

    def validate_ilocano(self, value):
        if not value.isalpha():
            raise serializers.ValidationError("Ilocano word must contain only alphabetic characters.")
        return value

    def validate_english(self, value):
        if not value.strip():
            raise serializers.ValidationError("English translation cannot be empty.")
        return value