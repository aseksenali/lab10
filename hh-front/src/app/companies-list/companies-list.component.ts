import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../services/company.service';
import {Company} from '../models/Company';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService, private authService: AuthenticationService,
              private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.companyService.getAllCompanies().subscribe(companies => {
        this.companies = companies;
      });
    }
  }
}
