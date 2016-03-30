import {Component} from 'angular2/core';
import {HeroListComponent} from './hero-list.component';
import {SalesTaxComponent} from './sales-tax.component';

@Component({
    selector: 'my-app',
    // template: '<h1>This isn\'t much of a template</h1>'

    template: `
        <hero-list></hero-list>
        <sales-tax></sales-tax>
    `,
    directives: [HeroListComponent, SalesTaxComponent]
})
export class AppComponent { }
