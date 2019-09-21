import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
  })
export class RoleGuard implements CanActivate {


    constructor(private _authService: AuthenticationService, private _router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       if( this._authService.currentUser == null){
        this._router.navigate(['login']);
        return false;
       } else {
        const user_role = this._authService.currentUser.auth;

        if (user_role === next.data.role) {
            return true;
        }
        // navigate to not found page
        this._router.navigate(['login']);
        return false;
       }
    }

}