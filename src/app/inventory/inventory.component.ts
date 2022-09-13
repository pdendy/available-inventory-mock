import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

import { Listing } from '../models/listing.model';
import { ListingDetails } from '../models/listing-details.model';
import { ListingVariation } from '../models/listing-variation.model';
import { ListingComponent } from '../listing/listing.component';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

 // listings: Listing[];
 // listingDetails: ListingDetails[];
  //listingVariation: ListingVariation[];

  first = 0;
  rows = 10;

  constructor(private InventoryService: InventoryService) { }

  ngOnInit(): void {
    //this.availableInventoryService.getListings()TouchEvent(data => this.listings = data);
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

  // isLastPage(): boolean {
  //   return this.listings ? this.first === (this.listings.length - this.rows) : true;
  // }

  // isFirstPage(): boolean {
  //   return this.listings ? this.first === 0 : true;
  // }


}
