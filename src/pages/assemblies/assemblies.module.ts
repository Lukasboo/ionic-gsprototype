import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssembliesPage } from './assemblies';
import { Calendar } from '@ionic-native/calendar';


@NgModule({
  declarations: [
    AssembliesPage,
  ],
  imports: [
    IonicPageModule.forChild(AssembliesPage),
  ],
 
})
export class AssembliesPageModule {}
