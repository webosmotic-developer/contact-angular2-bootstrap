import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {CookieService} from 'angular2-cookie/core.js';

@Injectable()
export class AuthenticateGuard implements CanActivate {
    constructor(private router: Router, private _cookieService : CookieService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log('let url auth: ',url);
        return this.fnCheckAuthenticate(url);
    }

    fnCheckAuthenticate(url: string): boolean {

        if (this._cookieService.get('AUTH_TOKEN')) {
            console.log('this._cookieService.get(AUTH_TOKEN):true : ',url);
            return true;
        }

        console.log('else:false: ',url);
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}
