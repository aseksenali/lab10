import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth = false;
  token: string;
  authUrl = 'http://localhost:8000/api/login/';

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string): void {
    const authInfo = {
      'username': username,
      'password': password
    };
    this.httpClient.post(this.authUrl, authInfo).subscribe(next => {
      if (next['token']) {
        this.token = next['token'];
        this.auth = true;
        this.router.navigateByUrl('/companies');
      }
    });
  }

  logout(): void {
    this.token = '';
    this.auth = false;
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return this.auth;
  }
}
