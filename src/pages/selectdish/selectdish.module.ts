import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectdishPage } from './selectdish';

@NgModule({
  declarations: [
    SelectdishPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectdishPage),
  ],
})
export class SelectdishPageModule {}
