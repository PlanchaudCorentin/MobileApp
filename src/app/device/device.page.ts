import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices/devices.service'
import { SensorsService } from '../sensors/sensor.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DataService } from '../services/data.service';
import { MsalService } from '../services/msal.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  command: Observable<any>;
  value: number;
  result: Observable<any>;
  macaddress: Observable<any>;
  metrics: Observable<any>;
  id:string;
  id_device:string;
  itemInfo:any;
  device: { id?: string; name?: string; data: any };
  sensor2: { id?: string; name?: string; id_device?: string; data: any };
  sensor: { id?: string; name?: string; id_device?: string; data: any }[];

  constructor(
    private activatedRoute: ActivatedRoute, 
    public devicesService: DevicesService, 
    private sensorsService: SensorsService, 
    private dataService: DataService, 
    private msal: MsalService,
    private route: Router) { }

  public sensorslists = this.sensorsService.lists;

  ngOnInit() {
    this.itemInfo = this.activatedRoute.snapshot.paramMap.get('id');
    this.device = this.devicesService.lists.find(e => { return e.id === this.itemInfo });
    this.sensor = this.sensorsService.lists.filter(e => { return e.id_device === this.device.id });
    this.result = this.dataService.getDeviceById(this.itemInfo);
  }

  sendDeviceValue(){
    console.log("test")
    this.dataService.pushCommand("Led");
    //console.log(this.dataService.pushCommand("Led"))
  }

  itemClicked(item: any) {
    this.route.navigateByUrl('/sensors/' + item.id);
  }

  ionViewDidEnter(){
    this.useAngularLibrary();
  }
  
  pieChartData;
  dataTable : any[] = [];
  lines : string[] = [];
  average:string;
  
  /*dataTable2 = [[
    'Type', 'Humidity', 'Temperature'
  ],
  
  ['Sensor 1', 12, 13]];*/
  
  /*useAngularLibrary() {
    this.pieChartData = {
      chartType: 'ColumnChart',
      dataTable: this.dataTable2,
      legend: {
        position: 'bottom'
      }
    };
  
  }*/

  useAngularLibrary() {
    this.lines.push('Type', 'Average');
    this.dataTable.push(this.lines);
    this.sensor.forEach(e => {
      e.data.forEach(i =>{
        this.dataTable.push(['Sensor ' + (e.id), i.average]);
      })
    });
    this.pieChartData = {
      chartType: 'ColumnChart',
      dataTable: this.dataTable,
      options: {
        'title': 'Average for all sensors by hours'
      }
    };
  }
}
