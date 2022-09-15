import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PolicyService } from './policy.service';
//import usJson from '../assets/i18n/en-US.json';

import { Component, OnInit } from '@angular/core';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }

  public deletePolicy(policyId){
    this.policyService.deletePolicy(policyId).subscribe((ret)=>{
          console.log("Policy deleted: ", ret);
    })
}


public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
    let newPolicy:{id: number, amount: number, clientId: number, userId: number, description: string} = {policy.id, 0, 0, 0};
    this.policyService.updatePolicy(policyId).subscribe((ret)=>{
          console.log("Policy updated: ", ret);
    });
}  


}




//original code
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {

//   constructor(){
//     for (let languageCode of self.navigator.languages) {
//       if (languageCode === 'en') languageCode = 'en-US';
//       if (usJson.Header.hasOwnProperty(languageCode)) {
//         translateService.use(languageCode);
//         break;
//       }
//     }
//   }

// }
