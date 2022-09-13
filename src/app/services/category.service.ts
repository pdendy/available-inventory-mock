import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 // url: string = environment.CATEGORIES_URI;

  constructor() {}

  // find all of the categories 
  // findAll(): Observable<HttpResponse<Category[]>> {
  //   return this.http.get<Category[]>(this.url, {observe: 'response'});
  // }

}
