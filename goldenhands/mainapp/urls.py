from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('order/', views.OrderView.as_view(), name='order'),
    path('thank-you/', views.thanks, name='thanks'),
    path('wrong/', views.wrong, name='wrong'),
    path('main/', views.main, name='main'),
    path('main/order/', views.main_order, name='main_order'),
    path('main/thank-you/', views.main_thanks, name='main_thanks'),
]
