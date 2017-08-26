import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-elemento',
  templateUrl: 'elemento.html'
})
export class ElementoPage {
    numeroPagina:number;
    elementoPagina= ElementoPage;


    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.numeroPagina = navParams.get('numero');
    }


}
