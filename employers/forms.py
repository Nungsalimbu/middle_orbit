from django import forms
from .models import Employer

class EmployerForm(forms.ModelForm):
    class Meta:
        model = Employer
        fields = ['name', 'country', 'contact_email', 'phone', 'website']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'}),
            'country': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'}),
            'contact_email': forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'}),
            'phone': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'}),
            'website': forms.URLInput(attrs={'class': 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'}),
        }
