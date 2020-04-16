import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companiesUrl = 'http://localhost:8000/api/companies/';

  constructor(private httpClient: HttpClient) {
  }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.companiesUrl);
  }

  getCompanyDetails(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.companiesUrl}${companyId}`);
  }
}
