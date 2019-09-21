import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userRole;
  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
    this.userRole = this._authService.currentUser.auth;
  }

}
