import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgtpwdPage } from '../forgtpwd/forgtpwd';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import 'rxjs/add/operator/map';
import { LocationPage } from "../location/location";
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public data: any = {};
  public ptype = 'password';
  public iconname = 'eye';
   public showpass:boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsetting : Appsetting,
    public http: Http,
    public alertCtrl: AlertController,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController
    
    ) {
  }
   showPassword() {    
   console.log('showpassword');   
    this.showpass = !this.showpass;   
     if(this.showpass){    
       this.ptype = 'text';  
           this.iconname = 'eye-off';  
             } else {    
               this.ptype = 'password';   
                  this.iconname = 'eye';    }  }
 Signin(logindata){
  console.log('login');
  console.log(logindata.value);
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  if (logindata.value.password.indexOf(' ') >= 0) {
    let toast = this.toastCtrl.create({
      message: 'Space not allowed in password',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  } else {
  var postdata = {
    email:logindata.value.email,
    password:logindata.value.password,
    role:'user'
  }
  console.log(postdata);
  //alert(JSON.stringify(postdata));
  var Serialized = this.serializeObj(postdata);
  var Loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    cssClass: 'loader',
  
  });
  Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar+'loginuser',Serialized,options).map(res=>res.json()).subscribe(response=>{
    console.log(response);
    Loading.dismiss();
    if(response.status == true){
     
      console.log(response.userinfo._id);
      localStorage.setItem('UserDetail',JSON.stringify(response.userinfo));
     console.log(response.userinfo.role);
     
//     var a = JSON.parse((localStorage.getItem('Userpref')))
     
//        if(localStorage.getItem('UserDetail')&&localStorage.getItem('Userpref')){
//         var b = JSON.parse(localStorage.getItem('UserDetail'))._id;
//          var a = JSON.parse(localStorage.getItem('Userpref')).app_user_id;
//      console.log(a,b);
//     
//      if(b==a)
//          {
//          this.navCtrl.push(TabsPage); 
//      }else{
//          this.navCtrl.push(LocationPage); 
//      }
//      
//     }else if(localStorage.getItem('UserDetail')){
//          this.navCtrl.push(LocationPage); 
//     }
       if(localStorage.getItem('UserDetail')){
           this.navCtrl.push(TabsPage);  
       }
     
    
     
    }
    else{
      this.ToastMsg(response.message);
    }
  })
})
}
}
serializeObj(obj) {
  var result = [];
  for (var property in obj)
    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

  return result.join("&");
}
ionViewDidLoad() {
  console.log('ionViewDidLoad RegisterPage');
  console.log('Neelanshi bhatnagar');
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
    duration: 3000,
    position: 'middle'
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
        role: 'cancel',
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

  frgt() {
    this.navCtrl.push(ForgtpwdPage);
  }

}

