import json

from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib import auth
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core.urlresolvers import reverse


@require_http_methods(["POST"])
def signIn(request):
    if request.user.id is None:
        user_data = json.loads(request.body)
        user = authenticate(username=user_data["username"], password=user_data["password"])
        if user is not None:
            login(request, user)
            response = JsonResponse(data={"success": True})
            response.set_cookie("token", user.auth_token.key)
            return response
        else:
            return JsonResponse(data={"error": "wrong username and password"}, status=403)
    else:
        return JsonResponse(data={"success": True})


@require_http_methods(["POST"])
def logout(request):
    auth.logout(request)
    response = HttpResponseRedirect(reverse("core-signIn"))
    response.set_cookie(key='token', value='')
    response.status_code = 200
    return response


@ensure_csrf_cookie
def home(request):
    return render(request, 'index.html')
