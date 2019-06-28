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
  average: Observable<any>;
  dataAverage: Observable<any>;
  macaddress: Observable<any>;
  metrics: Observable<any>;
  metricsWeek: Observable<any>;
  id:string;
  id_device:string;
  itemInfo:any;
  value: number;
  typeSensor: string;


  dataTable : any[] = [];
  dataTableWeek : any[] = [];
  lines : string[] = [];

  datas: any[] = [];
  datasWeek: any[] = [];
  pieChartDataDay;
  pieChartDataWeek;
  
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
    this.average = this.dataService.postUser(this.itemInfo);
    
   // this.dataAverage = Object.keys(a).map(function(key){return a[key]})
    this.macaddress = this.dataService.searchData(this.msal.getUserEmail());

    console.log("Last values on this sensor : " + this.average)
    
  }


  sendDeviceValue(){
    let commandValue = this.value;
    console.log(this.dataTable);
    console.log(this.datas);
     this.dataTable = [];
      this.lines = [];
      this.datas= [];
    //this.dataTable = [];
    if(commandValue == 0){
      this.macaddress.forEach(element=> {
        let macaddress2 = element[0].mac_address
        this.result.forEach(device => {
          let sensor2 = device.name;
           this.metrics = this.dataService.getMetricsSensorByDay(macaddress2, sensor2);
           this.metricsWeek = this.dataService.getMetricsSensorByWeek(macaddress2, sensor2);
    
            this.metrics.forEach(element2=> {
           
              var json_data = element2;
              var table1 = [];
              console.log("TEST "+sensor2);
  
              for(var i in json_data)
              table1.push([i, json_data [i]]);
  
              this.datas = table1[0][1].humiditySensor;
                
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
    
    }else if (commandValue == 1){
      this.macaddress.forEach(element=> {
        let macaddress2 = element[0].mac_address
        this.result.forEach(device => {
          let sensor2 = device.name;
           this.metrics = this.dataService.getMetricsSensorByWeek(macaddress2, sensor2);
    
            this.metrics.forEach(element2=> {
           
              var json_data = element2;
              var table1 = [];
  
              for(var i in json_data)
              table1.push([i, json_data [i]]);
  
              this.datas = table1[0][1].humiditySensor;
                
              this.lines.push('Hour', 'Humidity');
              this.dataTable.push(this.lines);
              this.datas.forEach(key => {
                this.lines = [];
                this.lines.push(key.DayOfWeek);
                this.lines.push(key.humidity);
                this.dataTable.push(this.lines);
              });
              this.useAngularLibrary();           
            });
        }) 
      })
    }else{
      this.macaddress.forEach(element=> {
        let macaddress2 = element[0].mac_address
        this.result.forEach(device => {
          let sensor2 = device.name;
           this.metrics = this.dataService.getMetricsSensorByMonth(macaddress2, sensor2);
    
            this.metrics.forEach(element2=> {
           
              var json_data = element2;
              var table1 = [];
  
              for(var i in json_data)
              table1.push([i, json_data [i]]);
  
              this.datas = table1[0][1].humiditySensor;
                
              this.lines.push('Hour', 'Humidity');
              this.dataTable.push(this.lines);
              this.datas.forEach(key => {
                this.lines = [];
                this.lines.push(key.Day);
                this.lines.push(key.humidity);
                this.dataTable.push(this.lines);
              });
              this.useAngularLibrary();           
            });
        }) 
      })
    }
  }

  /*ionViewDidEnter(){
    this.macaddress.forEach(element=> {
      let macaddress2 = element[0].mac_address
      this.result.forEach(device => {
        let sensor2 = device.name;
         this.metrics = this.dataService.getMetricsSensorByDay(macaddress2, sensor2);
         this.metricsWeek = this.dataService.getMetricsSensorByWeek(macaddress2, sensor2);
  
          this.metrics.forEach(element2=> {
         
            var json_data = element2;
            var table1 = [];

            for(var i in json_data)
            table1.push([i, json_data [i]]);

            this.datas = table1[0][1].humiditySensor;
              
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
     
          //// CHART 2
        
        /*this.metricsWeek.forEach(element3=> {
          var json_data_week = element3;
          var table2 = [];

            for(var i2 in json_data_week)
            table2.push([i2, json_data_week [i2]]);

            this.datasWeek = table2[0][1].humiditySensor;
            
            this.lines.push('Day', 'Humidity');
            this.dataTableWeek.push(this.lines);
            this.datasWeek.forEach(key => {
            this.lines = [];
            this.lines.push(key.DayOfWeek);
            this.lines.push(key.humidity);
            this.dataTableWeek.push(this.lines);
          });
          this.useAngularLibraryWeek();           
        });
      }) 
    })
  }*/

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
        desc: 'true',
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Humidity',
        },
      },
    };
  }

  /*useAngularLibraryWeek() {
    this.pieChartDataWeek = {
      chartType: 'LineChart',
      dataTable: this.dataTableWeek,
      options: {
        'title': 'By week',
        desc: 'true',
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Humidity',
        },
      },
    };
  }*/

}
