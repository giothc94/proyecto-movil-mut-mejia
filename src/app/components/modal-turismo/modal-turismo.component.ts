import { TurismoService } from './../../services/turismo.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-turismo',
  templateUrl: './modal-turismo.component.html',
  styleUrls: ['./modal-turismo.component.scss'],
})
export class ModalTurismoComponent implements OnInit {

  listaTurismo
  lugar
  uid
  constructor(private navParams:NavParams,private modalController: ModalController,private turismoService:TurismoService) { 
    this.uid = this.navParams.get('uid')
    this.listaTurismo = this.turismoService.obtenerLugares()
    
    this.listaTurismo.forEach(lugar=>{
      if(this.uid == lugar.uid){
        this.lugar = lugar
      }
    })
  }

  ngOnInit() {}


  cerrar() {
    this.modalController.dismiss()
  }

}
