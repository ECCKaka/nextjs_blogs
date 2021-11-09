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
from rest_framework.parsers import MultiPartParser, FormParser
import base64



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
    
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        # print(request.query_params,'\n\n\n')
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

# class BlogsViewSet(ListAPIView):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = Blogs.objects.all()
#     serializer_class = BlogsSerializer

class BlogsViewSet(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def get(self, request, format=None):
        blogs = Blogs.objects.all()
        serializer = BlogsSerializer(blogs, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        print(request.data)
        
        # file = request.data['blog_pic'].split(',')[1]
        # print('\nfile  \n', file)
        # image = open(file, 'rb')
        # image_read = image.read()
        # data = {}
        # data['blog_pic'] = file
        # data['blog_title'] = request.data['blog_title']
        # data['blog_body'] = request.data['blog_body']
        # print(data)
        serializer = BlogsSerializer(data=request.data)        
        print('/n/n84 \n', serializer)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

