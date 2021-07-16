
import json
from django.http.response import HttpResponse
from django.core import serializers
from django.shortcuts import render
from .models import *
from django.views.generic import CreateView
from django.forms import ModelForm
from django.urls import reverse_lazy



# Create your views here.
def get_citas(request):
    listaDatos = []
    if(request.method == 'GET'):
        datos = Negocio.objects.all() 
        for x in datos:
            negocio = {}
            negocio["nombre"] = x.nombre,
            negocio["ruc"] = x.ruc,
            negocio["categoria"] = x.categoria,
            negocio["descripcion"] = x.descripcion,
            negocio["ubicacion"] = x.ubicacion,
            negocio["telefono"] = x.telefono,
            negocio["correo"] = x.correo,
            negocio["horario"] = x.horario,
            negocio["imagen"] = x.imagen
            listaDatos.append(negocio)

    return HttpResponse(json.dumps(listaDatos, ensure_ascii=False).encode("utf-8"), content_type="application/json")
    
def templatedashboard(request):
    return render(request,"dashboard.html",{"titulo":"paginadash"})

class NegocioForm(ModelForm):
    class Meta:
        model = Negocio
        fields = '__all__'

class NegocioCreateView(CreateView):
    model = Negocio
    template_name = 'negocio-create.html'
    form_class = NegocioForm
    success_url = reverse_lazy('crear-negocio')
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title']='Crear Negocio'
        return context

