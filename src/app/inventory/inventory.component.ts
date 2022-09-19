import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

import { Listing } from '../models/listing.model';
import { ListingDetails } from '../models/listing-details.model';
import { ListingVariation } from '../models/listing-variation.model';
import { ListingComponent } from '../listing/listing.component';
import { InventoryService } from '../services/inventory.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [
    MessageService,
    ConfirmationService,
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => InventoryComponent),  // replace name as appropriate
    //   multi: true
    // }
  ]
})
export class InventoryComponent implements OnInit {

  listingDialog!: boolean;

  listings!: Listing[];

  listing!: Listing;

  selectedListing!: Listing[];

  submitted!: boolean;

  inventory = [
    {
      id: 1,
      title: "Body Wash",
      details: "for showering I guess",
      quantity: 20
    },
    {
      id: 2,
      title: "Shampoo",
      details: "for showering I guess",
      quantity: 30
    },
    {
      id: 3,
      title: "Conditioner",
      details: "for showering I guess",
      quantity: 40
    }
  ];

  first = 0;
  rows = 10;

  constructor(
    private inventoryService: InventoryService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService
      // title: string,
      // price: number,
      // details: ListingDetails,
      // quantity: number,
      // categories: Category[]
      ) {
        // this.title = title;
        // this.price = price;
        // this.details = details;
        // this.quantity = quantity;
        // this.categories = categories;
    }

  ngOnInit() {
    //this.inventoryService.getListings().then(data => this.listings = data);

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

  openNew() {
    //this.listing = {};
    this.submitted = false;
    this.listingDialog = true;
  }

  editListing(listing: Listing) {
    console.log("Edit button works.");

    this.listing = {...listing};
    this.listingDialog = true;
  }

  deleteListing(listing: Listing) {
    
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + listing.title + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          console.log("Delete button works.");
            this.listings = this.listings.filter(val => val.id !== listing.id);
            //this.listing = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Listing Deleted', life: 3000});
       
          } 
    });
  } 

  hideDialog() {
    this.listingDialog = false;
    this.submitted = false;
  }

  saveListing() {
    this.submitted = true;
        if (this.listing.id) {
            this.listings[this.findIndexById(this.listing.id)] = this.listing;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Listing Updated', life: 3000});
        }
        else {        
          this.listing = this.listing;
          this.listingDialog = false;
          //this.listing = {};
        }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.listings.length; i++) {
        if (this.listings[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}
}
