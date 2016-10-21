import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import Contact from '../../shared/contacts/contact';
import {ContactsService} from '../../shared/contacts/contacts.service';

@Component({
    selector : 'contact-modal-form',
    templateUrl : './app/contacts/modal/contact-modal.component.html',
    providers : [ContactsService]
    //,
    //styles: [
    //`.ng-valid[required] {
    //        border-left: 5px solid #5cb85c; /* green */
    //    }`,
    //`.ng-invalid:not(.ng-untouched):not(form) {
    //        border-left: 5px solid #d9534f; /* red */
    //    }`,
    //`.red-text {
    //        color: #d9534f !important; /* red */
    //    }`
    //],
    //encapsulation: ViewEncapsulation.None
})


export class ContactModalComponent{

    //@ViewChild('modal')
    //modal: ModalComponent;
    //items: string[] = ['item1', 'item2', 'item3'];
    //selected: string;
    //output: string;
    //model: Contact = new Contact();
    //
    //index: number = 0;
    //backdropOptions = [true, false, 'static'];
    //cssClass: string = '';
    //
    //animation: boolean = true;
    //keyboard: boolean = true;
    //backdrop: string | boolean = true;
    //css: boolean = false;
    //
    //constructor(private router: Router) {
    //}
    //
    //
    //closed() {
    //    this.output = '(closed) ' + this.selected;
    //}
    //
    //dismissed() {
    //    this.output = '(dismissed)';
    //}
    //
    //opened() {
    //    this.output = '(opened)';
    //}
    //
    //navigate() {
    //    this.router.navigateByUrl('/contacts');
    //}
    //
    //open() {
    //    this.modal.open();
    //}
}
