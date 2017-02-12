from django.db import models
from model_utils.models import TimeStampedModel


class Inventory(TimeStampedModel):
    title = models.CharField(max_length=250)
    price = models.FloatField()
    img = models.URLField()

    class Meta:
        db_table = "bigbasket_inventory"

    def __str__(self):
        return self.title
