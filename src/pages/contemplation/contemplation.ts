import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

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
      {"title": "Cadastro recebido", "icon": "md-done-all", "iconcolor": "secondary"},
      {"title": "Análise do cadastro", "icon": "md-done-all", "iconcolor": "secondary"},
      {"title": "Vistoria", "icon": "md-done-all", "iconcolor": "secondary"},
      {"title": "Recebimento NF ou recibo de venda", "icon": "md-done-all", "iconcolor": "secondary"},
      {"title": "Dut em nome do consorciado c/ alien", "icon": "md-done-all", "iconcolor": "secondary"},
      {"title": "Taxas pagas", "icon": "ios-alert-outline", "iconcolor": "warning"},
      {"title": "Liberação de crédito", "icon": "ios-close-circle-outline", "iconcolor": "danger"},
      {"title": "Contemplação", "icon": "ios-close-circle-outline", "iconcolor": "danger"}
    ]
    console.log(this.contemplations);
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

  

}
