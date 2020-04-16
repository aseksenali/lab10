import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {RequestInterceptor} from './request.interceptor';
import {FormsModule} from '@angular/forms';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacanciesListComponent } from './vacancies-list/vacancies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    LoginComponent,
    CompanyDetailsComponent,
    VacanciesListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
