import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the AssembliesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assemblies',
  templateUrl: 'assemblies.html'
})
export class AssembliesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssembliesPage');
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

}
