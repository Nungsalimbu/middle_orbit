from django.shortcuts import render
from jobs.models import Job

def home(request):
    featured_jobs = Job.objects.filter(is_active=True).order_by('-created_at')[:6]
    return render(request, 'home.html', {'featured_jobs': featured_jobs})

from .models import Document, Contact

def documents(request):
    documents = Document.objects.all()
    return render(request, 'core/documents.html', {'documents': documents})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        Contact.objects.create(name=name, email=email, phone=phone, message=message)
        return render(request, 'core/contact.html', {'success': True})
    return render(request, 'core/contact.html')
