import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-boleto',
  templateUrl: 'boleto.html',
})
export class BoletoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoletoPage');
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Boleto',
      inputs: [
        {
          name: 'mes',
          placeholder: 'Mês'
        }
      ],
      message: 'Emissão 2 via de Boleto',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
  }

}
