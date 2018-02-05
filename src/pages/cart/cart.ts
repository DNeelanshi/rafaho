import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';s
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { LocationPage } from '../location/location';
import { TabsPage } from '../tabs/tabs';
import * as moment from 'moment';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
 chef:any=[];
 user:any=[];
 getcrt:any=[];
 str:any;
 total1:any=0;
 str1:any;
 str2:any;
 bookdt:any;
 datetosend:any;
 date:any;
 bookalt:any;
 test:any;
 data:any={};
subtotal:any=[];
 productsamount:any = [];
  constructor(public navCtrl: NavController, 
  public toastCtrl: ToastController, 
  public loadingCtrl: LoadingController,
       public appsetting: Appsetting,
        public http: Http,
       public navParams: NavParams) {
      this.get();
      this.getcart();
//      this.total();
      
  }

get(){
    this.chef = JSON.parse(localStorage.getItem('Chefdetail'))
    console.log(this.chef);
     this.user = JSON.parse(localStorage.getItem('UserDetail'))
    console.log(this.user);
    this.bookdt =  JSON.parse(localStorage.getItem('Bookingdatetime'))
    this.datetosend = this.bookdt
    console.log( this.bookdt);

    this.bookdt = this.bookdt.split(":00Z",1);
     
     console.log(this.bookdt);
     this.data.bookdt = this.bookdt[0];
      console.log(this.data.bookdt);
  
     this.bookalt= localStorage.getItem('Altdatetime')
     console.log(this.bookalt);
    this.str = this.user.address.split(",", this.user.address.length);
    this.str1=this.str[0]+','+this.str[1]
    var len = this.str1.length+1;
this.str2 = this.user.address.slice(len, this.user.address.length);
 console.log(this.str);
 console.log(this.str1)
 console.log(this.str2)

}

getcart(){
let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers}) 
 var a= JSON.parse(localStorage.getItem('UserDetail'));
      console.log(a);
       var postdata = {
        user_id:a._id
       }
    var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          dismissOnPageChange: true
        });
        Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar + 'get_cart_data', Serialized, options).map(res => res.json()).subscribe(response => {
      console.log(response)
      Loading.dismiss();
      console.log(response.data[0].products.length);
        localStorage.setItem('proctnumberincart',JSON.stringify(response.data[0].products.length));
      console.log(response.data[0]._id);
      this.appsetting.cartid = response.data[0]._id;
      console.log(response.data[0].products);
      this.getcrt = response.data[0].products;
      console.log(this.getcrt)
      this.appsetting.cart = this.getcrt;
    
      localStorage.setItem('Cartlist',JSON.stringify( this.appsetting.cart));
        this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
        console.log(this.subtotal);
         this.total();

  },(err)=>{
      this.ToastMsg('Something went wrong')
      Loading.dismissAll();
      console.log(err);
  }); })
     
   }
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  add(qnt,id){
      var flag=0;
      console.log(qnt,id);
      for(var i=0; i< this.getcrt.length;i++){
   if(id == this.getcrt[i]._id){
       var index = i;
       flag=1;
   }
   }
   console.log(flag);
  console.log(index)
   if(flag==1){
       qnt = parseFloat(qnt)+1;
          this.getcrt[index].quantity = qnt;
          this.appsetting.cart[index].quantity = qnt;
         
          console.log( this.appsetting.cart[index].quantity)
    localStorage.setItem('Cartlist',JSON.stringify( this.appsetting.cart));
    this.total();
//    this.total(id,index);
       return false;
   }
  
  }
  remove(qntity,id){
      var flagg = 0;
      console.log(qntity,id)
           for(var i=0; i< this.getcrt.length;i++){
   if(id == this.getcrt[i]._id){
       var index = i;
       flagg =1;
   }
   }
   if(flagg == 1){
     if (qntity == this.getcrt[index].minimum_order){
          console.log(this.getcrt.quantity)
      }  
      else{
         qntity =  parseFloat(qntity)-1;
             
                   this.getcrt[index].quantity = qntity;
     console.log(this.getcrt);
     this.appsetting.cart[index].quantity = qntity;
         
          console.log(this.appsetting.cart[index].quantity)
    localStorage.setItem('Cartlist',JSON.stringify(this.appsetting.cart));
    this.total();

   
      }
       return false;
   }
      
  }
  
  delproduct(idd){
      console.log(idd);
      console.log( this.appsetting.cartid );
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
 var a= JSON.parse(localStorage.getItem('UserDetail'));
      console.log(a);
  var postdata = {
  user_id: a._id,
        cart_id: this.appsetting.cartid ,
           _id:idd
       }
       console.log(postdata);
 var Serialized = this.serializeObj(postdata);
  this.http.post(this.appsetting.myGlobalVar + 'delete_add_to_cart_product', Serialized, options).map(res => res.json()).subscribe(response => {
      console.log(response);
      if(response.status == true){
          this.getcart();
           this.ToastMsg('Product deleted successfuly')
      }
  }); 
  }
  
  
       ToastMsg(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  } 
  total(){
       this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
      console.log(this.subtotal);
      this.total1 = 0; 
      for(var x = 0;x<this.subtotal.length;x++){
          
          this.total1 = this.total1 + (this.subtotal[x].quantity * this.subtotal[x].price_per_plate)
      }
  }
//total(id,index){
//    
//    console.log(id,index);
//    this.productsamount =  this.getcrt[index].quantity * this.getcrt[index].price_per_plate
//    console.log( this.productsamount);
//   this.subtotal.push(this.productsamount);
//   console.log(this.subtotal);
//   
//}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
   pyment() {
       var proid:any=[];
        var proname:any=[];
         var proquant:any=[];
         console.log(this.data.bookdt.length);
       if(this.data.bookdt.length < 17){
           console.log('this.datetosend')
       }else{
           this.datetosend=this.data.bookdt
            console.log('this.datetosend')
       }
      
        
      console.log(this.datetosend);
       console.log(this.getcrt);
       console.log(this.chef);
       console.log(this.user);
//       console.log(this.bookdt);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers}) 
for(var j =0;j<this.getcrt.length;j++){
    proid.push(this.getcrt[j].product_id)
    proname.push(this.getcrt[j].product_name)
    proquant.push(this.getcrt[j].quantity)
}
console.log(proid,proname,proquant);
        proid = proid.join(':');
        proname = proname.join(':');
        proquant = proquant.join(':');
        console.log(proid,proname,proquant);
 var postdata = {
  chef_id:this.chef._id,
  user_id:this.user._id,
customer_address:this.user.address,
booking_datetime:this.datetosend,
total_order_amount:this.total1,
products_id:proid,
products_quantity: proquant,
products_name:proname
       }
       console.log(postdata);
 var Serialized = this.serializeObj(postdata);
  var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          dismissOnPageChange: true
        });
        Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar + 'order/addorder', Serialized, options).map(res => res.json()).subscribe(response => {
      console.log(response);
       this.ToastMsg('Order placed successfuly')
        this.navCtrl.push(TabsPage);
  },(err)=>{
      this.ToastMsg('Something went wrong');
      Loading.dismissAll();
  });})
  
   
   
  }
   loct() {
    this.navCtrl.push(LocationPage);
  }



     ngOnInit() {
    this.date = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
//
//   //console.log('fhfgh');
//    
//    
//      this.data.datetime =this.date;
//      console.log(new Date().toISOString())
//    this.GetLocation();

  }
}
