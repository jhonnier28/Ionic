import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PageError} from '../pageError/pageError';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-elemento',
  templateUrl: 'elemento.html'
})
export class ElementoPage {
    usuario:string;
    contador:number;
    elementoPagina= ElementoPage;


    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.usuario = navParams.get('usuario');
        this.contador = navParams.get('contador');
          console.log(this.usuario);
          console.log(this.contador);
    }
    regresar(){
        this.navCtrl.push(HomePage,"");
    }
}
