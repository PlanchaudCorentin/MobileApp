import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevicesPage } from './devices.page';
import { DevicePage } from '../device/device.page';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';


const routes: Routes = [
  {
    path: '',
    component: DevicesPage
  }, 
  {
    path: ':id',
    component: DevicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2GoogleChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevicesPage, DevicePage]
})
export class DevicesPageModule {}
