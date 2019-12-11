import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SevidorProviderService} from '../providers/sevidor-provider.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  contatos: any;

  constructor(public navCtrl: NavController, public servidor: SevidorProviderService) {

    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar().subscribe(data => this.contatos = data,err =>console.log(err));
  }


}
