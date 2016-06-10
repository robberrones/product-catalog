import { Component } from 'angular2/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
	selector: 'pc-app',
	template: '<div><h1>{{pageTitle}}</h1></div><pc-products></pc-products>',
	directives: [ProductListComponent]
})
export class AppComponent {
	pageTitle: string = 'Product Catalog'
}