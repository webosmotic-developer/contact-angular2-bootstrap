import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

    constructor(private router: Router, private _authService : Authentication, public toastr: ToastsManager) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    fnSignIn(user:any) {
        this._authService.fnSignIn(user)
            .subscribe(
            (data) => {
                this.toastr.success('You are logged in.', 'Success!', {toastLife: 3000});
                this.router.navigate(['/contacts']);
            },
            (error) => {
                this.toastr.error('There are something wrong! '+ error, 'Not logged in.', {toastLife: 3000});
            });
    }
}
