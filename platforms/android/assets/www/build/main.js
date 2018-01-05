webpackJsonp([25],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddwalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddwalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddwalletPage = (function () {
    function AddwalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddwalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddwalletPage');
    };
    return AddwalletPage;
}());
AddwalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addwallet',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/addwallet/addwallet.html"*/'<!--\n  Generated template for the AddwalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n     <ion-title>\n     Add Money\n      <p>Card Details</p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec">\n				<ion-list>\n			      <ion-grid>\n			      	<ion-row>\n			      		<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Add Money</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12 class="right left">\n							<h2 style="font-size: 15px; color: #f27242; font-weight: 500;">Credit card details</h2>\n						  <ion-item>\n\n						    <ion-label stacked>Card Number</ion-label>\n				   		    <ion-input type="text"></ion-input>\n				   		    <div class="image" item-end>\n				   		    	<img src="assets/img/visa.png">\n				   		    </div>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>cardholder</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>Expiery Date</ion-label>\n						    <ion-input type="date" class="date"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6 class="right">\n						  <ion-item>\n						    <ion-label stacked>CVV</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n					</ion-row>\n				  </ion-grid>\n				</ion-list>\n			</form>\n		</div>\n		<div class="top-sec">\n		   <ion-item style="padding: 0px">\n			  <ion-label style="color: #565656; font-size: 13px; font-weight: 500;">Add card to wallet</ion-label>\n			  <ion-checkbox color="theme-header"></ion-checkbox>\n			</ion-item>\n			<button ion-button full>Continue</button>\n		</div>\n		<div class="bottom-sec">\n			<h3 style="font-size: 15px; color: #f27242; font-weight: 500;">Select your payment method</h3>\n			    <ion-list>\n			        <ion-item>\n			            Credit Card\n			          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n			        </ion-item>\n			         <ion-item>\n			            Debit Card\n			          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n			        </ion-item>\n			    </ion-list>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/addwallet/addwallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AddwalletPage);

//# sourceMappingURL=addwallet.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Payment',
            subTitle: 'Your payment has been successfully processed.',
            cssClass: 'alertDanger'
        });
        alert.present();
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="../assets/img/cart.png">\n       </div>\n      </button>     \n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="top">\n		<h2>Select Payment Method</h2>\n	</div>\n	 <ion-list>\n        <ion-item (click)="showAlert()">\n            <h3>Wallet</h3>\n            <p>Current Balance  $60</p>\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="showAlert()">\n        	<ion-thumbnail item-start>\n	        <img src="assets/img/paypal.png">\n	      </ion-thumbnail>\n            <h3>Paypal</h3>\n            <p>username@gmail.com</p>\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productview_productview__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.product = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productview_productview__["a" /* ProductviewPage */]);
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Favorites</ion-title>\n  </ion-navbar>\n   <div class="segment-sec">\n     <ion-toolbar>\n	  <ion-segment color="theme-header" [(ngModel)]="pet">\n	    <ion-segment-button value="kittens">\n	      Favorites\n	    </ion-segment-button>\n	    <ion-segment-button value="puppies">\n	      Suggestions\n	    </ion-segment-button>\n	  </ion-segment>\n	  </ion-toolbar>\n	</div>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="content-sec">\n		<div [ngSwitch]="pet">\n		  <ion-grid *ngSwitchCase="\'kittens\'">\n		  	<ion-row>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtthree.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtfour.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n\n		  		\n		  	</ion-row>\n		  </ion-grid>\n		  <ion-grid *ngSwitchCase="\'puppies\'">\n		  	<ion-row>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtthree.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtfour.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n\n		  		\n		  	</ion-row>\n		  </ion-grid>\n		\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/favorites/favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RafahoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderdetial_orderdetial__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectdish_selectdish__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RafahoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RafahoPage = (function () {
    function RafahoPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    RafahoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RafahoPage');
    };
    RafahoPage.prototype.selectModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__selectdish_selectdish__["a" /* SelectdishPage */]);
        modal.present();
    };
    RafahoPage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderdetial_orderdetial__["a" /* OrderdetialPage */]);
    };
    return RafahoPage;
}());
RafahoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rafaho',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/rafaho/rafaho.html"*/'<!--\n  Generated template for the RafahoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="theme-header" >\n    <ion-title>Rafaho</ion-title>\n  </ion-navbar>\n <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment color="theme-header" [(ngModel)]="pet">\n    <ion-segment-button value="kittens" style="border-right: none;">\n     Active Order\n    </ion-segment-button>\n    <ion-segment-button value="puppies" style="border-left: none; border-right: none;">\n      Pending Order\n    </ion-segment-button>\n    <ion-segment-button value="History" style="border-left: none;">\n      Order History\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n\n</ion-header>\n\n\n<ion-content>\n<div class="content-sec">\n	<div [ngSwitch]="pet">\n	<!-- pending order include hear -->\n	  <ion-list *ngSwitchCase="\'puppies\'">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	   <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	  </ion-list>\n	  <!-- pending end hear -->\n	  <!-- active order start -->\n	    <ion-list *ngSwitchCase="\'kittens\'">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2 (click)="order()"> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	   <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	  </ion-list>\n	  <!-- active order end here -->\n	  <ion-list *ngSwitchCase="\'History\'">\n	    <ion-item>\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img src="assets/img/opecity.png">\n	        <p>Cancelled</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	   <ion-item>\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img src="assets/img/opecity.png">\n	        <p style="background-color: #2bb600;">Compeleted</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img src="assets/img/opecity.png">\n	        <p>Cancelled</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin </h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	  </ion-list>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/rafaho/rafaho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], RafahoPage);

//# sourceMappingURL=rafaho.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderdetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderdetialPage = (function () {
    function OrderdetialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderdetialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderdetialPage');
    };
    return OrderdetialPage;
}());
OrderdetialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderdetial',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/orderdetial/orderdetial.html"*/'<!--\n  Generated template for the OrderdetialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Orderdetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="top-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 class="left">\n					  <div class="chef">\n						<h5>Chef Samuel Linder</h5>\n					  </div>\n					</ion-col>\n					<ion-col col-6 class="right">\n					  <div class="phn">\n						<h5>9041-601-775</h5>\n						<span><img src="../assets/img/msg.png"></span>\n					  </div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	<div class="text-sec">\n		\n		<div class="mid-sec">\n			<h5>Customer Address:</h5>\n			<p>71 Pilgrim Avenue</p>\n			<p>Chevy Chase,MD 20815</p>\n			<div class="rghtbtn">\n				<button ion-button end>Order Cancle</button>\n			</div>\n		</div>\n		<div class="bottom-sec">\n			<ion-list>\n				<ion-item>\n					<h5 item-start class="strt">Booking Date & Time</h5>\n					<p>21 August 2017</p>\n					<p item-end class="ennd">9:05am</p>\n				</ion-item>\n			</ion-list>\n\n		</div>\n	</div>\n	<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="../assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	</ion-list>\n</div>\n<div class="total">\n	<h2 class="left">Subtotal</h2>\n	<h2 class="right">$606.00</h2>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/orderdetial/orderdetial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], OrderdetialPage);

//# sourceMappingURL=orderdetial.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectdishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SelectdishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectdishPage = (function () {
    function SelectdishPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SelectdishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectdishPage');
    };
    SelectdishPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SelectdishPage;
}());
SelectdishPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-selectdish',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/selectdish/selectdish.html"*/'<!--\n  Generated template for the SelectdishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n  	<button  start color="theme-header" style="background-color: #f27242; color: #fff;" (click)="dismiss()">\n      <ion-icon name="close" style="font-size: 30px;"></ion-icon>\n    </button>\n    <ion-title>\n    	 Select Dish\n    </ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">Select All</button>     \n    </ion-buttons>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	     <p class="p-note" style="white-space: normal; font-weight: 500; color: #000000; font-size: 12px;"><span style="color: #f27242;">Reg</span> $16.25</p>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>	       \n	    </ion-item>\n		    <ion-item>\n		      <ion-thumbnail item-start>\n		        <img src="../assets/img/southfod.png">\n		      </ion-thumbnail>\n		      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n			      <p>Idli,sambhar, Kerla</p>\n		    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	    </ion-item>\n	   \n	</ion-list>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="theme-header">Add Dish</button>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/selectdish/selectdish.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], SelectdishPage);

//# sourceMappingURL=selectdish.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefdetialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reviews_reviews__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productview_productview__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChefdetialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChefdetialsPage = (function () {
    // diseases = [
    //   { title: "About Me", description: "Speaking enthusiastically about and demonstrating their passion for food, flavours and delectable culinary creations from every corner of the globe, our celebrity chefs have unrivalled knowledge and expertise when it comes to all things culinary!" },
    //   { title: "Work History", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
    //   { title: "list of award", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." }
    // ];
    function ChefdetialsPage(navCtrl, appsetting, http, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.array = [];
        this.splarray = [];
        //       alert('hjhh');
    }
    ChefdetialsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChefdetialsPage');
        this.getchefdetail();
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ChefdetialsPage.prototype.getchefdetail = function () {
        if (localStorage.getItem('Chefdetail')) {
            this.array.push(JSON.parse(localStorage.getItem('Chefdetail')));
            console.log(this.array);
            console.log(this.array[0].products);
            this.splarray = JSON.parse(localStorage.getItem('Chefdetail'));
            console.log(this.splarray.products);
        }
    };
    ChefdetialsPage.prototype.dishview = function (prod) {
        console.log(prod);
        //       console.log(this.splarray.products);
        localStorage.setItem('producttss', JSON.stringify(prod));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productview_productview__["a" /* ProductviewPage */]);
    };
    ChefdetialsPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__reviews_reviews__["a" /* ReviewsPage */]);
    };
    return ChefdetialsPage;
}());
ChefdetialsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chefdetials',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/chefdetials/chefdetials.html"*/'<!--\n  Generated template for the ChefdetialsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>\n      Chef Details\n      <p>Online Chef list</p>\n    </ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top-sec" padding>\n	<div class="top">\n		<ion-grid style="padding: 0px;">\n		<ion-row *ngFor="let dat of array">\n			<ion-col col-3 style="padding-left: 0px">\n				<div class="image">\n					<img *ngIf ="dat?.user_image"  src="{{dat?.user_image}}">\n             <img *ngIf ="!dat?.user_image" src="assets/img/amanda.png">\n				</div>\n			</ion-col>\n			<ion-col col-9>\n                            <div class="text"  >\n					<h2>{{dat?.firstname}} {{dat?.lastname}}</h2>\n				    <h3><span><ion-icon name="pin"></ion-icon></span>{{dat?.address}}</h3>\n				    <p>$500 Min order</p>\n				    <h5 (click)="review()">\n				     <ul>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     </ul>\n				    View Reviews</h5>\n				</div>\n				\n			</ion-col>\n			\n		</ion-row>\n	</ion-grid>\n	</div>\n</div>\n	\n	<div class="special" *ngFor="let dats of array">\n		<h3>Specialities</h3>\n		<ion-list *ngFor="let spec of dats.specialties">\n			 <ion-item >\n			      <ion-thumbnail item-start>\n                                    \n			        <img *ngIf="spec?.specialities_product_image1" src="{{spec?.specialities_product_image1}}">\n                               <img *ngIf="!spec?.specialities_product_image1" src="assets/img/option.png">\n                               \n			      </ion-thumbnail>\n			      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">{{spec?.specialties_product}}</h2>\n			      <p>Idli,sambhar, Kerla</p>\n			      <ion-note item-end="" class="note note-ios">3/4</ion-note>\n		    </ion-item>\n<!--		     <ion-item>\n			      <ion-thumbnail item-start>\n			        <img src="assets/img/southfod.png">\n			      </ion-thumbnail>\n			      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n			      <p>Idli,sambhar, Kerla</p>\n			      <ion-note item-end="" class="note note-ios">3/4</ion-note>\n		    </ion-item>-->\n		</ion-list>\n	</div>\n	<div class="product" padding>\n		<ion-grid style="padding:0px;"  *ngFor="let datss of array" >\n			<div class="text">\n					<h3>Our Products</h3>\n				</div>\n                          \n			<ion-row>\n				\n				<ion-col col-12 style="padding-left: 0px">\n                                    <ion-slides slidesPerView="3">\n                                         <ion-slide  *ngFor="let prod of datss.products">\n                                            <ion-row >\n                                             <ion-col>\n                                             <div class="colm" (click)="dishview(prod)">\n						<div class="image" style="width: 100%; float: left; height:90px;">\n							<img *ngIf ="prod?.product_image0" src="{{prod?.product_image0}}" style="width: 100%; float: left; height:100%;">\n                                                         <img *ngIf = "!prod?.product_image0" src="assets/img/option.png" >\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>{{prod?.product_name}}</p>\n						</div>\n<!--						<div class="offer" style="position: absolute; background-color: #2bb600; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #fff; font-weight: 400;">20% off</p>\n						</div>-->\n					</div>\n                                             </ion-col>\n<!--                                                  <ion-col col-4 >\n                                             <div class="colm" (click)="dishview(prod)">\n						<div class="image" style="width: 100%; float: left;">\n							<img *ngIf ="prod?.product_image0" src="{{prod?.product_image0}}" style="width: 100%; float: left;">\n                                                      \n                                                         <img *ngIf ="!prod?.product_image0" src="assets/img/option.png">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>{{prod?.product_name}}</p>\n						</div>\n						<div class="offer" style="position: absolute; background-color: #2bb600; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #fff; font-weight: 400;">20% off</p>\n						</div>\n					</div>\n                                             </ion-col>\n                                                  <ion-col col-4 >\n                                             <div class="colm" (click)="dishview(prod)">\n						<div class="image" style="width: 100%; float: left;">\n							<img *ngIf ="prod?.product_image0" src="{{prod?.product_image0}}" style="width: 100%; float: left;">\n                                                      \n                                                         <img *ngIf ="!prod?.product_image0" src="assets/img/option.png">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>{{prod?.product_name}}</p>\n						</div>\n						<div class="offer" style="position: absolute; background-color: #2bb600; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #fff; font-weight: 400;">20% off</p>\n						</div>\n					</div>\n                                             </ion-col>-->\n                                                </ion-row>\n  \n  </ion-slide>\n                    \n\n					\n                                    </ion-slides>\n				</ion-col>\n<!--				<ion-col col-4 style="padding: 5px 2.5px;">\n					<div class="colm">\n						<div class="image" style="width: 100%; float: left;">\n							<img src="assets/img/productone.png" style="width: 100%; float: left;">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>Honey-Chipotle Shrimp Salad</p>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col col-4 style="padding-right: 0px">\n					<div class="colm">\n						<div class="image" style="width: 100%; float: left;">\n							<img src="assets/img/productone.png" style="width: 100%; float: left;">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>Honey-Chipotle Shrimp Salad</p>\n						</div>\n						<div class="offer" style="position: absolute; background-color: #ffe400; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #000; font-weight: 400;">10% off</p>\n						</div>\n					</div>\n				</ion-col>-->\n			</ion-row>\n		</ion-grid>\n	</div>\n	<div class="about">\n		<h3>About Me</h3>\n		<p>Speaking enthusiastically about and demonstrating their passion for food, flavours and delectable culinary creations from every corner of the globe, our celebrity chefs have unrivalled knowledge and expertise when it comes to all things culinary!</p>\n	</div>\n	<!-- <div class="acrdin">\n\n		  <ion-list style="margin-bottom: 0px;">\n		  <ion-item *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n		    <h3>\n		      {{d.title}}\n		      <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-up\' : \'arrow-forward\'" style="margin: 0; float: right;"></ion-icon>\n		    </h3>\n		    <div class="dsprtion" *ngIf="isGroupShown(i)">{{d.description}}</div>\n		  </ion-item>\n		</ion-list>\n	</div> -->\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/chefdetials/chefdetials.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */]])
], ChefdetialsPage);

