import {Component, OnInit} from '@angular/core';

@Component({
    // meta data
    selector: 'app-root', // html tag <app-root></app-root>
    // view
    templateUrl: 'app.component.html',

    // scopped styles
    // only for app component
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {
    // models, can be accessed from view
    title: string = 'Product App ';
    today: Date = new Date();

    // View is NOT YET LOADED
    constructor() {
        console.log("App comp created");
    }

    // called after View is loaded
    ngOnInit() {
        console.log("App View loaded")
    }

    // handler for subscribe
    onContact(n: number) {
        alert(n);
    }

    getName() {
        console.log("Get name ", Math.random());
        return "Angular"
    }
}
