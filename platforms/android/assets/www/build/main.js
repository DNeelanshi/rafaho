webpackJsonp([22],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddwalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-addwallet',template:/*ion-inline-start:"G:\rafaho\src\pages\addwallet\addwallet.html"*/'<!--\n  Generated template for the AddwalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n     <ion-title>\n     Add Money\n      <p>Card Details</p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec">\n				<ion-list>\n			      <ion-grid>\n			      	<ion-row>\n			      		<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Add Money</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12 class="right left">\n							<h2 style="font-size: 15px; color: #f27242; font-weight: 500;">Credit card details</h2>\n						  <ion-item>\n\n						    <ion-label stacked>Card Number</ion-label>\n				   		    <ion-input type="text"></ion-input>\n				   		    <div class="image" item-end>\n				   		    	<img src="assets/img/visa.png">\n				   		    </div>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>cardholder</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>Expiery Date</ion-label>\n						    <ion-input type="date" class="date"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6 class="right">\n						  <ion-item>\n						    <ion-label stacked>CVV</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n					</ion-row>\n				  </ion-grid>\n				</ion-list>\n			</form>\n		</div>\n		<div class="top-sec">\n		   <ion-item style="padding: 0px">\n			  <ion-label style="color: #565656; font-size: 13px; font-weight: 500;">Add card to wallet</ion-label>\n			  <ion-checkbox color="theme-header"></ion-checkbox>\n			</ion-item>\n			<button ion-button full>Continue</button>\n		</div>\n		<div class="bottom-sec">\n			<h3 style="font-size: 15px; color: #f27242; font-weight: 500;">Select your payment method</h3>\n			    <ion-list>\n			        <ion-item>\n			            Credit Card\n			          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n			        </ion-item>\n			         <ion-item>\n			            Debit Card\n			          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n			        </ion-item>\n			    </ion-list>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\addwallet\addwallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AddwalletPage);

//# sourceMappingURL=addwallet.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-payment',template:/*ion-inline-start:"G:\rafaho\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="../assets/img/cart.png">\n       </div>\n      </button>     \n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="top">\n		<h2>Select Payment Method</h2>\n	</div>\n	 <ion-list>\n        <ion-item (click)="showAlert()">\n            <h3>Wallet</h3>\n            <p>Current Balance  $60</p>\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="showAlert()">\n        	<ion-thumbnail item-start>\n	        <img src="assets/img/paypal.png">\n	      </ion-thumbnail>\n            <h3>Paypal</h3>\n            <p>username@gmail.com</p>\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(35);
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
            var email = JSON.parse(localStorage.getItem('UserInfo')).email;
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
                            localStorage.clear();
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
            duration: 3000,
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
        selector: 'page-changepwd',template:/*ion-inline-start:"G:\rafaho\src\pages\changepwd\changepwd.html"*/'<!--\n  Generated template for the ChangepwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="theme-header">\n		<ion-title>Change password</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="image">\n			<img src="assets/img/logo.png">\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #changepassForm="ngForm" novalidate (submit)="changepassword(changepassForm)">\n				<ion-list>\n\n					<ion-item>\n						<ion-label stacked>Enter your old password</ion-label>\n						<ion-input type="password" [(ngModel)]="data.oldpassword" name="oldpassword" #oldpassword="ngModel" minlength="5" required></ion-input>\n					</ion-item>\n					<div class="alert alert-danger" color="danger">\n						<div *ngIf="oldpassword.errors && (oldpassword.dirty || oldpassword.touched)">\n							<div [hidden]="!oldpassword.errors.required">\n								Old password is required\n							</div>\n							<div [hidden]="!oldpassword.errors.minlength">\n								Old password must be at least 5 digits\n							</div>\n						</div>\n					</div>\n					<ion-item>\n						<ion-label stacked>Enter your new password</ion-label>\n						<ion-input type="password" [(ngModel)]="data.newpassword" name="newpassword" #newpassword="ngModel" minlength="5" required></ion-input>\n					</ion-item>\n					<div class="alert alert-danger" color="danger">\n						<div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n							<div [hidden]="!newpassword.errors.required">\n								New password is required\n							</div>\n							<div [hidden]="!newpassword.errors.minlength">\n								New password must be at least 5 digits\n							</div>\n						</div>\n					</div>\n					<ion-item>\n						<ion-label stacked>Confirm your new password</ion-label>\n						<ion-input type="password" [(ngModel)]="data.cnewpassword" (input)="handleKeyboardEvent($event,data.newpassword,data.cnewpassword)"\n						 name="cnewpassword" #cnewpassword="ngModel" required></ion-input>\n					</ion-item>\n					<div *ngIf="key == false && cnewpassword.errors && (cnewpassword.dirty || cnewpassword.touched)">\n						<div [hidden]="!cnewpassword.errors.required">\n							Confirm password is required\n						</div>\n						\n					</div>\n					<div *ngIf="data.cnewpassword">\n						<div *ngIf="key != true && (cnewpassword.dirty || cnewpassword.touched)">\n\n							<span>password mismatch </span>\n						</div>\n					</div>\n				</ion-list>\n					<div class="frgtpwd">\n			<button ion-button type="submit">Save</button>\n		</div>\n			</form>\n		</div>\n	\n\n	</div>\n</ion-content>'/*ion-inline-end:"G:\rafaho\src\pages\changepwd\changepwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], ChangepwdPage);

//# sourceMappingURL=changepwd.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productview_productview__ = __webpack_require__(113);
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
        selector: 'page-favorites',template:/*ion-inline-start:"G:\rafaho\src\pages\favorites\favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Favorites</ion-title>\n  </ion-navbar>\n   <div class="segment-sec">\n     <ion-toolbar>\n	  <ion-segment color="theme-header" [(ngModel)]="pet">\n	    <ion-segment-button value="kittens">\n	      Favorites\n	    </ion-segment-button>\n	    <ion-segment-button value="puppies">\n	      Suggestions\n	    </ion-segment-button>\n	  </ion-segment>\n	  </ion-toolbar>\n	</div>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="content-sec">\n		<div [ngSwitch]="pet">\n		  <ion-grid *ngSwitchCase="\'kittens\'">\n		  	<ion-row>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtthree.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtfour.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n\n		  		\n		  	</ion-row>\n		  </ion-grid>\n		  <ion-grid *ngSwitchCase="\'puppies\'">\n		  	<ion-row>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtthree.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtfour.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n\n		  		\n		  	</ion-row>\n		  </ion-grid>\n		\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(55);
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
    function ProductviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductviewPage');
    };
    ProductviewPage.prototype.crt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    return ProductviewPage;
}());
ProductviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productview',template:/*ion-inline-start:"G:\rafaho\src\pages\productview\productview.html"*/'<!--\n  Generated template for the ProductviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n   <ion-navbar color="theme-header">\n    <ion-title>\n      Chimichurri Steak & Potato Salad\n      <p>Online Chef list</p>\n    </ion-title>\n\n\n     <ion-buttons end (click)="crt()">\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n          <p><span>2</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="banner">\n		<div class="main-img">\n			<img src="assets/img/prbg.png">\n		</div>\n		<div class="heart">\n			<img src="assets/img/redhrt.png">\n		</div>\n		<div class="text">\n			<h1>Chimichurri Steak & Potato Salad</h1>\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="top-sec" style="background-color: #fff; padding: 0 16px; padding-top: 12px;">\n			<h3>Chimichurri Steak & Potato Salad</h3>\n			<p>wild arugula, radishes, verde sauce</p>\n		</div>\n	<div class="mid-sec" style="background-color: #fff; padding: 0 16px;">\n		<h3 style="width: auto; float: left; font-size: 14px; margin: 7px 25px 0px 0px; color: #f27242;">Reg <span>$16.25</span></h3>\n		<div class="counter_sec">\n			   <button ion-button clear><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="0">\n			   <button ion-button clear><ion-icon name="add"></ion-icon></button>\n		</div>\n	</div>\n	<div class="bottom-sec" style="background-color: #fff; padding: 0 16px 14px 16px;">\n		<div class="leftbtn" style="width: 85px; float: left; margin-right: 10px; margin-top: 8px; overflow: hidden;">\n			<button ion-button>Add To Cart</button>\n		</div>\n		<div class="cart-sec">\n			\n			<h3>5 x $10.00 = $50.00</h3>\n		</div>\n	</div>\n	\n		 <div class="segment-section" style="background-color: #fff; padding: 0 16px 15px 16px;">\n		  <ion-toolbar style="min-height: 27px;">\n		  <ion-segment color="pink" [(ngModel)]="pet">\n		    <ion-segment-button value="Description">\n		      Description\n		    </ion-segment-button>\n		    <ion-segment-button value="Ingreditent">\n		      Ingredient\n		    </ion-segment-button>\n		     <ion-segment-button value="Restriction">\n		      Diet Restriction\n		    </ion-segment-button>\n		  </ion-segment>\n		  </ion-toolbar>\n		\n	<div [ngSwitch]="pet">\n		<div class="head"  *ngSwitchCase="\'Ingreditent\'">\n			<ul>\n				<li>Grilled Teres Major Beef</li>\n				<li>Red Onion</li>\n				<li>Piquillo Peppers</li>\n				<li>Radicchio</li>\n				<li>Parmesan Cheese</li>\n				<li>Arugula</li>\n				<li>Blended Oil (canola oil, olive oil)</li>\n			</ul>\n		</div>\n		<div class="head"  *ngSwitchCase="\'Description\'">\n			<ul>\n				<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>\n				<li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li>\n				<li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</li>\n				\n				\n			</ul>\n		</div>\n		<div class="head"  *ngSwitchCase="\'Restriction\'">\n			<ul>\n				<li>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>\n				<li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>\n				<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.</li>\n				\n				\n			</ul>\n		</div>\n	</div>\n</div>\n</div>\n\n	 \n	    \n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\productview\productview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ProductviewPage);

//# sourceMappingURL=productview.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RafahoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderdetial_orderdetial__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectdish_selectdish__ = __webpack_require__(116);
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
        selector: 'page-rafaho',template:/*ion-inline-start:"G:\rafaho\src\pages\rafaho\rafaho.html"*/'<!--\n  Generated template for the RafahoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="theme-header" >\n    <ion-title>Rafaho</ion-title>\n  </ion-navbar>\n <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment color="theme-header" [(ngModel)]="pet">\n    <ion-segment-button value="kittens" style="border-right: none;">\n     Active Order\n    </ion-segment-button>\n    <ion-segment-button value="puppies" style="border-left: none; border-right: none;">\n      Pending Order\n    </ion-segment-button>\n    <ion-segment-button value="History" style="border-left: none;">\n      Order History\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n\n</ion-header>\n\n\n<ion-content>\n<div class="content-sec">\n	<div [ngSwitch]="pet">\n	<!-- pending order include hear -->\n	  <ion-list *ngSwitchCase="\'puppies\'">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	   <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="../assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	  </ion-list>\n	  <!-- pending end hear -->\n	  <!-- active order start -->\n	    <ion-list *ngSwitchCase="\'kittens\'">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2 (click)="order()"> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	   <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="../assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	  </ion-list>\n	  <!-- active order end here -->\n	  <ion-list *ngSwitchCase="\'History\'">\n	    <ion-item>\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img src="assets/img/opecity.png">\n	        <p>Cancelled</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	   <ion-item>\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img src="assets/img/opecity.png">\n	        <p style="background-color: #2bb600;">Compeleted</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img src="assets/img/opecity.png">\n	        <p>Cancelled</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img src="assets/img/amanda.png">\n	      	</div>\n	      	<h1>Aaron Franklin </h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" (click)="order()">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	  </ion-list>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\rafaho\rafaho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], RafahoPage);

//# sourceMappingURL=rafaho.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-orderdetial',template:/*ion-inline-start:"G:\rafaho\src\pages\orderdetial\orderdetial.html"*/'<!--\n  Generated template for the OrderdetialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Orderdetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="top-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 class="left">\n					  <div class="chef">\n						<h5>Chef Samuel Linder</h5>\n					  </div>\n					</ion-col>\n					<ion-col col-6 class="right">\n					  <div class="phn">\n						<h5>9041-601-775</h5>\n						<span><img src="../assets/img/msg.png"></span>\n					  </div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	<div class="text-sec">\n		\n		<div class="mid-sec">\n			<h5>Customer Address:</h5>\n			<p>71 Pilgrim Avenue</p>\n			<p>Chevy Chase,MD 20815</p>\n			<div class="rghtbtn">\n				<button ion-button end>Order Cancle</button>\n			</div>\n		</div>\n		<div class="bottom-sec">\n			<ion-list>\n				<ion-item>\n					<h5 item-start class="strt">Booking Date & Time</h5>\n					<p>21 August 2017</p>\n					<p item-end class="ennd">9:05am</p>\n				</ion-item>\n			</ion-list>\n\n		</div>\n	</div>\n	<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="../assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>\n	    </ion-item>\n	</ion-list>\n</div>\n<div class="total">\n	<h2 class="left">Subtotal</h2>\n	<h2 class="right">$606.00</h2>\n</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\orderdetial\orderdetial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], OrderdetialPage);

//# sourceMappingURL=orderdetial.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectdishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-selectdish',template:/*ion-inline-start:"G:\rafaho\src\pages\selectdish\selectdish.html"*/'<!--\n  Generated template for the SelectdishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n  	<button  start color="theme-header" style="background-color: #f27242; color: #fff;" (click)="dismiss()">\n      <ion-icon name="close" style="font-size: 30px;"></ion-icon>\n    </button>\n    <ion-title>\n    	 Select Dish\n    </ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">Select All</button>     \n    </ion-buttons>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	     <p class="p-note" style="white-space: normal; font-weight: 500; color: #000000; font-size: 12px;"><span style="color: #f27242;">Reg</span> $16.25</p>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>	       \n	    </ion-item>\n		    <ion-item>\n		      <ion-thumbnail item-start>\n		        <img src="../assets/img/southfod.png">\n		      </ion-thumbnail>\n		      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n			      <p>Idli,sambhar, Kerla</p>\n		    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	    </ion-item>\n	   \n	</ion-list>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="theme-header">Add Dish</button>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"G:\rafaho\src\pages\selectdish\selectdish.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], SelectdishPage);

//# sourceMappingURL=selectdish.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefdetialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviews_reviews__ = __webpack_require__(118);
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
    function ChefdetialsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChefdetialsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChefdetialsPage');
    };
    ChefdetialsPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reviews_reviews__["a" /* ReviewsPage */]);
    };
    return ChefdetialsPage;
}());
ChefdetialsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chefdetials',template:/*ion-inline-start:"G:\rafaho\src\pages\chefdetials\chefdetials.html"*/'<!--\n  Generated template for the ChefdetialsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>\n      Chef Details\n      <p>Online Chef list</p>\n    </ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top-sec" padding>\n	<div class="top">\n		<ion-grid style="padding: 0px;">\n		<ion-row>\n			<ion-col col-3 style="padding-left: 0px">\n				<div class="image">\n					<img src="assets/img/profile.png">\n				</div>\n			</ion-col>\n			<ion-col col-9>\n				<div class="text">\n					<h2>Chef Samuel Linder</h2>\n				    <h3><span><ion-icon name="pin"></ion-icon></span> New York</h3>\n				    <p>$500 Min order</p>\n				    <h5 (click)="review()">\n				     <ul>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     </ul>\n				    View Reviews</h5>\n				</div>\n				\n			</ion-col>\n			\n		</ion-row>\n	</ion-grid>\n	</div>\n</div>\n	\n	<div class="special">\n		<h3>Specialities</h3>\n		<ion-list>\n			 <ion-item>\n			      <ion-thumbnail item-start>\n			        <img src="assets/img/southfod.png">\n			      </ion-thumbnail>\n			      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n			      <p>Idli,sambhar, Kerla</p>\n			      <ion-note item-end="" class="note note-ios">3/4</ion-note>\n		    </ion-item>\n		     <ion-item>\n			      <ion-thumbnail item-start>\n			        <img src="assets/img/southfod.png">\n			      </ion-thumbnail>\n			      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n			      <p>Idli,sambhar, Kerla</p>\n			      <ion-note item-end="" class="note note-ios">3/4</ion-note>\n		    </ion-item>\n		</ion-list>\n	</div>\n	<div class="product" padding>\n		<ion-grid style="padding:0px;">\n			<div class="text">\n					<h3>Our Product</h3>\n				</div>\n			<ion-row>\n				\n				<ion-col col-4 style="padding-left: 0px">\n					<div class="colm">\n						<div class="image" style="width: 100%; float: left;">\n							<img src="assets/img/productone.png" style="width: 100%; float: left;">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>Honey-Chipotle Shrimp Salad</p>\n						</div>\n						<div class="offer" style="position: absolute; background-color: #2bb600; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #fff; font-weight: 400;">20% off</p>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col col-4 style="padding: 5px 2.5px;">\n					<div class="colm">\n						<div class="image" style="width: 100%; float: left;">\n							<img src="assets/img/productone.png" style="width: 100%; float: left;">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>Honey-Chipotle Shrimp Salad</p>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col col-4 style="padding-right: 0px">\n					<div class="colm">\n						<div class="image" style="width: 100%; float: left;">\n							<img src="assets/img/productone.png" style="width: 100%; float: left;">\n						</div>\n						<div class="text" style="position: absolute; text-align: center;">\n							<p>Honey-Chipotle Shrimp Salad</p>\n						</div>\n						<div class="offer" style="position: absolute; background-color: #ffe400; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #000; font-weight: 400;">10% off</p>\n						</div>\n					</div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n	<div class="about">\n		<h3>About Me</h3>\n		<p>Speaking enthusiastically about and demonstrating their passion for food, flavours and delectable culinary creations from every corner of the globe, our celebrity chefs have unrivalled knowledge and expertise when it comes to all things culinary!</p>\n	</div>\n	<!-- <div class="acrdin">\n\n		  <ion-list style="margin-bottom: 0px;">\n		  <ion-item *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n		    <h3>\n		      {{d.title}}\n		      <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-up\' : \'arrow-forward\'" style="margin: 0; float: right;"></ion-icon>\n		    </h3>\n		    <div class="dsprtion" *ngIf="isGroupShown(i)">{{d.description}}</div>\n		  </ion-item>\n		</ion-list>\n	</div> -->\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\chefdetials\chefdetials.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ChefdetialsPage);

