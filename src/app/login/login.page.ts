import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Msal from 'msal';
import { MsalService }  from '../services/msal.service';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  title = 'b2c-basic-app';

  result: Observable<any>;

  constructor(private router: Router, private msalService: MsalService, private dataService: DataService) { }

    goTo() {
      
        this.router.navigateByUrl('/tabs/tab1');
        //this.dataService.postUserAD(this.msalService.getFullName(), this.msalService.getUserEmail());
    }

    ngOnInit() {
      this.result = this.dataService.searchData(this.msalService.getUserEmail());
      console.log( this.dataService.postUserAD(this.msalService.getFullName(), this.msalService.getUserEmail()))
    }

    useremail(){
      let useremail = this.msalService.getUserEmail();
      return useremail;
    }
  
    login(){
      this.msalService.login();
    }
  
    signup(){
      this.msalService.signup();
    }
  
    logout(){
      this.msalService.logout();
    }
  
    isUserLoggedIn(){
      return this.msalService.isLoggedIn();
    }
}
