import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';
import { ModalParadasComponent } from './components/modal-paradas/modal-paradas.component';
import { ModalTurismoComponent } from './components/modal-turismo/modal-turismo.component';

@NgModule({
  declarations: [AppComponent,ModalParadasComponent,ModalTurismoComponent],
  entryComponents: [ModalParadasComponent,ModalTurismoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Geolocation,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
