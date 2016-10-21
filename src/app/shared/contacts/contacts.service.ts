import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Authentication } from "../auth/authentication.service";
import { Config } from "../config";

@Injectable()
export class ContactsService{

    userObj : any;

    constructor(private http:Http, private _authService : Authentication) {
        this.userObj = Config.user;
    }

    fnGetContactsList() : Observable<any>{
        return this.http.get(Config.apiUrl + "/api/users/"+ this.userObj._id +"/contacts", {headers: this._authService.fnCreateHeader()})
            .map(response => response.json());
    }


    fnSaveContact(contact:any,contactId:any) : Observable<any>{
        if(contactId){
            return this.http.put(Config.apiUrl + '/api/contacts/' + contactId, {
                    name : contact.name,
                    email: contact.email,
                    phone: contact.phone,
                    userId : this.userObj._id
                }, { headers: this._authService.fnCreateHeader()}
            ).map(response => response.json());
        }else{
            return this.http.post(Config.apiUrl + '/api/contacts', {
                    name : contact.name,
                    email: contact.email,
                    phone: contact.phone,
                    userId : this.userObj._id
                }, { headers: this._authService.fnCreateHeader()}
            ).map(response => response.json());
        }
    }


    fnGetContact(contactId:any) : Observable<any>{
        return this.http.get(Config.apiUrl + "/api/contacts/"+ contactId, {headers: this._authService.fnCreateHeader()})
            .map(response => response.json());
    }

    fnDeleteContact(contactId:any) : Observable<any>{
        return this.http.delete(Config.apiUrl + "/api/contacts/"+ contactId, {headers: this._authService.fnCreateHeader()});
    }

}
