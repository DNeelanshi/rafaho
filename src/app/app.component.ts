import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appsetting } from '../providers/appsetting';
import {Http, Headers, RequestOptions} from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { RafahoPage } from '../pages/rafaho/rafaho';
import { FilterPage } from '../pages/filter/filter';
import { SelectdishPage } from '../pages/selectdish/selectdish';
import { MapmodalPage } from '../pages/mapmodal/mapmodal';
import { NominatimapPage } from '../pages/nominatimap/nominatimap';
import { LocationPage } from '../pages/location/location';
//import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage:any = '';

  constructor(platform: Platform, statusBar: StatusBar,splashScreen: SplashScreen,public http:Http,
  public appsetting: Appsetting) {
   platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       statusBar.overlaysWebView(true);
      statusBar.hide();
      // ionicConfigProvider.views.swipeBackEnabled(false)
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      splashScreen.hide();
    });
 
//    this.rootPage=LocationPage;
//    alert('Neelanshi');
     if(localStorage.getItem('UserDetail')&&localStorage.getItem('Userpref')){
         var b = JSON.parse(localStorage.getItem('UserDetail'))._id;
          var a = JSON.parse(localStorage.getItem('Userpref')).app_user_id;
      console.log(a,b);
     
      if(b==a)
          {
           this.rootPage = TabsPage;
      }else{
           this.rootPage = SigninPage;
      }
      
     }else if(localStorage.getItem('UserDetail')){
     
//         this.rootPage = LocationPage;
//         
//     }else{
       this.rootPage = SigninPage;
     }else{
         this.rootPage = SigninPage;
     }
      
  }
}
