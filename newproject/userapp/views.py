from django.shortcuts import render

# Create your views here.
from .serializers import reactSerializer
from .models import TodoReact
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView


class ReactList(APIView):
    def get(self, request):
        reactData = TodoReact.objects.all()
        serializer = reactSerializer(reactData, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
class ReactPost(APIView):
    def post(self, request):
        try:
            serializer = reactSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        except:
            return Response({"Detail":"Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

class ReactUpdate(APIView):
    def patch(self, request, pk):
        try:
            reactData = TodoReact.objects.get(id=pk)
            serializer = reactSerializer(reactData, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        except TodoReact.DoesNotExist:
            return Response({"Detail":"Data not found"}, status=status.HTTP_404_NOT_FOUND)

class ReactDelete(APIView):
    def delete(self, request, pk):
        try:
            reactData = TodoReact.objects.get(id=pk)
            reactData.delete()
            return Response({"Detail":"Data deleted succesfully"}, status=status.HTTP_204_NO_CONTENT)
        except TodoReact.DoesNotExist:
            return Response({"Detail":"Data not found"}, status=status.HTTP_404_NOT_FOUND)
