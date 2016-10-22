import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Contact } from '../shared/contacts/contact';
import { ContactsService } from '../shared/contacts/contacts.service';

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

    constructor(private _contactsService: ContactsService, private router:Router, public toastr : ToastsManager){
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
                    this.toastr.error('There are something wrong! '+error, 'For getting contact.', {toastLife: 3000});
                }

            )
    }

    fnDeleteContact(contactId:any){
        this._contactsService.fnDeleteContact(contactId)
            .subscribe(
            (data) => {
                this.toastr.success('Contact deleted.', 'Success!', {toastLife: 3000});
                this.fnGetContacts();
                this.modal.close();
            },
            (error) => {
                this.toastr.error('There are something wrong! '+error, 'Contact not deleted.', {toastLife: 3000});
            }
        )
    }

    fnRedirectToAddContact(){
        this.router.navigate(['/contactform']);
    }
}
