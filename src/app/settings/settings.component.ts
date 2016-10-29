import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Contact} from '../shared/contacts/contact'
import { User } from "../shared/user/user";
import {User} from "../shared/user/user";
import {User} from "../shared/user/user";

@Component({
    selector : 'settings',
    templateUrl: './app/settings/settings.component.html'
})

export class SettingsComponent{
    contact : Contact;
    user : User;

    constructor(){
        this.contact = new Contact();
        this.user = new User();
        console.log('settings constructor.');
    }
}
