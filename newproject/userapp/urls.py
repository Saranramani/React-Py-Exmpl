from django.urls import path
from .views import ReactList, ReactPost, ReactUpdate, ReactDelete

urlpatterns = [
    path('list/', ReactList.as_view(), name='list-of-datas'),
    path('add/', ReactPost.as_view(), name='add-new-data'),
    path('update/<int:pk>/', ReactUpdate.as_view(), name='update-data'),
    path('delete/<int:pk>/', ReactDelete.as_view(), name='delete-data'),
]