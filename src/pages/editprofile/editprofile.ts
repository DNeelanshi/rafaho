import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController,ModalController ,ActionSheetController} from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";
import { ProfilePage } from "../profile/profile";
import { MapmodalPage } from "../mapmodal/mapmodal";
import { NominatimapPage } from "../nominatimap/nominatimap";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import * as moment from 'moment';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  srcImage: any;
 address:any;
  number: boolean=false;
  public data: any = {};
  lat:any;
  long:any;
 
  city:any;
  date:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public http: Http,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public appsetting: Appsetting,
    public actionSheetCtrl:ActionSheetController,
    public camera: Camera,
     private nativeGeocoder: NativeGeocoder
  ) {
//    alert('tmmtt');
    this.date = new Date();
   console.log(this.date);
  }
       ngOnInit() {

    this.date = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.date);
   
 }
//   lupap(){
////      localStorage.removeItem('NominatimDetail');
//      this.address = this.data.address;
//      console.log(this.address);
//      var matches = this.address.match(/\d+/g);
//if (matches != null) {
////    console.log('number');
//    this.number = true;
//    
//}else{
//    this.number = false;
//}
//
//if(this.number ==true){
//   console.log('yes it is having number');
//   this.openmapmodal();
//   
//}else{
//   console.log('false');
//let headers = new Headers();
//    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//let options = new RequestOptions({ headers: headers})
//if(this.address){
//    this.address = this.address.replace(/" "/g, '%20');
//    console.log(this.address)
//var adr = this.address
//console.log(adr);
//var Loading = this.loadingCtrl.create({
//          spinner: 'bubbles',
//          cssClass: 'loader'
//        });
//         Loading.present().then(() => {
//this.http.post('http://nominatim.openstreetmap.org/search/'+adr+'?format=json&addressdetails=1&limit=1&polygon_svg=1',options).map(res => res.json()).subscribe(response => {
//   Loading.dismiss();
//     console.log(response[0]);
//    
//    if(response[0] != undefined){
//    if(response[0].place_id != ''){
//        
//        console.log('working');
//         localStorage.setItem('NominatimDetail',JSON.stringify(response[0]));
////        this.navCtrl.push(NominatimapPage);
//         let modal = this.modalCtrl.create(NominatimapPage);
//    modal.onDidDismiss(data => { 
//   
//  });
//   modal.present();
//   
//   if(response[0].address.road){
//        this.data.address=response[0].place_id+','+response[0].address.road+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
//        }
//        else if(response[0].address.city){
//        this.data.address=response[0].place_id+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
//        }
//         else if(response[0].address.state){
//            this.data.address=response[0].place_id+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
//        }
//        else if(response[0].address.state_district){
//            this.data.address=response[0].place_id+','+response[0].address.state+','+response[0].address.state_district+','+response[0].address.country+','+response[0].address.country_code
//        }
//       else if(response[0].address.country){
//            this.data.address=response[0].place_id+','+response[0].address.country+','+response[0].address.country_code
//        }
//     this.lat = response[0].lat
//    this.long = response[0].lon
//      console.log(this.lat,this.long)  
//    }}
//    else{
//        console.log('neelanshi');
//         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
//       
//    }
////    else
////        {
////       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
////        this.openmapmodal();
////    }
//});
//});
//
//
//}
//}
//
//
//
//  }
  Userprofile() {
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
    this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data => {
    
      console.log(data.data.latitude+','+data.data.longitude);
        this.lat=data.data.latitude;
        this.long=data.data.longitude;
            this.nativeGeocoder.reverseGeocode(parseFloat(data.data.latitude), parseFloat(data.data.longitude))
        .then((result: NativeGeocoderReverseResult) => {console.log(JSON.stringify(result))
            if (result.subThoroughfare){
        this.data.address=result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            } else if (result.thoroughfare){
                 this.data.address=result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
            else {
                 this.data.address= result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
             this.city = result.locality;
        console.log(this.city);
//        alert(this.city);
      })
        .catch((error: any) => console.log(error));
      console.log(data);
      var str = data.data.phone;
      var res = str.substring(0, 3);
      var res1 = str.substring(3, 6);
      var res2 = str.substring(6, 10);
      data.data.phone = res + '-' + res1 + '-' + res2;
      this.data = data.data;
      this.srcImage = data.data.user_image;

      console.log(this.data.firstname);

    },(err)=>{
        this.ToastMsg('Something went wrong');
    })
  }
  ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}
  submitinfo(editinfo) {
    console.log(editinfo.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });

    var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
    console.log(userid);
    if (editinfo.value.phone) {
      editinfo.value.phone = editinfo.value.phone.replace(/-/g, "");
      this.data = {
        first_name: editinfo.value.firstname,
        last_name: editinfo.value.lastname,
        phone: editinfo.value.phone,
        dob: editinfo.value.dob,
        gender: editinfo.value.gender,
        address: this.data.address,
        id: userid,
         lat:this.lat,
      long:this.long,
      }
      console.log(this.data);
      var serialized = this.serializeObj(this.data);
       var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          dismissOnPageChange: true
        });
        Loading.present().then(() => {
      this.http.post(this.appsetting.myGlobalVar + 'user_data_update', serialized, options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          if (data.status == true) {
                  localStorage.setItem('UserDetail',JSON.stringify(data.data));
                  console.log(data.data.address);
                  this.appsetting.svd.push(data.data.address);
                    localStorage.setItem('Svedaddress',JSON.stringify(this.appsetting.svd));
                    console.log(this.appsetting.svd);
            Loading.dismiss();
            let toast = this.toastCtrl.create({
              message: "Profile is updated",
              duration: 3000,
              position: 'middle'
            });
            toast.present();

            this.navCtrl.pop();
            console.log(this.navCtrl);
          }
        },(err)=>{
              let toast = this.toastCtrl.create({
              message: "Something went wrong",
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            Loading.dismissAll();
        })
        })
    }
  }
