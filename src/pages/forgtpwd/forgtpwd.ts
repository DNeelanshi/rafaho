import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";
import {Http, RequestOptions,Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";
import { SigninPage } from "../signin/signin";

/**
 * Generated class for the ForgtpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgtpwd',
  templateUrl: 'forgtpwd.html',
})
export class ForgtpwdPage {
public data:any = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsetting:Appsetting,
    public loadingCtrl:LoadingController,
    public http:Http,
    public toastCtrl:ToastController,
    public alertCtrl:AlertController
    
     
     ) {
  }
   forgot(forgotdata){
  console.log('forgot');
  console.log(forgotdata.value);
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  var postdata = {
    email:forgotdata.value.email
  }
  console.log(postdata);
  //alert(JSON.stringify(postdata));
  var Serialized = this.serializeObj(postdata);
  var Loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    cssClass: 'loader'
  });
  Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar+'forgetpassword',Serialized,options).map(res=>res.json()).subscribe(response=>{
    console.log(response);
    Loading.dismiss();
    if(response.status == true){
         this.ToastMsg('Check you email to reset password');
      //this.ToastMsg('Login successfully');
      this.navCtrl.push(SigninPage);
    }else{
      this.ToastMsg(response.message);
    }
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
console.log('ionViewDidLoad ForgtpwdPage');
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
ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 5000,
    position: 'top'
  });
  toast.present();
}
AlertMsg(msg){
  let alert = this.alertCtrl.create({
    title: 'RAFAHO',
    message: msg,
    buttons: [
      {
        text: 'Continue',
        role: 'submit',
        handler: () => {
          console.log('Continue clicked');
        }
      }
    ]
  });
  alert.present();
}
  signupPage() {
    this.navCtrl.push(SignupPage);
  }


}
