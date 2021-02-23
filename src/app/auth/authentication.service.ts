import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AppUserModel } from './login/model/appuser.model';
import { AppUserToken } from './login/model/app-user-token.viewmodel';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = environment.baseUrl;
  private AUTH_URL = `${this.BASE_URL}/signin`;
  private USER_EMAIL = '';

  isLogin = false;
    
  constructor(
    private http: HttpClient,
    private router: Router,
    private appService: AppService
  ) {}

  login(appUser: AppUserModel) {
    this.logout();
    return this.http.post<AppUserToken>(this.AUTH_URL, appUser).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', user.token);
        }

        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn();
  }

  isLoggedIn() {

    if (this.getToken() == null) {
      return false;
    }

    const date = this.getTokenExpirationDate(this.getToken());
    if (date == null) {
      return false;
    }

    if (date.valueOf() < new Date().valueOf()) {
      return 'token-expired';
    }

    return true;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = new JwtHelperService().decodeToken(token);

    if (decoded.exp === null) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return new JwtHelperService().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // FOR REFRESH OR RELOGIN
  getUserEmail() {
    return this.USER_EMAIL;
  }

  setUserEmail() {
    if (this.USER_EMAIL === '') {
      const email = new JwtHelperService().decodeToken(
        localStorage.getItem('token')
      ).sub;
      this.USER_EMAIL = email;
    }
  }

  getRole() {
    console.log(this.currentUser);
    return this.currentUser.auth;
  }
}
