from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from core.models import PasswdModel
from core.serializers import PasswdSerializer

class PasswordViewSet(viewsets.ModelViewSet):
  queryset = PasswdModel.objects.all()
  serializer_class = PasswdSerializer