//# sourceMappingURL=chefdetials.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewsPage = (function () {
    function ReviewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewsPage');
    };
    return ReviewsPage;
}());
ReviewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reviews',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/reviews/reviews.html"*/'<!--\n  Generated template for the ReviewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>View Reviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top">\n		<ion-list style="margin: 0;">\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/profile.png">\n		    </ion-avatar>\n		    <h2>Chef Samuel Linder</h2>\n			<h3><span><ion-icon name="pin"></ion-icon></span> New York</h3>\n\n		      <div class="btn" item-end>\n		      		<ul>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     </ul>\n				    <h4>262 Reviews</h4>\n		      </div>     \n		 \n		  </ion-item>\n		</ion-list>\n	</div>\n	<div class="bottom">\n		<ion-list>\n		  <ion-item>\n		    <ion-thumbnail item-start>\n		        <img src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		   <ion-item>\n		    <ion-thumbnail item-start>\n	          <img src="assets/img/southfood.png">\n	        </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		   <ion-item>\n		    <ion-thumbnail item-start>\n		        <img src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar style="padding: 6px;">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<div>\n			<div class="star">\n				<ul>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			    </ul>\n			</div>\n			<ion-buttons end>\n		      <button ion-button icon-only class="btnprofile">Submit</button>     \n		    </ion-buttons>\n		</div>\n		\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/reviews/reviews.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ReviewsPage);

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productview_productview__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, appsetting, http, navParams, toastCtrl, loadCtrlr) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadCtrlr = loadCtrlr;
        this.array = [];
        //       alert('hello');
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
        this.getprodetail();
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ProductlistPage.prototype.getprodetail = function () {
        if (localStorage.getItem('dishprod')) {
            this.array = JSON.parse(localStorage.getItem('dishprod'));
            console.log(this.array);
            //                alert('cdf');
        }
    };
    ProductlistPage.prototype.dishview = function (pro) {
        console.log(pro);
        localStorage.setItem('producttss', JSON.stringify(pro));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productview_productview__["a" /* ProductviewPage */]);
    };
    ProductlistPage.prototype.cart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    return ProductlistPage;
}());
ProductlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productlist',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/productlist/productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Menu\n      \n    </ion-title>\n\n\n     <ion-buttons end (click)="cart()">\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n          <p><span>2</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content>\n	<div class="content-sec">\n		<ion-list *ngFor="let pro of array">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="{{pro?.product_image0}}">\n	      </ion-thumbnail>\n	      <h2 (click)="dishview(pro)"> <img class="imgicon" width="11px" src="assets/img/acicon.png" >{{pro?.product_name}}</h2>\n	      <p>{{pro?.product_ingredients}}</p>\n              <h3>Per plate ${{pro?.product_price}}</h3>\n	      <button ion-button outline item-end (click)="cart()">ADD TO CART</button>	       \n	    </ion-item>\n<!--	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>-->\n	     \n	\n	   \n	</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/productlist/productlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyrafahoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WhyrafahoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhyrafahoPage = (function () {
    function WhyrafahoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WhyrafahoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhyrafahoPage');
    };
    return WhyrafahoPage;
}());
WhyrafahoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-whyrafaho',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/whyrafaho/whyrafaho.html"*/'<!--\n  Generated template for the WhyrafahoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Why Rafaho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Why Rafaho</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/whyrafaho/whyrafaho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], WhyrafahoPage);

