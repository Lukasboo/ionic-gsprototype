import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  public notifications: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    this.notifications = [ 
      {"title": "O que é Fundo Comum ", "date": "03/06/2017", "note": "Fundo Comum é o valor que todo consorciado paga para formar a poupança que será destinada à aquisição do bem ou serviço."},
      {"title": "GROSCON e Pacto Global", "date": "03/06/2017", "note": "O Pacto Global é uma iniciativa desenvolvida pelo ex secretário geral da ONU com o onjetivo de mobilizar a comnidade empresarial internacional para a adoção"},
      {"title": "4 Eixos de Responsabilidade Social", "date": "03/06/2017", "note": "Qualidade de vida na empresa saúde e bem-estar, vínculo com a comunidade e cuidados com o meio ambiente."},
      {"title": "Nossos Produtos", "date": "03/06/2017", "note": "Imóvel, auto, caminhões, plano maquinário e equipamentos..."},
    ]
  }

}
