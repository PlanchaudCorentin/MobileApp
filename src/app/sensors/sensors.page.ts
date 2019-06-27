import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorsService } from './sensor.service'
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.page.html',
  styleUrls: ['./sensors.page.scss'],
})
export class SensorsPage implements OnInit{
 
  result: Observable<any>;

  constructor(private route: Router, private data: SensorsService, private dataService: DataService) { }

  public sensorslists = this.data.lists;

    itemClicked(item: any) {
      console.log(item);
      this.route.navigateByUrl('/sensors/' + item.id);
    }

    ngOnInit(){
      this.result = this.dataService.getSensors();
    }
  

    



}
