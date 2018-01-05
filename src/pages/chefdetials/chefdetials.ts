import { Component } from '@angular/core';

import { ReviewsPage } from '../reviews/reviews';
import { ProductviewPage } from '../productview/productview';

import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';


/**
 * Generated class for the ChefdetialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chefdetials',
  templateUrl: 'chefdetials.html',
})
export class ChefdetialsPage {
array:any=[];
splarray:any=[];
  // diseases = [
  //   { title: "About Me", description: "Speaking enthusiastically about and demonstrating their passion for food, flavours and delectable culinary creations from every corner of the globe, our celebrity chefs have unrivalled knowledge and expertise when it comes to all things culinary!" },
  //   { title: "Work History", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
  //   { title: "list of award", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." }
  // ];

  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController) {
//       alert('hjhh');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefdetialsPage');
    this.getchefdetail();
   
      
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
  getchefdetail(){
       if (localStorage.getItem('Chefdetail')) {
            this.array.push(JSON.parse(localStorage.getItem('Chefdetail'))) ;

           console.log(this.array);
           console.log(this.array[0].products);
           this.splarray = JSON.parse(localStorage.getItem('Chefdetail'));
           console.log(this.splarray.products );
       }
  }
  dishview(prod){
      console.log(prod)
//       console.log(this.splarray.products);
       localStorage.setItem('producttss', JSON.stringify(prod));
      this.navCtrl.push(ProductviewPage);
  }
   review() {
    this.navCtrl.push(ReviewsPage);
  }
  
  // toggleGroup(group) {
  //   if (this.isGroupShown(group)) {
  //       this.shownGroup = null;
  //   } else {
  //       this.shownGroup = group;
  //   }
  // }

  // isGroupShown(group) {
  //   return this.shownGroup === group;
  // }

}
