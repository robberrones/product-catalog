import { Component, OnInit } from 'angular2/core';

//custom interface 'IProduct'
import { IProduct } from './product';

@Component({
	selector: 'pc-products',
	templateUrl: 'app/products/product-list.component.html',
	styleUrls: ["app/products/product-list.component.css"]
})
export class ProductListComponent implements OnInit {
	pageTitle: string = "Product List";
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	listFilter: string = "cart";

	products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://placekitten.com/200/300"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://placekitten.com/100/166"
    }];

    toggleImage() :void {
    	this.showImage = !this.showImage;
    };

    ngOnInit() : void {
    	console.log("In OnInit");
    }
}