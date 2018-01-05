import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
/**
 * Generated class for the ProductviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productview',
  templateUrl: 'productview.html',
})
export class ProductviewPage {
 splarr:any='';
 ar:any=[];
 price:any;
 cart1:any;
 result:any;
 
 quantity:any;
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController,
       private loadCtrlr:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductviewPage');
     console.log(window.navigator.onLine);
     this.getdishdetail();
    if (window.navigator.onLine == true) {
    } else {
      let toast = this.toastCtrl.create({
        message: 'Network connection failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }}
   getdishdetail(){
         if (localStorage.getItem('producttss')) {
             this.splarr = JSON.parse(localStorage.getItem('producttss'));
//               this.array = JSON.parse(localStorage.getItem('Extrastaff'));
             console.log(this.splarr);
             console.log(this.splarr.product_ingredients)
             var str = this.splarr.product_ingredients;
             console.log(str);
                          //   
   var str_array = str.split(',');
////
for(var i = 0; i < str_array.length; i++) {
////   // Trim the excess whitespace.
   str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
////   // Add additional code here, such as:
   console.log(str_array[i]);
   this.ar.push(str_array[i]);
}
            console.log(this.ar); 
         }
        this.price = this.splarr.product_price;
        this.quantity = this.splarr.minimum_order;
        console.log(this.price,this.quantity);
  }
  crt(dish) {
      console.log(dish);
      var a= JSON.parse(localStorage.getItem('Cartlist'));
      console.log(a);
      if(a != null){
         // console.log('if');
           for(var i =0;i<this.appsetting.cart.length;i++){
          console.log(this.appsetting.cart[i]._id)
           console.log(this.splarr._id, this.appsetting.cart[i]._id)
           if(this.splarr._id == this.appsetting.cart[i]._id) {
               console.log('hey');
               this.navCtrl.push(CartPage);
               return false;
           }
           else{
               console.log('hey2');
               this.appsetting.cart.push(this.splarr);
                console.log(this.appsetting.cart);
               localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
               this.navCtrl.push(CartPage);
               return false;
           }
      } 
      }
      else{
          this.appsetting.cart.push(this.splarr);
                console.log(this.appsetting.cart);
          console.log('here');
             console.log(this.splarr._id)
            localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
             this.navCtrl.push(CartPage);
      }
     
       
    
  }
  add(qnt){
      this.quantity = parseFloat(qnt)+1;
      console.log(this.quantity);
      console.log(qnt);
  }
  remove(qntity){
      if(this.quantity == this.splarr.minimum_order){
          console.log(this.quantity)
      }
          else{
          this.quantity = parseFloat(qntity)-1;
      console.log(this.quantity);
      console.log(qntity);
      }
      
  }

}
