import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ToastController,AlertController,LoadingController} from 'ionic-angular';
import { MapmodalPage } from "../mapmodal/mapmodal";
import { TabsPage } from "../tabs/tabs";
import { SigninPage } from "../signin/signin";
import { NominatimapPage } from "../nominatimap/nominatimap";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import * as moment from 'moment';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
 public lat: number;
  public long: number;
  public data: any = {};
  l;
  lg;
  str:any;
  str1:any;
  str2:any;
  str3:any;
  current:any;
  addrestype:string;
   date: any;
  addr:any;
  number: boolean=false;
  constructor(public navCtrl: NavController,
       public navParams: NavParams,  
        public geolocation: Geolocation,
    private toastCtrl:ToastController,
    public nativeGeocoder: NativeGeocoder,
       public modalCtrl: ModalController,
       public appsetting: Appsetting,
   
    public http: Http,
      public loadingCtrl: LoadingController,
       private alertCtrl:AlertController) {
//        this.GetLocation();
       this.Gett();
  }
 openmapmodal() {
       
    let modal = this.modalCtrl.create(MapmodalPage);
//    Loading.dismiss();
    modal.onDidDismiss(res => {
//      alert(res.address);
      this.data.otheraddress = res.address;
      console.log(this.data.otheraddress)
      console.log(res.lati)
      console.log(res.longi)
      this.lat = res.lati
      this.long = res.longi
      this.addrestype = 'other'
     this.data.aaddress  = '';
    });
    modal.present();


}
  Gett(){
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
    console.log(userid);

    var postdata = {
      id: userid
    };

    var serialized = this.serializeObj(postdata);
    console.log(postdata);
     var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          content:'Connecting...'
        
        });
        Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data => {
      Loading.dismiss();
      console.log(data);
      console.log(data.data.latitude+','+data.data.longitude);
      this.geo(parseFloat(data.data.latitude), parseFloat(data.data.longitude));
//      this.profile = data.data;
//      this.srcImage = this.profile.user_image;
////      this.city = this.data.city;
//      console.log(this.profile.firstname);

    })
        })
  } 
  geo(lat,long){
      this.lat=lat;
      this.long=long;
       this.addrestype='saved';
//      alert(this.lat+','+this.long+'SAVED');
      console.log(this.lat,this.long);
//      alert('working');
        this.nativeGeocoder.reverseGeocode(lat, long)
      .then((result: NativeGeocoderReverseResult) => {
        // alert(JSON.stringify(result));
           if (result.subThoroughfare){
        this.data.aaddress=result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            } else if (result.thoroughfare){
                 this.data.aaddress=result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
            else {
                 this.data.aaddress= result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
          
        console.log(this.data.aaddress);
//        alert(this.city);
        //  alert(this.data.result +'Neelanshi');
      }).catch((error: any) => console.log(error));
  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  submitinfo(preference) {
    console.log(preference.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });

    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
    console.log(userid);
    console.log(preference.value.datetime);
    console.log(preference.value.altdate);
   console.log(this.addrestype);
//    this.str=preference.value.datetime.slice(0,10);
//    this.str1=preference.value.datetime.slice(11,16);
//    if(preference.value.altdate){
//    this.str2=preference.value.altdate.slice(0,10);
//    this.str3=preference.value.altdate.slice(11,16);}else{
//    console.log(this.str+','+this.str1+','+this.str2+','+this.str3);
    if(preference.value.altdate == undefined){
        
    }
    if((this.lat)&&(this.long)){
        
    
      this.data = {
        
      app_user_id: userid,
     todays_datetime:preference.value.datetime,
//     todays_time:this.str1,
    alternative_datetime:preference.value.altdate,
//     alternative_time:this.str3,
       lat:this.lat,
      long:this.long,
      address_type: this.addrestype,
      }
      console.log(this.data);
      
//      alert(this.data.lat+','+this.data.long);
      var serialized = this.serializeObj(this.data);
       var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader'
        });
        Loading.present().then(() => {
      this.http.post(this.appsetting.myGlobalVar + 'addprefrence', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          if (data.status == true) {
            Loading.dismiss();
            let toast = this.toastCtrl.create({
              message: "Preference is saved",
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            this.navCtrl.push(TabsPage);
              localStorage.setItem('Userpref',JSON.stringify(this.data));
          }
        })
        })}else{
            this.AlertMsg1('Need to select a location')
        }
    
  }
  backtosignin(){
      this.navCtrl.push(SigninPage);
  }
  GetLocation(){
       var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader'
        });
        Loading.present().then(() => {
    this.geolocation.getCurrentPosition().then((resp) => {
      
      console.log('latitude:'+resp.coords.latitude+'longitude:'+resp.coords.longitude);
       this.lat = resp.coords.latitude;
       this.long = resp.coords.longitude;
       this.addrestype = 'current';
             Loading.dismiss();
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
      .then((result: NativeGeocoderReverseResult) => {
        // alert(JSON.stringify(result));
          if (result.subThoroughfare){
        this.current=result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            } else if (result.thoroughfare){
                 this.current=result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
            else {
                 this.current= result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
          this.AlertMsg('Your Location is:' + this.current);
         
        //  alert(this.data.result +'Neelanshi');
      }).catch((error: any) => console.log(error));
     }).catch((error) => {
       console.log('Error getting location', error);
       this.ToastMsg1('Please enable your location');
     }); })
  }
  
  
     lupap(){
//      localStorage.removeItem('NominatimDetail');
      this.addr = this.data.otheraddress;
      console.log(this.addr);
      if(this.addr==''){
            this.AlertMsg3('Please fill the address');
//          this.openmapmodal();
      }
       if(this.addr==undefined){
            this.AlertMsg3('Please fill the address');
//          this.openmapmodal();
      } else{
      var matches = this.addr.match(/\d+/g);
if (matches != null) {
//    console.log('number');
    this.number = true;
    
}else{
    this.number = false;
}

if(this.number ==true){
   console.log('yes it is having number');
//   this.openmapmodal();
    this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
   
}else{
   console.log('false');
let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
if(this.addr){
    this.addr = this.addr.replace(/" "/g, '%20');
    console.log(this.addr)
var adr = this.addr
console.log(adr);
var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader'
        });
         Loading.present().then(() => {
this.http.post('http://nominatim.openstreetmap.org/search/'+adr+'?format=json&addressdetails=1&limit=1&polygon_svg=1',options).map(res => res.json()).subscribe(response => {
   Loading.dismiss();
     console.log(response[0]);
    
    if(response[0] != undefined){
    if(response[0].place_id != ''){
        
        console.log('working');
         localStorage.setItem('NominatimDetail',JSON.stringify(response[0]));
//        this.navCtrl.push(NominatimapPage);
         let modal = this.modalCtrl.create(NominatimapPage);
    modal.onDidDismiss(data => { 
   this.data.aaddress  = '';
  });
   modal.present();
   
  if(response[0].address.road){
        this.data.otheraddress=response[0].place_id+','+response[0].address.road+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
        else if(response[0].address.city){
        this.data.otheraddress=response[0].place_id+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
         else if(response[0].address.state){
            this.data.otheraddress=response[0].place_id+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
        else if(response[0].address.state_district){
            this.data.otheraddress=response[0].place_id+','+response[0].address.state+','+response[0].address.state_district+','+response[0].address.country+','+response[0].address.country_code
        }
       else if(response[0].address.country){
            this.data.otheraddress=response[0].place_id+','+response[0].address.country+','+response[0].address.country_code
        }
     this.lat = response[0].lat
    this.long = response[0].lon
      console.log(this.lat,this.long)  
      this.addrestype ='other';
       
    }}
    else{
        console.log('neelanshi');
         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
       
    }
//    else
//        {
//       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
//        this.openmapmodal();
//    }
});
});


}
}

      }

  }
  AlertMsg3(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
//            this.openmapmodal();
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
  AlertMsg1(msg){
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
  
  
   AlertMsg2(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
            this.openmapmodal();
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
   ngOnInit() {
    this.date = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.date);
//    this.GetLocation();

  }
  ToastMsg1(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  AlertMsg(msg){
    let alertf = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            // this.navCtrl.push(RegisterPage)
          }
        },
        {
          text: 'Ok',
          role: 'submit',
          handler: () => {
            console.log('Continue clicked');
              this.data.aaddress='';
               this.data.otheraddress='';
          this.lat=this.l;
          this.long=this.lg;
          console.log(this.lat,this.long);
//          alert(this.lat+','+this.long+'Current');
           this.addrestype='current';
        
          
//            this.navCtrl.push(LocationPage);
          }
        }
      ]
    });
    alertf.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  Tabpage(){
      this.navCtrl.push(TabsPage);
  }

}
