from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProjectViewSet,
    WorkExperienceViewSet,
    SkillViewSet,
    ResearchViewSet,
    TimelineUpdateViewSet,
    PersonalInfoViewSet
)

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'experiences', WorkExperienceViewSet, basename='experience')
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'research', ResearchViewSet, basename='research')
router.register(r'timeline', TimelineUpdateViewSet, basename='timeline')
router.register(r'personal-info', PersonalInfoViewSet, basename='personal-info')

urlpatterns = [
    path('', include(router.urls)),
]