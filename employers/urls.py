from django.urls import path
from . import views

urlpatterns = [
    path('', views.employer_request, name='employer_request'),
]
