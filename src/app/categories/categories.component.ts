import { Component, Inject, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: Category[] = [];
  visibleSidebar: boolean = false;

   constructor( private categoryService: CategoryService) {
    // this.categoryService.findAll().subscribe({
    //   next: data => {
    //     this.categoriesList = data.body!;
    //   }
    // });
  }


  ngOnInit(): void {
  }
    // filters listings by category when clicked
    setCategory(categoryName: string) {
      this.visibleSidebar=false;
    }
  
    // attaches proper prefix to database category names to work with the translator
    categoryTranslator() {
      for (let category of this.categoriesList) {
        category.name = 'Categories.' + category.name;
      }
      // adds an "all categories" link to the top of the list
    }

}
