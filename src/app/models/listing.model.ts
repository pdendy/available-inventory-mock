import { Category } from "./category.model";
import { Country } from "./country.model";
import { ListingDetails } from "./listing-details.model";
import { ListingVariation } from "./listing-variation.model";
import { Seller } from "./seller.model";

export class Listing {

    id: string;
    title: string;
    price: number;
    imageSrc: string;
    listingLanguage: string;
    brand: string;
    ageRange: string;
    details: ListingDetails;
    quantity: number;
    seller: Seller;
    categories: Category[];
    country?: Country;
    variants?: ListingVariation[];

    constructor(
                id: string,
                title: string,
                imageSrc: string,
                price: number,
                listingLanguage: string,
                brand: string,
                ageRange: string,
                details: ListingDetails,
                quantity: number,
                seller: Seller,
                categories: Category[],
                country?: Country,
                variants?: ListingVariation[]) {
                    
        this.id = id;
        this.title = title;
        this.imageSrc = imageSrc;
        this.price = price;
        this.listingLanguage = listingLanguage;
        this.brand = brand;
        this.ageRange = ageRange;
        this.details = details;
        this.quantity = quantity;
        this.seller = seller;
        this.categories = categories;
        this.country = country;
        this.variants = variants;
    }
}
