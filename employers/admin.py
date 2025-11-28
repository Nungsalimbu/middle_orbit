from django.contrib import admin
from .models import Employer

@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'contact_email', 'is_verified')
    list_filter = ('country', 'is_verified')
    search_fields = ('name', 'contact_email')
