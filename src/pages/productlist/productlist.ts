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
 prods:any=[];
 no_of_products:any;
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController,
      public loadingCtrl: LoadingController) {
//       alert('hello');
      if (JSON.parse(localStorage.getItem('proctnumberincart'))){
         this.no_of_products =  JSON.parse(localStorage.getItem('proctnumberincart'));
      }
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
  cart(pro) {
      console.log(pro);
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
 var a = JSON.parse(localStorage.getItem('UserDetail'));
      console.log(a);
      var b = JSON.parse(localStorage.getItem('Chefdetail'));
      console.log(b); 
      var c = JSON.parse(localStorage.getItem('Bookingdatetime'));
      console.log(c); 
//      for(var z=0; z<this.array.length; z++)
//      {   if(proid == this.array[z]._id){
//          this.prods = this.array[z];
//          }
//      }
//      console.log(this.prods);
       var postdata = {
        user_id:a._id,
    user_address :a.address,
    long:a.longitude,
    lat:a.latitude,
    chef_id:b._id,
    booking_datetime:c,
    product_id:pro._id,
    product_name:pro.product_name,
   price_per_plate:pro.product_price,
    quantity:pro.minimum_order,
    minimum_order:pro.minimum_order,
     product_image0 :pro.product_image0,
     product_ingredients:pro.product_ingredients,
     discount:pro.discount
     
       }
          console.log(postdata)
           var Serialized = this.serializeObj(postdata);
     var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          dismissOnPageChange: true
        });
           Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar + 'add_to_cart', Serialized, options).map(res => res.json()).subscribe(response => {
       Loading.dismiss();
       console.log(response);

      if(response.status == true){
      this.navCtrl.push(CartPage);
      console.log( this.appsetting.cartid );
      
      }else{
        this.navCtrl.push(CartPage);
      }
  },(err)=>{
     this.ToastMsg('Something went wrong');
      Loading.dismissAll();
      console.log(err);
  });    })
//    this.navCtrl.push(CartPage);
  }
      serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}
}
