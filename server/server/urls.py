from django.conf.urls import include, url
from django.contrib import admin
from inventory import views
from home import views as home_view

urlpatterns = [
    # Examples:
    # url(r'^$', 'server.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^inventory/$', views.InventoryView.as_view()),
    url(r'^inventory/(?P<pk>[0-9]+)/$', views.InventoryDetailView.as_view()),
    url(r'^login/$', home_view.signIn, name='core-signIn'),
    url(r'^logout/$', home_view.logout, name='core-signOut'),
    url(r'^$', home_view.home, name='home'),
]
