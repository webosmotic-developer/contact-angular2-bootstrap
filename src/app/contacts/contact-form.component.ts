import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Contact } from '../shared/contacts/contact';
import { ContactsService } from '../shared/contacts/contacts.service';

import { Config } from '../shared/config';


@Component({
    selector : 'contact-form',
    templateUrl : './app/contacts/contact-form.component.html',
    providers : [ContactsService]
})
export class ContactFormComponent{

    isProcessing  : boolean = false;
    paramsSub : any;
    paramContactId : string = null;
    contact : Contact;

    constructor(private router: Router, private _contactService: ContactsService,
                 private activeRoute: ActivatedRoute){
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
        this.isProcessing = true;
        this._contactService.fnSaveContact(contact,this.paramContactId)
            .subscribe(data =>{
                this.isProcessing = false;
                this.router.navigate(['/contacts']);
            },error => {
                this.isProcessing = false;
        });
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
