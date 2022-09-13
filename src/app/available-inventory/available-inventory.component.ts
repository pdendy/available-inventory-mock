import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

import { Listing } from '../models/listing.model';
import { ListingDetails } from '../models/listing-details.model';
import { ListingVariation } from '../models/listing-variation.model';
import { ListingComponent } from '../listing/listing.component';
import { AvailableInventoryService } from '../services/available-inventory.service';

@Component({
  selector: 'app-available-inventory',
  templateUrl: './available-inventory.component.html',
  styleUrls: ['./available-inventory.component.css']
})
export class AvailableInventoryComponent implements OnInit {

  listing: Listing[];
  listingDetails: ListingDetails[];
  listingVariation: ListingVariation[];

  constructor(private availableInventoryService: AvailableInventoryService) { }

  ngOnInit(): void {
    
  }

}
