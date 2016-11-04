import {Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/core.js';
import {Router} from '@angular/router';

import {Config} from '../shared/config';


@Component({
    selector : 'navbar',
    templateUrl: './app/navbar/navbar.component.html'
})

export class NavbarComponent{
    LoggedInUser : any;
    isLoggedIn : any;

    constructor(private _cookieService: CookieService, private router: Router ){
        this.isLoggedIn = this.fnIsLoggedIn();
        if(this.isLoggedIn){
            this.LoggedInUser = Config.user;
        }
    }

    fnIsLoggedIn() {
        return this._cookieService.get('AUTH_TOKEN') ? true : false;
    }

    fnLogOut(){
        this.isLoggedIn = undefined;
        Config.user = {};
        this._cookieService.remove('AUTH_TOKEN');
        this.router.navigate(['/login']);
    }

}
