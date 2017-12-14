import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController,ToastController} from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Appsetting } from '../../providers/appsetting';
import * as moment from 'moment';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
    srcImage: any;
public data:any = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: Http,
    public alertCtrl: AlertController,
    public appsetting: Appsetting,
    public toastCtrl:ToastController

      ) {
  }
postfeedback(feedbackdata) {
    console.log(feedbackdata);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid);

    var postdata = {
      user_id: userid,
      feedback:feedbackdata.value.feedback
    };
    var serialized = this.serializeObj(postdata);
    console.log(postdata);
    this.http.post(this.appsetting.myGlobalVar + 'postfeedback', serialized, options).map(res => res.json()).subscribe(data => {
      // this.Loading.dismiss();
      console.log(data);
    })
  } 
  getfeedback(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid);

    var postdata = {
      user_id: userid
    };
    var serialized = this.serializeObj(postdata);
    console.log(postdata);
    this.http.post(this.appsetting.myGlobalVar + 'getfeedback', serialized, options).map(res => res.json()).subscribe(response => {
      // this.Loading.dismiss();
      console.log(response);
    })
  }
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getfeedback();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 2000);
  }
  ionViewDidLoad() {
   console.log('ionViewDidLoad FeedbackPage');
      console.log('Rahul Maurya');
      this.getfeedback();
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
