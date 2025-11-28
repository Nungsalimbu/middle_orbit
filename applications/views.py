from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .forms import ApplicationForm
from jobs.models import Job

def apply_job(request, job_id):
    job = get_object_or_404(Job, id=job_id)
    
    if request.method == 'POST':
        form = ApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            application = form.save(commit=False)
            application.job = job
            application.save()
            messages.success(request, 'Your application has been submitted successfully!')
            return redirect('job_detail', slug=job.slug)
    else:
        form = ApplicationForm()
    
    return render(request, 'applications/apply.html', {'form': form, 'job': job})
