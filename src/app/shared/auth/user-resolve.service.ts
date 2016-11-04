import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { Config } from "../config";
import { Authentication } from "../auth/authentication.service";

@Injectable()
export class UserResolve implements Resolve<any> {

    constructor(private http:Http, private _authService:Authentication) {
    }

    resolve(route:ActivatedRouteSnapshot):Observable<any> {
        return this.http.get(Config.apiUrl + "/api/users/me", {headers: this._authService.fnCreateHeader()})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        //Logged in user.
        Config.user = body;
        return body || {};
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