//# sourceMappingURL=whyrafaho.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-help',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Where can I get some?</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Terms and conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Terms and conditions</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapmodal_mapmodal__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nominatimap_nominatimap__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, toastCtrl, loadingCtrl, http, modalCtrl, alertCtrl, appsetting, actionSheetCtrl, camera, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.nativeGeocoder = nativeGeocoder;
        this.number = false;
        this.data = {};
        //    alert('tmmtt');
        this.date = new Date();
        console.log(this.date);
    }
    EditprofilePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_9_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
    };
    EditprofilePage.prototype.lupap = function () {
        var _this = this;
        //      localStorage.removeItem('NominatimDetail');
        this.address = this.data.address;
        console.log(this.address);
        var matches = this.address.match(/\d+/g);
        if (matches != null) {
            //    console.log('number');
            this.number = true;
        }
        else {
            this.number = false;
        }
        if (this.number == true) {
            console.log('yes it is having number');
            this.openmapmodal();
        }
        else {
            console.log('false');
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            if (this.address) {
                this.address = this.address.replace(/" "/g, '%20');
                console.log(this.address);
                var adr = this.address;
                console.log(adr);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader'
                });
                Loading.present().then(function () {
                    _this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        Loading.dismiss();
                        console.log(response[0]);
                        if (response[0] != undefined) {
                            if (response[0].place_id != '') {
                                console.log('working');
                                localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                //        this.navCtrl.push(NominatimapPage);
                                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                modal.onDidDismiss(function (data) {
                                });
                                modal.present();
                                if (response[0].address.road) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.city) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state_district) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.country) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                _this.lat = response[0].lat;
                                _this.long = response[0].lon;
                                console.log(_this.lat, _this.long);
                            }
                        }
                        else {
                            console.log('neelanshi');
                            _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                        }
                        //    else
                        //        {
                        //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                        //        this.openmapmodal();
                        //    }
                    });
                });
            }
        }
    };
    EditprofilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data.data.latitude + ',' + data.data.longitude);
            _this.lat = data.data.latitude;
            _this.long = data.data.longitude;
            _this.nativeGeocoder.reverseGeocode(parseFloat(data.data.latitude), parseFloat(data.data.longitude))
                .then(function (result) {
                console.log(JSON.stringify(result));
                if (result.subThoroughfare) {
                    _this.data.address = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else if (result.thoroughfare) {
                    _this.data.address = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else {
                    _this.data.address = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                _this.city = result.locality;
                console.log(_this.city);
                //        alert(this.city);
            })
                .catch(function (error) { return console.log(error); });
            console.log(data);
            var str = data.data.phone;
            var res = str.substring(0, 3);
            var res1 = str.substring(3, 6);
            var res2 = str.substring(6, 10);
            data.data.phone = res + '-' + res1 + '-' + res2;
            _this.data = data.data;
            _this.srcImage = data.data.user_image;
            console.log(_this.data.firstname);
        });
    };
    EditprofilePage.prototype.submitinfo = function (editinfo) {
        var _this = this;
        console.log(editinfo.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        if (editinfo.value.phone) {
            editinfo.value.phone = editinfo.value.phone.replace(/-/g, "");
            this.data = {
                first_name: editinfo.value.firstname,
                last_name: editinfo.value.lastname,
                phone: editinfo.value.phone,
                dob: editinfo.value.dob,
                gender: editinfo.value.gender,
                address: editinfo.value.address,
                id: userid,
                lat: this.lat,
                long: this.long,
            };
            console.log(this.data);
            var serialized = this.serializeObj(this.data);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'user_data_update', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.status == true) {
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Profile is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                    }
                });
            });
        }
    };
    EditprofilePage.prototype.CameraAction = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.imgTosend = imageUri;
                            // this.loading.dismiss();
                            //            alert('camera');
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageUri
                            };
                            //            alert(JSON.stringify(postdata));
                            console.log(postdata);
                            var serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader'
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    // alert(JSON.stringify(data));
                                    console.log(data);
                                    //              alert("saving image")
                                }, function (err) {
                                    alert(JSON.stringify(err));
                                });
                            });
                        }, function (err) {
                            alert(JSON.stringify(err));
                            // this.loading.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        // this.loading.present();
                        var options = {
                            quality: 10,
                            sourceType: 0,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageData
                            };
                            //            alert(postdata)
                            var serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader'
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    console.log(data);
                                    //              alert("saving image")
                                }, function (err) {
                                    console.log(JSON.stringify(err));
                                    alert(JSON.stringify(err));
                                });
                            });
                            //            alert('gallery working');
                        }, function (err) {
                            // this.loading.dismiss();
                            alert(JSON.stringify(err));
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    EditprofilePage.prototype.phonevalidation = function (phn) {
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
        // else if (phn.length == 12) {
        //   this.data.phone = this.data.phone + '-';
        // }
    };
    EditprofilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprofilePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprofilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.Userprofile();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        this.Userprofile();
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    EditprofilePage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprofilePage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        //    Loading.dismiss();
        modal.onDidDismiss(function (data) {
            //      alert(data.address);
            _this.data.address = data.address;
            console.log(_this.data.address);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
        });
        modal.present();
        //  })
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprofile',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n     <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n	<div class="main">\n    <div class="top-sec">\n			<div class="mainimg">\n      <div class="main-img">\n       <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/img/us.png">\n      </div>\n			<div class="input-sec" (click)="CameraAction()">\n      <div class="upld">\n      \n      	<ion-icon name="camera"></ion-icon>\n      </div>\n      </div>\n			</div>\n      \n      <div class="text-sec">\n        <h3>{{data?.firstname }} {{ data?.lastname}}</h3>\n        <h6>  <ion-icon ios="ios-pin" md="md-pin"> {{city}}</ion-icon></h6>\n      </div>\n    </div>\n  </div>\n  <div class="content-sec">\n  	<div class="form-sec">\n  		<form #editprofile="ngForm" novalidate (submit)="submitinfo(editprofile)">\n  			<ion-list>\n  				<ion-grid>\n  					<ion-row>\n  						<ion-col col-12>\n						  <ion-item>\n						    <ion-input type="text" placeholder="First name" [(ngModel)]="data.firstname" name="firstname" #firstname="ngModel" required></ion-input>\n						  </ion-item>\n						</ion-col>\n\n						<ion-col col-12>\n						  <ion-item>\n						    <ion-input type="text" placeholder="Last name" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12>\n						   <ion-item>\n						    <ion-input type="email" placeholder="Email" [(ngModel)]="data.email" [readonly]="isReadonly()" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n						</ion-col>\n						<ion-col col-12>\n						   <ion-item>\n						    <ion-input type="tel" placeholder="Phone number (xxx-xxx-xxx-xxx-xxx)" [(ngModel)]="data.phone" name="phone" #phone="ngModel" (input)="phonevalidation(data.phone)" maxlength="12" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6>\n						   <ion-item>\n						    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6>\n						   <ion-item>\n						    	<ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n							    <ion-option value="female">Female</ion-option>\n							    <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12>\n                                                     <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-search-outline" md="md-search" (click)="lupap()" style="position: absolute;\n    top: 4px;\n    right: -24px;\n    width: 50px;\n    height: 50px;\n    /* display: block; */\n    color: #000;\n    z-index: 999; \n    font-size:26px; "></ion-icon>\n\n						    <ion-item>\n							    <ion-textarea class="enter" placeholder="Enter your address...." [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-textarea>\n							</ion-item> \n                                                     </div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n\n			</ion-list>\n			 <div class="btn-sec">\n  	<button ion-button type="submit"  [disabled]="!editprofile.valid">Save</button>\n  </div>\n  		</form>\n  	</div>\n  </div>\n \n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/editprofile/editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprefrencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nominatimap_nominatimap__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the EditprefrencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprefrencePage = (function () {
    function EditprefrencePage(navCtrl, navParams, geolocation, toastCtrl, nativeGeocoder, modalCtrl, appsetting, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.number = false;
        //        this.GetLocation();
        //       this.Gett();
        this.getprefrence();
        //       alert('hellosss');
    }
    EditprefrencePage.prototype.pasdata = function (str5, str6) {
        console.log(str5, str6);
        this.data.dat = str5;
        console.log(this.data.dat);
        this.data.datetime = str5;
        this.data.altdate = str6;
        console.log(this.data.altdate);
    };
    EditprefrencePage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        //    Loading.dismiss();
        modal.onDidDismiss(function (res) {
            //      alert(res.address);
            _this.data.otheraddress = res.address;
            console.log(_this.data.otheraddress);
            console.log(res.lati);
            console.log(res.longi);
            _this.lat = res.lati;
            _this.long = res.longi;
            _this.addrestype = 'other';
            _this.data.aaddress = '';
        });
        modal.present();
    };
    EditprefrencePage.prototype.getprefrence = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            app_user_id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: 'Connecting...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'prefrence/get_prefrence', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                Loading.dismiss();
                console.log(response.data[0]);
                console.log(response.data[0].alternative_date);
                console.log(response.data[0].todays_date + ' ' + response.data[0].todays_time);
                console.log(response.data[0].alternative_date + ' ' + response.data[0].alternative_time);
                //      .format
                //      const myDate = moment(str, 'YYYY-MM-DD').toDate();
                _this.data.datetime = response.data[0].todays_date + 'T' + response.data[0].todays_time + ':00Z';
                if ((response.data[0].alternative_date == "undefinedT") && (response.data[0].alternative_time == "ndefi")) {
                    _this.data.altdate = '';
                }
                else {
                    _this.data.altdate = response.data[0].alternative_date + 'T' + response.data[0].alternative_time + ':00Z';
                }
                //      +response.data[0].alternative_time
                _this.geo(parseFloat(response.data[0].lat), parseFloat(response.data[0].long));
                //this.pasdata(this.str5,this.str6);
                console.log(_this.data.altdate);
                console.log(_this.data.datetime);
                console.log(_this.data);
            });
        });
    };
    EditprefrencePage.prototype.geo = function (lat, long) {
        var _this = this;
        this.lat = lat;
        this.long = long;
        this.addrestype = 'saved';
        //      alert(this.lat+','+this.long+'SAVED');
        console.log(this.lat, this.long);
        //      alert('working');
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            // alert(JSON.stringify(result));
            if (result.subThoroughfare) {
                _this.data.aaddress = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else if (result.thoroughfare) {
                _this.data.aaddress = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else {
                _this.data.aaddress = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            console.log(_this.data.aaddress);
            //        alert(this.city);
            //  alert(this.data.result +'Neelanshi');
        }).catch(function (error) { return console.log(error); });
    };
    EditprefrencePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprefrencePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprefrencePage.prototype.submitinfo = function (preference) {
        var _this = this;
        console.log(preference.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        console.log(this.addrestype);
        console.log(preference.value.datetime);
        console.log(preference.value.altdate);
        this.str = preference.value.datetime.slice(0, 10);
        this.str1 = preference.value.datetime.slice(11, 16);
        if (preference.value.altdate != '') {
            this.str2 = preference.value.altdate.slice(0, 10);
            this.str3 = preference.value.altdate.slice(11, 16);
        }
        else {
            this.str2 = '';
            this.str3 = '';
        }
        if ((this.lat) && (this.long)) {
            console.log('hello');
            this.data = {
                app_user_id: userid,
                todays_date: this.str,
                todays_time: this.str1,
                alternative_date: this.str2,
                alternative_time: this.str3,
                lat: this.lat,
                long: this.long,
                address_type: this.addrestype,
            };
            console.log(this.data);
            //      alert(this.data.lat+','+this.data.long);
            var serialized = this.serializeObj(this.data);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'addprefrence', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.status == true) {
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Preference is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                });
            });
        }
        else {
            this.AlertMsg1('Need to select a location');
        }
    };
    EditprefrencePage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprefrencePage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                _this.addrestype = 'current';
                Loading.dismiss();
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    // alert(JSON.stringify(result));
                    if (result.subThoroughfare) {
                        _this.current = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else if (result.thoroughfare) {
                        _this.current = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else {
                        _this.current = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    _this.AlertMsg('Your Location is:' + _this.current);
                    //  alert(this.data.result +'Neelanshi');
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg1('Please enable your location');
            });
        });
    };
    EditprefrencePage.prototype.lupap = function () {
        var _this = this;
        //      localStorage.removeItem('NominatimDetail');
        this.addr = this.data.otheraddress;
        console.log(this.addr);
        if (this.addr == '') {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        if (this.addr == undefined) {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        else {
            var matches = this.addr.match(/\d+/g);
            if (matches != null) {
                //    console.log('number');
                this.number = true;
            }
            else {
                this.number = false;
            }
            if (this.number == true) {
                console.log('yes it is having number');
                this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
            }
            else {
                console.log('false');
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options_1 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                if (this.addr) {
                    this.addr = this.addr.replace(/" "/g, '%20');
                    console.log(this.addr);
                    var adr = this.addr;
                    console.log(adr);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader'
                    });
                    Loading.present().then(function () {
                        _this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                            Loading.dismiss();
                            console.log(response[0]);
                            if (response[0] != undefined) {
                                if (response[0].place_id != '') {
                                    console.log('working');
                                    localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                    //        this.navCtrl.push(NominatimapPage);
                                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                    modal.onDidDismiss(function (data) {
                                        _this.addrestype = 'other';
                                        _this.data.aaddress = '';
                                        //   console.log(data);
                                    });
                                    modal.present();
                                    if (response[0].address.road) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.city) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state_district) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.country) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    _this.lat = response[0].lat;
                                    _this.long = response[0].lon;
                                    console.log(_this.lat, _this.long);
                                    _this.addrestype = 'other';
                                }
                            }
                            else {
                                console.log('neelanshi');
                                _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                            }
                            //    else
                            //        {
                            //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                            //        this.openmapmodal();
                            //    }
                        });
                    });
                }
            }
        }
    };
    EditprefrencePage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprefrencePage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprefrencePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_10_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        //    this.GetLocation();
    };
    EditprefrencePage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditprefrencePage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alertf = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.lat = _this.l;
                        _this.long = _this.lg;
                        console.log(_this.lat, _this.long);
                        //          alert(this.lat+','+this.long+'Current');
                        _this.addrestype = 'current';
                        _this.data.aaddress = '';
                        _this.data.otheraddress = '';
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alertf.present();
    };
    EditprefrencePage.prototype.Tabpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    EditprefrencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprefrencePage');
    };
    return EditprefrencePage;
}());
EditprefrencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprefrence',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/editprefrence/editprefrence.html"*/'<!--\n  Generated template for the EditprefrencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Preference</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="head">\n            <div class="form-sec">\n  		<form #preference="ngForm" novalidate>\n  	<ion-list style="margin: 0 !important;">\n           \n   \n  		<ion-item>\n                   \n<!--                \n-->                         <ion-datetime placeholder="MMM/DD/YYYY    HH:mm" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm" min="{{date}}" max="3000"  [(ngModel)]= "data.datetime" name="datetime" #datetime="ngModel" required></ion-datetime>\n                        \n                </ion-item>\n\n           \n          \n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n                         \n  		</ion-item>\n            <ion-item style="padding:0;">\n                <p style="text-align: left;">Alternative date and time</p>\n            </ion-item>\n   \n  		<ion-item>\n                   \n  			<!--<p style="text-align: left;">Alternative date and time</p>-->\n  			<ion-datetime placeholder="MMM/DD/YYYY HH:mm" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm"   min="{{date}}" max="3000" [(ngModel)]= "data.altdate" name="altdate" #altdate="ngModel"  ></ion-datetime>\n                </ion-item>\n<!--                <ion-item>\n                    <ion-input type="text" [(ngModel)]="data.dat" name="dat" #dat="ngModel"></ion-input>\n  		 </ion-item>-->\n           \n            <!--"-->\n  		<ion-item (click)="GetLocation()">\n  			<button ion-button icon-left class="currentbtn" >\n			  <ion-icon name="paper-plane"  ></ion-icon>\n			  Use my current location\n			</button>\n<!--[(ngModel)]="data.current" name="current" #current="ngModel"-->\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<ion-input type="text" placeholder="Saved Address" [readonly]="isReadonly()" [(ngModel)]="data.aaddress" name="aaddress" #aaddress="ngModel" ></ion-input>\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n            <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-search-outline" md="md-search" (click)="lupap()" style="position: absolute;\n      top: 15px;left:8px;color: #000;z-index: 999;font-size:17px;font-weight: 700;"></ion-icon>\n  		<ion-item>\n  			<ion-input placeholder="Other Address" type="text"  [(ngModel)]= "data.otheraddress" name="otheraddress" #otheraddress="ngModel" style="padding-left:20px;" ></ion-input>\n                </ion-item>\n            </div>\n  	</ion-list>\n \n\n    <div>\n          <button ion-button type="submit"  [disabled]="!preference.valid" (click)="submitinfo(preference)" style="width: 100%;background-color: #322723;height: 30px;margin-top: 10px;">Submit</button>\n    </div>\n                    </form>\n        </div></div>\n<!--	 <div class="content-sec">\n		<h3>Popular City</h3>\n		<ion-list style="margin: 0 !important;">\n			<ion-item>\n				<p>New York City</p>\n			</ion-item>\n			<ion-item>\n				<p>Chicago,Illinois</p>\n			</ion-item>\n			<ion-item>\n				<p>Charleston,South Carolina</p>\n			</ion-item>\n			<ion-item>\n				<p>Las Vegas,Nevada</p>\n			</ion-item>\n			<ion-item>\n				<p>Seattle,Washington</p>\n			</ion-item>\n			<ion-item>\n				<p>San,Francisco,California</p>\n			</ion-item>\n		</ion-list>-->\n	<!--</div>--> \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/editprefrence/editprefrence.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditprefrencePage);

//# sourceMappingURL=editprefrence.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentquestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FrequentquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrequentquestionPage = (function () {
    function FrequentquestionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FrequentquestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrequentquestionPage');
    };
    return FrequentquestionPage;
}());
FrequentquestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-frequentquestion',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/frequentquestion/frequentquestion.html"*/'<!--\n  Generated template for the FrequentquestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Frequent Questions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>What is Lorem Ipsum?</h3>\n		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>\n		<h3>Where does it come from?</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>\n		<ul>\n			<li>Contrary to popular belief</li>\n			<li>Lorem Ipsum is not</li>\n			<li>simply random text</li>\n			<li> It has roots in a piece </li>\n		</ul>\n		<h3>What is Lorem Ipsum?</h3>\n		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/frequentquestion/frequentquestion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], FrequentquestionPage);

//# sourceMappingURL=frequentquestion.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams, loadingCtrl, http, alertCtrl, appsetting, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.data = {};
    }
    FeedbackPage.prototype.postfeedback = function (feedbackdata) {
        console.log(feedbackdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        var postdata = {
            user_id: userid,
            feedback: feedbackdata.value.feedback
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'postfeedback', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.Loading.dismiss();
            console.log(data);
        });
    };
    FeedbackPage.prototype.getfeedback = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        var postdata = {
            user_id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'getfeedback', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            // this.Loading.dismiss();
            console.log(response);
        });
    };
    FeedbackPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FeedbackPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getfeedback();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
        console.log('Rahul Maurya');
        this.getfeedback();
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-feedback',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/feedback/feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Rafaho Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="top-sec">\n		<ion-list>\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>Username</h3>\n		    <p>Posted 19 june 2017</p>\n		    <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h6>\n		  </ion-item>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>Username</h3>\n		    <p>Posted 19 june 2017</p>\n		    <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n		  </ion-item>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>Username</h3>\n		    <p>Posted 19 june 2017</p>\n		    <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n		  </ion-item>\n		</ion-list>\n	</div>\n	\n	\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n      <form #feedbackform="ngForm" novalidate (submit)="postfeedback(feedbackform)">\n  	<div class="bottom-sec">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your feedback...." [(ngModel)]="data.feedback" name="feedback" #feedback="ngModel"></ion-textarea>\n		</div>\n		<div class="send"><button ion-button>Send</button></div>\n	</div>\n  </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/feedback/feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChangepwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepwdPage = (function () {
    function ChangepwdPage(navCtrl, navParams, toastCtrl, loadingCtrl, http, alertCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.key = false;
        this.data = {};
    }
    ;
    ChangepwdPage.prototype.changepassword = function (changepass) {
        var _this = this;
        console.log('forgot');
        console.log(changepass.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (changepass.value.newpassword == changepass.value.cnewpassword) {
            var email = JSON.parse(localStorage.getItem('UserDetail')).email;
            if (changepass.value.oldpassword.indexOf(' ') >= 0 || changepass.value.newpassword.indexOf(' ') >= 0) {
                var toast = this.toastCtrl.create({
                    message: 'Space not allowed in password',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var postdata = {
                    email: email,
                    password: changepass.value.oldpassword,
                    newpassword: changepass.value.newpassword
                };
                console.log(postdata);
                //alert(JSON.stringify(postdata));
                var Serialized = this.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'changepwd', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            localStorage.removeItem('UserDetail');
                            _this.ToastMsg('Password updated successfully');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                        }
                        else {
                            _this.ToastMsg(response.message);
                        }
                    });
                });
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Change Password',
                subTitle: 'Password did not match',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ChangepwdPage.prototype.handleKeyboardEvent = function (event, pass, cpass) {
        console.log(event.key);
        console.log(event);
        console.log(pass);
        console.log(cpass);
        console.log(this.key);
        if (pass == cpass) {
            console.log(this.key);
            return this.key = true;
        }
        else {
            console.log(this.key);
            return this.key = false;
        }
    };
    ChangepwdPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepwdPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ChangepwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return ChangepwdPage;
}());
ChangepwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-changepwd',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/changepwd/changepwd.html"*/'<!--\n  Generated template for the ChangepwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="theme-header">\n		<ion-title>Change password</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="image">\n			<img src="assets/img/logo.png">\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #changepassForm="ngForm" novalidate (submit)="changepassword(changepassForm)">\n				<ion-list>\n\n					<ion-item>\n						<ion-label stacked>Enter your old password</ion-label>\n						<ion-input type="password" [(ngModel)]="data.oldpassword" name="oldpassword" #oldpassword="ngModel" minlength="6" pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})" required></ion-input>\n					</ion-item>\n					<div class="alert alert-danger" color="danger">\n						<div *ngIf="oldpassword.errors && (oldpassword.dirty || oldpassword.touched)">\n							<div [hidden]="!oldpassword.errors.required">\n								Old password is required\n							</div>\n							<div [hidden]="!oldpassword.errors.minlength">\n								Old password must be at least 6 digits\n							</div>\n                                                        <div [hidden]="!oldpassword.errors.pattern">\n                                       Password is weak(It should be combination of a-z/A-Z,0-9/@*#)\n                                           </div>\n                  \n						</div>\n					</div>\n					<ion-item>\n						<ion-label stacked>Enter your new password</ion-label>\n						<ion-input type="password" [(ngModel)]="data.newpassword" name="newpassword" #newpassword="ngModel" minlength="6" pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})" required></ion-input>\n					</ion-item>\n					<div class="alert alert-danger" color="danger">\n						<div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n							<div [hidden]="!newpassword.errors.required">\n								New password is required\n							</div>\n							<div [hidden]="!newpassword.errors.minlength">\n								New password must be at least 6 digits\n							</div>\n                                                      <div [hidden]="!newpassword.errors.pattern">\n                                       Password is weak(It should be combination of a-z/A-Z,0-9/@*#)\n                                           </div>\n						</div>\n					</div>\n					<ion-item>\n						<ion-label stacked>Confirm your new password</ion-label>\n						<ion-input type="password" [(ngModel)]="data.cnewpassword" (input)="handleKeyboardEvent($event,data.newpassword,data.cnewpassword)"\n						 name="cnewpassword" #cnewpassword="ngModel"  required></ion-input>\n					</ion-item>\n					<div *ngIf="key == false && cnewpassword.errors && (cnewpassword.dirty || cnewpassword.touched)">\n						<div [hidden]="!cnewpassword.errors.required">\n							Confirm password is required\n						</div>\n						\n					</div>\n					<div *ngIf="data.cnewpassword">\n						<div *ngIf="key != true && (cnewpassword.dirty || cnewpassword.touched)">\n\n							<span>Password mismatch </span>\n						</div>\n					</div>\n				</ion-list>\n					<div class="frgtpwd">\n			<button ion-button type="submit" [disabled]="!changepassForm.valid" >Save</button>\n		</div>\n			</form>\n		</div>\n	\n\n	</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/changepwd/changepwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], ChangepwdPage);

