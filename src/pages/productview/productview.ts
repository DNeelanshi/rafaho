import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { Service } from '../../providers/service';
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
 splarr:any=[];
 ar:any=[];
 price:any;
 extraarray:any=[];
 resultant:any=[];
 disharray:any =[];
 cart1:any;
 cartid:any;
 result:any;
 
 quantity:any;
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController,
       private myService:Service,
       public loadingCtrl: LoadingController) {
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
  crt11(dish1){
      console.log(this.quantity);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
 var a= JSON.parse(localStorage.getItem('UserDetail'));
      console.log(a);
      var b= JSON.parse(localStorage.getItem('Chefdetail'));
      console.log(b); 
      var c= JSON.parse(localStorage.getItem('Bookingdatetime'));
      console.log(c); 
      
     var postdata = {
        user_id:a._id,
    user_address :a.address,
    long:a.longitude,
    lat:a.latitude,
    chef_id:b._id,
    booking_datetime:c,
    product_id:this.splarr._id,
    product_name:this.splarr.product_name,
   price_per_plate:this.splarr.product_price,
    quantity:this.quantity,
    minimum_order:this.splarr.minimum_order,
     product_image0 :this.splarr.product_image0,
     product_ingredients:this.splarr.product_ingredients,
     discount:this.splarr.discount
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
  }
 
   
           
//                 crt(dish) {
//     
//      
//      
//      console.log(this.quantity);
//      var nik = 0;
//  console.log(this.splarr)
//        var col = {
//            Quantity: this.quantity
//      }
//   
//      this.disharray = col;
//      console.log(this.disharray);
//      this.resultant = Object.assign({}, this.splarr, this.disharray); 
//      console.log(this.resultant)
//      console.log(dish);
//      var a= JSON.parse(localStorage.getItem('Cartlist'));
//      console.log(a);
//      if(a != null){
//         // console.log('if');
//           for(var i =0;i<this.appsetting.cart.length;i++){
//          console.log(this.appsetting.cart[i]._id)
//           console.log(this.resultant._id, this.appsetting.cart[i]._id)
//           if(this.resultant._id == this.appsetting.cart[i]._id) {
////               console.log('hey');
//               nik = 1;
//               var index = i;
//             
////               this.navCtrl.push(CartPage);
////               return false;
//           }
////           else{
////               console.log('hey2');
////               this.appsetting.cart.push(this.splarr);
////                console.log(this.appsetting.cart);
////               localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
////               this.navCtrl.push(CartPage);
////               return false;
////           }
//      } 
//        console.log(index);
//        
//      if(nik == 1){
////          this.updateUser(this.appsetting.cart)
//          this.appsetting.cart[index] = this.resultant;
//          console.log( this.appsetting.cart)
//           localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
//          this.navCtrl.push(CartPage);
//               return false;
//      }
//      else{
//               this.appsetting.cart.push(this.resultant);
//                console.log(this.appsetting.cart);
//               localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
//               this.navCtrl.push(CartPage);
//               return false;
//      }
//      }
//      else{
//          this.appsetting.cart.push(this.resultant);
//                console.log(this.appsetting.cart);
//          console.log('here');
//             console.log(this.resultant._id)
//            localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
//             this.navCtrl.push(CartPage);
//      }
//     
//       
//    
//  }
  
//  updateUser(user){
//      
//    this.myService.getUpdate(user._id)
//    .subscribe(newitem => {
//      this.updateArray(this.resultant);
//    });
//}
//  updateArray(newitem){
//    this.appsetting.cart.items[this.resultant._id] = this.resultant
//  }
  ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
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
