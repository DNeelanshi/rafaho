import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { FavoritesPage } from '../favorites/favorites';
import { RafahoPage } from '../rafaho/rafaho';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = RafahoPage;
  tab4Root = ChatPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
