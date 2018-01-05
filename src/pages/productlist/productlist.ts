import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ProductviewPage } from '../productview/productview';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
/**
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {
 array:any=[];
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController,
       private loadCtrlr:LoadingController) {
//       alert('hello');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
    this.getprodetail();
     if (window.navigator.onLine == true) {
    } else {
      let toast = this.toastCtrl.create({
        message: 'Network connection failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }
  }
  getprodetail(){
       if (localStorage.getItem('dishprod')) {
                this.array = JSON.parse(localStorage.getItem('dishprod'));
                console.log(this.array);
//                alert('cdf');
       }
  }
  dishview(pro){
      console.log(pro);
      localStorage.setItem('producttss', JSON.stringify(pro));
      this.navCtrl.push(ProductviewPage)
  }
  cart() {
    this.navCtrl.push(CartPage);
  }

}
