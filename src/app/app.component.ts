import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import usJson from '../assets/i18n/en-US.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    // for (let languageCode of self.navigator.languages) {
    //   if (languageCode === 'en') languageCode = 'en-US';
    //   if (usJson.Header.hasOwnProperty(languageCode)) {
    //     translateService.use(languageCode);
    //     break;
    //   }
    // }
  }

}
