import {Component, ViewContainerRef } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})


export class AppComponent{
    constructor(private viewContainerRef:ViewContainerRef){
        console.log("App Initializing...");
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}
