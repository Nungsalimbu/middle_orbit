from django.shortcuts import render, get_object_or_404
from .models import Job
from django.db.models import Q

def job_list(request):
    query = request.GET.get('q', '')
    country = request.GET.get('country', '')
    category = request.GET.get('category', '')
    
    jobs = Job.objects.filter(is_active=True)
    
    if query:
        jobs = jobs.filter(Q(title__icontains=query) | Q(description__icontains=query))
    
    if country:
        jobs = jobs.filter(country__icontains=country)
        
    if category:
        jobs = jobs.filter(category__icontains=category)
        
    context = {
        'jobs': jobs,
        'query': query,
        'selected_country': country,
        'selected_category': category,
        'countries': Job.objects.values_list('country', flat=True).distinct(),
        'categories': Job.objects.values_list('category', flat=True).distinct(),
    }
    return render(request, 'jobs/job_list.html', context)

def job_detail(request, slug):
    job = get_object_or_404(Job, slug=slug)
    return render(request, 'jobs/job_detail.html', {'job': job})
