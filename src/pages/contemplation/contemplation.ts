import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the ContemplationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contemplation',
  templateUrl: 'contemplation.html',
})
export class ContemplationPage {

  public contemplations: Array<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    this.contemplations = [ 
      {"title": "Cadastro recebido", "icon": "md-done-all"},
      {"title": "Análise do cadastro", "icon": "md-done-all"},
      {"title": "Vistoria", "icon": "md-done-all"},
      {"title": "Recebimento NF ou recibo de venda", "icon": "md-done-all"},
      {"title": "Dut em nome do consorciado c/ alien", "icon": "md-done-all"},
      {"title": "Taxas pagas", "icon": "ios-alert-outline"},
      {"title": "Liberação de crédito", "icon": "ios-close-circle-outline"},
      {"title": "Contemplação", "icon": "ios-close-circle-outline"}
    ]
    console.log(this.contemplations);
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

}
