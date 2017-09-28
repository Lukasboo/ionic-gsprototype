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

  actualDate: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssembliesPage');
    console.log(this.formatDate(new Date()));  
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

  getActualDate(){
    var now = new Date();
    console.log(now);
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    console.log(document.getElementsByClassName('ion-col-assemblie'));
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    console.log(monthIndex + 1);
    this.actualDate = monthIndex;
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
  

}
