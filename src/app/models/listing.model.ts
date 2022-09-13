import { Category } from "./category.model";
import { Country } from "./country.model";
import { ListingDetails } from "./listing-details.model";
import { ListingVariation } from "./listing-variation.model";
import { Seller } from "./seller.model";

export class Listing {

    title: string;
    price: number;
    imageSrc: string;
    listingLanguage: string;
    brand: string;
    ageRange: string;
    details: ListingDetails;
    seller: Seller;
    categories: Category[];
    country?: Country;
    variants?: ListingVariation[];

    constructor(
                title: string,
                imageSrc: string,
                price: number,
                listingLanguage: string,
                brand: string,
                ageRange: string,
                details: ListingDetails,
                seller: Seller,
                categories: Category[],
                country?: Country,
                variants?: ListingVariation[]) {

        this.title = title;
        this.imageSrc = imageSrc;
        this.price = price;
        this.listingLanguage = listingLanguage;
        this.brand = brand;
        this.ageRange = ageRange;
        this.details = details;
        this.seller = seller;
        this.categories = categories;
        this.country = country;
        this.variants = variants;
    }
}
