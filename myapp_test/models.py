from django.db import models
import datetime
import os
from uuid import uuid4

# Create your models here.
class Comments(models.Model):
    comments = models.TextField()
    date_added = models.DateField(default=datetime.date.today)
    blog_id = models.IntegerField(null=True)

    def __str__(self):
        """Return a string representation of the model."""
        return self.comments

    class Meta:
        verbose_name = "comments"
        verbose_name_plural = "comments"
        db_table = "comments"


def path_and_rename(instance, filename):
    upload_to = 'photos'
    ext = filename.split('.')[-1]
    # get filename
    print('\n\n26\n', filename)
    if instance.pk:
        filename = '{}{}.{}'.format(instance.pk,str(datetime.datetime.now()), ext)
    else:
        # set filename as random string
        filename = '{}{}.{}'.format(uuid4().hex,str(datetime.datetime.now()), ext)
    # return the whole path to the file
    return os.path.join(upload_to, filename)

class Blogs(models.Model):
    blog_title = models.TextField()
    blog_body = models.TextField()
    blog_pic = models.FileField(upload_to=path_and_rename, blank=False, null=False)
    date_added = models.DateField(default=datetime.date.today)

    def __str__(self):
        """Return a string representation of the model."""
        return self.blog_body

    class Meta:
        verbose_name = "blogs"
        verbose_name_plural = "blogs"
        db_table = "blogs"