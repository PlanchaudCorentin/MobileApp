import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SensorPage } from './sensor.page';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

const routes: Routes = [
  {
    path: '/sensor/:id',
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
  declarations: [SensorPage]
})
export class SensorPageModule {}
