import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./auth/authentication.service";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { AppService } from "./app.service";
import { hammerjs } from 'node_modules/hammerjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "EventusEventRegistrationV1-frontend";
  hammerjs = hammerjs;

  _authService: AuthenticationService;
  selectNavbar = 0;
  reloginOverlay = false;
  loading: boolean;

  constructor(
    private authService: AuthenticationService,
    private _router: Router,
    private _appService: AppService
  ) {
    this._authService = authService;
    this.loading = true;
  }

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
        this.selectNavbarFunc();
      }
    });

    this._appService.reloginOverlay$.subscribe(reloginOverlay => {
      this.reloginOverlay = reloginOverlay;
    });
  }

  selectNavbarFunc() {
    const currentUrl = this._router.url;
    const temp = currentUrl.split("/");

    switch (temp[1]) {
      case "login":
        this.selectNavbar = 0;
        break;

      default:
        this.selectNavbar = 1;
    }
  }
}
