import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vacancy} from '../models/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  companyUrl = 'http://localhost:8000/api/companies/';
  constructor(private httpClient: HttpClient) { }
  getVacancies(companyId: number) {
    return this.httpClient.get<Vacancy[]>(this.companyUrl + companyId + '/vacancies');
  }
}
