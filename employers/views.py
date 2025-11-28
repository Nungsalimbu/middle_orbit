from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import EmployerForm

def employer_request(request):
    if request.method == 'POST':
        form = EmployerForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your request has been submitted. We will contact you shortly.')
            return redirect('home')
    else:
        form = EmployerForm()
    return render(request, 'employers/request_form.html', {'form': form})
