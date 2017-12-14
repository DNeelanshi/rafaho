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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage:any = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public http:Http,
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
//    alert('Rahul maury55');
     if(localStorage.getItem('UserDetail')){
      this.rootPage = TabsPage;
     }else{
       this.rootPage = SigninPage;
     }
  }
}
