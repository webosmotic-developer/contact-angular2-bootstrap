import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Router } from '@angular/router';
import { Contact } from '../shared/contacts/contact';
import { ContactsService } from '../shared/contacts/contacts.service';

import { FilterContactArray } from '../component/filters/filterContacts.pipe';

@Component({
    selector : 'contacts',
    templateUrl : './app/contacts/contacts.component.html',
    providers : [ContactsService]
})
export class ContactsComponent {

    contactList : Array<Contact> = [];
    deleteContactId : any;
    isLoading : boolean = true;

    @ViewChild('DeleteModal')
        modal: ModalComponent;

    close() {
        this.modal.close();
    }

    open(contactObj:any) {
        this.deleteContactId = contactObj._id;
        this.modal.open();
    }

    constructor(private _contactsService: ContactsService, private router:Router){
        this.fnGetContacts();
    }


    fnGetContacts(){
        this.isLoading = true;
        this._contactsService.fnGetContactsList()
            .subscribe(
                (data) => {
                    this.contactList = data;
                    this.isLoading = false;
                },
                (error) => {
                }

            )
    }

    fnDeleteContact(contactId:any){
        this._contactsService.fnDeleteContact(contactId)
            .subscribe(
            (data) => {
                this.fnGetContacts();
                this.modal.close();
            },
            (error) => {
            }
        )
    }

    fnRedirectToAddContact(){
        this.router.navigate(['/contactform']);
    }
}
