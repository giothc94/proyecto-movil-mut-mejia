import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-paradas',
  templateUrl: './modal-paradas.component.html',
  styleUrls: ['./modal-paradas.component.scss'],
})
export class ModalParadasComponent implements OnInit {
  rutaAbr
  listaRutas
  listaParadas
  ruta
  constructor(private navParams:NavParams,private modalController: ModalController) {
    this.rutaAbr = this.navParams.get('rutaAbr')
    this.listaRutas = this.navParams.get('listaRutas')

    this.listaRutas.forEach(element => {
      if(element.abr == this.rutaAbr){
        this.ruta = element
        this.listaParadas = element.paradas
      }
    });
  }

  ngOnInit() {}

  cerrar() {
    this.modalController.dismiss()
  }
}
