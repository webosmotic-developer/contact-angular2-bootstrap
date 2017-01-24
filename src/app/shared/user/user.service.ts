import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Authentication } from "../auth/authentication.service";
import { Config } from "../config";

@Injectable()
export class UserService {
    constructor(public http:Http, public _authService:Authentication) {
    }

    fnUpdateProfile(user:any):Observable<any> {
        return this.http.put(Config.apiUrl + '/api/users/' + Config.user._id, {
                name: user.name,
                email: user.email,
                role: user.role
            }, {headers: this._authService.fnCreateHeader()}
        ).map(response => response.json());
    }

    fnChangePassword(oldPassword:string, newPassword:string):Observable<any> {
        return this.http.put(Config.apiUrl + '/api/users/' + Config.user._id + '/password', {
                oldPassword: oldPassword,
                newPassword: newPassword
            }, {headers: this._authService.fnCreateHeader()})
            .map(this.fnExtractData)
            .catch(this.fnHandleError);
    }

    private fnExtractData(res:Response) {
        let body = res;
        return body || {};
    }

    private fnHandleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
