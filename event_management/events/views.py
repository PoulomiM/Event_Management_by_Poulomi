from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .models import Event
from rest_framework import viewsets
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('liked-events')  # Redirect to liked events page after login
        else:
            messages.error(request, 'Invalid credentials')
    return render(request, 'login.html')

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('liked-events')  # Redirect to liked events page after signup
        else:
            messages.error(request, 'Invalid signup data. Please try again.')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def liked_events_view(request):
    if request.user.is_authenticated:
        liked_events = Event.objects.filter(user=request.user, is_liked=True)
        return render(request, 'liked_events.html', {'liked_events': liked_events})
    else:
        return redirect('login')  # Redirect to login page if user is not authenticated


