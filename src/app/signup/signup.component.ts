import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { User } from "../shared/user/user";
import { Authentication } from "../shared/auth/authentication.service";

@Component({
    selector: 'register',
    templateUrl: './app/signup/signup.component.html',
    providers: [Authentication]
})

export class SignUpComponent {
    user: User;

    constructor(private router: Router, private _authService : Authentication, public toastr: ToastsManager){
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    fnSignUp(user:any) {
        this._authService.fnRegisterUser(user)
            .subscribe(
            (data) => {
                this.toastr.success('Signup successfully', 'Success!', {toastLife: 3000});
                this.router.navigate(['/contacts']);
            },
            (error) => {
                this.toastr.success('There are something wrong for signup '+ error, 'Error!', {toastLife: 3000});
            });
    }
}
