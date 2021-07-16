

from django.urls import path
from .views import *

urlpatterns = [

    path('api/negocio', get_citas),
    path('', templatedashboard),
    path('crearnegocio', NegocioCreateView.as_view(),name='crear-negocio')
]