//# sourceMappingURL=changepwd.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgtpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgtpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgtpwdPage = (function () {
    function ForgtpwdPage(navCtrl, navParams, appsetting, loadingCtrl, http, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
    }
    ForgtpwdPage.prototype.forgot = function (forgotdata) {
        var _this = this;
        console.log('forgot');
        console.log(forgotdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            email: forgotdata.value.email
        };
        console.log(postdata);
        //alert(JSON.stringify(postdata));
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'forgetpassword', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.ToastMsg('Check you email to reset password');
                    //this.ToastMsg('Login successfully');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
                }
                else {
                    _this.ToastMsg(response.message);
                }
            });
        });
    };
    ForgtpwdPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgtpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgtpwdPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ForgtpwdPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    ForgtpwdPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ForgtpwdPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    return ForgtpwdPage;
}());
ForgtpwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgtpwd',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/forgtpwd/forgtpwd.html"*/'<!--\n  Generated template for the ForgtpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Reset password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="image">\n			<img src="assets/img/logo.png">\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #forgetpwd="ngForm" novalidate (submit)="forgot(forgetpwd)">\n				<ion-list>\n\n				  <ion-item>\n				    <ion-label stacked>Enter your registered email</ion-label>\n				    <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n				</ion-list>\n				<div class="frgtpwd">\n			<button ion-button type="submit" [disabled]="!forgetpwd.valid">Submit</button>\n			</div>\n			</form>\n		</div>\n		<div class="frgtpwd">\n			<h3 class="register">Don\'t have an account? <span (click)="signupPage()">Register</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/forgtpwd/forgtpwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ForgtpwdPage);

//# sourceMappingURL=forgtpwd.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.myGlobalVar = 'http://rafao.us-west-2.elasticbeanstalk.com/api/'; //'http://ec2-13-59-151-198.us-east-2.compute.amazonaws.com/api/';//'http://fashapp.io/api/';
        console.log('Hello Appsetting Provider');
        // if(localStorage.getItem('UserInfo')){
        //   console.log(localStorage.getItem('UserInfo'));
        //   this.navCtrl.push(TabsPage);
        // }else{
        //   this.navCtrl.push(SigninPage);
        // }
    }
    Appsetting.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return Appsetting;
}());
Appsetting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
], Appsetting);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addwallet/addwallet.module": [
		435,
		24
	],
	"../pages/cart/cart.module": [
		436,
		23
	],
	"../pages/change/change.module": [
		437,
		1
	],
	"../pages/changepwd/changepwd.module": [
		440,
		22
	],
	"../pages/chefdetials/chefdetials.module": [
		438,
		21
	],
	"../pages/editprefrence/editprefrence.module": [
		439,
		20
	],
	"../pages/editprofile/editprofile.module": [
		443,
		19
	],
	"../pages/favorites/favorites.module": [
		441,
		18
	],
	"../pages/feedback/feedback.module": [
		442,
		17
	],
	"../pages/forgtpwd/forgtpwd.module": [
		444,
		16
	],
	"../pages/frequentquestion/frequentquestion.module": [
		445,
		15
	],
	"../pages/help/help.module": [
		446,
		14
	],
	"../pages/location/location.module": [
		447,
		13
	],
	"../pages/mapmodal/mapmodal.module": [
		449,
		12
	],
	"../pages/nominatimap/nominatimap.module": [
		448,
		11
	],
	"../pages/orderdetial/orderdetial.module": [
		450,
		10
	],
	"../pages/payment/payment.module": [
		451,
		9
	],
	"../pages/productlist/productlist.module": [
		453,
		8
	],
	"../pages/productview/productview.module": [
		452,
		7
	],
	"../pages/rafaho/rafaho.module": [
		454,
		6
	],
	"../pages/reviews/reviews.module": [
		455,
		5
	],
	"../pages/selectdish/selectdish.module": [
		456,
		4
	],
	"../pages/southfood/southfood.module": [
		457,
		0
	],
	"../pages/terms/terms.module": [
		458,
		3
	],
	"../pages/whyrafaho/whyrafaho.module": [
		459,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPage = (function () {
    function ChatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Booking Calender</ion-title>\n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="archived">\n      Archived\n    </ion-segment-button>\n    <ion-segment-button value="chat">\n      Chat\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n<div [ngSwitch]="pet">\n<div class="chatsec" *ngSwitchCase="\'chat\'">\n	<ul>\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Hi, How are you?</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n\n		<li class="rightchat">\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n		<li class="rightchat">\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n	</ul>\n</div>\n	<ion-list *ngSwitchCase="\'archived\'">\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/amanda.png">\n	    </ion-avatar>\n	    <h2>Amanda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/arenda.png">\n	    </ion-avatar>\n	    <h2>Arenda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/aron.png">\n	    </ion-avatar>\n	    <h2>Aron</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/aron.png">\n	    </ion-avatar>\n	    <h2>Aron Sanched</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/amanda.png">\n	    </ion-avatar>\n	    <h2>Amanda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/profile.png">\n	    </ion-avatar>\n	    <h2>Frankil Aron</h2>\n	  </ion-item>\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/arenda.png">\n	    </ion-avatar>\n	    <h2>Arenda</h2>\n	  </ion-item>\n	</ion-list>\n\n</div>\n\n\n	\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<ion-buttons end>\n      <button ion-button icon-only class="btnprofile"><ion-icon name="paper-plane"></ion-icon></button>     \n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/chat/chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chefdetials_chefdetials__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productlist_productlist__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, appsetting, http, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.arry = true;
        this.arr1 = null;
        this.ar = [];
        this.data = {};
        this.pet = "kittens";
        //    this.get();
        //    alert('hello');
    }
    HomePage.prototype.fltr_opn = function () {
        var fltr_opn = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
        fltr_opn.present();
    };
    HomePage.prototype.detail = function (dat) {
        localStorage.setItem('Chefdetail', JSON.stringify(dat));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chefdetials_chefdetials__["a" /* ChefdetialsPage */]);
    };
    HomePage.prototype.prdlist = function (prods) {
        console.log(prods);
        localStorage.setItem('dishprod', JSON.stringify(prods));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__productlist_productlist__["a" /* ProductlistPage */]);
    };
    HomePage.prototype.get = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(latt, longg);
        console.log(userid);
        var postdata = {
            app_user_id: userid,
            latitude: latt,
            longitude: longg,
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        //     alert(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'getchefsbyprefrence', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.data.length > 0) {
                    _this.array = data.data;
                    console.log(_this.array);
                    _this.bit = 1;
                    _this.arr1 = 1;
                }
                else {
                    _this.arr1 = null;
                    _this.bit = 1;
                    console.log('hjuij');
                }
            }, function (err) { console.log(err); });
        });
    };
    HomePage.prototype.search = function (val) {
        var _this = this;
        console.log(val);
        if (val == '') {
            this.get();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(latt, longg);
        console.log(userid);
        console.log(val.length);
        if (val.length >= 3) {
            var postdata = {
                app_user_id: userid,
                latitude: latt,
                longitude: longg,
                searchvalue: val,
            };
            var serialized = this.serializeObj(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'prefrence/searchbychefname', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.arr1 = 1;
                    if (data.data) {
                        _this.array = data.data;
                        _this.bit = 1;
                        _this.arr1 = 1;
                        console.log(_this.array);
                    }
                }
                else {
                    console.log('here');
                    _this.array = null;
                    _this.bit = null;
                    _this.arr1 = 1;
                }
            }, function (err) { console.log(err); });
        }
    };
    HomePage.prototype.searchdish = function (vali) {
        var _this = this;
        console.log(vali);
        //    if(!vali){
        //        console.log('here');
        //       this.arry = null;
        //       this.arr = null;
        //       return false;
        //    }else{
        console.log('thre');
        console.log(vali);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(latt, longg);
        console.log(userid);
        console.log(vali.length);
        if (vali.length > 2) {
            var postdata = {
                app_user_id: userid,
                latitude: latt,
                longitude: longg,
                searchvalue: vali,
            };
            var serialized = this.serializeObj(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'prefrence/searchbydishname', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.arry = false;
                    if (data.data) {
                        _this.arr = data.data;
                        for (var i = 0; i < data.data.length; i++) {
                            for (var j = 0; j < _this.arr[i].products.length; j++) {
                                console.log(_this.arr[i].products[j].product_name);
                                var h = _this.arr[i].products[j].product_name.toLowerCase();
                                console.log(h);
                                var a = _this.arr[i].products[j].product_name.indexOf(vali);
                                console.log(a);
                                if (a > -1) {
                                    _this.arr[i].products[j].bit = a;
                                }
                                else {
                                    var val = h.indexOf(vali);
                                    console.log(val);
                                    _this.arr[i].products[j].bit = val;
                                }
                            }
                        }
                        console.log(_this.arr);
                    }
                }
                else {
                    _this.arry = null;
                    _this.arr = null;
                }
            }, function (err) { console.log(err); });
        }
        else {
            this.arr = null;
            this.arry = true;
            console.log(this.arr);
            console.log('nothing');
        }
        //}
    };
    HomePage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.get();
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n      Chef List\n      <p>Online Chef list</p>\n    </ion-title>\n    \n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="kittens">\n      chef Search\n    </ion-segment-button>\n    <ion-segment-button value="puppies">\n      Dish Search\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n<ion-content>\n  <div class="banner">\n  <img src="assets/img/off.png">\n</div>\n  \n  <div class="content-sec">\n    \n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'kittens\'">\n        <div class="serch">\n  <ion-searchbar placeholder="Search by chef..." [(ngModel)]="data.dat" name="dat" #dat="ngModel" (input)="search(data.dat)" ></ion-searchbar>\n  <div class="option">\n      <img src="assets/img/option.png" (click)="fltr_opn()">\n  </div>\n</div>\n  <ion-list>\n      <ion-item *ngFor="let dat of array" (click)="detail(dat)">\n          \n        <ion-avatar item-start>\n             <img *ngIf ="dat?.user_image"  src="{{dat?.user_image}}">\n             <img *ngIf ="!dat?.user_image" src="assets/img/amanda.png">\n         \n        </ion-avatar>\n        <h3>{{dat?.firstname}} {{dat?.lastname}}</h3>\n          <div *ngIf="dat?.status == true">\n              <p> <span>Specialities</span><span *ngFor="let spec of dat.specialties">{{spec?.specialties_product}},</span></p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn green" item-end>\n          <h3><span> <img src="assets/img/star.png"></span>3/4</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #2bb600;"></ion-icon>\n            Available Today\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #dcca00;"></ion-icon>\n            Alternative date available\n          </button>\n        </div>\n          </div>\n      </ion-item> </ion-list>\n\n<!--      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/arenda.png">\n        </ion-avatar>\n        <h3>Andrea Beaman</h3>\n        <p><span>Specialities</span>Idli,sambhar, Kerla</p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn green" item-end>\n          <h3><span> <img src="assets/img/star.png"></span>3/4</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #fe4600;"></ion-icon>\n            Not available today\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #dcca00;"></ion-icon>\n            Alternative date available\n          </button>\n        </div>\n      </ion-item>-->\n       <div *ngIf="bit == null"><p style="width: 100%;float: left;padding-left: 12px;color: #949494;">No match found</p></div>\n        <div *ngIf="(arr1 == null)"><p style="width: 100%;float: left;padding-left: 12px;color: #949494;">No chef available on your area or region</p></div>\n    </ion-list>\n  </div>\n\n\n\n\n\n  <div [ngSwitch]="pet">\n\n  <div class="serch-text" *ngSwitchCase="\'puppies\'">\n      <div class="serch">\n          <ion-searchbar placeholder="Search by dish..." [(ngModel)]="data.dats" name="dats" #dats="ngModel" (input)="searchdish(data.dats)" style="padding-right:12px !important;" ></ion-searchbar></div>\n  \n      <ion-list *ngIf= "arr != null">\n      <ion-item *ngFor="let dats of arr">\n<!--        <span >-->\n        \n        <ion-thumbnail item-start  >\n            <div *ngFor="let prodds of dats.products">\n              <img  *ngIf="prodds?.bit == 0" src="{{prodds?.product_image0}}">\n                <!--<img *ngIf="!prodds?.bit == 0" src="assets/img/frvttwo.png"">-->\n                </div>\n              </ion-thumbnail>\n      <!--</span>-->\n     \n        <div class="main">\n          <div  class="image">\n            <img *ngIf ="dats?.user_image"  src="{{dats?.user_image}}">\n             <img *ngIf ="!dats?.user_image" src="assets/img/amanda.png">\n          </div>\n          <h1>{{dats?.firstname}} {{dats?.lastname}} </h1>\n          <div class="right-sec">\n            <button ion-button class="rating histry">3/5</button>\n          </div>\n        </div>\n      \n<!--        <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>-->\n       <div *ngFor="let prods of dats.products"> <p *ngIf="prods?.bit == 0">{{prods?.product_name}}</p></div>\n        <div class="btn-left">\n          <button ion-button outline (click)="prdlist(dats.products)">\n            BOOK NOW\n          </button>\n        </div>\n         <div class="btn-rght">\n          <button ion-button outline>\n            COOK AT HOME\n          </button>\n        </div>\n       <div *ngFor="let proods of dats.products">\n          <div class="hor" style="width: 25px; float: left;" *ngIf="proods?.bit == 0" ><ion-icon name="time"></ion-icon><span  >{{proods?.cocking_time_at_user_home}}h</span></div>\n     </div>\n      </ion-item>\n    \n  </ion-list>\n      <div *ngIf="arry == true"><p style="width: 100%;float: left;padding-left: 12px;color: #949494;">Search for result</p></div>\n       <div *ngIf="arry == null"><p style="width: 100%;float: left;padding-left: 12px;color: #949494;">No Match Found</p></div>\n  </div>\n    <!-- <div class="serch-contant" *ngSwitchCase="\'puppies\'">\n        <div class="image">\n            <img src="../assets/img/srchimg.png">\n        </div>\n        <h5>Search Dish</h5>\n        <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>\n    </div> -->\n  </div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = (function () {
    function FilterPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-filter',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/filter/filter.html"*/'\n<ion-header>\n  <ion-navbar color="theme-header">\n		<ion-buttons start>\n  	<button ion-button color="theme-header" style="color: #fff;" (click)="dismiss()">\n      <ion-icon name="close" style="font-size: 30px;"></ion-icon>\n    </button>\n		</ion-buttons>\n    <ion-title>\n    	 Filter\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">Select All</button>     \n    </ion-buttons>\n   \n  </ion-navbar>\n		<div class="header-sec">\n			<h3>The Classic British Breakfast</h3>\n			<ion-grid style="padding: 0px;">\n				<ion-row>\n					<ion-col col-12 style="padding-left: 0px; padding-right:0px;">\n						 <ion-input type="text" placeholder="Search by location"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-left: 0px;">\n						 <ion-input type="date" placeholder="Search by date" class="upper"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-right:0px;">\n						 <ion-input type="text" placeholder="Type of event"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-left: 0px;">\n						 <ion-input type="text" placeholder="Search by expertise"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-right:0px;">\n						 <ion-input type="text" placeholder="Type of experience"></ion-input>\n					</ion-col>\n				</ion-row>\n				\n			</ion-grid>\n		</div>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="content-sec">\n		<ion-list>\n			<ion-item>\n			  <ion-label>World Cuisine</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Continental</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>British</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Indian</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Vietnamese</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Italian</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Swiss</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>World Cuisine</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Continental</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>British</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Indian</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="padding: 0;">\n   <button ion-button full color="theme-header">Apply</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/filter/filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgtpwd_forgtpwd__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
    }
    SigninPage.prototype.Signin = function (logindata) {
        var _this = this;
        console.log('login');
        console.log(logindata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (logindata.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var postdata = {
                email: logindata.value.email,
                password: logindata.value.password,
                role: 'user'
            };
            console.log(postdata);
            //alert(JSON.stringify(postdata));
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'loginuser', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        console.log(response.userinfo._id);
                        localStorage.setItem('UserDetail', JSON.stringify(response.userinfo));
                        console.log(response.userinfo.role);
                        //     var a = JSON.parse((localStorage.getItem('Userpref')))
                        if (localStorage.getItem('UserDetail') && localStorage.getItem('Userpref')) {
                            var b = JSON.parse(localStorage.getItem('UserDetail'))._id;
                            var a = JSON.parse(localStorage.getItem('Userpref')).app_user_id;
                            console.log(a, b);
                            if (b == a) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__location_location__["a" /* LocationPage */]);
                            }
                        }
                        else if (localStorage.getItem('UserDetail')) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__location_location__["a" /* LocationPage */]);
                        }
                    }
                    else {
                        _this.ToastMsg(response.message);
                    }
                });
            });
        }
    };
    SigninPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Neelanshi bhatnagar');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SigninPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SigninPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.frgt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgtpwd_forgtpwd__["a" /* ForgtpwdPage */]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signin',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n <ion-toolbar>\n  <ion-title>Menu</ion-title>\n </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="top-img">\n			<img src="assets/img/signbg.png">\n		</div>\n		<div class="bottom-img">\n			<img src="assets/img/tpbg.png">\n		</div>\n		<div class="text-sec">\n		<h2>Sign In</h2>\n		<h3>Welcome to <span>Rafaho</span> app</h3>\n	</div>\n	<div class="logo">\n		<img src="assets/img/logo.png">\n	</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #SigninForm="ngForm" novalidate (submit)="Signin(SigninForm)">\n				<ion-list>\n\n				  <ion-item>\n				    <ion-label stacked>EMAIL</ion-label>\n				    <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$"  required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n                                    \n				  <ion-item>\n				    <ion-label stacked>PASSWORD</ion-label>\n				    <ion-input type="password" [(ngModel)]="data.password" name="password" #password="ngModel" minlength="5" required></ion-input>\n				  </ion-item>\n					 <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n								<div [hidden]="!password.errors.minlength">\n								Password must be at least 5 digits\n							</div>\n            </div>\n				</ion-list>\n					<div class="frgtpwd">\n					<div class="btn-sec">\n			<button ion-button full type="submit" [disabled]="!SigninForm.valid">Sign In</button>\n		    </div>\n				</div>\n			</form>\n		</div>\n		<div class="frgtpwd">\n			<h3 (click)="frgt()">Forgot password?</h3>\n		\n			<h3 class="register">Don\'t have an account? <span (click)="signupPage()">Register</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mapmodal_mapmodal__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_nominatimap_nominatimap__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rafaho_rafaho__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_editprefrence_editprefrence__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_whyrafaho_whyrafaho__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_help_help__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_terms_terms__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_editprofile_editprofile__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_addwallet_addwallet__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_frequentquestion_frequentquestion__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_orderdetial_orderdetial__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_forgtpwd_forgtpwd__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_changepwd_changepwd__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_filter_filter__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_productview_productview__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cart_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_payment_payment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_chefdetials_chefdetials__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_reviews_reviews__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_selectdish_selectdish__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_productlist_productlist__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_location_location__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_moment__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_device__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_native_geocoder__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_camera__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_rafaho_rafaho__["a" /* RafahoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_whyrafaho_whyrafaho__["a" /* WhyrafahoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_editprefrence_editprefrence__["a" /* EditprefrencePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_addwallet_addwallet__["a" /* AddwalletPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_frequentquestion_frequentquestion__["a" /* FrequentquestionPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_orderdetial_orderdetial__["a" /* OrderdetialPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_forgtpwd_forgtpwd__["a" /* ForgtpwdPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_changepwd_changepwd__["a" /* ChangepwdPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_productview_productview__["a" /* ProductviewPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_chefdetials_chefdetials__["a" /* ChefdetialsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_selectdish_selectdish__["a" /* SelectdishPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_nominatimap_nominatimap__["a" /* NominatimapPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_36__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_39_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addwallet/addwallet.module#AddwalletPageModule', name: 'AddwalletPage', segment: 'addwallet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change/change.module#ChangePageModule', name: 'ChangePage', segment: 'change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chefdetials/chefdetials.module#ChefdetialsPageModule', name: 'ChefdetialsPage', segment: 'chefdetials', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprefrence/editprefrence.module#EditprefrencePageModule', name: 'EditprefrencePage', segment: 'editprefrence', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepwd/changepwd.module#ChangepwdPageModule', name: 'ChangepwdPage', segment: 'changepwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgtpwd/forgtpwd.module#ForgtpwdPageModule', name: 'ForgtpwdPage', segment: 'forgtpwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/frequentquestion/frequentquestion.module#FrequentquestionPageModule', name: 'FrequentquestionPage', segment: 'frequentquestion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nominatimap/nominatimap.module#NominatimapPageModule', name: 'NominatimapPage', segment: 'nominatimap', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapmodal/mapmodal.module#MapmodalPageModule', name: 'MapmodalPage', segment: 'mapmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderdetial/orderdetial.module#OrderdetialPageModule', name: 'OrderdetialPage', segment: 'orderdetial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productview/productview.module#ProductviewPageModule', name: 'ProductviewPage', segment: 'productview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafaho/rafaho.module#RafahoPageModule', name: 'RafahoPage', segment: 'rafaho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectdish/selectdish.module#SelectdishPageModule', name: 'SelectdishPage', segment: 'selectdish', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/southfood/southfood.module#SouthfoodPageModule', name: 'SouthfoodPage', segment: 'southfood', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/whyrafaho/whyrafaho.module#WhyrafahoPageModule', name: 'WhyrafahoPage', segment: 'whyrafaho', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_editprefrence_editprefrence__["a" /* EditprefrencePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_rafaho_rafaho__["a" /* RafahoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_whyrafaho_whyrafaho__["a" /* WhyrafahoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_addwallet_addwallet__["a" /* AddwalletPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_frequentquestion_frequentquestion__["a" /* FrequentquestionPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_orderdetial_orderdetial__["a" /* OrderdetialPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_forgtpwd_forgtpwd__["a" /* ForgtpwdPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_changepwd_changepwd__["a" /* ChangepwdPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_nominatimap_nominatimap__["a" /* NominatimapPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_productview_productview__["a" /* ProductviewPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_chefdetials_chefdetials__["a" /* ChefdetialsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_selectdish_selectdish__["a" /* SelectdishPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_35__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rafaho_rafaho__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__rafaho_rafaho__["a" /* RafahoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favorites" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Rafaho" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  import {googlemaps} from 'googlemaps';

