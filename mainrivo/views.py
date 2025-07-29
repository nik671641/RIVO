from django.shortcuts import render

from django.shortcuts import render

def home(request):
    return render(request, 'mainrivo/home.html')

def contacts(request):
    return render(request, 'mainrivo/contacts.html')
