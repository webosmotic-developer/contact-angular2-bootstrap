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
    isProcessing  : boolean = false;
    user: User;

    constructor(private router: Router, private _authService : Authentication){
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    fnSignUp(user:any) {
        this.isProcessing = true;
        this._authService.fnRegisterUser(user)
            .subscribe(
            (data) => {
                this.isProcessing = false;
                this.router.navigate(['/contacts']);
            },
            (error) => {
                this.isProcessing = false;
                if(error.indexOf('422') > -1){
                    alert('The specified email address is already in use.');
                }
            });
    }

    fnMatchPassword(user:any){
        return user.password === user.confpassword;
    }
}
