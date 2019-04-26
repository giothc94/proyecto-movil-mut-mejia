import { MarcadoresRutasService } from './../services/marcadores-rutas.service';
import { Platform, IonContent, ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, BaseArrayClass, ILatLng, GoogleMapOptions, MyLocation } from '@ionic-native/google-maps/ngx';
import { Environment } from '@ionic-native/google-maps/ngx';
import { Router } from '@angular/router';
import { ModalParadasComponent } from '../components/modal-paradas/modal-paradas.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonContent) contenido: IonContent
  map: GoogleMap;

  rutas: any

  params

  showDataRoute: boolean = false

  constructor(private platform: Platform,
    private router: Router,
    private service: MarcadoresRutasService,
    public modalController: ModalController
  ) {
    this.rutas = this.service.rutas
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap()
    })

  }


  loadMap() {
    // let limites: ILatLng[] = MARCADORES.map((data: any, idx: number) => {
    //   console.log(data,idx)
    //   return data.position
    // })
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyD8NKYKzbu_XTSPE6ENTlJqlrDhimxwifw',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyD8NKYKzbu_XTSPE6ENTlJqlrDhimxwifw'
    });
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -0.1975111,
          lng: -78.4960296
        },
        zoom: 18,
        tilt: 20
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions)

  }

  cargarMarcadores(data) {
    this.map.clear()
    let MARCADORES: BaseArrayClass<any> = new BaseArrayClass<any>(data)
    MARCADORES.forEach(data => {
      data.disableAutoPan = false
      let marker: Marker = this.map.addMarkerSync(data)
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
    })
    this.map.setCameraTarget({
      lat: -0.1806532,
      lng: -78.4678382
    })
    this.map.setCameraZoom(8)
    this.ScrollToTop()
  }

  onMarkerClick(params: any) {
    let marker: Marker = <Marker>params[1];
  }
  onMapReady() {
    console.log('mapa cargado correctamente')
  }



  ir(param) {
    console.log(param)
    this.router.navigate([`detalle-ruta/${JSON.stringify(param)}`])
  }
  ScrollToTop() {
    this.contenido.scrollToTop(1500);
  }
  mostrarRuta(rutaAbr) {
    this.presentModal(rutaAbr)
  }
  async presentModal(rutaAbr) {
    const modal = await this.modalController.create({
      component: ModalParadasComponent,
      componentProps:
      {
        rutaAbr: rutaAbr,
        listaRutas: this.rutas
      }
    });
    return await modal.present();
  }
}
