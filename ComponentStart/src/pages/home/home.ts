import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides:any;
@ViewChild('carrusel') carrusel:Slides;

  constructor(public navCtrl: NavController) {
    this.slides=[
      {
        titulo:'HTML 5',
        texto:'texto1 de prueba',
        imagen:'assets/images/img-1.jpg'
      },
      {
        titulo:'HTML 5',
        texto:'texto 2 de prueba',
        imagen:'assets/images/img-2.jpg'
      },
      {
        titulo:'HTML 5',
        texto:'texto 3 de prueba',
        imagen:'assets/images/img-3.jpg'
      }
    ]
  }
  iniciar(){
    this.carrusel.slideTo(0,4000);
  }
  anterior(){
    this.carrusel.slidePrev();
  }

  siguiente(){
    this.carrusel.slideNext();
  }
}
