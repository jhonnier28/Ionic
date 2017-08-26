import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-elemento',
  templateUrl: 'elemento.html'
})
export class ElementoPage {


    constructor(private navCtrl: NavController) {
        
          }


    volverPagina(){
            this.navCtrl.pop();


    }

}
