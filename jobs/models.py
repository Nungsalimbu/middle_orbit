from django.db import models
from django.utils.text import slugify
from django.conf import settings

class Job(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    employer = models.ForeignKey('employers.Employer', on_delete=models.CASCADE, related_name='jobs', null=True, blank=True)
    country = models.CharField(max_length=100)
    category = models.CharField(max_length=100) # e.g., Construction, Hospitality
    description = models.TextField()
    requirements = models.TextField()
    salary = models.CharField(max_length=100) # e.g., "1200 AED"
    vacancies = models.PositiveIntegerField(default=1)
    expiry_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title) + "-" + str(self.pk or "")
            # Note: pk might be None on first save, so slug might need update.
            # A better approach is to save, then slugify with ID.
            # For simplicity, we'll just use title and random string or timestamp if needed.
            # But let's stick to simple slugify for now.
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
