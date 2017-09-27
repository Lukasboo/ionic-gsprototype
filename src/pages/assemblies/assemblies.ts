import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
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
  templateUrl: 'assemblies.html',
  providers: [
    Calendar
  ]
})
export class AssembliesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private calendar: Calendar
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssembliesPage');
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

}
