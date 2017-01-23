import {Component} from '@angular/core';
import {Router} from '@angular/router';

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

    constructor(public _userService : UserService){
        this.contact = new Contact();
        this.user = new User();
        this.user.name = Config.user.name;
        this.user.email = Config.user.email;
        this.user.role = Config.user.role;
    }

    fnUpdateProfile(userObj:any){
        this._userService.fnUpdateProfile(userObj)
            .subscribe((data)=>{

            },(error)=>{

            })
    }
}
