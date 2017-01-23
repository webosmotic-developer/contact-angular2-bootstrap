import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "../shared/user/user";
import { Authentication } from "../shared/auth/authentication.service";

@Component({
    selector: 'register',
    templateUrl: './app/signup/signup.component.html',
    providers: [Authentication]
})

export class SignUpComponent {
    user: User;

    constructor(private router: Router, private _authService : Authentication){
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    fnSignUp(user:any) {
        this._authService.fnRegisterUser(user)
            .subscribe(
            (data) => {
                this.router.navigate(['/contacts']);
            },
            (error) => {
            });
    }
}