//# sourceMappingURL=chefdetials.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-reviews',template:/*ion-inline-start:"G:\rafaho\src\pages\reviews\reviews.html"*/'<!--\n  Generated template for the ReviewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>View Reviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top">\n		<ion-list style="margin: 0;">\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/profile.png">\n		    </ion-avatar>\n		    <h2>Chef Samuel Linder</h2>\n			<h3><span><ion-icon name="pin"></ion-icon></span> New York</h3>\n\n		      <div class="btn" item-end>\n		      		<ul>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n				     </ul>\n				    <h4>262 Reviews</h4>\n		      </div>     \n		 \n		  </ion-item>\n		</ion-list>\n	</div>\n	<div class="bottom">\n		<ion-list>\n		  <ion-item>\n		    <ion-thumbnail item-start>\n		        <img src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		   <ion-item>\n		    <ion-thumbnail item-start>\n	          <img src="assets/img/southfood.png">\n	        </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		   <ion-item>\n		    <ion-thumbnail item-start>\n		        <img src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>Good Chef <span>12/06/2017</span></h2>\n		    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n		  </ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar style="padding: 6px;">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<div>\n			<div class="star">\n				<ul>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			    </ul>\n			</div>\n			<ion-buttons end>\n		      <button ion-button icon-only class="btnprofile">Submit</button>     \n		    </ion-buttons>\n		</div>\n		\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"G:\rafaho\src\pages\reviews\reviews.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ReviewsPage);

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(55);
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
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    ProductlistPage.prototype.crt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    return ProductlistPage;
}());
ProductlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productlist',template:/*ion-inline-start:"G:\rafaho\src\pages\productlist\productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>\n      South Indian Food\n      \n    </ion-title>\n\n\n     <ion-buttons end (click)="crt()">\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n          <p><span>2</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content>\n	<div class="content-sec">\n		<ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	     \n	\n	   \n	</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\productlist\productlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyrafahoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-whyrafaho',template:/*ion-inline-start:"G:\rafaho\src\pages\whyrafaho\whyrafaho.html"*/'<!--\n  Generated template for the WhyrafahoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Why Rafaho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Why Rafaho</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\whyrafaho\whyrafaho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], WhyrafahoPage);

