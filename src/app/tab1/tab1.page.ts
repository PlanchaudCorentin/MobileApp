import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Msal from 'msal';
import { MsalService }  from '../services/msal.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

    constructor(private router: Router, private msalService: MsalService) {}

    ngOnInit() {
     console.log(this.msalService.isLoggedIn)
    }
    
    goTo() {
        this.router.navigateByUrl('/login');
    }

    useremail(){
      let useremail = this.msalService.getUserEmail();
      return useremail;
    }

    fullname(){
      let fullname = this.msalService.getFullName();
      return fullname;
      console.log(fullname);
    }

    logout(){
      //this.router.navigateByUrl('/login');
      this.msalService.logout();
    }
  
    isUserLoggedIn(){
      return this.msalService.isLoggedIn();
    }
  

}
