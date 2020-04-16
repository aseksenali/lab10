import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {LoginComponent} from './login/login.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {VacanciesListComponent} from './vacancies-list/vacancies-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'companies', component: CompaniesListComponent },
  { path: 'companies/:company_id', component: CompanyDetailsComponent },
  { path: 'companies/:company_id/vacancies', component: VacanciesListComponent},
  { path: '', pathMatch: 'full', redirectTo: 'companies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
