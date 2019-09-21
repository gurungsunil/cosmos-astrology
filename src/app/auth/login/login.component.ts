import { Component, OnInit } from '@angular/core';
import { AppUserModel } from './model/appuser.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  signIn(credentials) {
    const appuser: AppUserModel = {
      email: credentials.email,
      password: credentials.password
    };
    this.authService.login(appuser).subscribe(
      res => {
        console.log(this.authService.currentUser);
        if (this.authService.currentUser.auth === 'ROLE_ADMIN') {
          this.router.navigate(['admin']);
        } else if (this.authService.currentUser.auth === 'ROLE_MODERATOR') {
          this.router.navigate(['moderators'])
        }
      },
      err => {
        console.log(err);
        this.invalidLogin = true;
      }
    );
  }
}
