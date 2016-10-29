import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactFormComponent} from './contacts/contact-form.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthenticateGuard } from './shared/auth/authenticate-guard';
import { NotAuthenticateGuard } from './shared/auth/not-authenticate-guard';
import { UserResolve } from "./shared/auth/user-resolve.service";


const appRoutes: Routes = [
    { path : '', redirectTo:'/contacts', pathMatch:'full'},
    {
        path: '', component: MainComponent,
        children: [
            {
                path: 'contacts', component: ContactsComponent ,
                canActivate: [AuthenticateGuard],
                resolve: {
                    UserResolve: UserResolve
                }
            },
            {
                path: 'contactform',
                component: ContactFormComponent,
                canActivate: [AuthenticateGuard],
                resolve: {
                    UserResolve: UserResolve
                }
            },
            {
                path: 'contactform/:id',
                component: ContactFormComponent,
                canActivate: [AuthenticateGuard],
                resolve: {
                    UserResolve: UserResolve
                }
            },
            {
                path : 'settings',
                component : SettingsComponent,
                canActivate : [AuthenticateGuard],
                resolve : {
                    UserResolve : UserResolve
                }
            }
        ]
    },
    { path: 'login', component: SignInComponent, canActivate: [NotAuthenticateGuard]},
    { path: 'register', component: SignUpComponent, canActivate: [NotAuthenticateGuard]}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
