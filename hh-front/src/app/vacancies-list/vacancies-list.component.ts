import {Component, OnInit} from '@angular/core';
import {Vacancy} from '../models/Vacancy';
import {VacancyService} from '../services/vacancy.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent implements OnInit {
  vacancies: Vacancy[];

  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const companyId = +this.route.snapshot.paramMap.get('company_id');
    this.getVacancies(companyId);
  }

  getVacancies(companyId: number) {
    this.vacancyService.getVacancies(companyId).subscribe(vacancies => this.vacancies = vacancies['vacancies']);
  }

}
