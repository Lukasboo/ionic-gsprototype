import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssembliesPage } from '../assemblies/assemblies';

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

}