//# sourceMappingURL=whyrafaho.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-help',template:/*ion-inline-start:"G:\rafaho\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Where can I get some?</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-terms',template:/*ion-inline-start:"G:\rafaho\src\pages\terms\terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Terms and conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Terms and conditions</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more .</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\terms\terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(299);
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
    function EditprofilePage(navCtrl, navParams, toastCtrl, loadingCtrl, http, alertCtrl, appsetting, actionSheetCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.data = {};
        alert('tmmtt');
    }
    EditprofilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.Loading.dismiss();
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
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
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
                id: userid
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
                            alert('camera');
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageUri
                            };
                            alert(JSON.stringify(postdata));
                            console.log(postdata);
                            var serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader'
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    alert(JSON.stringify(data));
                                    console.log(data);
                                    alert("saving image");
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
                            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageData
                            };
                            alert(postdata);
                            var serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader'
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    //this.Loading.dismiss();
                                    console.log(data);
                                    alert("saving image");
                                }, function (err) {
                                    console.log(JSON.stringify(err));
                                    alert(JSON.stringify(err));
                                });
                            });
                            alert('gallery working');
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
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprofile',template:/*ion-inline-start:"G:\rafaho\src\pages\editprofile\editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n     <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n	<div class="main">\n    <div class="top-sec">\n      <div class="main-img">\n        <img src="assets/img/profile.png">\n      </div>\n      <div class="input-sec" (click)="CameraAction()">\n      <div class="upld">\n      \n      	<ion-icon name="camera"></ion-icon>\n      </div>\n      </div>\n      <div class="text-sec">\n        <h3>{{data?.firstname }} {{ data?.lastname}}</h3>\n        <h6><ion-icon ios="ios-pin" md="md-pin"></ion-icon> New York</h6>\n      </div>\n    </div>\n  </div>\n  <div class="content-sec">\n  	<div class="form-sec">\n  		<form #editprofile="ngForm" novalidate (submit)="submitinfo(editprofile)">\n  			<ion-list>\n  				<ion-grid>\n  					<ion-row>\n  						<ion-col col-12>\n						  <ion-item>\n						    <ion-input type="text" placeholder="First name" [(ngModel)]="data.firstname" name="firstname" #firstname="ngModel"></ion-input>\n						  </ion-item>\n						</ion-col>\n\n						<ion-col col-12>\n						  <ion-item>\n						    <ion-input type="text" placeholder="Last name" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12>\n						   <ion-item>\n						    <ion-input type="email" placeholder="Email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$"></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n						</ion-col>\n						<ion-col col-12>\n						   <ion-item>\n						    <ion-input type="tel" placeholder="Phone number (xxx-xxx-xxx-xxx-xxx)" [(ngModel)]="data.phone" name="phone" #phone="ngModel" (input)="phonevalidation(data.phone)" maxlength="12"></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6>\n						   <ion-item>\n						    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{data?.dob}}"></ion-datetime>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6>\n						   <ion-item>\n						    	<ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel">\n							    <ion-option value="female">Female</ion-option>\n							    <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12>\n						    <ion-item>\n							    <ion-textarea class="enter" placeholder="Enter your address...." [(ngModel)]="data.address" name="address" #address="ngModel"></ion-textarea>\n							</ion-item> \n						</ion-col>\n					</ion-row>\n				</ion-grid>\n\n			</ion-list>\n			 <div class="btn-sec">\n  	<button ion-button type="submit">Save</button>\n  </div>\n  		</form>\n  	</div>\n  </div>\n \n\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentquestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-frequentquestion',template:/*ion-inline-start:"G:\rafaho\src\pages\frequentquestion\frequentquestion.html"*/'<!--\n  Generated template for the FrequentquestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Frequent Questions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>What is Lorem Ipsum?</h3>\n		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>\n		<h3>Where does it come from?</h3>\n		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>\n		<ul>\n			<li>Contrary to popular belief</li>\n			<li>Lorem Ipsum is not</li>\n			<li>simply random text</li>\n			<li> It has roots in a piece </li>\n		</ul>\n		<h3>What is Lorem Ipsum?</h3>\n		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\frequentquestion\frequentquestion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FrequentquestionPage);

