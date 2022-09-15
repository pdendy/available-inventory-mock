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

  constructor(private InventoryService: InventoryService) { }

  ngOnInit(): void { }

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
