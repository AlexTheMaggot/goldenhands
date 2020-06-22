from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('order/', views.OrderView.as_view(), name='order'),
    path('thank-you/', views.thanks, name='thanks'),
    path('wrong/', views.wrong, name='wrong'),
]
