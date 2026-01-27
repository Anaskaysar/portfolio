from rest_framework import serializers
from .models import Project, WorkExperience, Skill, Research, TimelineUpdate, PersonalInfo


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = '__all__'


class TimelineUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineUpdate
        fields = '__all__'


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'