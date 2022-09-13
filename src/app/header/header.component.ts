import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
//import usJson from  '../../assets/i18n/en-US.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category = new Category(0, '', '');
  countries: {name: string, code: string}[] = [];
  selected: any;
  code: any;

  constructor(private categoryService: CategoryService) {

    // self.navigator.languages.forEach(element => {
    //   if (element === 'en') element = 'en-US';
    //   let newCountry = { name: 'Header.' + element, code: element };
    //   if (usJson.Header.hasOwnProperty(element) && !this.countries.some(({ name, code }) => name === newCountry.name && code === newCountry.code)) {
    //     this.countries.push(newCountry);
    //   }
    // });

    // if (!this.countries.some(({ name, code }) => name === 'Header.en-US' && code === 'en-US')) {
    //   this.countries.push({ name: 'Header.en-US', code: 'en-US' })
    // }
  }

  ngOnInit(): void {
    // this.categoryService.findAll().subscribe({
    //   next: data => {
    //     this.categories = data.body!;

    //     for (let category of this.categories) {
    //       category.name = 'Categories.' + category.name;
    //     }

    //     // adds an "All" item to Categories list
    //     this.categories.unshift(new Category(0, 'Categories.All', ''));
    //     this.selectedCategory = this.categories[0];
    //   }
    // });
  }

  // function for changing overall site language when you select a seller
  //  public selectLanguage(event: any){
  //   this.translateService.use(event.value.code);

  // }

}
