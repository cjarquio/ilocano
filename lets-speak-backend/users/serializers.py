from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"

    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(
            email=clean_data["email"],
            password=clean_data["password"],
            first_name=clean_data.get("firstName") or None,
            last_name=clean_data.get("lastName") or None,
            username=clean_data["username"])
        user_obj.save()
        return user_obj


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        user = authenticate(
            username=clean_data['username'], password=clean_data['password'])
        if not user:
            raise ValidationError('User Not Found!')
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ("first_name", "last_name")
