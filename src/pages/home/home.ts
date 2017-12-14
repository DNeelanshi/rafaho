import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ChefdetialsPage } from '../chefdetials/chefdetials';
import { ProductlistPage } from '../productlist/productlist';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
pet: string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.pet = "kittens";
  }
 fltr_opn() {
    let fltr_opn = this.modalCtrl.create(FilterPage);
    fltr_opn.present();
  }
   detail() {
    this.navCtrl.push(ChefdetialsPage);
  }
   prdlist() {
    this.navCtrl.push(ProductlistPage);
  }
}
