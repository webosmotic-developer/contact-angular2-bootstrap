import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {Contact} from '../shared/contacts/contact'
import {User} from "../shared/user/user";
import {Config} from '../shared/config';

import {UserService} from '../shared/user/user.service';

@Component({
    selector : 'settings',
    templateUrl: './app/settings/settings.component.html',
    providers : [UserService]
})

export class SettingsComponent{
    contact : Contact;
    user : User;

    constructor(public _userService : UserService, public toastr:ToastsManager){
        this.contact = new Contact();
        this.user = new User();
        this.user.name = Config.user.name;
        this.user.email = Config.user.email;
        this.user.role = Config.user.role;
    }

    fnUpdateProfile(userObj:any){
        this._userService.fnUpdateProfile(userObj)
            .subscribe((data)=>{
                this.toastr.success(data.name + ' updated.', 'Success!', {toastLife: 3000});
            },(error)=>{
                this.toastr.error('There are something wrong! '+error, 'user-profile not updated.', {toastLife: 3000});
            })
    }
}
