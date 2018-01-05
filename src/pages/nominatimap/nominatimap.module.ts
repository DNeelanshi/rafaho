import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NominatimapPage } from './nominatimap';

@NgModule({
  declarations: [
    NominatimapPage,
  ],
  imports: [
    IonicPageModule.forChild(NominatimapPage),
  ],
})
export class NominatimapPageModule {}
