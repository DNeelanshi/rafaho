import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController,ToastController,LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the OrderdetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderdetial',
  templateUrl: 'orderdetial.html',
})
export class OrderdetialPage {
  public orderdetails:any = [];
  public orderproddetails:any = [];
  userdetail:any=[];
  str;str1;str2;
  str3;str4;str5;
  subtotal:any=0;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private alertCtrl:AlertController,
      private loadCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
      
      this.get();
  }
  get(){
      this.orderdetails = JSON.parse(localStorage.getItem('Ordersdetails'));
      this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
      console.log( this.orderdetails );
      console.log( this.userdetail);
      this.str = this.userdetail.address.split(",", this.userdetail.address.length);
    this.str1=this.str[0]+','+this.str[1]
    var len = this.str1.length+1;
this.str2 = this.userdetail.address.slice(len, this.userdetail.address.length);
 console.log(this.str);
 console.log(this.str1)
 console.log(this.str2)
      
      this.orderproddetails = this.orderdetails.products;
      for(var x=0; x<this.orderproddetails.length; x++){
          this.subtotal = this.subtotal +(this.orderproddetails[x].quantity*this.orderproddetails[x].productprice);
      }
      console.log(this.subtotal);
      console.log()
      this.str3 =  this.orderdetails.booking_datetime.split("T",  this.orderdetails.booking_datetime.length);
    this.str4=this.str3[1]
//    
      this.str5 =  this.str4.split(":00.");
   
     console.log(this.str3[0]);
     console.log(this.str5[0]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetialPage');
  }

}
