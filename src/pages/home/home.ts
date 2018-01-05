import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController,LoadingController,AlertController,ToastController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ChefdetialsPage } from '../chefdetials/chefdetials';
import { ProductlistPage } from '../productlist/productlist';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
pet: string;
 array:any;
  array1:any;
 arry:any = true;
 srcimage:any;
 arr:any;
 arr1:any = null;
 bit:any;
   srcImage: any;
 ar:any = [];
 data:any={};
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
       public appsetting: Appsetting,
   
    public http: Http,
      public loadingCtrl: LoadingController,
       private alertCtrl:AlertController,
       public toastCtrl:ToastController) {
    this.pet = "kittens";
//    this.get();
//    alert('hello');
  }
 fltr_opn() {
    let fltr_opn = this.modalCtrl.create(FilterPage);
    fltr_opn.present();
  }
   detail(dat) {
       localStorage.setItem('Chefdetail',JSON.stringify(dat));
    this.navCtrl.push(ChefdetialsPage);
  }
   prdlist(prods) {
       console.log(prods)
         localStorage.setItem('dishprod',JSON.stringify(prods));
    this.navCtrl.push(ProductlistPage);
  }
  get(){
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(latt,longg);
    console.log(userid);

    var postdata = {
      app_user_id: userid,
      latitude:latt,
      longitude:longg,
    };
     var serialized = this.serializeObj(postdata);
     console.log(postdata);
//     alert(postdata);
var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader'
        });
        Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar +'getchefsbyprefrence', serialized, options).map(res => res.json()).subscribe(data => {
      Loading.dismiss();
      console.log(data);
     
     
      if(data.data.length>0){
          this.array = data.data;
        console.log(this.array); 
        this.bit = 1;
          this.arr1 = 1;
      }else{
      this.arr1 = null;
      this.bit = 1;
      console.log('hjuij'); }
     
     

    },(err)=>{console.log(err)});
        })
}
search(val){
    console.log(val);
    if(val==''){
        this.get();
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(latt,longg);
    console.log(userid);
    console.log(val.length)
    
    if(val.length>=3){
    var postdata = {
      app_user_id: userid,
      latitude:latt,
      longitude:longg,
      searchvalue: val,
    };
     var serialized = this.serializeObj(postdata);
    
     
    this.http.post(this.appsetting.myGlobalVar +'prefrence/searchbychefname', serialized, options).map(res => res.json()).subscribe(data => {
     
      console.log(data);
    
    
      if(data.status == true){
           this.arr1 = 1;
      if(data.data){
        
           this.array = data.data;
           this.bit = 1;
          this.arr1 = 1;
        console.log(this.array);

      }}
      else{
          console.log('here');
          this.array = null;
         this.bit = null
          this.arr1 = 1;
      }
     
    

    },(err)=>{console.log(err)});}
        
} 
searchdish(vali){
    console.log(vali);
//    if(!vali){
//        console.log('here');
//       this.arry = null;
//       this.arr = null;
//       return false;
//    }else{
    console.log('thre');
    console.log(vali);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(latt,longg);
    console.log(userid);
    console.log(vali.length);
    
    if(vali.length > 2){
    var postdata = {
      app_user_id: userid,
      latitude:latt,
      longitude:longg,
      searchvalue: vali,
    };
     var serialized = this.serializeObj(postdata);
    
     
    this.http.post(this.appsetting.myGlobalVar +'prefrence/searchbydishname', serialized, options).map(res => res.json()).subscribe(data => {
     
      console.log(data);
      if(data.status == true){
          this.arry = false;
      if(data.data){
           this.arr = data.data;
           for(var i=0; i<data.data.length ;i++){
               for(var j=0; j<this.arr[i].products.length ; j++){
                   console.log(this.arr[i].products[j].product_name);
                  var h = this.arr[i].products[j].product_name.toLowerCase();
                 console.log(h);
                           var a = this.arr[i].products[j].product_name.indexOf(vali);
                           console.log(a);
                           if(a>-1){
                              this.arr[i].products[j].bit = a;
                           }else{
                                var val = h.indexOf(vali);
                              console.log(val);
                              this.arr[i].products[j].bit = val;
                           }
                             
                                }
           }
        console.log(this.arr);

      }
      
      }
      else{
          this.arry = null;
          this.arr = null;
      }
    },(err)=>{console.log(err)});
    }else{
        this.arr = null;
        this.arry = true;
        console.log(this.arr);
        console.log('nothing');
      
    }
    //}
        
}
 AlertMsg(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.get();
      
    console.log(window.navigator.onLine);
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
  
}
