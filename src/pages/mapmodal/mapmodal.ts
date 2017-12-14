import { Component,ViewChild,OnInit,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Platform,ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//  import {googlemaps} from 'googlemaps';
import { NativeGeocoder,  NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
declare var google;
/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapmodal',
  templateUrl: 'mapmodal.html',
  
})
export class MapmodalPage {
 public selectedShape : any;
  public globalshape : any;   
  autocompleteItems: any;
  autocomplete: any;
  acService:any;
  placesService: any;
 @ViewChild('map') mapElement:ElementRef;
   map: any;
   infowindow: any;
   l:any;
   lo:any;
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
    //  this.initMap();
  }

   ngOnInit() {
  // alert("neelanshi");
        this.nomi= JSON.parse(localStorage.getItem('NominatimDetail'))
        
    console.log(this.nomi);
    if(this.nomi !=null){
    console.log(this.nomi.lat);
    console.log(this.nomi.lon);}
    else{
    this.acService = new google.maps.places.AutocompleteService();      
    this.infowindow = new google.maps.InfoWindow;  
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
  };        
  }}
  updateSearch() {
   delete this.crlat;
   delete this.crlng;
    console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
    return;
    }
    //let self = this; 
    let config = { 
    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
    input: this.autocomplete.query, 
    componentRestrictions: {  } 
    }
    this.acService.getPlacePredictions(config, ((predictions, status)=> {
    console.log('modal > getPlacePredictions > status > ', status);
    this.autocompleteItems = [];   
    console.log(predictions)         
    predictions.forEach(((prediction)=> {   
      console.log("abc")           
    this.autocompleteItems.push(prediction);
    })
   );
    })
   );
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

/**map initialization */
 initMap = (): void => {
    var nill = this;
    var newShape
    var map
    
 
    this.platform.ready().then(() => {
      // alert("working");
      // alert(lat+','+long);
       this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude;
  this.long= resp.coords.longitude;

 console.log(resp.coords.latitude);
  console.log(resp.coords.longitude);
   
  if(this.nomi !=null){
      this.l=this.nomi.lat
      this.lo=this.nomi.lon
     
  }
  else{
       this.l=this.lat
      this.lo=this.long
  }

 
   let latLng = new google.maps.LatLng(this.l,this.lo);
  
  
   
      // alert('lat and long:'+latLng);
      
       this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
		if (status == google.maps.GeocoderStatus.OK) {
    if (results[1]) {
    this.autocomplete.query= results[1].formatted_address;
                    }
                }
		   
	   })
	   )
 let mapOptions = {
        center: latLng,
        zoom:18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
//        this.map.setZoom(1);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    //  alert("mapOptions");
      var marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
     
         map: this.map,
       });
      //  alert("marker");
        google.maps.event.addListener(marker, 'dragend', ((marker)=>{
      var latLng = marker.latLng; 
      this.crlat = latLng.lat();
      this.crlng = latLng.lng();
      console.log(marker);
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
     let latLong = new google.maps.LatLng(this.crlat,this.crlng); 
	 
    this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		  console.log(results);
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
                    }
                }
		   
	   })
	   )
   }));
      // alert("working1");
      }).catch((error) => {
   
      let latLng = new google.maps.LatLng(this.crlat,this.crlng); 
   
      this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
        if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
        this.autocomplete.query= results[1].formatted_address;
                        }
                    }
           
         })
         )
          let mapOptions = {
        center: latLng,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    //  alert("mapOptions");
      var marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         map: this.map,
       });
      //  alert("marker");
        google.maps.event.addListener(marker, 'dragend', ((marker)=>{
      var latLng = marker.latLng; 
      this.crlat = latLng.lat();
      this.crlng = latLng.lng();
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
     let latLong = new google.maps.LatLng(this.crlat,this.crlng); 
	  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		  console.log(results);
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
                    }
                }
		   
	   })
	   )
   }));

       console.log('Error getting location', error);
     });



let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 
  
  // console.log('My latitude : ', data.coords.latitude);
            // console.log('My longitude: ', data.coords.longitude);
             nill.latt=data.coords.latitude;
             nill.longg=data.coords.longitude;
            //  alert(nill.latt+','+nill.longg);
            
                        });
     


     

    });

  }
     chooseItem(item){
    console.log(item)
    this.autocomplete.query=item.description;
   

    this.geocoder.geocode({'placeId': item.place_id}, ((results, status)=>{
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0])
          this.map.setZoom(17);
          this.map.setCenter(results[0].geometry.location);
          this.crlat = results[0].geometry.location.lat();
          this.crlng = results[0].geometry.location.lng();
          var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
          });
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
          this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
  .then((coordinates: NativeGeocoderForwardResult) =>{ console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
    this.lat=coordinates.latitude
    this.long=coordinates.longitude 
    console.log(this.lat+' '+this.long);
   } )
  .catch((error: any) => console.log(error));
          
        }
      }
    }))               


    this.autocompleteItems = [];
 }
clsmodel(){
  this.viewCtrl.dismiss();
}

  closeModal() {
      console.log(this.autocomplete.query)
      this.viewCtrl.dismiss({
        address:this.autocomplete.query,
        lati: this.crlat,
        longi:this.crlng
      });
    }

  
}
