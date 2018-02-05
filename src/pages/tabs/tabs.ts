import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { FavoritesPage } from '../favorites/favorites';
import { RafahoPage } from '../rafaho/rafaho';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
//import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
//import { FittingroomPage } from '../fittingroom/fittingroom';
//import { MyfavoritesPage } from '../myfavorites/myfavorites';
//import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { AfterViewInit, OnInit } from '@angular/core';
//import { SearchPage } from '../search/search';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = RafahoPage;
  tab4Root = ChatPage;
  tab5Root = ProfilePage;
count: any;
  Tab: any;
  constructor(public events: Events,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {

  }
    tabIndex(event) {
     console.log('calling----'+event);

    var domevent = event.srcElement.parentNode.id || event.path[1].id;
    console.log(domevent)
    var split = domevent.split('-');
    var target = split[2];
    console.log(target)
    if (target == '1') {
      this.events.publish('page', 'myFav');     
    } else if (target == '2') {
      this.events.publish('page2', 'rafaho'); 
    } else if(target == '3'){
         this.events.publish('page3', 'chat');
    }
     else if(target == '4'){
         this.events.publish('page4', 'profile');
    }else{
        this.events.publish('page0', 'home');
    }
  }
}
