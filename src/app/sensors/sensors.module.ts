import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SensorsPage } from './sensors.page';
import { SensorPage } from '../sensor/sensor.page';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

const routes: Routes = [
  {
    path: '',
    component: SensorsPage
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
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SensorsPage, SensorPage]
})
export class SensorsPageModule {}
