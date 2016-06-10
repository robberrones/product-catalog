export interface IProduct {
    productId: number,
    productName : string,
    productCode : number,
    releaseDate : string,
    description : string,
    price : number,
    starRating: number,
    imageUrl : string,
    calculateDiscount(percent : number) : number
}