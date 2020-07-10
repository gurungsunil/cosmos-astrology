import { Component, OnInit } from '@angular/core';
import { AppUserModel } from './model/appuser.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  signIn(credentials) {
    this.spinner.show();
    const appuser: AppUserModel = {
      email: credentials.email,
      password: credentials.password
    };
    this.authService.login(appuser).subscribe(
      res => {
        this.spinner.hide();
        if (this.authService.currentUser.auth === 'ROLE_ADMIN') {
          this.router.navigate(['admin']);
        } else if (this.authService.currentUser.auth === 'ROLE_MODERATOR') {
          this.router.navigate(['moderators'])
        } else if (this.authService.currentUser.auth === 'ROLE_ASTROLOGER') {
          this.router.navigate(['astrologers'])
        }
      },
      err => {
        this.spinner.hide();
        this.invalidLogin = true;
      }
    );
  }
}
