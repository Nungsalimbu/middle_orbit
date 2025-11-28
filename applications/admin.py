from django.contrib import admin
from .models import Application

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'job', 'email', 'phone', 'status', 'applied_at')
    list_filter = ('status', 'job')
    search_fields = ('name', 'email', 'phone')
