import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../models/listing.model';
import { environment } from 'src/environments/environment';

// import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url: string = environment.LISTINGS_URI;

  constructor(
    private http: HttpClient
  ) { }

  getListings() {
      return this.http.get<any>('assets/showcase/data/listings.json')
      .toPromise()
      .then(res => <Listing[]>res.data)
      .then(data => { return data; });
  }

  getListing(id: string): Observable<Listing>{
    let url = `${this.url}/${id}`;
    return this.http.get<Listing>(url);
  }

  editQuantity(listing: Listing): Observable<Listing>{
    let url = `${this.url}/${listing.id}`;
    return this.http.put<Listing>(url, listing);
  }

}
