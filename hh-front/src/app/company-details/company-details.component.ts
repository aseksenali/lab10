import {Component, OnInit} from '@angular/core';
import {Company} from '../models/Company';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('company_id');
    this.companyService.getCompanyDetails(id).subscribe(company => this.company = company);
  }

}
