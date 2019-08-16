import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
 user: any;
 @Input('name')userName:string;
 @Input('anad')usercalled:string;
 @Input('alank')useraddred:string;
 
  constructor() {
    
   }

  ngOnInit() {
    this.user = {
      name: this.userName,
      title :this.usercalled,
      address :this.useraddred,
    
         phone:[
          '123-456-789',
          '987-654-321',
          '987-654-321'
        ]
     };
  }

}
