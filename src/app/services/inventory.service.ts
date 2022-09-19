import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../models/listing.model';
// import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  //url: string = environment.LISTINGS_URI;

  constructor(
    private http: HttpClient
    ) { }

    // getListings() {
    //   return this.http.get<any>('assets/showcase/data/listings.json')
    //   .toPromise()
    //   .then(res => <Listing[]>res.data)
    //   .then(data => { return data; });
  //}
  
  // generateName() {
  //   return this.[Math.floor(Math.random() * Math.floor(30))];
  // }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299)+1);
  }

  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75)+1);
  }

}
