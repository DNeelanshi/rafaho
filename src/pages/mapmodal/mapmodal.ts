import { Component,ViewChild,OnInit,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Platform,ToastController ,LoadingController,AlertController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Appsetting } from "../../providers/appsetting";
//import { Geolocation } from '@ionic-native/geolocation';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Device } from '@ionic-native/device';
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
export class MapmodalPage{
    glob_item: any;
 public selectedShape : any;
  public globalshape : any;   
  autocompleteItems: any;
  omega:any = 0;
 
  number:boolean = true;
 isenabled:boolean=false;
  autocomplete: any;
  acService:any;
  placesService: any;
 @ViewChild('map') mapElement:ElementRef;
   map: any;
   slat:any;
   MapBounds;any;
   boundsSet:any;
   lastPosition:any;
   slong:any;
   nomaddress:any;
   ssaved:any=[];
   infowindow: any;
   l:any;
   goglat:any;
   goglong:any;
   lo:any;
  public  iconname = 'star-outline';
  lat;long;crlat;crlng;lats;longs;
  public latt:any;
  public longg:any;
    public lati:any;
    description:any;
    markers:any=[];
  public longi:any;
 
  bb:any = [];
   geocoder = new google.maps.Geocoder();
 nomi:any;
   arr;
   public data: any = {};
  countries = {
        'Bogota': {
          center: {lat: 4.624335 , lng: -74.063644},
          zoom: 4
        },
        'cun_soacha': {
          center: {lat: 8.305925, lng: 73.6117},
          zoom: 3
        }
      };
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  public toastCtrl: ToastController,
   private platform: Platform, 
    public appsetting: Appsetting,
    public http: Http,
   private geolocation: Geolocation,
   private loadCtrl:LoadingController,
   private alertCtrl:AlertController,
   private nativeGeocoder: NativeGeocoder,
   public places: ElementRef) {
    //  this.initMap();
   this.cities();
   console.log(this.appsetting.saved);
  }
   cities(){
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//    let options = new RequestOptions({ headers: headers });
       this.http.get('http://rafao.us-west-2.elasticbeanstalk.com/api/allcity').map(res => res.json()).subscribe(response => {
           console.log(response.data);
           this.arr = response.data;
           console.log(this.arr)
//           console.log(this.data.city);
          
       });
  }
city1(cit){
   
    console.log(cit);
    console.log(this.data.city);

}
   ngOnInit() {
  // alert("neelanshi");
//        this.nomi= JSON.parse(localStorage.getItem('NominatimDetail'))
        
//    console.log(this.nomi);
    
//    if(this.nomi !=null){
//    console.log(this.nomi.lat);
//    console.log(this.nomi.lon);
//    this.acService = new google.maps.places.AutocompleteService();      
//    this.infowindow = new google.maps.InfoWindow;  
//    this.autocompleteItems = [];
//    this.autocomplete = {
//    query: ''
//  };  
//    }
//    else{
    this.acService = new google.maps.places.AutocompleteService();      
    this.infowindow = new google.maps.InfoWindow;  
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
  };        
  

  }

  lupapsearch(){
      console.log(this.autocomplete.query);
      
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var oldstr = this.autocomplete.query;
   
var newstr=oldstr.toString().replace(/#/g,"%23");

var newstr1=newstr.toString().replace(/ /g,"%20");
var newstr2=newstr1.toString().replace(/–/g,"%2D");
var newstr3=newstr2.toString().replace(/./g,"%2E");
console.log(newstr2);
if(this.data.city == undefined){
    this.data.city='Bogota'
}
else{
    console.log(this.data.city)
          var postdata = {
           country_code:'co',
           country_name:this.data.city,
           address:newstr2
        }
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
    this.http.post('http://rafao.us-west-2.elasticbeanstalk.com/api/home/address_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if(response){
                console.log(typeof(response));
                console.log(response);
                var ress = JSON.parse(response.data)
                console.log(ress);
                if(ress.message == 'Result not found'){
                    this.nomiapi();
                }else{
                 console.log(ress.response);
                 console.log(ress.response.type);
                    console.log(ress.response.properties.address);
                    console.log(ress.response.geometry.coordinates);

                this.lats=ress.response.geometry.coordinates[1];
                this.longs=ress.response.geometry.coordinates[0];
                console.log(this.lats,this.longs);

                this.description = ress.response.properties
                this.autocompleteItems.push(this.description);
                console.log(this.autocompleteItems);}
            }
            },(err)=>{
                this.ToastMsg('Something went Wrong');
            });
            
            
            }
  }
  fav(auto){
     console.log("place")
     console.log(auto);
     if(auto == ''){
         this.AlertMsg1('Select some address');
     }
     else if( this.iconname == 'star'){
         console.log('new')
      let alert1 = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Remove from Favourite',
      buttons: [
     {
            text: 'Cancel',
          role: 'cancel',
          handler: () => {
              
          }
        },
            {
          text: 'OK',
          role: 'submit',
          handler: () => {
              this.iconname = 'star-outline';
              console.log(this.appsetting.saved);
        this.appsetting.saved.pop(auto);
          console.log(this.appsetting.saved);
        localStorage.setItem('Favaddress',JSON.stringify(this.appsetting.saved));

          }
        }
      ]
    });
     alert1.present();
     }
   else{
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Save this as favourite address?',
      buttons: [
              {
            text: 'Cancel',
          role: 'cancel',
          handler: () => {
              
          }
        },
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
              this.iconname = 'star';
              console.log(this.appsetting.saved);
        this.appsetting.saved.push(auto);
        console.log(this.appsetting.saved);
        localStorage.setItem('Favaddress',JSON.stringify(this.appsetting.saved));

          }
        }

      ]
    });
    alert.present();
    }
  console.log(this.appsetting.saved);
  console.log(localStorage.getItem('Favaddress'));
  }
  
      AlertMsg1(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
    
//            this.navCtrl.push(LocationPage);
          }
        }
      ]
    });
    alert.present();
  }
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  updateSearch() {
   delete this.crlat;
   delete this.crlng;
   console.log(this.autocomplete.query);
   if (this.autocomplete.query == ''){
     
//enable the button
this.isenabled=false; 

   }else{
      this.isenabled=true;  
   }
   
    console.log('modal > updateSearch');
    
    this.iconname = 'star-outline';
    if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
//    this.lupapsearch();
    return;
    }
   
     var matches = this.autocomplete.query.match(/\d+/g);
     console.log(matches);
