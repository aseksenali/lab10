import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      const modifiedReq = request.clone({
        headers: request.headers.set('Authorization', 'JWT ' + this.authService.token),
      });
      return next.handle(modifiedReq);
    } else {
      this.router.navigateByUrl('/login');
      return next.handle(request);
    }
  }
}
