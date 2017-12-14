import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SouthfoodPage } from './southfood';

@NgModule({
  declarations: [
    SouthfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(SouthfoodPage),
  ],
})
export class SouthfoodPageModule {}
