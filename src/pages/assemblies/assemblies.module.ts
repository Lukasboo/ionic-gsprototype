import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssembliesPage } from './assemblies';

@NgModule({
  declarations: [
    AssembliesPage,
  ],
  imports: [
    IonicPageModule.forChild(AssembliesPage),
  ],
})
export class AssembliesPageModule {}
