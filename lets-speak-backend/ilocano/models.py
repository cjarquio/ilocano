"""Module providing function to define db model"""
from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Lesson(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.id}. {self.title}"

class WordBank(models.Model):
    """A model for Ilocano word with pronunciation and English translation"""
    lesson_number = models.ForeignKey(Lesson, on_delete=models.CASCADE, blank=True, null=True, related_name='words_for_lesson')
    ilocano = models.CharField(max_length=20)
    english = models.CharField(max_length=30)
    category = models.CharField(max_length=20 , null=True, blank=True)
    variations = ArrayField(models.CharField(max_length=20), null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.ilocano} {self.english}"
    
class Dialog(models.Model):
    """A model for the dialog of each lesson"""
    lesson_number = models.OneToOneField(Lesson, on_delete=models.CASCADE, related_name='dialog', default=0)
    dialog = ArrayField(models.TextField())

class Section(models.Model):
    """A model for each section in every lesson"""
    DIALOG = "I. Dialog"
    TRANSLATING = "II. Translating the Dialog"
    LEARNING = "III. Learning the Dialog"
    ROLE_PLAYING = "IV. Role-Playing"
    VOCABULARY = "V. Vocabulary"
    CHANGING = "VI. Changing the Dialog"
    QUESTION_AND_ANSWER = "VII. Question and Answer"
    NOTES = "VIII. Notes"
    EXERCISES = "IX. Exercises"
    COMMUNICATION = "X. Communication Activity"
    WRITING = "XI. Writing Practice"
    LISTENING = "XII. Listening Practice"
    SECTION_CHOICES = [
        (DIALOG, "Dialog"),
        (TRANSLATING, "Translating the Dialog"),
        (LEARNING, "Learning the Dialog"),
        (ROLE_PLAYING, "Role-Playing"),
        (VOCABULARY, "Vocabulary"),
        (CHANGING, "Changing the Dialog"),
        (QUESTION_AND_ANSWER, "Question and Answer"),
        (NOTES, "Notes"),
        (EXERCISES, "Exercises"),
        (COMMUNICATION, "Communication Activity"),
        (WRITING, "Writing Practice"),
        (LISTENING, "Listening Practice")
    ]
    lesson = models.ForeignKey(
        Lesson, related_name='sections', on_delete=models.CASCADE)
    section_type = models.CharField(
        max_length=30,
        choices=SECTION_CHOICES,
        default=DIALOG,
    )
    description = models.TextField()

    def __str__(self):
        dotIndex = self.section_type.index('.') + 2
        return self.section_type[dotIndex:].replace(" ", "").lower()
