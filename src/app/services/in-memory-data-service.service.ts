import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const listings = [
      {
        id: 4,
        title: "Face Wash",
        details: "moisturizing and exfoliating face wash",
        category: 'Skin Care',
        quantity: 10
      },
      {
        id: 5,
        title: "Dry Shampoo",
        details: "all natural conditioning shampoo",
        category: 'Hair Care',
        quantity: 30
      },
      {
        id: 6,
        title: "Conditioner",
        details: "leave-in conditioner",
        category: 'Hair Care',
        quantity: 15
      }
    ]; 
    return {listings};
  }
  
  constructor() { }
}
