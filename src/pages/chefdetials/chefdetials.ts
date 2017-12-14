import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewsPage } from '../reviews/reviews';



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

  // diseases = [
  //   { title: "About Me", description: "Speaking enthusiastically about and demonstrating their passion for food, flavours and delectable culinary creations from every corner of the globe, our celebrity chefs have unrivalled knowledge and expertise when it comes to all things culinary!" },
  //   { title: "Work History", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
  //   { title: "list of award", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." }
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefdetialsPage');
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
