import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-acciones',
  templateUrl: 'acciones.html'
})
export class AccionesPage {

  constructor(public navCtrl: NavController, private actionSheetController: ActionSheetController, private alertController:AlertController) {

  }
  mostrarAcciones()
  {
      let listaAcciones = this.actionSheetController.create({
          title:'Lista de acciones',
          buttons:[
            {
                text:'Opcion 1',
                handler:()=>{console.log("Opcion 1");}
            },
            {
                text:'Opcion 2',
                role:'destructive',
                handler:()=>{console.log("Opcion 2");}
            },
            {
                text:'Cancelar',
                role:'cancel',
                handler:()=>{console.log("Cancelar");}
            }
        ]      
        });
        listaAcciones.present();
  }

  mostrarAlerta(){
    let alerta = this.alertController.create({
        title:'Titulo alerta!',
        subTitle:'Subtitulo alerta',
        message:'Contenido',
        buttons:['OK']
    });
    alerta.present();
  }
  mostrarAlertaPaises()
  {
    let alerta = this.alertController.create();
    alerta.setTitle('Selecciona un pais');
    alerta.addInput({
            type:'radio',
            label:'Colombia',
            value:'Colombia'
    });
    alerta.addInput({
            type:'radio',
            label:'Ecuador',
            value:'Ecuador'
    });
    alerta.addInput({
            type:'radio',
            label:'Peru',
            value:'Peru'
    });
    alerta.addButton({
            text:'Cancelar'
    });
    alerta.addButton({
            text:'OK',
            handler:(data)=>{console.log("El pais seleccionado es: "+ data);}

    });
    alerta.present();
   }
}