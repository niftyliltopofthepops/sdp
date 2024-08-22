from django.http import HttpResponseRedirect
from django.template.backends import django
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin


class LoginCheckMiddleWare(MiddlewareMixin):

    def process_view(self, request, view_func, view_args, view_kwargs):
        modulename = view_func.__module__
        print(modulename)
        user = request.user
        if user.is_authenticated:
            if user.user_type == "1":
                if modulename == "cc.HodViews" or modulename == "cc.API":
                    pass
                elif modulename == "cc.ExamDesign" or modulename == "cc.API":
                    pass
                elif modulename == "cc.views" or modulename == "django.views.static":
                    pass
                else:
                    return HttpResponseRedirect(reverse("admin_home"))

            elif user.user_type == "2":
                if modulename == "cc.StaffViews" or modulename == "cc.EditResultViewClass":
                    pass
                elif modulename == "cc.views" or modulename == "django.views.static":
                    pass
                else:
                    return HttpResponseRedirect(reverse("user_home"))
