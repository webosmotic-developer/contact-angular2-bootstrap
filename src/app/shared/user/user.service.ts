import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Authentication } from "../auth/authentication.service";
import { Config } from "../config";

@Injectable()
export class UserService{
    constructor(public http: Http,public _authService: Authentication){
    }

    fnUpdateProfile(user:any) : Observable<any>{
        return this.http.put(Config.apiUrl + '/api/users/' + Config.user._id, {
                name : user.name,
                email: user.email,
                role: user.role
            }, { headers: this._authService.fnCreateHeader()}
        ).map(response => response.json());
    }
}
