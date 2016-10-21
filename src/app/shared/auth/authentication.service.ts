import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import {Config} from "../config"
import {User} from "../user/user";

import {CookieService} from 'angular2-cookie/core.js';

@Injectable()
export class Authentication {

    constructor(private http: Http, private _cookieService: CookieService) {
    }

    fnCreateHeader() {
        const token = this._cookieService.get("AUTH_TOKEN");
        return new Headers(token ? {'Authorization': `Bearer ${token}`} : null);
    }

    fnRegisterUser(user:User):Observable<any> {
        return this.http.post(Config.apiUrl + "/api/users",
            {
                name: user.name,
                email: user.email,
                password: user.password
            },{
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .map(this.fnExtractData)
            .catch(this.fnHandleError);
    }

    fnSignIn(user:User):Observable<any>{
        return this.http.post(Config.apiUrl + '/auth/local', {
            email: user.email,
            password: user.password
        }, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(response => response.json())
            .do(data => {
                this._cookieService.put('AUTH_TOKEN', data.token);
            }).catch(this.fnHandleError);

    }

    private fnExtractData(res:Response) {
        let body = res.json();
        return body || {};
    }

    private fnHandleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
