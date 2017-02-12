from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from models import Inventory
from serializer import InventorySerializer
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAdminUser


class InventoryView(ListAPIView):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all().order_by('id')


class InventoryDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()
    permission_classes = (IsAdminUser, )
    authentication_classes = (TokenAuthentication, SessionAuthentication)
