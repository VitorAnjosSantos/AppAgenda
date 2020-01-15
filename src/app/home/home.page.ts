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

  pessoa: Array <{codigo: any; nome: string; telefone: string; email: string}>

  pessoaTodos: Array <{codigo: any; nome: string; telefone: string; email: string}>

  constructor(public navCtrl: NavController, public servidor: SevidorProviderService) {

    this.pessoa = [];
    this.getRetornar();
  }

  getRetornar(){
    this.servidor.getPegar()
      .subscribe(
        data => {
          
          this.contatos = data;
        
          for(let i = 0; i < data.length; i++){
            
            this.pessoa.push({
              codigo: data[i]["codigo"],
              nome: data[i]["nome"],
              telefone: data[i]["telefone"],
              email: data[i]['email']
            });
          }
          this.pessoaTodos = this.pessoa;
        }
        
      )
        err =>console.log(err);
  }
        getContatos(ev: any) {
      
          // set val to the value of the searchbar
          const val = ev.target.value;
      
          // if the value is an empty string don't filter the items
          if (val && val.trim() != '') {
            this.pessoa = this.pessoaTodos.filter((contatos) => {
              return (contatos.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
          }
          else{
            this.pessoa = this.pessoaTodos;
          }
        }
  


}
