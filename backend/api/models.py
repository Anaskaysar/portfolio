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