import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices/devices.service';
import { SensorsService } from '../sensors/sensor.service';
import { Router } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  result: Observable<any>;
  id:string;
  id_device:string;
  itemInfo:any;
  device: { id?: string; name?: string; data: any };
  sensor2: { id?: string; name?: string; id_device?: string; data: any };
  sensor: { id?: string; name?: string; id_device?: string; data: any }[];

  constructor(private activatedRoute: ActivatedRoute, public devicesService: DevicesService, private sensorsService: SensorsService, private dataService: DataService,private route: Router) { }

  public sensorslists = this.sensorsService.lists;

  ngOnInit() {
    this.itemInfo = this.activatedRoute.snapshot.paramMap.get('id');
    this.device = this.devicesService.lists.find(e => { return e.id === this.itemInfo });
    this.sensor = this.sensorsService.lists.filter(e => { return e.id === this.device.id });
    this.result = this.dataService.getMetricsBySensor(this.itemInfo);
  }

  ionViewDidEnter(){
    this.useAngularLibrary();
  }

  itemClicked(item: any) {
    this.route.navigateByUrl('/sensors/' + item.id);
  }

  pieChartDataSensor;
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

  datas: any[] = [];

  useAngularLibrary() {
    //console.log(this.itemInfo)
    this.lines.push('Type', 'Average', 'Sum');
    this.dataTable.push(this.lines);
    this.sensor.forEach(e => {
      e.data.forEach(i =>{
        this.datas = i.data_sensor;
        //console.log(e);
        if (e.id === this.itemInfo) {
          this.datas.forEach(key => {
            this.lines = [];
            this.lines.push(key.hours);
            this.lines.push(key.average);
            this.lines.push(key.sum);
            this.dataTable.push(this.lines);
          });
        } 
      })
    });
    
    this.pieChartDataSensor = {
      chartType: 'LineChart',
      dataTable: this.dataTable,
      options: {
        'title': 'Average for all sensors by hours'
      }
    };
  }
}
