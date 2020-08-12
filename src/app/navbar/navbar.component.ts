import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openNav = false;
  currentUser;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

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

  searchUserQaHistory(userIdForm: NgForm) {
    let parent;
    this.route.url.subscribe((url) => {
       parent = url[0].path;
    })
    this.router.navigate([parent.toString()+ '/user-qa-history/'+ (userIdForm.value).userId]);
  }

}