if (matches != null) {
    console.log('matched');
    this.number = true;
    
}else{
console.log('not matched');
    this.number = false;
}


if(this.number == true){
        //let self = this; 
    
    let config = { 
    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
    input: this.autocomplete.query, 
//    componentRestrictions: {  } 
//    componentRestrictions: {country: 'co'}
    }
    this.acService.getPlacePredictions(config, ((predictions, status)=> {
    console.log('modal > getPlacePredictions > status > ', status);
    if(status == 'ZERO_RESULTS'){
        
        this.lupapsearch();
        this.omega = 1;
         this.autocompleteItems = [];   
    }else{
      this.omega = 0;
    this.autocompleteItems = [];   
    console.log(predictions)         
    predictions.forEach(((prediction)=> {   
      console.log("abc")           
    this.autocompleteItems.push(prediction);
   
    })
   
   ); }
   // return false;
    })
    
   );
    this.number = true
    
   
  }
  else{
    this.lupapsearch();
  }
  
//else {
//    this.nomiapi()
//}
    }
nomiapi(){
        console.log('it  is not  having number');
      console.log('false');
let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
if(this.autocomplete.query){
  this.autocomplete.query = this.autocomplete.query.replace(/" "/g, '%20');
    console.log(this.autocomplete.query)
var adr = this.autocomplete.query
console.log(adr);
if(!this.number){
    console.log('its hitting');
this.http.post('https://nominatim.openstreetmap.org/search/'+adr+'?format=json&addressdetails=1&limit=1&polygon_svg=1',options).map(res => res.json()).subscribe(response => {
    console.log(response[0] );
    if( (response[0]== undefined)){
            
    let config = { 
    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
    input: this.autocomplete.query, 
//    componentRestrictions: {  } 
//    componentRestrictions: {country: 'co'}
    }
    this.acService.getPlacePredictions(config, ((predictions, status)=> {
    console.log('modal > getPlacePredictions > status > ', status);
    if(status == 'ZERO_RESULTS'){
        
       this.ToastMsg('Location not found')
        this.omega = 1;
         this.autocompleteItems = [];   
    }else{
      this.omega = 0;
    this.autocompleteItems = [];   
    console.log(predictions)         
    predictions.forEach(((prediction)=> {   
      console.log("abc")           
    this.autocompleteItems.push(prediction);
   
    })
   
   ); }
   // return false;
    })
    
   );

    }else{
    if(response[0] != undefined){
    if(response[0].place_id != ''){
        
        console.log('working');
           
          this.autocompleteItems = [];
         localStorage.setItem('NominatimDetail',JSON.stringify(response[0]));
         console.log(response[0].address)
        
//        this.navCtrl.push(NominatimapPage);
//         let modal = this.modalCtrl.create(NominatimapPage);
//    modal.onDidDismiss(data => { 
//      this.AlertMsg4('Your Location has been saved')
//  });
//   modal.present();
////   
            if(response[0].address.mall){
        
        this.nomaddress=response[0].address.mall+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
   if(response[0].address.road){
        
        this.nomaddress=response[0].address.road+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
        else if(response[0].address.city){
       this.nomaddress=response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
         else if(response[0].address.state){
             this.nomaddress=response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
        else if(response[0].address.state_district){
           this.nomaddress=response[0].address.state+','+response[0].address.state_district+','+response[0].address.country+','+response[0].address.country_code
        }
       else if(response[0].address.country){
            this.nomaddress=response[0].address.country+','+response[0].address.country_code
        }
        
        console.log(this.nomaddress);
        this.omega = 2;
        if(this.number == false){
         this.autocompleteItems.push(this.nomaddress);
        console.log(this.autocompleteItems);}
     this.lat = response[0].lat
    this.long = response[0].lon
      console.log(this.lat,this.long)  
    }}
    else{
        console.log('neelanshi');
//         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
       
    }}
//    else
//        {
//       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
//        this.openmapmodal();
//    }
    
});}}


//}
 
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
        let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
      // alert("working");
      // alert(lat+','+long);
        var Loading = this.loadCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          content:'Loading',
          dismissOnPageChange: true
        });
        Loading.present().then(() => {
       this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude;
  this.long= resp.coords.longitude;

 console.log(resp.coords.latitude);
  console.log(resp.coords.longitude);
    Loading.dismiss();
//  if(this.nomi !=null){
//      this.l=this.nomi.lat
//      this.lo=this.nomi.lon
//     console.log(this.l,this.lo)
//  }
//  else{
       this.l=this.lat
      this.lo=this.long
//  }

 
   let latLng = new google.maps.LatLng(this.l,this.lo);
  
   console.log(this.data.city);
   
      var postdata = {
           lat:this.l,
           long:this.lo
        }
           var Serialized = this.serializeObj(postdata);
    this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response.data);
                    var resso = JSON.parse(response.data)
            console.log(resso.response)
//            console.log(resso.response.properties.address);
           
            if((response.data == '{"message":"Result not found"}')||(resso.response.properties.address == null)){
        
        
       this.geocoder.geocode({'location': latLng}, ((results, status)=>{
		if (status == google.maps.GeocoderStatus.OK) {
                    if(results == ''){
                        this.ToastMsg('Invalid Location')
                        this.lat =  '';
                       this.long= '';
                       this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
                    }else{
                    if(results[0]){
              console.log(results[0].place_id);          
                         console.log(results[0].formatted_address);
    this.infowindow.setContent(results[0].formatted_address);
//    
          this.infowindow.open(this.map, marker1);
          this.autocomplete.query= results[0].formatted_address;
                    }
   else if (results[1]) {
    this.autocomplete.query= results[1].formatted_address;
    console.log(results[1].formatted_address);
    this.infowindow.setContent(results[1].formatted_address);
    
          this.infowindow.open(this.map, marker1);
           this.autocomplete.query= results[1].formatted_address;
                    }
                }   }
//		
	   })
	   )   
            }  else{
//                var resso = JSON.parse(response.data)
            console.log(resso.response.message)
          if(resso.response.message == "Result not found"){
                      this.ToastMsg('Not found');
                 this.lat = '';
                       this.long= '';
                         this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
          }
          else{
                 var addr= resso.response.properties.address
                 console.log(resso.response)
                 if(addr == null){
                     
                 }
                   this.autocomplete.query= addr;
                   this.data.city = resso.response.properties.city ;
                 console.log(this.data.city);
                   console.log(this.autocomplete.query);
          this.infowindow.setContent(addr);
          this.infowindow.open(this.map, marker);
          }
    }
               });
//      
//       this.geocoder.geocode({'location': latLng}, ((results, status)=>{
//		if (status == google.maps.GeocoderStatus.OK) {
//                    if(results == ''){
//                        this.ToastMsg('Invalid Location')
//                        this.lat =  '';
//                       this.long= '';
//                       this.infowindow.setContent('Error');
//          this.infowindow.open(this.map, marker);
//                    }else{
//                    if(results[0]){
//              console.log(results[0].place_id);          
//                         console.log(results[0].formatted_address);
//    this.infowindow.setContent(results[0].formatted_address);
////    
//          this.infowindow.open(this.map, marker1);
//          this.autocomplete.query= results[0].formatted_address;
//                    }
//   else if (results[1]) {
//    this.autocomplete.query= results[1].formatted_address;
//    console.log(results[1].formatted_address);
//    this.infowindow.setContent(results[1].formatted_address);
//    
//          this.infowindow.open(this.map, marker1);
//           this.autocomplete.query= results[1].formatted_address;
//                    }
//                }   }
////		
//	   })
//	   )
   

       this.MapBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(4.820443, -74.250464),
    new google.maps.LatLng( 4.716435, -74.310888),
     new google.maps.LatLng(4.59393, -74.279989),
      new google.maps.LatLng(4.476882, -74.124808),
       new google.maps.LatLng(4.505632, -73.953146),
        new google.maps.LatLng( 4.681533, -73.92568),
         new google.maps.LatLng(4.858758,  -73.911947),
          new google.maps.LatLng(4.908702, -74.126181),
           new google.maps.LatLng(4.823864,  -74.245657));
//       new google.maps.LatLng(4.820443,  -74.25046399999997),
//           new google.maps.LatLng(4.716435,  -74.31088799999998));

   
 let mapOptions = {
        center: latLng,
        zoom:18,
        Bounds:this.MapBounds,
//        minZoom:100,
//        maxzoom:50,
        minZoom:2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

this.lastPosition = new google.maps.LatLng(4.624335, -74.063644);
this.boundsSet = false;

//   google.maps.event.addListener(this.map, 'bounds_changed', function () {
////    console.log(mapp)
//   console.log(this.boundsSet)
//    console.log(this.MapBounds)
//    if (!this.boundsSet) {
//        this.MapBounds = this.MapBounds;
//        this.boundsSet = true;
//        console.log(this.MapBounds);
//    }
//});
      
    

    console.log(this.map)
    console.log(mapOptions)



    
      var polygoncoords = [
          { lat: 4.820443,lng: -74.250464},
          { lat: 4.716435 , lng: -74.310888},
          {lng: -74.279989, lat: 4.59393},
          {lng: -74.251837, lat: 4.502894},
          {lng: -74.124808, lat: 4.476882},
          {lng: -74.035544, lat: 4.505632},
          {lng: -73.953146, lat: 4.562446},
          {lng: -73.92568, lat: 4.681533},
          {lng: -73.911947, lat: 4.858758},
          {lng: -74.126181, lat: 4.908702}, 
          {lng: -74.245657, lat: 4.823864}

        ]
        
            var bogotapoly = new google.maps.Polygon({
          paths: polygoncoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.05
        });
//       bogotapoly.setMap(this.map);
    //  alert("mapOptions");
      let marker1 = new google.maps.Marker({
         position: latLng,
//         position:new google.maps.LatLng(4.624335, -74.063644),
         draggable: false,
          icon: 'assets/img/location32.png',
         map: this.map,
       }
       );
       map = this.map
//         this.map.addListener('click', function(event) {  
//          latLng = event.latLng
//          console.log(map);
//           console.log(this.markers)
//     var marker = new google.maps.Marker({  
//    position: latLng, 
//    draggable:true,
//    icon: 'assets/img/location.png',
//    map: map  
//  }); 
//    
//    
//     this.markers=[];
//        this.markers.push(marker);
//        
//  });

        let marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         icon: 'assets/img/location.png',
         map: this.map,
         
       }
       );
       
          this.markers=[];
        this.markers.push(marker);

       google.maps.event.addListener(marker, 'dragend', ((marker12)=>{
        
        this.iconname = 'star-outline';
           
      let latLng1 = marker12.latLng; 
      this.lat = latLng1.lat();
      this.long = latLng1.lng();
      console.log(marker12);
      console.log(this.lat)
      console.log(this.long)
//      var pposition = new google.maps.LatLng(this.lat, this.long)
//      console.log(this.MapBounds)
//      console.log(pposition.lat(),pposition.lng())
////       MapBounds.contains(position) ? lastPosition = position : marker.setPosition(lastPosition);
//       if( this.MapBounds.contains(pposition)){
//           this.lastPosition = pposition
//       }else{
//        this.lastPosition = pposition
//           console.log('no sertvice available');
//       }
//       console.log(this.lastPosition.lat(),this.lastPosition.lng())
//    ;
     let latLong = new google.maps.LatLng(this.lat,this.long); 
	  var postdata = {
           lat:this.lat,
           long:this.long
        }
           var Serialized = this.serializeObj(postdata);
    this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response.data == '{"message":"Result not found"}');
                    var resso = JSON.parse(response.data)
            console.log(resso.response)
//            console.log(resso.response.properties.address);
           
            if((response.data == '{"message":"Result not found"}')||(resso.response.properties.address == null)){
        
                 this.geocoder.geocode({'location': latLong}, ((results, status)=>{
		  console.log(results);
                  if(results == ''){
                      this.ToastMsg('Invalid Location');
                       this.lat =  '';
                       this.long= '';
                       this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
                  }else{
		   if (status == google.maps.GeocoderStatus.OK) {
             if (results[0]) {
              console.log(results[0].place_id);
          this.autocomplete.query = results[1].formatted_address;
          console.log(this.autocomplete.query)
          
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
                    }          
          else if (results[1]) {
              console.log(results[1].place_id);
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[1].formatted_address);
          this.infowindow.open(this.map, marker);
         
                    }
                }}
		   
	   })
           
           
   
           
	   )   
            }  else{
//                var resso = JSON.parse(response.data)
            console.log(resso.response.message)
          if(resso.response.message == "Result not found"){
                      this.ToastMsg('Not found');
                 this.lat = '';
                       this.long= '';
                         this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
          }
          else{
                 var addr= resso.response.properties.address
                 console.log(resso.response)
                 if(addr == null){
                     
                 }
                   this.autocomplete.query= addr;
                   this.data.city = resso.response.properties.city ;
                 console.log(this.data.city);
                   console.log(this.autocomplete.query);
          this.infowindow.setContent(addr);
          this.infowindow.open(this.map, marker);
          }
    }
               });
