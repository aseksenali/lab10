import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthenticationService,
              private location: Location) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.location.replaceState('/companies');
    }
  }

  login(): void {
    this.authService.login(this.username, this.password);
  }
}
