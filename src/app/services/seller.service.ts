import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../environment';
import { Seller } from '../models/seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  //url: string = environment.SELLER_URI;

  constructor(private http: HttpClient) {}

  // find seller by username
 // findSellerByUsername(username: string): Observable<Seller> {
  //  return this.http.get<Seller>(`${this.url}/username/${username}`);
 // }

  // update seller
  // saveSeller(seller: Seller): Observable<Seller> {
  //   return this.http.put<Seller>(this.url, seller);
  // }
  
}