//# sourceMappingURL=frequentquestion.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(27);
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
        selector: 'page-feedback',template:/*ion-inline-start:"G:\rafaho\src\pages\feedback\feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Rafaho Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="top-sec">\n		<ion-list>\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>Username</h3>\n		    <p>Posted 19 june 2017</p>\n		    <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h6>\n		  </ion-item>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>Username</h3>\n		    <p>Posted 19 june 2017</p>\n		    <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n		  </ion-item>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>Username</h3>\n		    <p>Posted 19 june 2017</p>\n		    <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n		  </ion-item>\n		</ion-list>\n	</div>\n	\n	\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n      <form #feedbackform="ngForm" novalidate (submit)="postfeedback(feedbackform)">\n  	<div class="bottom-sec">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your feedback...." [(ngModel)]="data.feedback" name="feedback" #feedback="ngModel"></ion-textarea>\n		</div>\n		<div class="send"><button ion-button>Send</button></div>\n	</div>\n  </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"G:\rafaho\src\pages\feedback\feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgtpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(35);
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
            duration: 3000,
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
        selector: 'page-forgtpwd',template:/*ion-inline-start:"G:\rafaho\src\pages\forgtpwd\forgtpwd.html"*/'<!--\n  Generated template for the ForgtpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Forget password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="image">\n			<img src="assets/img/logo.png">\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #forgetpwd="ngForm" novalidate (submit)="forgot(forgetpwd)">\n				<ion-list>\n\n				  <ion-item>\n				    <ion-label stacked>Enter your registered email</ion-label>\n				    <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n				</ion-list>\n				<div class="frgtpwd">\n			<button ion-button type="submit" [disabled]="!forgetpwd.valid">Submit</button>\n			</div>\n			</form>\n		</div>\n		<div class="frgtpwd">\n			<h3 class="register">Don\'t have an account? <span (click)="signupPage()">Register</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\forgtpwd\forgtpwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ForgtpwdPage);

//# sourceMappingURL=forgtpwd.js.map

/***/ }),

