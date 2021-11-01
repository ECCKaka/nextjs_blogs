from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    RetrieveDestroyAPIView,
    RetrieveUpdateAPIView,
    CreateAPIView,
    DestroyAPIView,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class UserViewSet(ListAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]


class CommentsViewSet(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def get(self, request, format=None):
        comments = Comments.objects.all()
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CommentsFilterViewSet(ListAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = CommentsSerializer
    queryset = Comments.objects.all()
    print('48 hh\n\n\n')
    # def get_queryset(self):
    #     """
    #     This view should return a list of all the purchases for
    #     the user as determined by the username portion of the URL.
    #     """
    #     # print('\n\n\n\n')
    #     # print(self.request.query_params)
    #     # print(self.kwargs)
    #     # print('\n\n')
    #     blog_id = self.kwargs['blog_id']
        
    #     return Comments.objects.filter(blog_id=blog_id)
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        print(request.query_params,'\n\n\n')
        queryset = Comments.objects.filter(blog_id=request.query_params['blog_id'])
        serializer = CommentsSerializer(queryset, many=True)
        return Response(serializer.data)
    

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]