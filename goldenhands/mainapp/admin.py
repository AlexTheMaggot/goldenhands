from django.contrib import admin
from .models import Order


class OrderConfig(admin.ModelAdmin):
    fields = ('name', 'phone',)
    list_display = ('name', 'phone', 'date')

admin.site.register(Order, OrderConfig)

