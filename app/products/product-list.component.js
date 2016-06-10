System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.pageTitle = "Product List";
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = "cart";
                    this.products = [
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
                }
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ;
                ProductListComponent.prototype.ngOnInit = function () {
                    console.log("In OnInit");
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'pc-products',
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ["app/products/product-list.component.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map