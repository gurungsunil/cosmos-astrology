import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openNav = false;
  currentUser;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

  toggleNav() {
    this.openNav = !this.openNav;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
