import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import './rxjs-extensions';

import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {NavbarComponent} from './navbar/navbar.component';
import {MainComponent} from './main/main.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactFormComponent} from './contacts/contact-form.component';


import { AuthenticateGuard } from './shared/auth/authenticate-guard';
import { NotAuthenticateGuard } from './shared/auth/not-authenticate-guard';
import { Authentication } from './shared/auth/authentication.service';
import { UserResolve } from './shared/auth/user-resolve.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MainComponent,
        SignInComponent,
        SignUpComponent,
        ContactsComponent,
        ContactFormComponent
    ],
    imports: [
        BrowserModule,
        ToastModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        Ng2Bs3ModalModule,
        routing
    ],
    providers: [AuthenticateGuard, NotAuthenticateGuard, appRoutingProviders, UserResolve, Authentication, CookieService ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