/***/ 135:
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
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addwallet/addwallet.module": [
		430,
		21
	],
	"../pages/cart/cart.module": [
		431,
		20
	],
	"../pages/change/change.module": [
		432,
		1
	],
	"../pages/changepwd/changepwd.module": [
		433,
		19
	],
	"../pages/chefdetials/chefdetials.module": [
		434,
		18
	],
	"../pages/editprofile/editprofile.module": [
		435,
		17
	],
	"../pages/favorites/favorites.module": [
		436,
		16
	],
	"../pages/feedback/feedback.module": [
		437,
		15
	],
	"../pages/forgtpwd/forgtpwd.module": [
		438,
		14
	],
	"../pages/frequentquestion/frequentquestion.module": [
		439,
		13
	],
	"../pages/help/help.module": [
		440,
		12
	],
	"../pages/location/location.module": [
		441,
		11
	],
	"../pages/orderdetial/orderdetial.module": [
		442,
		10
	],
	"../pages/payment/payment.module": [
		443,
		9
	],
	"../pages/productlist/productlist.module": [
		444,
		8
	],
	"../pages/productview/productview.module": [
		445,
		7
	],
	"../pages/rafaho/rafaho.module": [
		446,
		6
	],
	"../pages/reviews/reviews.module": [
		447,
		5
	],
	"../pages/selectdish/selectdish.module": [
		448,
		4
	],
	"../pages/southfood/southfood.module": [
		449,
		0
	],
	"../pages/terms/terms.module": [
		450,
		3
	],
	"../pages/whyrafaho/whyrafaho.module": [
		451,
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
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
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
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], Appsetting);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-chat',template:/*ion-inline-start:"G:\rafaho\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Booking Calender</ion-title>\n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="archived">\n      Archived\n    </ion-segment-button>\n    <ion-segment-button value="chat">\n      Chat\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n<div [ngSwitch]="pet">\n<div class="chatsec" *ngSwitchCase="\'chat\'">\n	<ul>\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Hi, How are you?</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n\n		<li class="rightchat">\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n		<li class="rightchat">\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n	</ul>\n</div>\n	<ion-list *ngSwitchCase="\'archived\'">\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/amanda.png">\n	    </ion-avatar>\n	    <h2>Amanda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/arenda.png">\n	    </ion-avatar>\n	    <h2>Arenda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/aron.png">\n	    </ion-avatar>\n	    <h2>Aron</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/aron.png">\n	    </ion-avatar>\n	    <h2>Aron Sanched</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/amanda.png">\n	    </ion-avatar>\n	    <h2>Amanda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/profile.png">\n	    </ion-avatar>\n	    <h2>Frankil Aron</h2>\n	  </ion-item>\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/arenda.png">\n	    </ion-avatar>\n	    <h2>Arenda</h2>\n	  </ion-item>\n	</ion-list>\n\n</div>\n\n\n	\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<ion-buttons end>\n      <button ion-button icon-only class="btnprofile"><ion-icon name="paper-plane"></ion-icon></button>     \n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"G:\rafaho\src\pages\chat\chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chefdetials_chefdetials__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productlist_productlist__ = __webpack_require__(119);
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
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.pet = "kittens";
    }
    HomePage.prototype.fltr_opn = function () {
        var fltr_opn = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
        fltr_opn.present();
    };
    HomePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chefdetials_chefdetials__["a" /* ChefdetialsPage */]);
    };
    HomePage.prototype.prdlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__productlist_productlist__["a" /* ProductlistPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"G:\rafaho\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n      Chef List\n      <p>Online Chef list</p>\n    </ion-title>\n    \n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="kittens">\n      chef Search\n    </ion-segment-button>\n    <ion-segment-button value="puppies">\n      Dish Search\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n<div class="serch">\n  <ion-searchbar placeholder="Search by chef..." ></ion-searchbar>\n  <div class="option">\n      <img src="assets/img/option.png" (click)="fltr_opn()">\n  </div>\n</div>\n\n\n</ion-header>\n\n<ion-content>\n  <div class="banner">\n  <img src="assets/img/off.png">\n</div>\n  \n  <div class="content-sec">\n    \n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item (click)="detail()">\n        <ion-avatar item-start>\n          <img src="assets/img/aron.png">\n        </ion-avatar>\n        <h3>Aaron</h3>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/amanda.png">\n        </ion-avatar>\n        <h3>Amanda</h3>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/aron.png">\n        </ion-avatar>\n        <h3>Aaron Franklin</h3>\n        <p><span>Specialities</span>Idli,sambhar, Kerla</p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn green" item-end>\n          <h3><span> <img src="assets/img/star.png"></span>3/4</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #2bb600;"></ion-icon>\n            Available Today\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #dcca00;"></ion-icon>\n            Alternative date available\n          </button>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/arenda.png">\n        </ion-avatar>\n        <h3>Andrea Beaman</h3>\n        <p><span>Specialities</span>Idli,sambhar, Kerla</p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn green" item-end>\n          <h3><span> <img src="assets/img/star.png"></span>3/4</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #fe4600;"></ion-icon>\n            Not available today\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #dcca00;"></ion-icon>\n            Alternative date available\n          </button>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/aron.png">\n        </ion-avatar>\n        <h3>Aaron Sanchez</h3>\n        <p><span>Specialities</span>Idli,sambhar, Kerla</p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn yellow" item-end>\n          <h3><span> <img src="assets/img/star.png"></span>3/4</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #2bb600;"></ion-icon>\n            Available Today\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #dcca00;"></ion-icon>\n            Alternative date available\n          </button>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n\n\n\n  <div [ngSwitch]="pet">\n\n  <div class="serch-text" *ngSwitchCase="\'puppies\'">\n      <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/southfod.png">\n        </ion-thumbnail>\n        <div class="main">\n          <div class="image">\n            <img src="assets/img/amanda.png">\n          </div>\n          <h1>Aaron Franklin </h1>\n          <div class="right-sec">\n            <button ion-button class="rating histry">3/5</button>\n          </div>\n        </div>\n        <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n        <p>Idli,sambhar, Kerla</p>\n        <div class="btn-left">\n          <button ion-button outline (click)="prdlist()">\n            BOOK NOW\n          </button>\n        </div>\n         <div class="btn-rght">\n          <button ion-button outline>\n            COCK AT HOME\n          </button>\n        </div>\n         <div class="hor" style="width: 25px; float: left;"><ion-icon name="time"></ion-icon><span>2h</span></div>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/southfod.png">\n        </ion-thumbnail>\n        <div class="main">\n          <div class="image">\n            <img src="assets/img/amanda.png">\n          </div>\n          <h1>Aaron Franklin </h1>\n          <div class="right-sec">\n            <button ion-button class="rating histry">3/5</button>\n          </div>\n        </div>\n        <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n        <p>Idli,sambhar, Kerla</p>\n        <div class="btn-left">\n          <button ion-button outline>\n            BOOK NOW\n          </button>\n        </div>\n         <div class="btn-rght">\n          <button ion-button outline>\n            COCK AT HOME\n          </button>\n        </div> \n         <div class="hor" style="width: 25px; float: left;"><ion-icon name="time"></ion-icon><span>2h</span></div>     \n      </ion-item>\n       <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/southfod.png">\n        </ion-thumbnail>\n        <div class="main">\n          <div class="image">\n            <img src="assets/img/amanda.png">\n          </div>\n          <h1>Aaron Franklin </h1>\n          <div class="right-sec">\n            <button ion-button class="rating histry">3/5</button>\n          </div>\n        </div>\n        <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n        <p>Idli,sambhar, Kerla</p>\n        <div class="btn-left">\n          <button ion-button outline (click)="prdlist()">\n            BOOK NOW\n          </button>\n        </div>\n         <div class="btn-rght">\n          <button ion-button outline>\n            COCK AT HOME\n          </button>\n        </div>\n         <div class="hor" style="width: 25px; float: left;"><ion-icon name="time"></ion-icon><span>2h</span></div>\n      </ion-item>\n       <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/southfod.png">\n        </ion-thumbnail>\n        <div class="main">\n          <div class="image">\n            <img src="assets/img/amanda.png">\n          </div>\n          <h1>Aaron Franklin </h1>\n          <div class="right-sec">\n            <button ion-button class="rating histry">3/5</button>\n          </div>\n        </div>\n        <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n        <p>Idli,sambhar, Kerla</p>\n        <div class="btn-left">\n          <button ion-button outline (click)="prdlist()">\n            BOOK NOW\n          </button>\n        </div>\n         <div class="btn-rght">\n          <button ion-button outline>\n            COCK AT HOME\n          </button>\n        </div>\n         <div class="hor" style="width: 25px; float: left;"><ion-icon name="time"></ion-icon><span>2h</span></div>\n      </ion-item>\n  </ion-list>\n  </div>\n    <!-- <div class="serch-contant" *ngSwitchCase="\'puppies\'">\n        <div class="image">\n            <img src="../assets/img/srchimg.png">\n        </div>\n        <h5>Search Dish</h5>\n        <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>\n    </div> -->\n  </div>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-filter',template:/*ion-inline-start:"G:\rafaho\src\pages\filter\filter.html"*/'\n<ion-header>\n  <ion-navbar color="theme-header">\n  	<button  start color="theme-header" style="background-color: #f27242; color: #fff;" (click)="dismiss()">\n      <ion-icon name="close" style="font-size: 30px;"></ion-icon>\n    </button>\n    <ion-title>\n    	 Filter\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">Select All</button>     \n    </ion-buttons>\n   \n  </ion-navbar>\n		<div class="header-sec">\n			<h3>The Classic British Breakfast</h3>\n			<ion-grid style="padding: 0px;">\n				<ion-row>\n					<ion-col col-12 style="padding-left: 0px; padding-right:0px;">\n						 <ion-input type="text" placeholder="Search by location"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-left: 0px;">\n						 <ion-input type="date" placeholder="Search by date" class="upper"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-right:0px;">\n						 <ion-input type="text" placeholder="Type of event"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-left: 0px;">\n						 <ion-input type="text" placeholder="Search by expertise"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-right:0px;">\n						 <ion-input type="text" placeholder="Type of experience"></ion-input>\n					</ion-col>\n				</ion-row>\n				\n			</ion-grid>\n		</div>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="content-sec">\n		<ion-list>\n			<ion-item>\n			  <ion-label>World Cuisine</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Continental</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>British</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Indian</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Vietnamese</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Italian</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Swiss</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>World Cuisine</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Continental</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>British</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n			<ion-item>\n			  <ion-label>Indian</ion-label>\n			  <ion-checkbox></ion-checkbox>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="padding: 0;">\n   <button ion-button full color="theme-header">Apply</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"G:\rafaho\src\pages\filter\filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgtpwd_forgtpwd__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location__ = __webpack_require__(56);
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
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'loginuser', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        console.log(response.userinfo._id);
                        localStorage.setItem('UserInfo', JSON.stringify(response.userinfo));
                        console.log(response.userinfo.role);
                        if (response.userinfo.role == 'user') {
                            _this.ToastMsg('Login successfully');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__location_location__["a" /* LocationPage */]);
                        }
                        else {
                            _this.ToastMsg(response.message);
                        }
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
        selector: 'page-signin',template:/*ion-inline-start:"G:\rafaho\src\pages\signin\signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n	<div class="main">\n		<div class="top-img">\n			<img src="assets/img/signbg.png">\n		</div>\n		<div class="bottom-img">\n			<img src="assets/img/tpbg.png">\n		</div>\n		<div class="text-sec">\n		<h2>Sign In</h2>\n		<h3>Welcome to <span>Rafaho</span> app</h3>\n	</div>\n	<div class="logo">\n		<img src="assets/img/logo.png">\n	</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #SigninForm="ngForm" novalidate (submit)="Signin(SigninForm)">\n				<ion-list>\n\n				  <ion-item>\n				    <ion-label stacked>EMAIL</ion-label>\n				    <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n				  <ion-item>\n				    <ion-label stacked>PASSWORD</ion-label>\n				    <ion-input type="password" [(ngModel)]="data.password" name="password" #password="ngModel" minlength="5" required></ion-input>\n				  </ion-item>\n					 <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n								<div [hidden]="!password.errors.minlength">\n								Password must be at least 5 digits\n							</div>\n            </div>\n				</ion-list>\n					<div class="frgtpwd">\n					<div class="btn-sec">\n			<button ion-button full type="submit" [disabled]="!SigninForm.valid">Sign In</button>\n		    </div>\n				</div>\n			</form>\n		</div>\n		<div class="frgtpwd">\n			<h3 (click)="frgt()">Forgot password?</h3>\n		\n			<h3 class="register">Don\'t have an account? <span (click)="signupPage()">Register</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rafaho_rafaho__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_whyrafaho_whyrafaho__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_help_help__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_terms_terms__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editprofile_editprofile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addwallet_addwallet__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_frequentquestion_frequentquestion__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_feedback_feedback__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_orderdetial_orderdetial__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_forgtpwd_forgtpwd__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_changepwd_changepwd__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_filter_filter__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_productview_productview__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_chefdetials_chefdetials__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_reviews_reviews__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_selectdish_selectdish__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_productlist_productlist__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_location_location__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_appsetting__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_moment__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_device__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_geolocation__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(299);
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
            __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_rafaho_rafaho__["a" /* RafahoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_whyrafaho_whyrafaho__["a" /* WhyrafahoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_addwallet_addwallet__["a" /* AddwalletPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_frequentquestion_frequentquestion__["a" /* FrequentquestionPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_orderdetial_orderdetial__["a" /* OrderdetialPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_forgtpwd_forgtpwd__["a" /* ForgtpwdPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_changepwd_changepwd__["a" /* ChangepwdPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_productview_productview__["a" /* ProductviewPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_chefdetials_chefdetials__["a" /* ChefdetialsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_selectdish_selectdish__["a" /* SelectdishPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_location_location__["a" /* LocationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_32__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_35_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addwallet/addwallet.module#AddwalletPageModule', name: 'AddwalletPage', segment: 'addwallet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change/change.module#ChangePageModule', name: 'ChangePage', segment: 'change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepwd/changepwd.module#ChangepwdPageModule', name: 'ChangepwdPage', segment: 'changepwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chefdetials/chefdetials.module#ChefdetialsPageModule', name: 'ChefdetialsPage', segment: 'chefdetials', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgtpwd/forgtpwd.module#ForgtpwdPageModule', name: 'ForgtpwdPage', segment: 'forgtpwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/frequentquestion/frequentquestion.module#FrequentquestionPageModule', name: 'FrequentquestionPage', segment: 'frequentquestion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderdetial/orderdetial.module#OrderdetialPageModule', name: 'OrderdetialPage', segment: 'orderdetial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productview/productview.module#ProductviewPageModule', name: 'ProductviewPage', segment: 'productview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafaho/rafaho.module#RafahoPageModule', name: 'RafahoPage', segment: 'rafaho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectdish/selectdish.module#SelectdishPageModule', name: 'SelectdishPage', segment: 'selectdish', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/southfood/southfood.module#SouthfoodPageModule', name: 'SouthfoodPage', segment: 'southfood', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/whyrafaho/whyrafaho.module#WhyrafahoPageModule', name: 'WhyrafahoPage', segment: 'whyrafaho', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_rafaho_rafaho__["a" /* RafahoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_whyrafaho_whyrafaho__["a" /* WhyrafahoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_addwallet_addwallet__["a" /* AddwalletPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_frequentquestion_frequentquestion__["a" /* FrequentquestionPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_orderdetial_orderdetial__["a" /* OrderdetialPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_forgtpwd_forgtpwd__["a" /* ForgtpwdPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_changepwd_changepwd__["a" /* ChangepwdPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_productview_productview__["a" /* ProductviewPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_chefdetials_chefdetials__["a" /* ChefdetialsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_selectdish_selectdish__["a" /* SelectdishPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_location_location__["a" /* LocationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_31__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 178,
	"./af.js": 178,
	"./ar": 179,
	"./ar-dz": 180,
	"./ar-dz.js": 180,
	"./ar-kw": 181,
	"./ar-kw.js": 181,
	"./ar-ly": 182,
	"./ar-ly.js": 182,
	"./ar-ma": 183,
	"./ar-ma.js": 183,
	"./ar-sa": 184,
	"./ar-sa.js": 184,
	"./ar-tn": 185,
	"./ar-tn.js": 185,
	"./ar.js": 179,
	"./az": 186,
	"./az.js": 186,
	"./be": 187,
	"./be.js": 187,
	"./bg": 188,
	"./bg.js": 188,
	"./bm": 189,
	"./bm.js": 189,
	"./bn": 190,
	"./bn.js": 190,
	"./bo": 191,
	"./bo.js": 191,
	"./br": 192,
	"./br.js": 192,
	"./bs": 193,
	"./bs.js": 193,
	"./ca": 194,
	"./ca.js": 194,
	"./cs": 195,
	"./cs.js": 195,
	"./cv": 196,
	"./cv.js": 196,
	"./cy": 197,
	"./cy.js": 197,
	"./da": 198,
	"./da.js": 198,
	"./de": 199,
	"./de-at": 200,
	"./de-at.js": 200,
	"./de-ch": 201,
	"./de-ch.js": 201,
	"./de.js": 199,
	"./dv": 202,
	"./dv.js": 202,
	"./el": 203,
	"./el.js": 203,
	"./en-au": 204,
	"./en-au.js": 204,
	"./en-ca": 205,
	"./en-ca.js": 205,
	"./en-gb": 206,
	"./en-gb.js": 206,
	"./en-ie": 207,
	"./en-ie.js": 207,
	"./en-nz": 208,
	"./en-nz.js": 208,
	"./eo": 209,
	"./eo.js": 209,
	"./es": 210,
	"./es-do": 211,
	"./es-do.js": 211,
	"./es-us": 212,
	"./es-us.js": 212,
	"./es.js": 210,
	"./et": 213,
	"./et.js": 213,
	"./eu": 214,
	"./eu.js": 214,
	"./fa": 215,
	"./fa.js": 215,
	"./fi": 216,
	"./fi.js": 216,
	"./fo": 217,
	"./fo.js": 217,
	"./fr": 218,
	"./fr-ca": 219,
	"./fr-ca.js": 219,
	"./fr-ch": 220,
	"./fr-ch.js": 220,
	"./fr.js": 218,
	"./fy": 221,
	"./fy.js": 221,
	"./gd": 222,
	"./gd.js": 222,
	"./gl": 223,
	"./gl.js": 223,
	"./gom-latn": 224,
	"./gom-latn.js": 224,
	"./gu": 225,
	"./gu.js": 225,
	"./he": 226,
	"./he.js": 226,
	"./hi": 227,
	"./hi.js": 227,
	"./hr": 228,
	"./hr.js": 228,
	"./hu": 229,
	"./hu.js": 229,
	"./hy-am": 230,
	"./hy-am.js": 230,
	"./id": 231,
	"./id.js": 231,
	"./is": 232,
	"./is.js": 232,
	"./it": 233,
	"./it.js": 233,
	"./ja": 234,
	"./ja.js": 234,
	"./jv": 235,
	"./jv.js": 235,
	"./ka": 236,
	"./ka.js": 236,
	"./kk": 237,
	"./kk.js": 237,
	"./km": 238,
	"./km.js": 238,
	"./kn": 239,
	"./kn.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ky": 241,
	"./ky.js": 241,
	"./lb": 242,
	"./lb.js": 242,
	"./lo": 243,
	"./lo.js": 243,
	"./lt": 244,
	"./lt.js": 244,
	"./lv": 245,
	"./lv.js": 245,
	"./me": 246,
	"./me.js": 246,
	"./mi": 247,
	"./mi.js": 247,
	"./mk": 248,
	"./mk.js": 248,
	"./ml": 249,
	"./ml.js": 249,
	"./mr": 250,
	"./mr.js": 250,
	"./ms": 251,
	"./ms-my": 252,
	"./ms-my.js": 252,
	"./ms.js": 251,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl-be": 257,
	"./nl-be.js": 257,
	"./nl.js": 256,
	"./nn": 258,
	"./nn.js": 258,
	"./pa-in": 259,
	"./pa-in.js": 259,
	"./pl": 260,
	"./pl.js": 260,
	"./pt": 261,
	"./pt-br": 262,
	"./pt-br.js": 262,
	"./pt.js": 261,
	"./ro": 263,
	"./ro.js": 263,
	"./ru": 264,
	"./ru.js": 264,
	"./sd": 265,
	"./sd.js": 265,
	"./se": 266,
	"./se.js": 266,
	"./si": 267,
	"./si.js": 267,
	"./sk": 268,
	"./sk.js": 268,
	"./sl": 269,
	"./sl.js": 269,
	"./sq": 270,
	"./sq.js": 270,
	"./sr": 271,
	"./sr-cyrl": 272,
	"./sr-cyrl.js": 272,
	"./sr.js": 271,
	"./ss": 273,
	"./ss.js": 273,
	"./sv": 274,
	"./sv.js": 274,
	"./sw": 275,
	"./sw.js": 275,
	"./ta": 276,
	"./ta.js": 276,
	"./te": 277,
	"./te.js": 277,
	"./tet": 278,
	"./tet.js": 278,
	"./th": 279,
	"./th.js": 279,
	"./tl-ph": 280,
	"./tl-ph.js": 280,
	"./tlh": 281,
	"./tlh.js": 281,
	"./tr": 282,
	"./tr.js": 282,
	"./tzl": 283,
	"./tzl.js": 283,
	"./tzm": 284,
	"./tzm-latn": 285,
	"./tzm-latn.js": 285,
	"./tzm.js": 284,
	"./uk": 286,
	"./uk.js": 286,
	"./ur": 287,
	"./ur.js": 287,
	"./uz": 288,
	"./uz-latn": 289,
	"./uz-latn.js": 289,
	"./uz.js": 288,
	"./vi": 290,
	"./vi.js": 290,
	"./x-pseudo": 291,
	"./x-pseudo.js": 291,
	"./yo": 292,
	"./yo.js": 292,
	"./zh-cn": 293,
	"./zh-cn.js": 293,
	"./zh-hk": 294,
	"./zh-hk.js": 294,
	"./zh-tw": 295,
	"./zh-tw.js": 295
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
webpackContext.id = 399;

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = '';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        alert('Rahul maury55');
        if (localStorage.getItem('UserInfo')) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        }
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\rafaho\src\app\app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"G:\rafaho\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(56);
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
        selector: 'page-cart',template:/*ion-inline-start:"G:\rafaho\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/cart.png">\n       </div>\n      </button>     \n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="top-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 class="left">\n					  <div class="chef">\n						<h5>Chef Samuel Linder</h5>\n					  </div>\n					</ion-col>\n					<ion-col col-6 class="right">\n					  <div class="phn">\n						<h5>9041-601-775</h5>\n						<span (click)="loct()"><img src="assets/img/msg.png"></span>\n					  </div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	<div class="text-sec">\n		\n		<div class="mid-sec">\n			<h5>Customer Address: <button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/creat.gif\'); background-size:cover"></button></h5>\n			<p>71 Pilgrim Avenue</p>\n			<p>Chevy Chase,MD 20815</p>\n		</div>\n		<div class="bottom-sec">\n			<ion-list>\n				<ion-item>\n					<h5 item-start class="strt">Booking Date & Time</h5>\n					<p>21 August 2017</p>\n					<p item-end class="ennd">9:05am</p>\n				</ion-item>\n			</ion-list>\n\n		</div>\n	</div>\n	<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <p item-end class="left-p">$200.00</p>\n	      <h3>Per plate $40.00</h3>\n	      <div class="itembottom" style="width: 100%; float: left; padding-top: 3px;">\n	      <div class="counter_sec">\n			   <button ion-button clear><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="0">\n			   <button ion-button clear><ion-icon name="add"></ion-icon></button>\n			  \n		  </div>\n		  <span>$20 x 5</span>\n		  </div>\n	      <div class="rghtbtn">\n	      	<button ion-button>Delete</button>\n	      </div>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <p item-end class="left-p">$200.00</p>\n	      <h3>Per plate $40.00</h3>\n	      <div class="itembottom" style="width: 100%; float: left; padding-top: 3px;">\n	      <div class="counter_sec">\n			   <button ion-button clear><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="0">\n			   <button ion-button clear><ion-icon name="add"></ion-icon></button>\n			  \n		  </div>\n		  <span>$20 x 5</span>\n		  </div>\n	      <div class="rghtbtn">\n	      	<button ion-button>Delete</button>\n	      </div>\n	    </ion-item>\n	</ion-list>\n</div>\n<div class="total">\n	<h2 class="left">Subtotal</h2>\n	<h2 class="right">$606.00</h2>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="theme-header" (click)="pyment()">Checkout</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"G:\rafaho\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"G:\rafaho\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Select Location</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n	<div class="head">\n  	<ion-list style="margin: 0 !important;">\n  		<ion-item>\n  			<ion-searchbar  type="date" class="upper" ></ion-searchbar>\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<p style="text-align: left;">Alternative date and time</p>\n  			<ion-searchbar  type="date" class="upper" ></ion-searchbar>\n  		</ion-item>\n  		<ion-item>\n  			<button ion-button icon-left class="currentbtn">\n			  <ion-icon name="paper-plane"></ion-icon>\n			  Use my current location\n			</button>\n\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<ion-input type="text" placeholder="Saved Address"></ion-input>\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<ion-searchbar placeholder="Other Address"  ></ion-searchbar>\n  		</ion-item>\n  	</ion-list>\n  </div>\n\n\n	<!-- <div class="content-sec">\n		<h3>Popular City</h3>\n		<ion-list style="margin: 0 !important;">\n			<ion-item>\n				<p>New York City</p>\n			</ion-item>\n			<ion-item>\n				<p>Chicago,Illinois</p>\n			</ion-item>\n			<ion-item>\n				<p>Charleston,South Carolina</p>\n			</ion-item>\n			<ion-item>\n				<p>Las Vegas,Nevada</p>\n			</ion-item>\n			<ion-item>\n				<p>Seattle,Washington</p>\n			</ion-item>\n			<ion-item>\n				<p>San,Francisco,California</p>\n			</ion-item>\n		</ion-list>\n	</div> -->\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(302);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, geolocation, appsetting, http, device, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.appsetting = appsetting;
        this.http = http;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.key = false;
        this.data = {};
    }
    SignupPage.prototype.Registration = function (register) {
        var _this = this;
        console.log('registration');
        console.log(register.value);
        alert(JSON.stringify(register.value));
        console.log(this.lat, this.long);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
                    lat: this.lat,
                    long: this.long,
                    role: 'user',
                    deviceid: this.device.uuid
                };
                console.log(postdata);
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
                            _this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
                        }
                    });
                });
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
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
            _this.ToastMsg('Please enable your location');
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
    SignupPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
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
        selector: 'page-signup',template:/*ion-inline-start:"G:\rafaho\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n		<div class="main">\n		<div class="top-img">\n			<img src="assets/img/signup-bg.png">\n		</div>\n		<div class="bottom-img">\n			<img src="assets/img/tpbg.png">\n		</div>\n		<div class="text-sec">\n		<h2>Sign In</h2>\n		<h3>Welcome to <span>Rafaho</span> app</h3>\n	</div>\n	<div class="logo">\n		<img src="assets/img/logo.png">\n	</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #registrationForm="ngForm" novalidate (submit)="Registration(registrationForm)">\n				<ion-list>\n			      <ion-grid>\n			      	<ion-row>\n			      		<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>First name</ion-label>\n						    <ion-input type="text" [(ngModel)]="data.firstname" name="firstname" #firstname="ngModel" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6 class="right">\n						  <ion-item>\n						    <ion-label stacked>Last name</ion-label>\n				   		    <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>Birthday</ion-label>\n						     <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"  [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="dob.errors && (dob.dirty || dob.touched)">\n                    <div [hidden]="!dob.errors.required">\n                      What\'s your date of birth?\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6 class="right gender">\n							<ion-label>Gender</ion-label>\n						  <ion-item>\n							  <ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n							    <ion-option value="female">Female</ion-option>\n							    <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="gender.errors && (gender.dirty || gender.touched)">\n                    <div [hidden]="!gender.errors.required">\n                      You are?\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Address</ion-label>\n						    <ion-input type="text" [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="address.errors && (address.dirty || address.touched)">\n                    <div [hidden]="!address.errors.required">\n                      Address is required\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Phone Number (xxx-xxx-xxxx)</ion-label>\n						    <ion-input (input)="phonevalidation(data.phone)" type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Email</ion-label>\n						      <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Password</ion-label>\n						    <ion-input type="password" [(ngModel)]="data.password" name="password" #password="ngModel" minlength="5" required></ion-input>\n				  </ion-item>\n					 <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!password.errors.minlength">\n								Password must be at least 5 digits\n							</div>\n            </div>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Confirm Password</ion-label>\n						    <ion-input type="password" [(ngModel)]="data.cpassword" (input)="handleKeyboardEvent($event,data.password,data.cpassword)" name="cpassword" #cpassword="ngModel" required></ion-input>\n						  </ion-item>\n						\n							 <div *ngIf="key == false && cpassword.errors && (cpassword.dirty || cpassword.touched)">\n              <div [hidden]="!cpassword.errors.required">\n                Confirm password is required\n              </div>\n          \n            </div>\n						<div *ngIf="data.cpassword">\n						 <div *ngIf="key != true && (cpassword.dirty || cpassword.touched)">\n				\n						 <span>password mismatch </span> \n						 </div>\n						 </div>\n						</ion-col>\n					</ion-row>\n				  </ion-grid>\n				</ion-list>\n				<div class="frgtpwd">\n			<button ion-button type="submit" [disabled]="!registrationForm.valid">Register</button>\n			</div>\n			</form>\n		</div>\n		<div class="frgtpwd" (click)="login()">\n			<h3 class="register">I have an account? <span>Login</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rafaho_rafaho__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(86);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\rafaho\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favorites" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Rafaho" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Chat" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"G:\rafaho\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whyrafaho_whyrafaho__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addwallet_addwallet__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frequentquestion_frequentquestion__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feedback_feedback__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__changepwd_changepwd__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signin_signin__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appsetting__ = __webpack_require__(27);
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
    function ProfilePage(navCtrl, navParams, toastCtrl, loadingCtrl, http, alertCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
    }
    ProfilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
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
                _this.profile = data.data;
                _this.srcImage = _this.profile.user_image;
                console.log(_this.profile.firstname);
            });
        });
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addwallet_addwallet__["a" /* AddwalletPage */]);
    };
    ProfilePage.prototype.frequent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__frequentquestion_frequentquestion__["a" /* FrequentquestionPage */]);
    };
    ProfilePage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__feedback_feedback__["a" /* FeedbackPage */]);
    };
    ProfilePage.prototype.change = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__changepwd_changepwd__["a" /* ChangepwdPage */]);
    };
    ProfilePage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
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
        selector: 'page-profile',template:/*ion-inline-start:"G:\rafaho\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n\n  <div class="main">\n    <div class="top-sec">\n      <div class="main-img">\n        <img src="assets/img/profile.png">\n      </div>\n      <div class="text-sec">\n        <h3>{{profile?.firstname }} {{ profile?.lastname}}</h3>\n        <h6><ion-icon ios="ios-pin" md="md-pin"></ion-icon> New York</h6>\n      </div>\n    </div>\n  </div>\n  <div class="content-sec">\n       <ion-list>\n        <ion-item (click)="edit()">\n            Edit profile\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="wallet()">\n            Add wallet\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item>\n            Payment\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="frequent()">\n            Frequent questions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="whyrafaha()">\n            Why RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="help()">\n            Help\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item>\n            Settings\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="term()">\n            Terms & conditions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="feedback()">\n            Feadback RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="change()">\n            Change Password\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="logout()">\n            Logout\n        </ion-item>\n      </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"G:\rafaho\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_12__providers_appsetting__["a" /* Appsetting */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map