/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapmodalPage = (function () {
    function MapmodalPage(navCtrl, navParams, viewCtrl, toastCtrl, platform, geolocation, loadCtrl, nativeGeocoder, places) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.loadCtrl = loadCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.places = places;
        this.bb = [];
        this.geocoder = new google.maps.Geocoder();
        /**map initialization */
        this.initMap = function () {
            var nill = _this;
            var newShape;
            var map;
            _this.platform.ready().then(function () {
                // alert("working");
                // alert(lat+','+long);
                var Loading = _this.loadCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader'
                });
                Loading.present().then(function () {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.lat = resp.coords.latitude;
                        _this.long = resp.coords.longitude;
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        Loading.dismiss();
                        if (_this.nomi != null) {
                            _this.l = _this.nomi.lat;
                            _this.lo = _this.nomi.lon;
                            console.log(_this.l, _this.lo);
                        }
                        else {
                            _this.l = _this.lat;
                            _this.lo = _this.long;
                        }
                        var latLng = new google.maps.LatLng(_this.l, _this.lo);
                        // alert('lat and long:'+latLng);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        //        this.map.setZoom(1);
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //  alert("mapOptions");
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: false,
                            map: _this.map,
                        });
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker) {
                            var latLng = marker.latLng;
                            _this.lat = latLng.lat();
                            _this.long = latLng.lng();
                            console.log(marker);
                            console.log(_this.lat);
                            console.log(_this.long);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.lat, _this.long);
                            _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                                console.log(results);
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        _this.autocomplete.query = results[1].formatted_address;
                                        console.log(_this.autocomplete.query);
                                    }
                                }
                            }));
                        }));
                        // alert("working1");
                    }).catch(function (error) {
                        var latLng = new google.maps.LatLng(_this.lat, _this.long);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: latLng,
                            zoom: 17,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //  alert("mapOptions");
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: false,
                            map: _this.map,
                        });
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker) {
                            var latLng = marker.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.lat, _this.long);
                            _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                                console.log(results);
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        _this.autocomplete.query = results[1].formatted_address;
                                        console.log(_this.autocomplete.query);
                                    }
                                }
                            }));
                        }));
                        console.log('Error getting location', error);
                    });
                });
                var watch = _this.geolocation.watchPosition();
                watch.subscribe(function (data) {
                    // console.log('My latitude : ', data.coords.latitude);
                    // console.log('My longitude: ', data.coords.longitude);
                    nill.latt = data.coords.latitude;
                    nill.longg = data.coords.longitude;
                    //  alert(nill.latt+','+nill.longg);
                });
            });
        };
        //  this.initMap();
    }
    MapmodalPage.prototype.ngOnInit = function () {
        // alert("neelanshi");
        this.nomi = JSON.parse(localStorage.getItem('NominatimDetail'));
        console.log(this.nomi);
        if (this.nomi != null) {
            console.log(this.nomi.lat);
            console.log(this.nomi.lon);
            this.acService = new google.maps.places.AutocompleteService();
            this.infowindow = new google.maps.InfoWindow;
            this.autocompleteItems = [];
            this.autocomplete = {
                query: ''
            };
        }
        else {
            this.acService = new google.maps.places.AutocompleteService();
            this.infowindow = new google.maps.InfoWindow;
            this.autocompleteItems = [];
            this.autocomplete = {
                query: ''
            };
        }
    };
    MapmodalPage.prototype.updateSearch = function () {
        var _this = this;
        delete this.crlat;
        delete this.crlng;
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        //let self = this; 
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, (function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            _this.autocompleteItems = [];
            console.log(predictions);
            predictions.forEach((function (prediction) {
                console.log("abc");
                _this.autocompleteItems.push(prediction);
            }));
        }));
    };
    MapmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapmodalPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.initMap();
    };
    MapmodalPage.prototype.chooseItem = function (item) {
        var _this = this;
        console.log(item);
        this.autocomplete.query = item.description;
        this.geocoder.geocode({ 'placeId': item.place_id }, (function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0]);
                    _this.map.setZoom(17);
                    _this.map.setCenter(results[0].geometry.location);
                    _this.lat = results[0].geometry.location.lat();
                    _this.long = results[0].geometry.location.lng();
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: results[0].geometry.location
                    });
                    _this.infowindow.setContent(results[0].formatted_address);
                    _this.infowindow.open(_this.map, marker);
                    _this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
                        .then(function (coordinates) {
                        console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                        _this.lat = coordinates.latitude;
                        _this.long = coordinates.longitude;
                        console.log(_this.lat + ' ' + _this.long);
                    })
                        .catch(function (error) { return console.log(error); });
                }
            }
        }));
        this.autocompleteItems = [];
    };
    MapmodalPage.prototype.clsmodel = function () {
        this.viewCtrl.dismiss();
    };
    MapmodalPage.prototype.closeModal = function () {
        console.log(this.autocomplete.query);
        this.viewCtrl.dismiss({
            address: this.autocomplete.query,
            lati: this.lat,
            longi: this.long
        });
    };
    return MapmodalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MapmodalPage.prototype, "mapElement", void 0);
MapmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mapmodal',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/mapmodal/mapmodal.html"*/'<!--\n  Generated template for the MapmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-buttons start (click)="dismiss()">\n      <button ion-button icon-only>\n        \n      </button>\n    </ion-buttons>-->\n\n    <ion-title>Choose Location</ion-title>\n    \n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n      <ion-buttons start (click)="clsmodel()">\n        <button clear ion-button>Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar \n    [(ngModel)]="autocomplete.query" \n    [showCancelButton]="true" \n    (ionInput)="updateSearch()" \n    (ionCancel)="dismiss()"\n    placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="chooseItem(item)">\n      {{ item.description }}\n      </ion-item>\n      </ion-list>\n        \n<div #map id="map"></div>\n   \n    <!--<button ion-button (click)="saveaddress">Save Location</button>-->\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/mapmodal/mapmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MapmodalPage);

//# sourceMappingURL=mapmodal.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NominatimapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';



//  import {googlemaps} from 'googlemaps';

/**
 * Generated class for the NominatimapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NominatimapPage = (function () {
    function NominatimapPage(navCtrl, navParams, viewCtrl, toastCtrl, platform, geolocation, nativeGeocoder, places) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.places = places;
        this.bb = [];
        this.geocoder = new google.maps.Geocoder();
        this.initMap = function () {
            var map;
            _this.platform.ready().then(function () {
                var latLng = new google.maps.LatLng(_this.nomi.lat, _this.nomi.lon);
                _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            console.log(results[1].formatted_address);
                        }
                    }
                    var mapOptions = {
                        center: latLng,
                        zoom: 14,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        disableDefaultUI: true,
                        zoomControl: true
                    };
                    _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                    //       var marker = new google.maps.Marker({
                    //         position: latLng,
                    //         draggable: false,
                    //         map: this.map,
                    //       });
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: results[1].geometry.location
                    });
                    _this.infowindow.setContent(results[1].formatted_address);
                    _this.infowindow.open(_this.map, marker);
                }));
            });
        };
        //   alert('burger');
    }
    NominatimapPage.prototype.ngOnInit = function () {
        this.nomi = JSON.parse(localStorage.getItem('NominatimDetail'));
        console.log(this.nomi);
        console.log(this.nomi.lat);
        console.log(this.nomi.lon);
        // alert("neelanshi");
        //    this.acService = new google.maps.places.AutocompleteService();      
        this.infowindow = new google.maps.InfoWindow;
        //    this.autocompleteItems = [];
        //    this.autocomplete = {
        //    query: ''
    };
    NominatimapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapmodalPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.initMap();
    };
    NominatimapPage.prototype.clsmodel = function () {
        this.viewCtrl.dismiss();
    };
    NominatimapPage.prototype.closeModal = function () {
        //      console.log(this.autocomplete.query)
        this.viewCtrl.dismiss({});
    };
    return NominatimapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], NominatimapPage.prototype, "mapElement", void 0);
NominatimapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nominatimap',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/nominatimap/nominatimap.html"*/'<!--\n  Generated template for the NominatimapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NOMINATIM</ion-title>\n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n      <ion-buttons start (click)="clsmodel()">\n        <button clear ion-button>Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/nominatimap/nominatimap.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], NominatimapPage);

