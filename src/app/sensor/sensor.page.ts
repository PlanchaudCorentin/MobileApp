import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices/devices.service';
import { SensorsService } from '../sensors/sensor.service';
import { Router } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { MsalService } from '../services/msal.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  result: Observable<any>;
  dataAverage: Observable<any>;
  macaddress: Observable<any>;
  metrics: Observable<any>;
  id:string;
  id_device:string;
  itemInfo:any;

  dataTable : any[] = [];
  lines : string[] = [];
  average:string;
  datas: any[] = [];
  pieChartDataDay;
  
  device: { id?: string; name?: string; data: any };
  sensor2: { id?: string; name?: string; id_device?: string; data: any };
  sensor: { id?: string; name?: string; id_device?: string; data: any }[];
  table: { humiditySensor?: string; }[];

  constructor(
    private activatedRoute: ActivatedRoute, 
    public devicesService: DevicesService, 
    private sensorsService: SensorsService, 
    private msal: MsalService,
    private dataService: DataService,
    private route: Router ) { }

  //public sensorslists = this.sensorsService.lists;

  ngOnInit() {
    this.itemInfo = this.activatedRoute.snapshot.paramMap.get('id');
    this.device = this.devicesService.lists.find(e => { return e.id === this.itemInfo });
    this.sensor = this.sensorsService.lists.filter(e => { return e.id === this.device.id });
    this.result = this.dataService.getSensorById(this.itemInfo);
    
   // this.dataAverage = Object.keys(a).map(function(key){return a[key]})
    this.macaddress = this.dataService.searchData(this.msal.getUserEmail());

    this.macaddress.forEach(element=> {
      let macaddress2 = element[0].mac_address
      this.result.forEach(device => {
        let sensor2 = device.name;
         this.metrics = this.dataService.getMetricsSensorByDay(macaddress2, sensor2);
          this.metrics.forEach(element2=> {
         
            var json_data = element2;
            var table2 = [];

            for(var i in json_data)
            table2.push([i, json_data [i]]);

            this.datas = table2[0][1].humiditySensor;
              
            this.lines.push('Hour', 'Humidity');
            this.dataTable.push(this.lines);
            this.datas.forEach(key => {
              this.lines = [];
              this.lines.push(key.Hour);
              this.lines.push(key.humidity);
              this.dataTable.push(this.lines);
            });
            this.useAngularLibrary();           
          });
        }) 
      })
  }

  /*ionViewDidEnter(){
    this.useAngularLibrary();
  }*/

  itemClicked(item: any) {
    this.route.navigateByUrl('/sensors/' + item.id);
  }
  

  useAngularLibrary() {
    this.pieChartDataDay = {
      chartType: 'LineChart',
      dataTable: this.dataTable,
      options: {
        'title': 'By day',
        desc: 'true',
        hAxis: {
          title: 'Hours',
        },
        vAxis: {
          title: 'Humidity',
        },
      },
    };
  }

}
