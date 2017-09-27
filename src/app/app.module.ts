import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AssembliesPage } from '../pages/assemblies/assemblies';
import { BidsPage } from '../pages/bids/bids';
import { NotificationPage } from '../pages/notification/notification';
import { ContemplationPage } from '../pages/contemplation/contemplation';
import { BoletoPage } from '../pages/boleto/boleto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AssembliesPage,
    BidsPage,
    NotificationPage,
    ContemplationPage,
    BoletoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AssembliesPage,
    BidsPage,
    NotificationPage,
    ContemplationPage,
    BoletoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