//# sourceMappingURL=nominatimap.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 188,
	"./af.js": 188,
	"./ar": 189,
	"./ar-dz": 190,
	"./ar-dz.js": 190,
	"./ar-kw": 191,
	"./ar-kw.js": 191,
	"./ar-ly": 192,
	"./ar-ly.js": 192,
	"./ar-ma": 193,
	"./ar-ma.js": 193,
	"./ar-sa": 194,
	"./ar-sa.js": 194,
	"./ar-tn": 195,
	"./ar-tn.js": 195,
	"./ar.js": 189,
	"./az": 196,
	"./az.js": 196,
	"./be": 197,
	"./be.js": 197,
	"./bg": 198,
	"./bg.js": 198,
	"./bm": 199,
	"./bm.js": 199,
	"./bn": 200,
	"./bn.js": 200,
	"./bo": 201,
	"./bo.js": 201,
	"./br": 202,
	"./br.js": 202,
	"./bs": 203,
	"./bs.js": 203,
	"./ca": 204,
	"./ca.js": 204,
	"./cs": 205,
	"./cs.js": 205,
	"./cv": 206,
	"./cv.js": 206,
	"./cy": 207,
	"./cy.js": 207,
	"./da": 208,
	"./da.js": 208,
	"./de": 209,
	"./de-at": 210,
	"./de-at.js": 210,
	"./de-ch": 211,
	"./de-ch.js": 211,
	"./de.js": 209,
	"./dv": 212,
	"./dv.js": 212,
	"./el": 213,
	"./el.js": 213,
	"./en-au": 214,
	"./en-au.js": 214,
	"./en-ca": 215,
	"./en-ca.js": 215,
	"./en-gb": 216,
	"./en-gb.js": 216,
	"./en-ie": 217,
	"./en-ie.js": 217,
	"./en-nz": 218,
	"./en-nz.js": 218,
	"./eo": 219,
	"./eo.js": 219,
	"./es": 220,
	"./es-do": 221,
	"./es-do.js": 221,
	"./es-us": 222,
	"./es-us.js": 222,
	"./es.js": 220,
	"./et": 223,
	"./et.js": 223,
	"./eu": 224,
	"./eu.js": 224,
	"./fa": 225,
	"./fa.js": 225,
	"./fi": 226,
	"./fi.js": 226,
	"./fo": 227,
	"./fo.js": 227,
	"./fr": 228,
	"./fr-ca": 229,
	"./fr-ca.js": 229,
	"./fr-ch": 230,
	"./fr-ch.js": 230,
	"./fr.js": 228,
	"./fy": 231,
	"./fy.js": 231,
	"./gd": 232,
	"./gd.js": 232,
	"./gl": 233,
	"./gl.js": 233,
	"./gom-latn": 234,
	"./gom-latn.js": 234,
	"./gu": 235,
	"./gu.js": 235,
	"./he": 236,
	"./he.js": 236,
	"./hi": 237,
	"./hi.js": 237,
	"./hr": 238,
	"./hr.js": 238,
	"./hu": 239,
	"./hu.js": 239,
	"./hy-am": 240,
	"./hy-am.js": 240,
	"./id": 241,
	"./id.js": 241,
	"./is": 242,
	"./is.js": 242,
	"./it": 243,
	"./it.js": 243,
	"./ja": 244,
	"./ja.js": 244,
	"./jv": 245,
	"./jv.js": 245,
	"./ka": 246,
	"./ka.js": 246,
	"./kk": 247,
	"./kk.js": 247,
	"./km": 248,
	"./km.js": 248,
	"./kn": 249,
	"./kn.js": 249,
	"./ko": 250,
	"./ko.js": 250,
	"./ky": 251,
	"./ky.js": 251,
	"./lb": 252,
	"./lb.js": 252,
	"./lo": 253,
	"./lo.js": 253,
	"./lt": 254,
	"./lt.js": 254,
	"./lv": 255,
	"./lv.js": 255,
	"./me": 256,
	"./me.js": 256,
	"./mi": 257,
	"./mi.js": 257,
	"./mk": 258,
	"./mk.js": 258,
	"./ml": 259,
	"./ml.js": 259,
	"./mr": 260,
	"./mr.js": 260,
	"./ms": 261,
	"./ms-my": 262,
	"./ms-my.js": 262,
	"./ms.js": 261,
	"./my": 263,
	"./my.js": 263,
	"./nb": 264,
	"./nb.js": 264,
	"./ne": 265,
	"./ne.js": 265,
	"./nl": 266,
	"./nl-be": 267,
	"./nl-be.js": 267,
	"./nl.js": 266,
	"./nn": 268,
	"./nn.js": 268,
	"./pa-in": 269,
	"./pa-in.js": 269,
	"./pl": 270,
	"./pl.js": 270,
	"./pt": 271,
	"./pt-br": 272,
	"./pt-br.js": 272,
	"./pt.js": 271,
	"./ro": 273,
	"./ro.js": 273,
	"./ru": 274,
	"./ru.js": 274,
	"./sd": 275,
	"./sd.js": 275,
	"./se": 276,
	"./se.js": 276,
	"./si": 277,
	"./si.js": 277,
	"./sk": 278,
	"./sk.js": 278,
	"./sl": 279,
	"./sl.js": 279,
	"./sq": 280,
	"./sq.js": 280,
	"./sr": 281,
	"./sr-cyrl": 282,
	"./sr-cyrl.js": 282,
	"./sr.js": 281,
	"./ss": 283,
	"./ss.js": 283,
	"./sv": 284,
	"./sv.js": 284,
	"./sw": 285,
	"./sw.js": 285,
	"./ta": 286,
	"./ta.js": 286,
	"./te": 287,
	"./te.js": 287,
	"./tet": 288,
	"./tet.js": 288,
	"./th": 289,
	"./th.js": 289,
	"./tl-ph": 290,
	"./tl-ph.js": 290,
	"./tlh": 291,
	"./tlh.js": 291,
	"./tr": 292,
	"./tr.js": 292,
	"./tzl": 293,
	"./tzl.js": 293,
	"./tzm": 294,
	"./tzm-latn": 295,
	"./tzm-latn.js": 295,
	"./tzm.js": 294,
	"./uk": 296,
	"./uk.js": 296,
	"./ur": 297,
	"./ur.js": 297,
	"./uz": 298,
	"./uz-latn": 299,
	"./uz-latn.js": 299,
	"./uz.js": 298,
	"./vi": 300,
	"./vi.js": 300,
	"./x-pseudo": 301,
	"./x-pseudo.js": 301,
	"./yo": 302,
	"./yo.js": 302,
	"./zh-cn": 303,
	"./zh-cn.js": 303,
	"./zh-hk": 304,
	"./zh-hk.js": 304,
	"./zh-tw": 305,
	"./zh-tw.js": 305
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Keyboard } from '@ionic-native/keyboard';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, http, appsetting) {
        this.http = http;
        this.appsetting = appsetting;
        this.rootPage = '';
        platform.ready().then(function () {
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
        if (localStorage.getItem('UserDetail') && localStorage.getItem('Userpref')) {
            var b = JSON.parse(localStorage.getItem('UserDetail'))._id;
            var a = JSON.parse(localStorage.getItem('Userpref')).app_user_id;
            console.log(a, b);
            if (b == a) {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */];
            }
        }
        else if (localStorage.getItem('UserDetail')) {
            //         this.rootPage = LocationPage;
            //         
            //     }else{
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */];
        }
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */];
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nominatimap_nominatimap__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, geolocation, toastCtrl, nativeGeocoder, modalCtrl, appsetting, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.number = false;
        //        this.GetLocation();
        this.Gett();
    }
    LocationPage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        //    Loading.dismiss();
        modal.onDidDismiss(function (res) {
            //      alert(res.address);
            _this.data.otheraddress = res.address;
            console.log(_this.data.otheraddress);
            console.log(res.lati);
            console.log(res.longi);
            _this.lat = res.lati;
            _this.long = res.longi;
            _this.addrestype = 'other';
            _this.data.aaddress = '';
        });
        modal.present();
    };
    LocationPage.prototype.Gett = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: 'Connecting...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                console.log(data.data.latitude + ',' + data.data.longitude);
                _this.geo(parseFloat(data.data.latitude), parseFloat(data.data.longitude));
                //      this.profile = data.data;
                //      this.srcImage = this.profile.user_image;
                ////      this.city = this.data.city;
                //      console.log(this.profile.firstname);
            });
        });
    };
    LocationPage.prototype.geo = function (lat, long) {
        var _this = this;
        this.lat = lat;
        this.long = long;
        this.addrestype = 'saved';
        //      alert(this.lat+','+this.long+'SAVED');
        console.log(this.lat, this.long);
        //      alert('working');
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            // alert(JSON.stringify(result));
            if (result.subThoroughfare) {
                _this.data.aaddress = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else if (result.thoroughfare) {
                _this.data.aaddress = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else {
                _this.data.aaddress = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            console.log(_this.data.aaddress);
            //        alert(this.city);
            //  alert(this.data.result +'Neelanshi');
        }).catch(function (error) { return console.log(error); });
    };
    LocationPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    LocationPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LocationPage.prototype.submitinfo = function (preference) {
        var _this = this;
        console.log(preference.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        console.log(preference.value.datetime);
        console.log(preference.value.altdate);
        console.log(this.addrestype);
        this.str = preference.value.datetime.slice(0, 10);
        this.str1 = preference.value.datetime.slice(11, 16);
        if (preference.value.altdate) {
            this.str2 = preference.value.altdate.slice(0, 10);
            this.str3 = preference.value.altdate.slice(11, 16);
        }
        else {
            //    console.log(this.str+','+this.str1+','+this.str2+','+this.str3);
            if ((this.lat) && (this.long)) {
                this.data = {
                    app_user_id: userid,
                    todays_date: this.str,
                    todays_time: this.str1,
                    alternative_date: this.str2,
                    alternative_time: this.str3,
                    lat: this.lat,
                    long: this.long,
                    address_type: this.addrestype,
                };
                console.log(this.data);
                //      alert(this.data.lat+','+this.data.long);
                var serialized = this.serializeObj(this.data);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'addprefrence', serialized, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                        if (data.status == true) {
                            Loading.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: "Preference is saved",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                            localStorage.setItem('Userpref', JSON.stringify(_this.data));
                        }
                    });
                });
            }
            else {
                this.AlertMsg1('Need to select a location');
            }
        }
    };
    LocationPage.prototype.backtosignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    LocationPage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                _this.addrestype = 'current';
                Loading.dismiss();
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    // alert(JSON.stringify(result));
                    if (result.subThoroughfare) {
                        _this.current = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else if (result.thoroughfare) {
                        _this.current = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else {
                        _this.current = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    _this.AlertMsg('Your Location is:' + _this.current);
                    //  alert(this.data.result +'Neelanshi');
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg1('Please enable your location');
            });
        });
    };
    LocationPage.prototype.lupap = function () {
        var _this = this;
        //      localStorage.removeItem('NominatimDetail');
        this.addr = this.data.otheraddress;
        console.log(this.addr);
        if (this.addr == '') {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        if (this.addr == undefined) {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        else {
            var matches = this.addr.match(/\d+/g);
            if (matches != null) {
                //    console.log('number');
                this.number = true;
            }
            else {
                this.number = false;
            }
            if (this.number == true) {
                console.log('yes it is having number');
                //   this.openmapmodal();
                this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
            }
            else {
                console.log('false');
                var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options_1 = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
                if (this.addr) {
                    this.addr = this.addr.replace(/" "/g, '%20');
                    console.log(this.addr);
                    var adr = this.addr;
                    console.log(adr);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader'
                    });
                    Loading.present().then(function () {
                        _this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                            Loading.dismiss();
                            console.log(response[0]);
                            if (response[0] != undefined) {
                                if (response[0].place_id != '') {
                                    console.log('working');
                                    localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                    //        this.navCtrl.push(NominatimapPage);
                                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                    modal.onDidDismiss(function (data) {
                                        _this.data.aaddress = '';
                                    });
                                    modal.present();
                                    if (response[0].address.road) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.city) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state_district) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.country) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    _this.lat = response[0].lat;
                                    _this.long = response[0].lon;
                                    console.log(_this.lat, _this.long);
                                    _this.addrestype = 'other';
                                }
                            }
                            else {
                                console.log('neelanshi');
                                _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                            }
                            //    else
                            //        {
                            //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                            //        this.openmapmodal();
                            //    }
                        });
                    });
                }
            }
        }
    };
    LocationPage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_10_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        //    this.GetLocation();
    };
    LocationPage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LocationPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alertf = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.data.aaddress = '';
                        _this.data.otheraddress = '';
                        _this.lat = _this.l;
                        _this.long = _this.lg;
                        console.log(_this.lat, _this.long);
                        //          alert(this.lat+','+this.long+'Current');
                        _this.addrestype = 'current';
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alertf.present();
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.Tabpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/location/location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="theme-header">\n     <button style="height:28px; color: #fff; padding: 0 0 0 3px; font-size: 2.7rem; z-index: 9999" start ion-button clear (click)="backtosignin()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n          <ion-title>Select Location</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n\n<ion-content>\n	<div class="head">\n            <div class="form-sec">\n  		<form #preference="ngForm" novalidate >\n  	<ion-list style="margin: 0 !important;">\n           \n          \n  		<ion-item>\n                   \n<!--                \n-->                         <ion-datetime placeholder="MMM/DD/YYYY HH:mm" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm" min="{{date}}" max="3000" [(ngModel)]= "data.datetime" name="datetime" #datetime="ngModel" required></ion-datetime>\n                        \n                </ion-item>\n\n           \n          \n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n                         \n  		</ion-item>\n            <ion-item style="padding:0;">\n                <p style="text-align: left;">Alternative date and time</p>\n            </ion-item>\n            \n   \n  		<ion-item>\n  			<!--<p style="text-align: left;">Alternative date and time</p>-->\n  			<ion-datetime placeholder="MMM/DD/YYYY       HH:mm" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm"   min="{{date}}" max="3000" [(ngModel)]= "data.altdate" name="altdate" #altdate="ngModel"  ></ion-datetime>\n                </ion-item>\n           \n            <!--"-->\n  		<ion-item>\n  			<button ion-button icon-left class="currentbtn"  (click)="GetLocation()"  >\n			  <ion-icon name="paper-plane"  ></ion-icon>\n			  Use my current location\n			</button>\n<!--[(ngModel)]="data.current" name="current" #current="ngModel"-->\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<ion-input type="text" placeholder="Saved Address" [readonly]="isReadonly()" [(ngModel)]="data.aaddress" name="aaddress" #aaddress="ngModel" ></ion-input>\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n            <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-search-outline" md="md-search" (click)="lupap()" style="position: absolute;\n      top: 15px;left:8px;color: #000;z-index: 999;font-size:17px;font-weight: 700;"></ion-icon>\n  		<ion-item>\n  			<ion-input placeholder="Other Address" type="text"  [(ngModel)]= "data.otheraddress" name="otheraddress" #otheraddress="ngModel" style="padding-left:20px;"></ion-input>\n                </ion-item>\n            </div>\n  	</ion-list>\n \n\n    <div>\n          <button ion-button  [disabled]="!preference.valid" (click)="submitinfo(preference)"\n          style="width: 100%;background-color: #322723;height: 30px;margin-top: 10px;">Submit</button>\n    </div>\n                    </form>\n        </div></div>\n<!--	 <div class="content-sec">\n		<h3>Popular City</h3>\n		<ion-list style="margin: 0 !important;">\n			<ion-item>\n				<p>New York City</p>\n			</ion-item>\n			<ion-item>\n				<p>Chicago,Illinois</p>\n			</ion-item>\n			<ion-item>\n				<p>Charleston,South Carolina</p>\n			</ion-item>\n			<ion-item>\n				<p>Las Vegas,Nevada</p>\n			</ion-item>\n			<ion-item>\n				<p>Seattle,Washington</p>\n			</ion-item>\n			<ion-item>\n				<p>San,Francisco,California</p>\n			</ion-item>\n		</ion-list>-->\n	<!--</div>--> \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductviewPage = (function () {
    function ProductviewPage(navCtrl, appsetting, http, navParams, toastCtrl, loadCtrlr) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadCtrlr = loadCtrlr;
        this.splarr = '';
        this.ar = [];
    }
    ProductviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductviewPage');
        console.log(window.navigator.onLine);
        this.getdishdetail();
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ProductviewPage.prototype.getdishdetail = function () {
        if (localStorage.getItem('producttss')) {
            this.splarr = JSON.parse(localStorage.getItem('producttss'));
            //               this.array = JSON.parse(localStorage.getItem('Extrastaff'));
            console.log(this.splarr);
            console.log(this.splarr.product_ingredients);
            var str = this.splarr.product_ingredients;
            console.log(str);
            //   
            var str_array = str.split(',');
            ////
            for (var i = 0; i < str_array.length; i++) {
                ////   // Trim the excess whitespace.
                str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                ////   // Add additional code here, such as:
                console.log(str_array[i]);
                this.ar.push(str_array[i]);
            }
            console.log(this.ar);
        }
        this.price = this.splarr.product_price;
        this.quantity = this.splarr.minimum_order;
        console.log(this.price, this.quantity);
    };
    ProductviewPage.prototype.crt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    ProductviewPage.prototype.add = function (qnt) {
        this.quantity = parseFloat(qnt) + 1;
        console.log(this.quantity);
        console.log(qnt);
    };
    ProductviewPage.prototype.remove = function (qntity) {
        if (this.quantity == this.splarr.minimum_order) {
            console.log(this.quantity);
        }
        else {
            this.quantity = parseFloat(qntity) - 1;
            console.log(this.quantity);
            console.log(qntity);
        }
    };
    return ProductviewPage;
}());
ProductviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productview',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/productview/productview.html"*/'<!--\n  Generated template for the ProductviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n   <ion-navbar color="theme-header">\n    <ion-title>\n      {{splarr.specialties_product}}\n      <p>Online Chef list</p>\n    </ion-title>\n\n\n     <ion-buttons end (click)="crt()">\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n          <p><span>2</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n	<div class="banner">\n		<div class="main-img">\n			<img src="{{splarr.product_image0}}">\n		</div>\n		<div class="heart">\n			<img src="assets/img/redhrt.png">\n		</div>\n		<div class="text">\n			<h1>{{splarr.product_name}}</h1>\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="top-sec" style="background-color: #fff; padding: 0 16px; padding-top: 12px;">\n			<h3>{{splarr.product_name}}</h3>\n			<p>{{splarr.product_ingredients}}</p>\n		</div>\n	<div class="mid-sec" style="background-color: #fff; padding: 0 16px;">\n		<h3 style="width: auto; float: left; font-size: 14px; margin: 7px 25px 0px 0px; color: #f27242;">Reg <span>${{splarr.product_price}}</span></h3>\n		<div class="counter_sec">\n			   <button ion-button clear (click)="remove(quantity)"><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="{{quantity}}" >\n			   <button ion-button clear (click)="add(quantity)"><ion-icon name="add"></ion-icon></button>\n		</div>\n	</div>\n	<div class="bottom-sec" style="background-color: #fff; padding: 0 16px 14px 16px;">\n		<div class="leftbtn" style="width: 85px; float: left; margin-right: 10px; margin-top: 8px; overflow: hidden;">\n			<button ion-button (click)="crt()">Add To Cart</button>\n		</div>\n		<div class="cart-sec">\n			\n			<h3>{{quantity}} x ${{splarr.product_price}} = ${{quantity * splarr.product_price}}</h3>\n		</div>\n	</div>\n	\n		 <div class="segment-section" style="background-color: #fff; padding: 0 16px 15px 16px;">\n		  <ion-toolbar style="min-height: 27px;">\n		  <ion-segment color="pink" [(ngModel)]="pet">\n		    <ion-segment-button value="Description">\n		      Description\n		    </ion-segment-button>\n		    <ion-segment-button value="Ingreditent">\n		      Ingredient\n		    </ion-segment-button>\n		     <ion-segment-button value="Restriction">\n		      Diet Restriction\n		    </ion-segment-button>\n		  </ion-segment>\n		  </ion-toolbar>\n		\n	<div [ngSwitch]="pet">\n		<div class="head"  *ngSwitchCase="\'Ingreditent\'">\n			<ul *ngFor="let ingr of ar" >\n				<li>{{ingr}}</li>\n<!--				<li>Red Onion</li>\n				<li>Piquillo Peppers</li>\n				<li>Radicchio</li>\n				<li>Parmesan Cheese</li>\n				<li>Arugula</li>\n				<li>Blended Oil (canola oil, olive oil)</li>-->\n			</ul>\n		</div>\n		<div class="head"  *ngSwitchCase="\'Description\'">\n			<ul>\n				<li>{{splarr.product_description}} </li>\n				\n				\n			</ul>\n		</div>\n		<div class="head"  *ngSwitchCase="\'Restriction\'">\n			<ul>\n				<li>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>\n				<li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>\n				<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.</li>\n				\n				\n			</ul>\n		</div>\n	</div>\n</div>\n</div>\n\n	 \n	    \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/productview/productview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ProductviewPage);

