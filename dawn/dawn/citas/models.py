from django.db import models

# Create your models here.

class Negocio(models.Model):
    nombre = models.CharField(max_length=50)
    ruc = models.CharField(max_length=13)
    categoria = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=50)
    ubicacion = models.CharField(max_length=30)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=20)
    horario = models.CharField(max_length=25)
    imagen = models.CharField(max_length=100)

    class Meta:
            verbose_name ="Negocio"
            verbose_name_plural = "Negocios"

    def save(self, *args, **kwargs):
        super (Negocio,self).save(*args, **kwargs)
