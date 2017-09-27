import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BoletoPage } from '../pages/boleto/boleto';
import { AssembliesPage } from '../pages/assemblies/assemblies';
import { BidsPage } from '../pages/bids/bids';
import { NotificationPage } from '../pages/notification/notification';
import { ContemplationPage } from '../pages/contemplation/contemplation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {

    this.initializeApp();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage, icon: "ios-home-outline" },
      { title: 'Emissão de boleto', component: BoletoPage, icon: "logo-usd" },
      { title: 'Calendário de Assembleias', component: AssembliesPage, icon: "ios-calendar-outline" },
      { title: 'Oferta de lance', component: BidsPage, icon: "ios-flag-outline" },
      { title: 'Avisos', component: NotificationPage, icon: "ios-notifications-outline" },
      { title: 'Fases de contemplação', component: ContemplationPage, icon: "ios-pie-outline" },
      { title: 'Sair', component: LoginPage, icon: "ios-log-out" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