//# sourceMappingURL=productview.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.pyment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    CartPage.prototype.loct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cart',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/cart.png">\n       </div>\n      </button>     \n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="top-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 class="left">\n					  <div class="chef">\n						<h5>Chef Samuel Linder</h5>\n					  </div>\n					</ion-col>\n					<ion-col col-6 class="right">\n					  <div class="phn">\n						<h5>9041-601-775</h5>\n						<span (click)="loct()"><img src="assets/img/msg.png"></span>\n					  </div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	<div class="text-sec">\n		\n		<div class="mid-sec">\n			<h5>Customer Address: <button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/creat.gif\'); background-size:cover"></button></h5>\n			<p>71 Pilgrim Avenue</p>\n			<p>Chevy Chase,MD 20815</p>\n		</div>\n		<div class="bottom-sec">\n			<ion-list>\n				<ion-item>\n					<h5 item-start class="strt">Booking Date & Time</h5>\n					<p>21 August 2017</p>\n					<p item-end class="ennd">9:05am</p>\n				</ion-item>\n			</ion-list>\n\n		</div>\n	</div>\n	<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <p item-end class="left-p">$200.00</p>\n	      <h3>Per plate $40.00</h3>\n	      <div class="itembottom" style="width: 100%; float: left; padding-top: 3px;">\n	      <div class="counter_sec">\n			   <button ion-button clear><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="0">\n			   <button ion-button clear><ion-icon name="add"></ion-icon></button>\n			  \n		  </div>\n		  <span>$20 x 5</span>\n		  </div>\n	      <div class="rghtbtn">\n	      	<button ion-button>Delete</button>\n	      </div>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <p item-end class="left-p">$200.00</p>\n	      <h3>Per plate $40.00</h3>\n	      <div class="itembottom" style="width: 100%; float: left; padding-top: 3px;">\n	      <div class="counter_sec">\n			   <button ion-button clear><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="0">\n			   <button ion-button clear><ion-icon name="add"></ion-icon></button>\n			  \n		  </div>\n		  <span>$20 x 5</span>\n		  </div>\n	      <div class="rghtbtn">\n	      	<button ion-button>Delete</button>\n	      </div>\n	    </ion-item>\n	</ion-list>\n</div>\n<div class="total">\n	<h2 class="left">Subtotal</h2>\n	<h2 class="right">$606.00</h2>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="theme-header" (click)="pyment()">Checkout</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/cart/cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whyrafaho_whyrafaho__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprefrence_editprefrence__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addwallet_addwallet__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frequentquestion_frequentquestion__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_feedback__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__changepwd_changepwd__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, toastCtrl, loadingCtrl, nativeGeocoder, http, alertCtrl, appsetting, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.app = app;
        this.data = {};
    }
    ProfilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                console.log(data.data.latitude + ',' + data.data.longitude);
                _this.geo(parseFloat(data.data.latitude), parseFloat(data.data.longitude));
                _this.profile = data.data;
                _this.srcImage = _this.profile.user_image;
                //      this.city = this.data.city;
                console.log(_this.profile.firstname);
            });
        });
    };
    ProfilePage.prototype.geo = function (lat, long) {
        var _this = this;
        //      alert('working');
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            // alert(JSON.stringify(result));
            _this.city = result.locality;
            console.log(_this.city);
            //        alert(this.city);
            //  alert(this.data.result +'Neelanshi');
        }).catch(function (error) { return console.log(error); });
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.editpr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprefrence_editprefrence__["a" /* EditprefrencePage */]);
    };
    ProfilePage.prototype.whyrafaha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__whyrafaho_whyrafaho__["a" /* WhyrafahoPage */]);
    };
    ProfilePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.term = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
    };
    ProfilePage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.wallet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addwallet_addwallet__["a" /* AddwalletPage */]);
    };
    ProfilePage.prototype.frequent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__frequentquestion_frequentquestion__["a" /* FrequentquestionPage */]);
    };
    ProfilePage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__feedback_feedback__["a" /* FeedbackPage */]);
    };
    ProfilePage.prototype.change = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__changepwd_changepwd__["a" /* ChangepwdPage */]);
    };
    ProfilePage.prototype.logout = function () {
        if (localStorage.getItem('UserDetail')) {
            // console.log(localStorage.getItem('UserInfo'));
            localStorage.removeItem('UserDetail');
            // alert("local storage cleared");
            //  this.navCtrl.push(SigninPage);
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__signin_signin__["a" /* SigninPage */]);
            // this.rootPage = TabsPage;
        }
    };
    ProfilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.Userprofile();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.Userprofile();
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n\n  <div class="main">\n    <div class="top-sec">\n      <div class="main-img">\n       <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/img/us.png">\n      </div>\n      <div class="text-sec">\n        <h3>{{profile?.firstname }} {{ profile?.lastname}}</h3>\n       \n        <h6><ion-icon ios="ios-pin" md="md-pin"></ion-icon> {{city}}</h6>\n      </div>\n    </div>\n  </div>\n  <div class="content-sec">\n       <ion-list>\n        <ion-item (click)="edit()">\n            Edit profile\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n           <ion-item (click)="editpr()">\n            Edit preferences\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="wallet()">\n            Add wallet\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item>\n            Payment\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="frequent()">\n            Frequent questions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="whyrafaha()">\n            Why RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="help()">\n            Help\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item>\n            Settings\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="term()">\n            Terms & conditions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="feedback()">\n            Feadback RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="change()">\n            Change Password\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="logout()">\n            Logout\n        </ion-item>\n      </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_location__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapmodal_mapmodal__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nominatimap_nominatimap__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { Geolocation } from '@ionic-native/geolocation';




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, geolocation, appsetting, nativeGeocoder, http, device, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.appsetting = appsetting;
        this.nativeGeocoder = nativeGeocoder;
        this.http = http;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.key = false;
        this.number = false;
        this.data = {};
        this.GetLocation();
        this.cities();
    }
    SignupPage.prototype.cities = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        //    let options = new RequestOptions({ headers: headers });
        this.http.get('http://rafao.us-west-2.elasticbeanstalk.com/api/allcity').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response.data);
            _this.arr = response.data;
            console.log(_this.arr);
        });
    };
    SignupPage.prototype.lupap = function () {
        var _this = this;
        console.log(this.data.city);
        if (this.data.city) {
            this.nativeGeocoder.forwardGeocode(this.data.city)
                .then(function (coordinates) {
                console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                _this.slat = coordinates.latitude;
                _this.slong = coordinates.longitude;
                console.log(_this.slat);
                console.log(_this.slong);
                localStorage.setItem('city', JSON.stringify(_this.slat, _this.slong));
            })
                .catch(function (error) { return console.log(error); });
            console.log();
        }
        this.address = this.data.address;
        console.log(this.address);
        if (this.address == '') {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        if (this.address == undefined) {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        else {
            var matches = this.address.match(/\d+/g);
            if (matches != null) {
                //    console.log('number');
                this.number = true;
            }
            else {
                this.number = false;
            }
            if (this.number == true) {
                console.log('yes it is having number');
                this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
            }
            else {
                console.log('false');
                var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* RequestOptions */]({ headers: headers });
                if (this.address) {
                    this.address = this.address.replace(/" "/g, '%20');
                    console.log(this.address);
                    var adr = this.address;
                    console.log(adr);
                    this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response[0]);
                        if (response[0] != undefined) {
                            if (response[0].place_id != '') {
                                console.log('working');
                                localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                //        this.navCtrl.push(NominatimapPage);
                                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                modal.onDidDismiss(function (data) {
                                    _this.AlertMsg4('Your Location has been saved');
                                });
                                modal.present();
                                if (response[0].address.road) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.city) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state_district) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.country) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                _this.lat = response[0].lat;
                                _this.long = response[0].lon;
                                console.log(_this.lat, _this.long);
                            }
                        }
                        else {
                            console.log('neelanshi');
                            _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                        }
                        //    else
                        //        {
                        //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                        //        this.openmapmodal();
                        //    }
                    });
                }
            }
        }
    };
    SignupPage.prototype.Registration = function (register) {
        var _this = this;
        console.log('registration');
        console.log(register.value);
        console.log(register.value.address);
        //    alert(JSON.stringify(register.value));
        console.log(this.lat, this.long);
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (register.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            if (register.value.phone) {
                register.value.phone = register.value.phone.replace(/-/g, "");
                var postdata = {
                    first_name: register.value.firstname,
                    last_name: register.value.lastname,
                    birth_day: register.value.dob,
                    gender: register.value.gender,
                    phone: register.value.phone,
                    emailid: register.value.email,
                    password: register.value.password,
                    address: register.value.address,
                    lat: this.lat,
                    long: this.long,
                    role: 'user',
                    deviceid: this.device.uuid
                };
                console.log(postdata);
                if (this.lat != null) {
                    var Serialized = this.serializeObj(postdata);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader'
                    });
                    Loading.present().then(function () {
                        _this.http.post(_this.appsetting.myGlobalVar + 'chefregistration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            Loading.dismiss();
                            if (response.status == true) {
                                //              this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
                                _this.ToastMsg('You have succesfully registered');
                                localStorage.setItem('UserDetail', JSON.stringify(response.data));
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__location_location__["a" /* LocationPage */]);
                            }
                            else {
                                _this.AlertMsg1(response.message);
                            }
                        });
                    });
                }
                else {
                    this.AlertMsg('Click Search icon to validate the address by webservice');
                }
            }
        }
    };
    /*************function for get user corrent location (latitude and longitude) and get address from lat long ************/
    SignupPage.prototype.GetLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
            // this.lat = resp.coords.latitude;
            // this.long = resp.coords.longitude;
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                .then(function (result) {
                // alert(JSON.stringify(result));
                if (result.subThoroughfare) {
                    _this.data.address = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else if (result.thoroughfare) {
                    _this.data.address = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else {
                    _this.data.address = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                //  alert(this.data.result +'Neelanshi');
            }).catch(function (error) { return console.log(error); });
        }).catch(function (error) {
            console.log('Error getting location', error);
            _this.ToastMsg1('Please enable your location');
        });
    };
    SignupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SignupPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SignupPage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SignupPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg4 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__location_location__["a" /* LocationPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.tabbtnPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        // this.navCtrl.push(SignupPage);
    };
    SignupPage.prototype.phonevalidation = function (phn) {
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    SignupPage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        modal.onDidDismiss(function (data) {
            _this.data.address = data.address;
            console.log(_this.data.address);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
            _this.AlertMsg4('Your Location has been saved');
        });
        modal.present();
    };
    SignupPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        this.GetLocation();
    };
    SignupPage.prototype.handleKeyboardEvent = function (event, pass, cpass) {
        console.log(event.key);
        console.log(event);
        console.log(pass);
        console.log(cpass);
        console.log(this.key);
        if (pass == cpass) {
            console.log(this.key);
            return this.key = true;
        }
        else {
            console.log(this.key);
            return this.key = false;
        }
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n <ion-toolbar>\n  <ion-title>Menu</ion-title>\n </ion-toolbar>\n</ion-header>\n\n<ion-content>\n		<div class="main">\n		<div class="top-img">\n			<img src="assets/img/signup-bg.png">\n		</div>\n		<div class="bottom-img">\n			<img src="assets/img/tpbg.png">\n		</div>\n		<div class="text-sec">\n		<h2>Sign In</h2>\n		<h3>Welcome to <span>Rafaho</span> app</h3>\n	</div>\n	<div class="logo">\n		<img src="assets/img/logo.png">\n	</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #registrationForm="ngForm" novalidate (submit)="Registration(registrationForm)">\n				<ion-list>\n			      <ion-grid>\n			      	<ion-row>\n			      		<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>First name</ion-label>\n						    <ion-input type="text" [(ngModel)]="data.firstname" name="firstname" #firstname="ngModel" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6 class="right">\n						  <ion-item>\n						    <ion-label stacked>Last name</ion-label>\n				   		    <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>Birthday</ion-label>\n						     <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"  [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="dob.errors && (dob.dirty || dob.touched)">\n                    <div [hidden]="!dob.errors.required">\n                      What\'s your date of birth?\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6 class="right gender">\n							<ion-label>Gender</ion-label>\n						  <ion-item>\n							  <ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n							    <ion-option value="female">Female</ion-option>\n							    <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="gender.errors && (gender.dirty || gender.touched)">\n                    <div [hidden]="!gender.errors.required">\n                      You are?\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n                                    \n                <ion-col col-12 class="right gender">\n							<ion-label>ENTER CITY</ion-label>\n						  <ion-item>\n							  <ion-select [(ngModel)]="data.city" name="city" #city="ngModel" required>\n							    <ion-option *ngFor="let cit of arr" value="{{cit.city_code}}" name="hh">{{cit.city}},{{cit?.state}}</ion-option>\n							    \n							  </ion-select>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="city.errors && (city.dirty || city.touched)">\n                    <div [hidden]="!city.errors.required">\n                      City is required\n                    </div>\n                  </div>\n                </div>\n						</ion-col>                    \n                             <ion-col col-12 class="left right">\n						  <div style="position: relative; overflow: hidden;">\n\n                  <ion-icon ios="ios-search-outline" md="md-search" (click)="lupap()" style="position: absolute;\n                  top: 4px;\n                  right: -24px;\n                  width: 50px;\n                  height: 50px;\n                  /* display: block; */\n                  color: #a6a6a6;\n                  z-index: 999; \n                  font-size:26px;\n                  "></ion-icon>\n\n                <ion-item>\n                  <ion-label stacked>ADDRESS </ion-label>\n                  \n                  <ion-input type="text" placeholder="Type and click search" [(ngModel)]= "data.address" name="address" #address="ngModel" required></ion-input>\n                  \n                </ion-item>\n              </div>		\n                                                </ion-col>       \n                                    \n                                    \n<!--						<ion-col col-12 class="left right">\n						  <div style="position: relative; overflow: hidden;">\n\n                  <ion-icon ios="ios-locate-outline" md="md-locate" (click)="openmapmodal()" style="position: absolute;\n                  top: 4px;\n                  right: -24px;\n                  width: 50px;\n                  height: 50px;\n                  /* display: block; */\n                  color: #000;\n                  z-index: 999; \n                  font-size:26px;\n                  "></ion-icon>\n\n                <ion-item>\n                  <ion-label stacked>ADDRESS </ion-label>\n                  \n                  <ion-input  (focus)="lupap()" type="text" [(ngModel)]= "data.address" name="address" #address="ngModel" required></ion-input>\n                  \n                </ion-item>\n              </div>		\n                                                </ion-col>-->\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Phone Number (xxx-xxx-xxxx)</ion-label>\n						    <ion-input (input)="phonevalidation(data.phone)" type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Email</ion-label>\n						      <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Password</ion-label>\n						    <ion-input type="password" [(ngModel)]="data.password" name="password" #password="ngModel" pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})" required></ion-input>\n                                                                                                                      \n				  </ion-item>\n					 <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!password.errors.minlength">\n								Password must be at least 6 digits\n							</div>\n                                              <div [hidden]="!password.errors.pattern">\n                                       Password is weak(It should be combination of a-z/A-Z,0-9/@*#)\n                                           </div>\n                  \n            </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Confirm Password</ion-label>\n						    <ion-input type="password" [(ngModel)]="data.cpassword" (input)="handleKeyboardEvent($event,data.password,data.cpassword)" name="cpassword" #cpassword="ngModel" required></ion-input>\n						  </ion-item>\n						\n							 <div *ngIf="key == false && cpassword.errors && (cpassword.dirty || cpassword.touched)">\n              <div [hidden]="!cpassword.errors.required">\n                Confirm password is required\n              </div>\n          \n            </div>\n						<div *ngIf="data.cpassword">\n						 <div *ngIf="key != true && (cpassword.dirty || cpassword.touched)">\n				\n						 <span>Password mismatch </span> \n						 </div>\n						 </div>\n						</ion-col>\n					</ion-row>\n				  </ion-grid>\n				</ion-list>\n				<div class="frgtpwd">\n			<button ion-button type="submit" [disabled]="!registrationForm.valid">Register</button>\n			</div>\n			</form>\n		</div>\n		<div class="frgtpwd" >\n			<h3 class="register">I have an account? <span (click)="login()">Login</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/rafaho3/rafaho/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map