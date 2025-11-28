from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Document, Contact

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'role', 'is_verified', 'is_staff')
    list_filter = ('role', 'is_verified', 'is_staff')
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('role', 'phone', 'is_verified')}),
    )

admin.site.register(User, CustomUserAdmin)
admin.site.register(Document)
admin.site.register(Contact)
