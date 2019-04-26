import { ModalTurismoComponent } from './../components/modal-turismo/modal-turismo.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
  
  constructor(public modalController: ModalController){

  }
  
  mostrarDetalleTurismo(uid){
    this.presentModal(uid)
  }

  async presentModal(uid) {
    const modal = await this.modalController.create({
      component: ModalTurismoComponent,
      componentProps:
        { 
          uid:uid
        }
    });
    return await modal.present();
  }
}
