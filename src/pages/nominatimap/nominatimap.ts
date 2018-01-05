//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component,ViewChild,OnInit,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Platform,ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//  import {googlemaps} from 'googlemaps';
import { NativeGeocoder,  NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
declare var google;

/**
 * Generated class for the NominatimapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nominatimap',
  templateUrl: 'nominatimap.html',
})
export class NominatimapPage {
 @ViewChild('map') mapElement:ElementRef;
   map: any;
   infowindow: any;
  lat;long;crlat;crlng;
  public latt:any;
  public longg:any;
    public lati:any;
  public longi:any;
  bb:any = [];
   geocoder = new google.maps.Geocoder();
   nomi:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  public toastCtrl: ToastController,
   private platform: Platform, 
   private geolocation: Geolocation,
   private nativeGeocoder: NativeGeocoder,
   public places: ElementRef) {
//   alert('burger');
  }
ngOnInit() {
    
   this.nomi= JSON.parse(localStorage.getItem('NominatimDetail'))
    console.log(this.nomi);
    console.log(this.nomi.lat);
    console.log(this.nomi.lon);
  // alert("neelanshi");
//    this.acService = new google.maps.places.AutocompleteService();      
    this.infowindow = new google.maps.InfoWindow;  
//    this.autocompleteItems = [];
//    this.autocomplete = {
//    query: ''
        
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad MapmodalPage');
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
    this.initMap();
  }
  
   initMap = (): void =>{
       var map;
       this.platform.ready().then(() => {
             let latLng = new google.maps.LatLng(this.nomi.lat,this.nomi.lon); 
   
      this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
        if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
        console.log( results[1].formatted_address);
                        }
                    }
           
        
         
          let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
         
//       var marker = new google.maps.Marker({
//         position: latLng,
//         draggable: false,
//         map: this.map,
//       });
        var marker = new google.maps.Marker({
            map: this.map,
            position: results[1].geometry.location
          });
          this.infowindow.setContent(results[1].formatted_address);
          this.infowindow.open(this.map, marker);
       })
         )
       });
   }
clsmodel(){
  this.viewCtrl.dismiss();
}

  closeModal() {
//      console.log(this.autocomplete.query)
      this.viewCtrl.dismiss({
//        address:this.autocomplete.query,
//        lati: this.lat,
//        longi:this.long
      });
    }
}
