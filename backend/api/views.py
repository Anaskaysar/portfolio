from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Project, WorkExperience, Skill, Research, TimelineUpdate, PersonalInfo
from .serializers import (
    ProjectSerializer, 
    WorkExperienceSerializer, 
    SkillSerializer, 
    ResearchSerializer, 
    TimelineUpdateSerializer, 
    PersonalInfoSerializer
)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ResearchViewSet(viewsets.ModelViewSet):
    queryset = Research.objects.all()
    serializer_class = ResearchSerializer


class TimelineUpdateViewSet(viewsets.ModelViewSet):
    queryset = TimelineUpdate.objects.all()
    serializer_class = TimelineUpdateSerializer


class PersonalInfoViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer

    @action(detail=False, methods=['get'])
    def current(self, request):
        """Get the current (and only) personal info instance"""
        try:
            info = PersonalInfo.objects.first()
            if info:
                serializer = self.get_serializer(info)
                return Response(serializer.data)
            return Response({"detail": "No personal info found"}, status=404)
        except Exception as e:
            return Response({"detail": str(e)}, status=500)