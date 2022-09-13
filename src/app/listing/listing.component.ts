import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})

// this component receives listing information from the Home component

export class ListingComponent implements OnInit {
  
  @Input() imageSrc: string = '';
  @Input() title: string = ''; 
  @Input() brand: string = '';
  @Input() categories: Category[] = [];
  @Input() productGroup: string = 'No Group';
  @Input() price: number = 0;
  @Input() ageRange: string = '';

  constructor() {

   }

  ngOnInit(): void { }

  // function when you click "Edit" button
  editListing(): void { }

  // function when you click "Delete" button
  deleteListing(): void { }

}
