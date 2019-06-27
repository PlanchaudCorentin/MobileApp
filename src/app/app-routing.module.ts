import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',
      loadChildren: './tabs/tabs.module#TabsPageModule'
    },
    { path: 'login',
      loadChildren: './login/login.module#LoginPageModule'
    },
    { path: 'devices',
      loadChildren: './devices/devices.module#DevicesPageModule'
    },
    { path: 'sensors',
      loadChildren: './sensors/sensors.module#SensorsPageModule'
    },
    { path: 'sensor', 
      loadChildren: './sensor/sensor.module#SensorPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
