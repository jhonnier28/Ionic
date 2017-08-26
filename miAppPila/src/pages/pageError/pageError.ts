import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'pageError',
  templateUrl: 'pageError.html'
})
export class PageError {
    usuario:string;
    pass:string;
    errorPagina= PageError;


    constructor(private navCtrl: NavController, private navParams: NavParams) {
     /*   this.usuario = navParams.get('usuario');
        this.pass = navParams.get('contrasenia');
         console.log(this.usuario);
         console.log(this.pass);
*/

    }
    regresar(){
        this.navCtrl.push(HomePage,"");

    }

}
