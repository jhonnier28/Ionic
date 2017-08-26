import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ElementoPage} from '../elemento/elemento';
import {PageError} from '../pageError/pageError';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  elementoPagina=ElementoPage;
  pageError= PageError;
  usuario:string;
  contrasenia:string;
  contador:number=0;
  constructor(public navCtrl: NavController, private navParams:NavParams) {
    this.usuario = navParams.get('usuario');
    this.usuario = navParams.get('contrasenia');
  }

  validar(usuario, contrasenia){
    this.usuario=usuario;
    this.contrasenia=contrasenia
    console.log(this.usuario, this.contrasenia)

    if(this.usuario=="jhonny" && this.contrasenia=="123"){
      console.log("Contraseña valida");
      this.navCtrl.push(ElementoPage,{usuario:this.usuario, contador:this.contador});
   //   this.elementoPagina;
    }else{
      this.contador = this.contador+1;
      console.log("Contraseña invalida, intento: "+this.contador)
      this.navCtrl.push(PageError,1);
 
    }
  }
}
