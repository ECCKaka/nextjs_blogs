from django.db import models
import datetime

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