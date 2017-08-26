import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-elemento',
  templateUrl: 'elemento.html'
})
export class ElementoPage {
    numeroPagina:number;


    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.numeroPagina = navParams.data;
    }

    volverPagina(){
            this.navCtrl.pop();
    }

    agregarPagina(){
            this.navCtrl.push(ElementoPage, this.numeroPagina+1);
    }
}
