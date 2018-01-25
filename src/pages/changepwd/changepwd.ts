import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from "../../providers/appsetting";
import { SigninPage } from "../signin/signin";

/**
 * Generated class for the ChangepwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepwd',
  templateUrl: 'changepwd.html',
})
export class ChangepwdPage {
  key: boolean = false;;
  public data: any = {};
   public ptype = 'password';
  public iconname = 'eye';
   public showpass:boolean = false;
    public ptype1 = 'password';
  public iconname1 = 'eye';
   public showpass1:boolean = false;
    public ptype2 = 'password';
  public iconname2 = 'eye';
   public showpass2:boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public http: Http,
    public alertCtrl: AlertController,
    public appsetting: Appsetting, ) {
  }

  changepassword(changepass) {
    console.log('forgot');
    console.log(changepass.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    if (changepass.value.newpassword == changepass.value.cnewpassword) {
      var email = JSON.parse(localStorage.getItem('UserDetail')).email;
      if (changepass.value.oldpassword.indexOf(' ') >= 0 || changepass.value.newpassword.indexOf(' ') >= 0) {
        let toast = this.toastCtrl.create({
          message: 'Space not allowed in password',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      } else {
        var postdata = {
          email: email,
          password: changepass.value.oldpassword,
          newpassword: changepass.value.newpassword
        }
        console.log(postdata);
        //alert(JSON.stringify(postdata));
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader'
        });
        Loading.present().then(() => {
          this.http.post(this.appsetting.myGlobalVar + 'changepwd', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            Loading.dismiss();
            if (response.status == true) {
                localStorage.removeItem('UserDetail');
              this.ToastMsg('Password updated successfully');
              this.navCtrl.push(SigninPage);
            } else {
              this.ToastMsg(response.message);
            }
          })
        })
      }
    } else {

      let alert = this.alertCtrl.create({
        title: 'Change Password',
        subTitle: 'Password did not match',
      });
      alert.present();
      setTimeout(() => alert.dismiss(), 1500);

    }
  }
    showPassword() {    
   console.log('showpassword');   
    this.showpass = !this.showpass;   
     if(this.showpass){    
       this.ptype = 'text';  
           this.iconname = 'eye-off';  
             } else {    
               this.ptype = 'password';   
                  this.iconname = 'eye';    } 
                   }
               
                    
   showPassword1() {    
   console.log('showpassword');   
    this.showpass1 = !this.showpass1;   
     if(this.showpass1){    
       this.ptype1 = 'text';  
           this.iconname1 = 'eye-off';  
             } else {    
               this.ptype1 = 'password';   
                  this.iconname1 = 'eye';    } 
                   }
                  
                   
                       
     showPassword2() {    
   console.log('showpassword');   
    this.showpass2 = !this.showpass2;   
     if(this.showpass2){    
       this.ptype2 = 'text';  
           this.iconname2 = 'eye-off';  
             } else {    
               this.ptype2 = 'password';   
                  this.iconname2 = 'eye';    }  
                  }
                  
                  
  handleKeyboardEvent(event: KeyboardEvent, pass, cpass) {
    console.log(event.key);
    console.log(event);
    console.log(pass);
    console.log(cpass);
    console.log(this.key);
    if (pass == cpass) {
      console.log(this.key);
      return this.key = true;

    } else {
      console.log(this.key);
      return this.key = false;
    }

  }
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ToastMsg(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
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
