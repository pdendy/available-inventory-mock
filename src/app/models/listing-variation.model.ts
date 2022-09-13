import { Listing } from "./listing.model";

export class ListingVariation {


    type: string;
    description: string;
    listing?: Listing;

    constructor( type: string, description: string, listing?: Listing,) {
        this.type = type
        this.description = description
        this.listing = listing
    }
}
