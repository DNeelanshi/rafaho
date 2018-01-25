import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController,LoadingController,AlertController,ToastController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ChefdetialsPage } from '../chefdetials/chefdetials';
import { MapmodalPage } from "../mapmodal/mapmodal";
import { ProductlistPage } from '../productlist/productlist';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";
import { NativeGeocoder,  NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import * as moment from 'moment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
pet: string;
searcharray:any=[];
searcharray1:any=[];
 array:any;
  array1:any;
 arry:any = true;
 srcimage:any;
 arr:any;
 lat:any;
 openllist:any;
 long:any;
 arr1:any = null;
  date: any;
 bit:any;
   srcImage: any;
 ar:any = [];
 data:any={};
 bukingdate:any;
 blurclass:any;
  chefsearch:any={};
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
       public appsetting: Appsetting,
   
    public http: Http,
     private nativeGeocoder: NativeGeocoder,
      public loadingCtrl: LoadingController,
       private alertCtrl:AlertController,
       public toastCtrl:ToastController) {
       var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader'
        });
        Loading.present().then(() => {
    this.pet = "kittens";
    this.data.datetime = this.date;
     Loading.dismiss();
    })
//    this.get();
//    alert('hello');
  }
 fltr_opn() {
    let fltr_opn = this.modalCtrl.create(FilterPage);
    fltr_opn.present();
  }
   detail(dat) {
      this.bukingdate= this.data.datetime.match(/:00Z/g);
       console.log( this.bukingdate)
       if(this.bukingdate == null){
 this.bukingdate=this.data.datetime+':00Z'
       console.log(this.bukingdate);
       }else{ 
       this.bukingdate=this.data.datetime
       }
          console.log(this.bukingdate);
       console.log(this.data.altdate);
      
       localStorage.setItem('Chefdetail',JSON.stringify(dat));
        localStorage.setItem('Bookingdatetime',JSON.stringify( this.bukingdate));
         localStorage.setItem('Altdatetime',JSON.stringify( this.data.altdate));
    this.navCtrl.push(ChefdetialsPage);
  }
   prdlist(prods) {
       console.log(prods)
         localStorage.setItem('dishprod',JSON.stringify(prods));
    this.navCtrl.push(ProductlistPage);
  }
  openlist(){
      this.openllist = 1;
      this.blurclass = 'blurbg'
      if(localStorage.getItem('Svedaddress')){
      this.searcharray = JSON.parse(localStorage.getItem('Svedaddress'));
      console.log(this.searcharray)
       if(localStorage.getItem('Favaddress')){
          this.searcharray1 = JSON.parse(localStorage.getItem('Favaddress'));  
            console.log(this.searcharray1)
       }else{
           this.searcharray1 = '';
       }
      }
     else{
          this.openmapmodal();
     }
      console.log(this.searcharray);
      
  }
  del(index){
      console.log(index);
      this.searcharray.pop(index);
         this.appsetting.svd=this.searcharray
       console.log(this.searcharray)
         localStorage.setItem('Svedaddress',JSON.stringify(this.appsetting.svd));
  }
   del1(index){
      console.log(index);
      this.searcharray1.pop(index);
      this.appsetting.saved=this.searcharray1
       console.log(this.searcharray1)
         localStorage.setItem('Favaddress',JSON.stringify( this.appsetting.saved));
     
  }
  getItem(item){
      console.log(item);
      this.chefsearch.search =  item;
              this.nativeGeocoder.forwardGeocode(item)
  .then((coordinates: NativeGeocoderForwardResult) =>{ console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
    this.lat=coordinates.latitude
    this.long=coordinates.longitude 
    console.log(this.lat+' '+this.long);
   } )
  .catch((error: any) => console.log(error));
      this.searcharray=[];
      this.openllist=0;
       this.blurclass = 'blurbg1'
       this.get();
  }
  cancellist(){
      this.openllist=0;
       this.blurclass = 'blurbg1'
  }
  openmapmodal() {
    let modal = this.modalCtrl.create(MapmodalPage);
    modal.onDidDismiss(data => { 
     this.chefsearch.search =data.address;
    console.log(this.data.address)
    console.log(data.lati)
    console.log(data.longi)
    this.lat = data.lati
    this.long = data.longi
    
    this.searcharray=[];
      this.openllist=0;
        this.blurclass = 'blurbg1'
       this.get();
//    this.AlertMsg4('Your Location:'+this.data.address+' '+' is  saved')
  });
    modal.present();
  }
  get(){
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
//     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
//        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat,this.long);
    console.log(userid);
  if((this.lat)&&(this.long)){
    var postdata = {
      app_user_id: userid,
      latitude:this.lat,
      longitude:this.long,
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
      
      console.log(data);
     Loading.dismiss();
     if(data.status == true){
      if(data.data.length>0){
          this.array = data.data;
        console.log(this.array); 
        this.bit = 1;
          this.arr1 = 1;
      }else{
      this.array= [];
      this.arr1 = null;
      this.bit = 1;
      console.log('hjuij'); }}
      else{
        this.array= [];
      this.arr1 = null;
      this.bit = 1;
      }
     
     

    },(err)=>{console.log(err)});
        })}else{
        this.bit = null;
        this.arr1 = 2;
        }
}
searchaa(val){
    console.log(val);
    if(val==''){
        this.get();
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
//     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
//     var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat,this.long);
    console.log(userid);
    console.log(val.length)
    
    if(val.length>=3){
    var postdata = {
      app_user_id: userid,
      latitude:this.lat,
      longitude:this.long,
      searchvalue: val,
    };
     var serialized = this.serializeObj(postdata);
    
     
    this.http.post(this.appsetting.myGlobalVar +'prefrence/searchbychefname', serialized, options).map(res => res.json()).subscribe(data => {
      console.log(data);
      if(data.status == true){
           this.arr1 = 1;
           this.bit = 1;
      if(data.data){
           this.array = data.data;
           this.bit = 1;
          this.arr1 = 1;
        console.log(this.array);
      }
      }else{
          console.log('here');
          this.array = null;
         this.bit = null
          this.arr1 = 1;
      }
    },(err)=>{
    console.log('error');
   // console.log(err);
    
    });
    }
        
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
//     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
//        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat,this.long);
    console.log(userid);
    console.log(vali.length);
    
    if(vali.length > 2){
    var postdata = {
      app_user_id: userid,
      latitude:this.lat,
      longitude:this.long,
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
     ngOnInit() {
    this.date = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');

   //console.log('fhfgh');
    
    
      this.data.datetime =this.date;
      console.log(new Date().toISOString())
//    this.GetLocation();

  }
}
