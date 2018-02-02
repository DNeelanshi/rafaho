import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderdetialPage } from '../orderdetial/orderdetial';
import { SelectdishPage } from '../selectdish/selectdish';
import { ModalController } from 'ionic-angular';
import {AlertController,ToastController,LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

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
     public pet;
     show:any=0;
     show1:any=0;
     show2:any=0;
     show3:any=0;
     user:any;
     activeorder:any;
     pendingorder:any;
    completedorders:any;
    canceledorders:any;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private alertCtrl:AlertController,
      private loadCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http, public modalCtrl: ModalController) {
          this.activeorders();
           this.pendingorders();
           this.historycompleted();
           this.historycanceled();
           this.pet = "kittens";
      }
 /******************************************************************ACTIVE ORDERS*****************************************************************/
     activeorders(){
         let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     this.user = JSON.parse(localStorage.getItem('UserDetail'));
           console.log(this.user);
     var postdata = {
    order_status:2,
    app_user_id:this.user._id
    }
      var serialized = this.serializeObj(postdata);
           var Loading = this.loadCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader',
       dismissOnPageChange: true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(res => res.json()).subscribe(data1 => {
       console.log(data1);
       Loading.dismiss();
       if(data1.status == true){
           this.show=0;
           this.activeorder = data1.data;
           this.getchefinfo();
       }else{
           this.show=1;
       }
        
    })
    })
     }
     getchefinfo(){
         var temp = this;
         let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
                this.activeorder.forEach(function(value,key){
                        var chef = value.chef_id
                console.log(chef);
                var postdata1 = {
                      id:chef
                         }
              var serialized = temp.serializeObj(postdata1);
              temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res => {
                console.log(res);
                console.log(value);
                value.chefname = res.data.firstname;
                  value.userimage = res.data.user_image;
                value.products.forEach(function(prodvalue,prodkey){
                    res.data.products.forEach(function(prod1value,prod1key){
                        if(prodvalue.product_id == prod1value._id){
                            prodvalue.image = prod1value.product_image0;
                            prodvalue.minorder = prod1value.minimum_order;
                            prodvalue.productprice = prod1value.product_price;
                            
                        }
                    })
                })

              
            }) 
    })
     console.log(this.activeorder);
     }
     
/******************************************************************PENDING ORDERS*************************************************************/     
          pendingorders(){
         let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     this.user = JSON.parse(localStorage.getItem('UserDetail'));
           console.log(this.user);
     var postdata = {
    order_status:1,
    app_user_id:this.user._id
    }
      var serialized = this.serializeObj(postdata);
           var Loading = this.loadCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader',
       dismissOnPageChange: true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(res => res.json()).subscribe(data2 => {
       console.log(data2);
       Loading.dismiss();
       if(data2.status == true){
           this.show1=0;
           this.pendingorder = data2.data;
           
               this.pendingorder.forEach(function(value,key){
                value.user_data.forEach(function(value1,key1){
                   value.products.forEach(function(value2,key2){
                       value1.products.forEach(function(value3,key3){
                          value2.image = value3.product_image0;
                           value2.minimumorder = value3.minimum_order;
                            value2.productprice = value3.product_price;
                   })
                   })

               })
           })
       }else{
           this.show1=1;
       }
        console.log( this.pendingorder); 
    })
    })
     }
     /******************************************************************COMPLETED HISTORY ORDERS*************************************************************/     
        historycompleted(){
         let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     this.user = JSON.parse(localStorage.getItem('UserDetail'));
           console.log(this.user);
     var postdata = {
    order_status:0,
    app_user_id:this.user._id
    }
      var serialized = this.serializeObj(postdata);
           var Loading = this.loadCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader',
       dismissOnPageChange: true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(res => res.json()).subscribe(data3 => {
       console.log(data3);
       Loading.dismiss();
       if(data3.status == true){
           this.show2=0;
           this.completedorders = data3.data;
           
               this.completedorders.forEach(function(value,key){
                value.user_data.forEach(function(value1,key1){
                   value.products.forEach(function(value2,key2){
                       value1.products.forEach(function(value3,key3){
                          value2.image = value3.product_image0;
                           value2.minimumorder = value3.minimum_order;
                            value2.productprice = value3.product_price;
                   })
                   })

               })
           })
       }else{
           this.show2=1;
       }
        console.log( this.completedorders); 
    })
    })
     }
     
     /******************************************************************COMPLETED HISTORY ORDERS*************************************************************/     
        historycanceled(){
         let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     this.user = JSON.parse(localStorage.getItem('UserDetail'));
           console.log(this.user);
     var postdata = {
    order_status:5,
    app_user_id:this.user._id
    }
      var serialized = this.serializeObj(postdata);
           var Loading = this.loadCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader',
       dismissOnPageChange: true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(res => res.json()).subscribe(data4 => {
       console.log(data4);
       Loading.dismiss();
       if(data4.status == true){
           this.show3=0;
           this.canceledorders = data4.data;
           
               this.canceledorders.forEach(function(value,key){
                value.user_data.forEach(function(value1,key1){
                   value.products.forEach(function(value2,key2){
                       value1.products.forEach(function(value3,key3){
                          value2.image = value3.product_image0;
                           value2.minimumorder = value3.minimum_order;
                            value2.productprice = value3.product_price;
                   })
                   })

               })
           })
       }else{
           this.show3=1;
       }
        console.log( this.canceledorders); 
    })
    })
     }
     
         serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RafahoPage');
  }
  selectModal() {
    let modal = this.modalCtrl.create(SelectdishPage);
    modal.present();
  }

   order(orderdetails) {
        localStorage.setItem('Ordersdetails',JSON.stringify(orderdetails));
    this.navCtrl.push(OrderdetialPage);
  }

   
}