CameraAction() {
 
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            //this.imgTosend = imageUri;
            // this.loading.dismiss();
//            alert('camera');
                let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
             var postdata = {
              user_id: userid,
              profile_picture: imageUri
            };
//            alert(JSON.stringify(postdata));
            console.log(postdata);
            
            var serialized = this.serializeObj(postdata);
                 var Loading = this.loadingCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader'
     });
     Loading.present().then(() => {
this.http.post(this.appsetting.myGlobalVar +'user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
               Loading.dismiss();

// alert(JSON.stringify(data));
              console.log(data)
//              alert("saving image")

            },(err)=>{
              alert(JSON.stringify(err))
            })
     })
    

          }, (err) => {
            alert(JSON.stringify(err));
            // this.loading.dismiss();
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log("Gallery Clicked");
          //	alert("get Picture")
          // this.loading.present();

          const options: CameraOptions = {
            quality: 10,
            sourceType: 0,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageData; 
                let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;          
             var postdata = {
              user_id: userid,
              profile_picture: imageData
            };
//            alert(postdata)
            var serialized = this.serializeObj(postdata);
     var Loading = this.loadingCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader'
     });
     Loading.present().then(() => {
            this.http.post(this.appsetting.myGlobalVar +'user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              console.log(data)
//              alert("saving image")

            },(err)=>{
              console.log(JSON.stringify(err))
              alert(JSON.stringify(err))
            })
     })
//            alert('gallery working');
          }, (err) => {
            // this.loading.dismiss();
            alert(JSON.stringify(err));
            // Handle error
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          actionsheet.dismiss();

        }
      }]
    });

    actionsheet.present();
  }
  phonevalidation(phn) {
    if (phn.length == 3) {
      this.data.phone = this.data.phone + '-';
    } else if (phn.length == 7) {
      this.data.phone = this.data.phone + '-';
    }
    // else if (phn.length == 12) {
    //   this.data.phone = this.data.phone + '-';
    // }
  }
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
     this.Userprofile();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 2000);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
    this.Userprofile();
      console.log('Rahul Maurya');
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
  openmapmodal() {
       
    let modal = this.modalCtrl.create(MapmodalPage);
//    Loading.dismiss();
    modal.onDidDismiss(data => {
//      alert(data.address);
      this.data.address= data.address;
      console.log(this.data.address)
      console.log(data.lati)
      console.log(data.longi)
      this.lat = data.lati
      this.long = data.longi
       this.AlertMsg4('Your Location:'+this.data.address+' '+' is  updated')
    });
    modal.present();
//  })

}
    AlertMsg4(msg){
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
}