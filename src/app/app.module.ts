import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { MsalService } from './services/msal.service';

@NgModule({
  declarations: [
      AppComponent
  ],
  entryComponents: [
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      Ng2GoogleChartsModule,
      HttpClientModule,
      AppRoutingModule],
      
  providers: [
    StatusBar,
    SplashScreen,
    MsalService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule {}
