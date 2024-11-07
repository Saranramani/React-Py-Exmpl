from rest_framework import serializers
from .models import TodoReact

class reactSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoReact
        fields = ('id','title','description','created')
