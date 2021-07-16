from django.contrib import admin
from citas.models import *

# Register your models here.
class NegocioAdmin(admin.ModelAdmin):
    list_display= ("nombre","ruc","categoria","descripcion",)

admin.site.register(Negocio,NegocioAdmin)