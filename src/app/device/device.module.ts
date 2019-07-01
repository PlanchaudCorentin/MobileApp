import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DevicePage } from './device.page';
import { SensorPage } from '../sensor/sensor.page';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: DevicePage
  },
  {
    path: ':id',
    component: SensorPage
  }
];

@NgModule({
  imports: [
    Ng2GoogleChartsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterTestingModule,
    RouterModule.forChild(routes),
  ],

  declarations: [DevicePage, SensorPage]
})
export class DevicePageModule {}
