from django.db import models

# Create your models here.

class Passwd(models.Model):
  ip = models.CharField(max_length=255)
  passwd = models.CharField(max_length=255)
  datetime = models.DateTimeField(auto_now_add=True)

  def __str__(self):
      return self.passwd
  