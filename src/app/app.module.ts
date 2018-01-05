import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
import { MapmodalPage } from '../pages/mapmodal/mapmodal';
import { NominatimapPage } from '../pages/nominatimap/nominatimap';
import { ChatPage } from '../pages/chat/chat';
import { FavoritesPage } from '../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { RafahoPage } from '../pages/rafaho/rafaho';
import { EditprefrencePage } from '../pages/editprefrence/editprefrence'
import { ProfilePage } from '../pages/profile/profile';
import { WhyrafahoPage } from '../pages/whyrafaho/whyrafaho';
import { HelpPage } from '../pages/help/help';
import { TermsPage } from '../pages/terms/terms';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { AddwalletPage } from '../pages/addwallet/addwallet';
import { FrequentquestionPage } from '../pages/frequentquestion/frequentquestion';
import { FeedbackPage } from '../pages/feedback/feedback';
import { OrderdetialPage } from '../pages/orderdetial/orderdetial';
import { ForgtpwdPage } from '../pages/forgtpwd/forgtpwd';
import { ChangepwdPage } from '../pages/changepwd/changepwd';
import { FilterPage } from '../pages/filter/filter';
import { ProductviewPage } from '../pages/productview/productview';
import { CartPage } from '../pages/cart/cart';
import { PaymentPage } from '../pages/payment/payment';
import { ChefdetialsPage } from '../pages/chefdetials/chefdetials';
import { ReviewsPage } from '../pages/reviews/reviews';
import { SelectdishPage } from '../pages/selectdish/selectdish';
import { ProductlistPage } from '../pages/productlist/productlist';
import { LocationPage } from '../pages/location/location';
import { Appsetting } from '../providers/appsetting';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentModule } from 'angular2-moment';
import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    FavoritesPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    RafahoPage,
    ProfilePage,
    WhyrafahoPage,
    HelpPage,
    TermsPage,
    EditprefrencePage,
    EditprofilePage,
    AddwalletPage,
    FrequentquestionPage,
    FeedbackPage,
    OrderdetialPage,
    ForgtpwdPage,
    ChangepwdPage,
    FilterPage,
    ProductviewPage,
    CartPage,
    PaymentPage,
    ChefdetialsPage,
    ReviewsPage,
    SelectdishPage,
    ProductlistPage,
    LocationPage,
    NominatimapPage,
    MapmodalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    FavoritesPage,
    HomePage,
    TabsPage,
    SigninPage,
    EditprefrencePage,
    SignupPage,
    RafahoPage,
    ProfilePage,
    WhyrafahoPage,
    HelpPage,
    TermsPage,
    EditprofilePage,
    AddwalletPage,
    FrequentquestionPage,
    FeedbackPage,
    OrderdetialPage,
    ForgtpwdPage,
    ChangepwdPage,
    NominatimapPage,
    FilterPage,
    ProductviewPage,
    CartPage,
    PaymentPage,
    ChefdetialsPage,
    ReviewsPage,
    SelectdishPage,
    ProductlistPage,
    LocationPage,
    MapmodalPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Appsetting,
    Device,
    Geolocation,
    NativeGeocoder,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
