from django.conf.urls import url
from django.contrib import admin

from .views import *

urlpatterns = [
    url(r'^users/$', UserViewSet().as_view(), name='users'),
    url(r'^blogs/$', BlogsViewSet().as_view(), name='blogs'),
    url(r'^comments/$', CommentsViewSet().as_view(), name='comments'),
    url(r'^comment/$', CommentsFilterViewSet().as_view(), name='comments_filter'),
    # url(r'^login/$', CommentsViewSet.as_view(), name="login"),
]