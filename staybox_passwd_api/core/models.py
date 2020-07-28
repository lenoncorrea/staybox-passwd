from django.db import models

# Create your models here.

class PasswdModel(models.Model):
  ip = models.CharField(max_length=15)
  passwd = models.CharField(max_length=40)
  datetime = models.DateTimeField(auto_now_add=True)

  def __str__(self):
      return self.ip
  