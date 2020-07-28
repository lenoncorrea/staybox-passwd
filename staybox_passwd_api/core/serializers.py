from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from core.models import PasswdModel

class PasswdSerializer(serializers.ModelSerializer):
  class Meta:
    model = PasswdModel
    fields = ['id', 'ip', 'passwd', 'datetime']