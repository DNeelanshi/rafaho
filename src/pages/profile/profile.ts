import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController,App } from 'ionic-angular';
import { WhyrafahoPage } from '../whyrafaho/whyrafaho';
import { HelpPage } from '../help/help';
import { TermsPage } from '../terms/terms';
import { EditprofilePage } from '../editprofile/editprofile';
import { EditprefrencePage } from '../editprefrence/editprefrence';
import { AddwalletPage } from '../addwallet/addwallet';
import { FrequentquestionPage } from '../frequentquestion/frequentquestion';
import { FeedbackPage } from '../feedback/feedback';
import { ChangepwdPage } from '../changepwd/changepwd';
import { SigninPage } from "../signin/signin";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";
import { NativeGeocoder,  NativeGeocoderForwardResult, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  srcImage: any;
  profile: any;
city:any;
data:any={};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private nativeGeocoder: NativeGeocoder,
    public http: Http,
    public alertCtrl: AlertController,
    public appsetting: Appsetting,
     public app:App
  ) {

  }
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
     var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          dismissOnPageChange: true
        });
        Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data => {
      Loading.dismiss();
      console.log(data);
      console.log(data.data.latitude+','+data.data.longitude);
      this.geo(parseFloat(data.data.latitude), parseFloat(data.data.longitude));
      this.profile = data.data;
      this.srcImage = this.profile.user_image;
//      this.city = this.data.city;
      console.log(this.profile.firstname);

    },(err)=>{
                this.ToastMsg('Something went Wrong');
                Loading.dismissAll();
            })
        })
  }
 
  geo(lat,long){
//      alert('working');
      console.log(lat,long);
        this.nativeGeocoder.reverseGeocode(lat, long)
      .then((result: NativeGeocoderReverseResult) => {
        // alert(JSON.stringify(result));
        this.city=result.locality;
        console.log(this.city);
//        alert(this.city);
        //  alert(this.data.result +'Neelanshi');
      }).catch((error: any) => console.log(error));
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
editpr(){
    this.navCtrl.push(EditprefrencePage);
}
  whyrafaha() {
    this.navCtrl.push(WhyrafahoPage);
  }
  help() {
    this.navCtrl.push(HelpPage);
  }
  term() {
    this.navCtrl.push(TermsPage);
  }
  edit() {
    this.navCtrl.push(EditprofilePage);
  }
  wallet() {
    this.navCtrl.push(AddwalletPage);
  }
  frequent() {
    this.navCtrl.push(FrequentquestionPage);
  }
  feedback() {
    this.navCtrl.push(FeedbackPage);
    
  }
  change() {
    this.navCtrl.push(ChangepwdPage);
  }
  logout() {
       if(localStorage.getItem('UserDetail')){
      // console.log(localStorage.getItem('UserInfo'));
      localStorage.removeItem('UserDetail');
      // alert("local storage cleared");
      //  this.navCtrl.push(SigninPage);
        this.app.getRootNav().setRoot(SigninPage);
      // this.rootPage = TabsPage;
    }
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
    console.log('ionViewDidLoad ProfilePage');
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
}
