import {Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import {CookieService} from 'angular2-cookie/core.js';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {Contact} from '../shared/contacts/contact';
import {ContactsService} from '../shared/contacts/contacts.service';

import {Config} from '../shared/config';


@Component({
    selector : 'contact-form',
    templateUrl : './app/contacts/contact-form.component.html',
    providers : [ContactsService]
})
export class ContactFormComponent{

    paramsSub : any;
    paramContactId : string = null;
    contact : Contact;


    constructor(private router: Router, private _contactService: ContactsService,
                 private activeRoute: ActivatedRoute, public toastr : ToastsManager){
        this.contact = new Contact();
        this.paramsSub = this.activeRoute.params.subscribe(params => this.paramContactId = params['id']);

        if(this.paramContactId){
            // Update the contact
            this.fnFetchContactData();
        }else{
            // Add new contact
            this.contact.name = "";
            this.contact.email = "";
            this.contact.phone = "";
            this.paramsSub.unsubscribe();
        }
    }

    fnSaveContact(contact:any){
        this._contactService.fnSaveContact(contact,this.paramContactId)
            .subscribe(data =>{
                this.toastr.success(data.name + ' of contact saved.', 'Success!', {toastLife: 3000});
                //this.toastr.success(data.name + ' of contact saved.', 'Success!', {dismiss: 'controlled'})
                //    .then((toast) => {
                //        setTimeout(() => {
                //            this.toastr.dismissToast(toast);
                //        }, 3000);
                //    });
                this.router.navigate(['/contacts']);
            },error => {
                this.toastr.error('There are something wrong! ' + error, 'Contact not saved.', {toastLife: 3000});
        })
    }

    fnFetchContactData(){
        this._contactService.fnGetContact(this.paramContactId)
            .subscribe(data => {
                this.contact.name = data.name;
                this.contact.email = data.email;
                this.contact.phone = data.phone;
            });
    }

    fnResetForm(){
        this.contact.name = "";
        this.contact.email = "";
        this.contact.phone = "";
    }
}
