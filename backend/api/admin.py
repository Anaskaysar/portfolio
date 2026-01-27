from django.contrib import admin
from .models import Project, WorkExperience, Skill, Research, TimelineUpdate, PersonalInfo


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'featured', 'created_at')
    list_filter = ('category', 'featured')
    search_fields = ('title', 'description')
    ordering = ('-created_at',)


@admin.register(WorkExperience)
class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'period', 'current', 'order')
    list_filter = ('current',)
    search_fields = ('role', 'company', 'description')
    ordering = ('order', '-created_at')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('category', 'order', 'created_at')
    search_fields = ('category',)
    ordering = ('order', 'category')


@admin.register(Research)
class ResearchAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'venue', 'date', 'featured', 'order')
    list_filter = ('type', 'featured')
    search_fields = ('title', 'description', 'venue')
    ordering = ('order', '-created_at')


@admin.register(TimelineUpdate)
class TimelineUpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'type', 'order')
    list_filter = ('type',)
    search_fields = ('title', 'description')
    ordering = ('order', '-created_at')


@admin.register(PersonalInfo)
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'availability', 'updated_at')
    
    def has_add_permission(self, request):
        # Only allow adding if no instance exists
        return not PersonalInfo.objects.exists()
    
    def has_delete_permission(self, request, obj=None):
        # Prevent deletion to maintain singleton
        return False