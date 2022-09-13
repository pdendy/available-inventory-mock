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

  constructor() { }


}
