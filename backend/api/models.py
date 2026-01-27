from django.db import models

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('fullstack', 'Full Stack'),
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('ai-ml', 'AI & ML'),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    tech_stack = models.JSONField(default=list)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='fullstack') # <-- Added
    featured = models.BooleanField(default=False) # <-- Added
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']


class WorkExperience(models.Model):
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    current = models.BooleanField(default=False)
    description = models.TextField()
    details = models.JSONField(default=list, blank=True)  # List of bullet points
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.role} at {self.company}"

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name_plural = "Work Experiences"


class Skill(models.Model):
    category = models.CharField(max_length=200)
    items = models.JSONField(default=list)  # List of skill names
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.category

    class Meta:
        ordering = ['order', 'category']


class Research(models.Model):
    TYPE_CHOICES = [
        ('publication', 'Publication'),
        ('experience', 'Research Experience'),
    ]

    title = models.CharField(max_length=300)
    venue = models.CharField(max_length=200, blank=True)  # Conference/Journal name
    date = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    tags = models.JSONField(default=list, blank=True)  # List of tags/keywords
    link = models.URLField(blank=True)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='publication')
    supervisor = models.CharField(max_length=200, blank=True)
    institution = models.CharField(max_length=200, blank=True)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name_plural = "Research"


class TimelineUpdate(models.Model):
    TYPE_CHOICES = [
        ('graduation', 'Graduation'),
        ('award', 'Award'),
        ('presentation', 'Presentation'),
        ('education', 'Education'),
        ('publication', 'Publication'),
    ]

    date = models.CharField(max_length=50)  # e.g., "Apr 2025"
    title = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='education')
    link = models.URLField(blank=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.date} - {self.title}"

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name_plural = "Timeline Updates"


class PersonalInfo(models.Model):
    # Singleton pattern - only one instance should exist
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    tagline = models.TextField()
    email = models.EmailField()
    availability = models.CharField(max_length=100, default="Open to work")
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    x = models.URLField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Ensure only one instance exists
        if not self.pk and PersonalInfo.objects.exists():
            raise ValueError("Only one PersonalInfo instance is allowed")
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Personal Information"