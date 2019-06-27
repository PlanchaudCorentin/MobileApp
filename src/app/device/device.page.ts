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
    private route: Router) { 
  }

  public sensorslists = this.sensorsService.lists;

  ngOnInit() {
    this.itemInfo = this.activatedRoute.snapshot.paramMap.get('id');
    this.device = this.devicesService.lists.find(e => { return e.id === this.itemInfo });
    this.sensor = this.sensorsService.lists.filter(e => { return e.id_device === this.device.id });
    this.result = this.dataService.getDeviceById(this.itemInfo);
    this.macaddress = this.dataService.searchData(this.msal.getUserEmail());

    //this.macaddress = this.dataService.getMacAdressByIdDevice(this.itemInfo);
    this.macaddress.forEach(element=> {
      //console.log(element[0].mac_address)

      let macaddress2 = element[0].mac_address
      this.metrics = this.dataService.getMetricsBySensor("44:81:C0:0D:6C:E6");
      //console.log(this.metrics);
      this.metrics.forEach(element2=> {
        console.log(element2);
      })

    })
    //console.log(this.macaddress);
  }


  sendDeviceValue(){
    let commandValue = this.value;
    if(commandValue == 0){
      console.log("La commande est : ");
    }else{

    }
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
  
  /*dataTable = [[
    'Type', 'Average', 'Sum'
  ],
  ['Sensor 1', 12, 13],
  ['Sensor 2', 15, 13],
  ['Sensor 3', 16, 32]];
  
  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'ColumnChart',
      dataTable: this.dataTable,
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
