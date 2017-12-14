import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderdetialPage } from '../orderdetial/orderdetial';
import { SelectdishPage } from '../selectdish/selectdish';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the RafahoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rafaho',
  templateUrl: 'rafaho.html',
})
export class RafahoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RafahoPage');
  }
  selectModal() {
    let modal = this.modalCtrl.create(SelectdishPage);
    modal.present();
  }

   order() {
    this.navCtrl.push(OrderdetialPage);
  }

   
}
