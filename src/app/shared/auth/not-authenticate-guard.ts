import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CookieService} from 'angular2-cookie/core.js';

@Injectable()
export class NotAuthenticateGuard implements CanActivate {
    constructor(private router: Router,  private _cookieService : CookieService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.fnCheckAuthenticate(url);
    }

    fnCheckAuthenticate(url: string): boolean {

        if (!this._cookieService.get('AUTH_TOKEN')) {
            return true;
        }

        this.router.navigate(['/contacts']);
        return false;
    }
}
