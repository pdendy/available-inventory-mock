import { Component, OnInit } from '@angular/core';

import { Listing } from '../models/listing.model';
import { ListingDetails } from '../models/listing-details.model';
import { ListingVariation } from '../models/listing-variation.model';
import { InventoryService } from '../services/inventory.service';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [
    MessageService
  ]
})
export class InventoryComponent implements OnInit {

  listings!: Listing[];

  listing!: Listing;

  selectedListing!: Listing[];

  clonedListings: { [s: string]: Listing;} = {};

  inventory = [
    {
      id: 1,
      title: "Body Wash",
      details: "moisturizing and exfoliating body wash",
      category: 'Health',
      quantity: 20
    },
    {
      id: 2,
      title: "Shampoo",
      details: "all natural conditioning shampoo",
      category: 'Hair Care',
      quantity: 30
    },
    {
      id: 3,
      title: "Conditioner",
      details: "leave-in conditioner",
      category: 'Hair Care',
      quantity: 40
    }
  ];

  editing!: boolean;

  first = 0;
  rows = 10;

  constructor(
    private inventoryService: InventoryService, 
    private messageService: MessageService,
      ) {
    }

  ngOnInit() {
    //this.inventoryService.getListings().then(data => this.listings = data);
    this.inventoryService.getListings().then(data => this.listings = data);
   }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.listings ? this.first === (this.listings.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.listings ? this.first === 0 : true;
  }

  onQuantitytEditInit(listing: Listing){
    this.clonedListings[listing.id] = {...listing};
  }

  onQuantityEditSave(listing: Listing){
    if (listing.quantity > 0) {
      delete this.clonedListings[listing.id];
      this.messageService.add({severity:'success', summary:'Success', detail: 'Listing is updated.'});
    }
    else {
      this.messageService.add({severity:'error', summary:'Error', detail:'Invalid Quantity'});
    }
  }

  // onQuantityEditCancel(listing: Listing, index: number){
  //   this.listing[index] = this.clonedListings[listing.id];
  //   delete this.clonedListings[listing.id];
  // }

}
