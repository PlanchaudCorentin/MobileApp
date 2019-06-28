import { Component, OnInit } from '@angular/core';
import { DevicesService} from './devices.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { MsalService } from '../services/msal.service';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit{

  result: Observable<any>;

  constructor(private dataService: DataService, private route: Router, public data: DevicesService, public msal: MsalService) {
    this.initializeItems();
   }

    items;
    //public devicelists = this.data.lists;

    itemClicked(item: any) {
      this.route.navigateByUrl('/devices/' + item.id);
    }

    ngOnInit() {
      this.result = this.dataService.searchData(this.msal.getUserEmail());
      //console.log('result :' + this.result);
    }

    initializeItems() {
        this.items = this.result;
        //console.log(this.items)
    }

    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the ev target
      var val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }



}
