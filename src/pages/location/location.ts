import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { MapmodalPage } from "../mapmodal/mapmodal";
import { TabsPage } from "../tabs/tabs";
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
  public data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController) {
  }
 openmapmodal() {
    let modal = this.modalCtrl.create(MapmodalPage);
    modal.onDidDismiss(data => { 
//    this.data.address=data.address;
//    console.log(this.data.result)
    console.log(data.lati)
    console.log(data.longi)
    this.lat = data.lati
    this.long = data.longi
  });
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  Tabpage(){
      this.navCtrl.push(TabsPage);
  }

}