//    this.geocoder.geocode({'location': latLong}, ((results, status)=>{
//		  console.log(results);
//                  if(results == ''){
//                      this.ToastMsg('Invalid Location');
//                       this.lat =  '';
//                       this.long= '';
//                       this.infowindow.setContent('Error');
//          this.infowindow.open(this.map, marker);
//                  }else{
//		   if (status == google.maps.GeocoderStatus.OK) {
//             if (results[0]) {
//              console.log(results[0].place_id);
//          this.autocomplete.query = results[1].formatted_address;
//          console.log(this.autocomplete.query)
//          
////          this.infowindow=new google.maps.InfoWindow({
////              content: results[1].formatted_address,
////          }); 
//          this.infowindow.setContent(results[0].formatted_address);
//          this.infowindow.open(this.map, marker);
//                    }          
//          else if (results[1]) {
//              console.log(results[1].place_id);
//          this.autocomplete.query= results[1].formatted_address;
//          console.log(this.autocomplete.query)
////          this.infowindow=new google.maps.InfoWindow({
////              content: results[1].formatted_address,
////          }); 
//          this.infowindow.setContent(results[1].formatted_address);
//          this.infowindow.open(this.map, marker);
//         
//                    }
//                }}
//		   
//	   })
//           
//           
//   
//           
//	   )
   })); 
      // alert("working1");
      }).catch((error) => {
    console.log('Error getting location', error);
    this.ToastMsg('Error getting location'+','+error);
    Loading.dismissAll();
      let latLng = new google.maps.LatLng(this.lat,this.long); 
   
      this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
        if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
        this.autocomplete.query= results[1].formatted_address;
                        }
                    }
           
         })
         )
         let mapOptions = {
        center: [-74.07231699675322, 4.66336863727521],
        zoom:18,
//        minZoom:100,
//        maxzoom:50,
        minZoom:1 ,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
      
        var polygoncoords = [
          { lat: 4.820443,lng: -74.250464},
          { lat: 4.716435 , lng: -74.310888},
          {lng: -74.279989, lat: 4.59393},
          {lng: -74.251837, lat: 4.502894},
          {lng: -74.124808, lat: 4.476882},
          {lng: -74.035544, lat: 4.505632},
          {lng: -73.953146, lat: 4.562446},
          {lng: -73.92568, lat: 4.681533},
          {lng: -73.911947, lat: 4.858758},
          {lng: -74.126181, lat: 4.908702}, 
          {lng: -74.245657, lat: 4.823864}
        ]
        
            var bogotapoly = new google.maps.Polygon({
          paths: polygoncoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
       bogotapoly.setMap(map);
      
    
//        this.map.setZoom(1);
//        var MapBounds = new google.maps.LatLngBounds(
//    new google.maps.LatLng(35.676263, 13.949096),
//    new google.maps.LatLng(36.204391, 14.89038));

//    google.maps.event.addListener(map, 'dragend', function ()
//    {
//        if (MapBounds.contains(map.getCenter()))
//        {
//            return;
//        }
//        else
//        {
//            map.setCenter(new google.maps.LatLng( 4.624335, -74.063644));
//        }
//    });
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    //  alert("mapOptions");
      let marker1 = new google.maps.Marker({
         position: latLng,
         draggable: false,
          icon: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/4c926fc74d724fe4360e4189e7c926842884614e/markerclusterer/images/m1.png',
         map: this.map,
       }
       );
//      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

        let marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         icon:'assets/img/location.png',
         map: this.map,
//     icon: image,
         
       }
       );
       this.markers=[];
        this.markers.push(marker);
      //  alert("marker");
       google.maps.event.addListener(marker, 'dragend', ((marker12)=>{
             this.iconname = 'star-outline';
      let latLng1 = marker12.latLng; 
      this.lat = latLng1.lat();
      this.long = latLng1.lng();
      console.log(marker12);
      console.log(this.lat)
      console.log(this.long)
      //  alert(this.crlat);
      // alert(this.crlng);
     let latLong = new google.maps.LatLng(this.lat,this.long); 
	 
    this.geocoder.geocode({'location': latLong}, ((results, status)=>{
		  console.log(results);
                  if(results == ''){
                      this.ToastMsg('Invalid Location');
                       this.lat =  '';
                       this.long= '';
                       this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
                  }else{
		   if (status == google.maps.GeocoderStatus.OK) {
             if (results[0]) {
              console.log(results[0].place_id);
          this.autocomplete.query = results[1].formatted_address;
          console.log(this.autocomplete.query)
          
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
                    }          
          else if (results[1]) {
              console.log(results[1].place_id);
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[1].formatted_address);
          this.infowindow.open(this.map, marker);
         
                    }
                }}
		   
	   })
           
           
   
           
	   )
   })); 
     });})



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
    ToastMsg(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'middle'
      
    });
     toast.present();
 
   
  }
  chooseItem1(){
      this.number = true
        let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
      console.log(this.glob_item);
      
//      this.data.city = '';
      //this.autocomplete.query = item.address;
      this.lat = this.lats;
      this.long= this.longs;
        this.map.setZoom(17);
         var c = this.map.setCenter(new google.maps.LatLng(this.lat, this.long));
         if(this.markers != ''){
              this.deleteMarkers();
               this.markers = [];
         }
           var latlng = new google.maps.LatLng(this.lat, this.long);

      console.log(this.lat,this.long);
      this.deleteMarkers();
      this.markers = [];
      console.log(this.markers);
                var marker = new google.maps.Marker({
            map: this.map,
            icon: 'assets/img/location.png',
            draggable:true,
            position: latlng
          });
          console.log(marker);
         
            this.markers.push(marker);
  google.maps.event.addListener(marker, 'dragend', ((marker31)=>{
        this.iconname = 'star-outline';
      var latLng = marker31.latLng; 
      this.crlat = latLng.lat()
      this.crlng = latLng.lng()
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
       this.markers=[];
       this.markers.push(marker);
       var postdata = {
           lat:this.crlat,
           long:this.crlng,
        }
           var Serialized = this.serializeObj(postdata);
    this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            var resso = JSON.parse(response.data)
            console.log(resso.response)
//            console.log(resso.response.properties.address);
            if((resso.response.properties.address == null)||(response.data == '{"message":"Result not found"}')){
                console.log(resso.response.properties);
//                this.AlertMsg1('Sorry we cannot provide our services for this location')
//                 this.autocomplete.query= '';
                 let latLong = new google.maps.LatLng(this.crlat, this.crlng); 
	  this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
		  console.log(results);
                  if(results == ''){
                      this.ToastMsg('Invalid Location');
                       this.autocomplete.query= 'Error';
                 this.lat = '';
                       this.long= '';
                         this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
                  }else{
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
          this.autocomplete.query= results[0].formatted_address;
          console.log(this.autocomplete.query);
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
          
                    }
                }}
		   
	   })
	   ) 
            }
            else{
            console.log(resso.response.message)
          if(resso.response.message == "Result not found"){
                      this.ToastMsg('Not found');
                 this.lat = '';
                       this.long= '';
                         this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
          }
          else{
                 var addr= resso.response.properties.address
                   this.autocomplete.query= addr;
                   this.data.city = resso.response.properties.city ;
                 console.log(this.data.city);
                   console.log(this.autocomplete.query);
          this.infowindow.setContent(addr);
          this.infowindow.open(this.map, marker);
          }
    }
               });

   }));
   
     this.infowindow.setContent(this.glob_item.address);
    this.infowindow.open(this.map, marker)
          console.log('hello');
        

          
      this.autocompleteItems = [];
      
  }
    chooseItem2(){
      console.log(this.glob_item)
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });

    var latlng = {lat: parseFloat(this.lat), lng: parseFloat(this.long)}
    console.log(latlng);


    this.geocoder.geocode({'location': latlng}, ((results, status)=>{
        console.log(status)
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0])
         if(this.data.city == undefined){
    this.data.city='Bogota'
}
console.log(this.data.city);
             this.deleteMarkers();
              this.markers = [];
          console.log(this.markers);
        
          this.map.setZoom(17);
          this.map.setCenter(results[0].geometry.location);
          this.lat = results[0].geometry.location.lat();
          this.long = results[0].geometry.location.lng();
          console.log( this.lat,this.long );
         
          
          var marker = new google.maps.Marker({
            map: this.map,
            draggable:true,
            icon: 'assets/img/location.png',
            position: results[0].geometry.location
          });
          this.markers.push(marker);
  google.maps.event.addListener(marker, 'dragend', ((marker21)=>{
        this.iconname = 'star-outline';
      var latLng = marker21.latLng; 
      this.crlat = latLng.lat();
      this.crlng = latLng.lng();
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
       this.markers=[];
       this.markers.push(marker);
            
     let latLong = new google.maps.LatLng(this.crlat, this.crlng); 
     
     
  var postdata = {
           lat:this.crlat,
           long:this.crlng
        }
           var Serialized = this.serializeObj(postdata);
    this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response.data == '{"message":"Result not found"}');
           var resso = JSON.parse(response.data)
            console.log(resso.response)
//            console.log(resso.response.properties.address);
            if((resso.response.properties.address == null)||(response.data == '{"message":"Result not found"}')){
                 this.geocoder.geocode({'location': latLong}, ((results, status)=>{
		  console.log(results);
                  if(results == ''){
                      this.ToastMsg('Invalid Location');
                       this.lat =  '';
                       this.long= '';
                       this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
                  }else{
		   if (status == google.maps.GeocoderStatus.OK) {
             if (results[0]) {
              console.log(results[0].place_id);
          this.autocomplete.query = results[1].formatted_address;
          console.log(this.autocomplete.query)
          
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
                    }          
          else if (results[1]) {
              console.log(results[1].place_id);
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[1].formatted_address);
          this.infowindow.open(this.map, marker);
         
                    }
                }}
		   
	   })
           
           
   
           
	   )   
            }       else{
                var resso = JSON.parse(response.data)
            console.log(resso.response.message)
          if(resso.response.message == "Result not found"){
                      this.ToastMsg('Not found');
                 this.lat = '';
                       this.long= '';
                         this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
          }
          else{
                 var addr= resso.response.properties.address
                 console.log(resso.response)
                   this.autocomplete.query= addr;
                   this.data.city = resso.response.properties.city ;
                 console.log(this.data.city);
                   console.log(this.autocomplete.query);
          this.infowindow.setContent(addr);
          this.infowindow.open(this.map, marker);
          }
    }
               }); 
   }));
          console.log('hello');
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
 getItem(item){
     console.log(item);
     if(item.description){
         console.log('google');
          this.autocomplete.query=item.description;
          this.glob_item = item;
          this.autocompleteItems = [];
          console.log(this.autocompleteItems)
//          this.chooseItem(item);
     }
     else if(item.address){
         console.log('lupap');
         this.glob_item = item;
         this.autocomplete.query=item.address;
this.autocompleteItems = [];
  console.log(this.autocompleteItems)
     }
     else{
//      this.chooseItem2(item);
           console.log('nomi');
         console.log('else part');
         this.glob_item = item;
           this.autocomplete.query=item;
          this.autocompleteItems = [];
            console.log(this.autocompleteItems)
     }
    
     
 }
    chooseItem(){
        let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
        this.number = true
        this.lat='';
        this.long='';
    console.log(this.glob_item)
   // this.autocomplete.query=item.description;
   
    if (this.glob_item.terms[2].value == 'Bogota'){
        this.data.city = 'Bogota';
    }
    console.log(this.glob_item.lat)
     console.log(this.glob_item.lng)
    
    this.geocoder.geocode({'placeId': this.glob_item.place_id}, ((results, status)=>{
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0])
            
        
          this.map.setZoom(17);
          this.map.setCenter(results[0].geometry.location);
          this.lat = results[0].geometry.location.lat();
          this.long = results[0].geometry.location.lng();
          console.log( this.lat,this.long );
          this.deleteMarkers();
           this.markers = [];
          console.log(this.markers);
          
          var marker = new google.maps.Marker({
            map: this.map,
            draggable:true,
            icon: 'assets/img/location.png',
            position: results[0].geometry.location
          });
           this.markers.push(marker);
  google.maps.event.addListener(marker, 'dragend', ((marker21)=>{
        this.iconname = 'star-outline';
      var latLng = marker21.latLng; 
      this.crlat = latLng.lat();
      this.crlng = latLng.lng();
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
       this.markers=[];
       this.markers.push(marker);
       let latLong = new google.maps.LatLng(this.crlat, this.crlng); 
        var postdata = {
           lat:this.crlat,
           long:this.crlng
        }
           var Serialized = this.serializeObj(postdata);
    this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response.data == '{"message":"Result not found"}');
           var resso = JSON.parse(response.data)
            console.log(resso.response)
//            console.log(resso.response.properties.address);
            if((resso.response.properties.address == null)||(response.data == '{"message":"Result not found"}')){
                 this.geocoder.geocode({'location': latLong}, ((results, status)=>{
		  console.log(results);
                  if(results == ''){
                      this.ToastMsg('Invalid Location');
                       this.lat =  '';
                       this.long= '';
                       this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
                  }else{
		   if (status == google.maps.GeocoderStatus.OK) {
             if (results[0]) {
              console.log(results[0].place_id);
          this.autocomplete.query = results[1].formatted_address;
          console.log(this.autocomplete.query)
          
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
                    }          
          else if (results[1]) {
              console.log(results[1].place_id);
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
//          this.infowindow=new google.maps.InfoWindow({
//              content: results[1].formatted_address,
//          }); 
          this.infowindow.setContent(results[1].formatted_address);
          this.infowindow.open(this.map, marker);
           this.goglat = this.crlat;
          this.goglong = this.crlng;
         
                    }
                }}
		   
	   })
           
           
   
           
	   )   
            }       else{
                var resso = JSON.parse(response.data)
            console.log(resso.response.message)
          if(resso.response.message == "Result not found"){
                      this.ToastMsg('Not found');
                 this.lat = '';
                       this.long= '';
                         this.infowindow.setContent('Error');
          this.infowindow.open(this.map, marker);
          }
          else{
                 var addr= resso.response.properties.address
                 console.log(resso.response)
                   this.autocomplete.query= addr;
                   this.data.city = resso.response.properties.city ;
                 console.log(this.data.city);
                   console.log(this.autocomplete.query);
          this.infowindow.setContent(addr);
          this.infowindow.open(this.map, marker);
          this.goglat = this.crlat;
          this.goglong = this.crlng;
          }
    }
               });
       
       
//            var pposition = new google.maps.LatLng(this.crlat, this.crlng)
//      console.log(this.MapBounds)
//      console.log(pposition.lat(),pposition.lng())
////       MapBounds.contains(position) ? lastPosition = position : marker.setPosition(lastPosition);
//       if( this.MapBounds.contains(pposition)){
//           this.lastPosition = pposition
//       }else{
//        this.lastPosition = pposition
//           console.log('no sertvice available');
//       }
//       console.log(this.lastPosition.lat(),this.lastPosition.lng())
//    ;
//     let latLong = new google.maps.LatLng(this.crlat, this.crlng); 
//     
//	  this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
//		  console.log(results);
//                  if(results == ''){
//                      this.ToastMsg('Invalid Location');
//                       this.autocomplete.query= 'error';
//                 this.lat = '';
//                       this.long= '';
//                         this.infowindow.setContent('Error');
//          this.infowindow.open(this.map, marker);
//                  }else{
//		   if (status == google.maps.GeocoderStatus.OK) {
//          if (results[0]) {
//          this.autocomplete.query= results[0].formatted_address;
//          
//       if(this.data.city == undefined){
//    this.data.city='Bogota'
//}else if(this.data.city != results[4].formatted_address ){
//     this.data.city=results[4].formatted_address
//}
//          
//          console.log(this.data.city);
//          console.log(this.autocomplete.query);
//          this.infowindow.setContent(results[0].formatted_address);
//          this.infowindow.open(this.map, marker);
//          this.goglat = this.crlat;
//          this.goglong = this.crlng;
//          
//                    }
//                }}
//		   
//	   })
//	   ) 
   }));
          console.log('hello');
          this.infowindow.setContent(results[0].formatted_address);
          this.infowindow.open(this.map, marker);
          this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
  .then((coordinates: NativeGeocoderForwardResult) =>{ console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
    this.goglat=coordinates.latitude
    this.goglong=coordinates.longitude 
    console.log(this.goglat+' '+this.goglong);
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
      console.log(this.data.additional)
   if(this.data.additional == undefined){
       this.data.additional = '';
   }
      console.log(this.autocomplete.query)
       if((this.lat=='')&&(this.long=='')){
           this.ToastMsg('Nothing is saved');
       }else{
           if ((this.goglat)&&(this.goglong)){
               this.lat=this.goglat
               this.long=this.goglong
               console.log('google')
           }else{
               this.lat= this.lat
               this.long=this.long
               console.log('nomi')
           }
      this.viewCtrl.dismiss({
         
        address:this.data.additional + ' '+ this.autocomplete.query,
        lati: this.lat,
        longi:this.long
      });
       
     
    }}

   clearMarkers() {
       console.log('clear');
        this.setMapOnAll(null);
      
      }
       setMapOnAll(map) {
         
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(map);
        }
        console.log(this.markers)
          console.log('setmap');
      }
       deleteMarkers() {
       console.log('delete');
         this.clearMarkers();
        this.markers = [];
      }
}
