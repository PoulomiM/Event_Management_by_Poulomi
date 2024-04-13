from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from events.views import EventViewSet, login_view, signup_view, liked_events_view

router = routers.DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('login/', login_view, name='login'),
    path('signup/', signup_view, name='signup'),
    path('liked-events/', liked_events_view, name='liked-events'),
]


