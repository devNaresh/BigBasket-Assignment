from django.contrib import admin
from models import Inventory


class InventoryAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "price"]

admin.site.register(Inventory, InventoryAdmin)
