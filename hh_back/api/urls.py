from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.views.company_views import companies_list, company_details, company_details_with_vacancies
from api.views.vacancy_views import VacancyListAPIView, VacancyDetailsAPIView

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', companies_list),
    path('companies/<int:company_id>', company_details),
    path('companies/<int:company_id>/vacancies', company_details_with_vacancies),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>', VacancyDetailsAPIView.as_view()),
]