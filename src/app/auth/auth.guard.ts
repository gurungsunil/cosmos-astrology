import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { AppService } from "../app.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private _appService: AppService
  ) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    if (this.authService.isLoggedIn() == false) {
      this.router.navigate(["/login"]);
      return false;
    }
    return;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
