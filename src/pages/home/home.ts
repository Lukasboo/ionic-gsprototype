import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssembliesPage } from '../assemblies/assemblies';
import { BidsPage } from '../bids/bids';
import { NotificationPage } from '../notification/notification';
import { ContemplationPage } from "../contemplation/contemplation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAssembliesPage(){
    this.navCtrl.setRoot(AssembliesPage);
  }

  goToBidsPage(){
    this.navCtrl.setRoot(BidsPage);
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

  goToContemplationPage(){
    this.navCtrl.setRoot(ContemplationPage);
  }

}
