import { NgModule } from '@angular/core';
import { IonicPageModule,NavController } from 'ionic-angular';
import { FeedbackPage } from './feedback';

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackPage),
  ],
})
export class FeedbackPageModule {
    constructor(
    public navCtrl: NavController,

  ) {
    
  }
}
