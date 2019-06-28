import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MsalService } from '../services/msal.service';


export enum SearchType {
  all = '',
  id = "id",
  mac_adress = 'mac_adress',
  name = 'name',
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //url = 'http://10.162.129.103:8090/'; 
  //url_persistance = 'http://10.162.129.103:8080/';
  
  url = 'http://192.168.43.89:8090/'; 
  url_persistance = 'http://192.168.43.89:8080/'; 
  url_metrics = "http://192.168.43.146:5001/" 
  url_command = "http://192.168.43.146:3615/"

  constructor(private http: HttpClient, private msalService: MsalService) { }

  // MOBILE API //

  searchData(mail: string ): Observable<any> {
    return this.http.get(`${this.url}users/devicesbymail/${encodeURI(mail)}`);
  }

  getSensors() {
    return this.http.get(`${this.url}sensors/`);
  }

  getDeviceById(id: string) {
    return this.http.get(`${this.url}sensors/device/${encodeURI(id)}`);
  }

  getMacAdressByIdDevice(id: string){
    return this.http.get(`${this.url}devices/${encodeURI(id)}`);
  }


  postUser(id : string){
    return this.http.get(`${this.url}metrics/sensor/${encodeURI(id)}`);
  }


  postCommand(id : string){
  }

  getSensorById(id : string){
    return this.http.get(`${this.url}sensors/${encodeURI(id)}`);
  }



  // METRICS //

  getMetricsBySensor(mac_adress : string){
    return this.http.get(`${this.url}api/stat/${encodeURI(mac_adress)}/`);
  }

  getMetricsDeviceByDay(mac_adress : string){
    return this.http.get(`${this.url_metrics}api/stat/${encodeURI(mac_adress)}/day`);
  }

  getMetricsSensorByDay(mac_adress : string, name_sensor : string){
    return this.http.get(`${this.url_metrics}api/stat/${encodeURI(mac_adress)}/${encodeURI(name_sensor)}/day`);
  }

  getMetricsSensorByWeek(mac_adress : string){
    return this.http.get(`${this.url_metrics}api/stat/${encodeURI(mac_adress)}/week`);
  }

  getMetricsSensorByMonth(mac_adress : string){
    return this.http.get(`${this.url_metrics}api/stat/${encodeURI(mac_adress)}/month`);
  }


  // COMMAND //

  pushCommand(command : string){
    return this.http.get(`${this.url_command}api/command/${encodeURI(command)}`).pipe(map(data => {})).subscribe(result => {
      console.log(result);
    });
  
    
  }


  // PERSISTANCE //

  postUserAD(name : String, mail : string){
    let headers = new HttpHeaders({
      'Accept':'application/json',
      'Content-Type':'application/json'
    });
  
  let option = {
    headers: headers
  }

  let postData = {
          "name":name,
          "mail":mail
  }

  console.log(JSON.stringify(postData));
  this.http.post(`${this.url_persistance}users/new`, postData, option)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });

  }

}
