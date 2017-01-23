import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "../shared/user/user";
import { Authentication } from "../shared/auth/authentication.service";

@Component({
    selector: 'login',
    templateUrl: './app/signin/signin.component.html',
    providers: [Authentication]
})

export class SignInComponent {
    //user:any = {};
    user : User;

    constructor(private router: Router, private _authService : Authentication) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    fnSignIn(user:any) {
        this._authService.fnSignIn(user)
            .subscribe(
            (data) => {
                this.router.navigate(['/contacts']);
            },
            (error) => {
            });
    }
}
