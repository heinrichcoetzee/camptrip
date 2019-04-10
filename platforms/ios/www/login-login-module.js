(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <ion-grid padding>\n    <ion-row>\n      <ion-col>\n          <ion-toolbar>\n              <div class=\"logo-holder\">\n                <img src=\"../../assets/images/campTrip_logo_white.png\" width=\"100%\" />\n              </div>\n            </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n              <ion-item margin-bottom>\n                <ion-input placeholder=\"Email Address\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n              </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"8\">\n          <ion-button expand=\"block\" color=\"orange\" (click)=\"login()\" [disabled]=\"loginLoading\">\n            <ion-spinner name=\"dots\" *ngIf=\"loginLoading\" color=\"light\"></ion-spinner>\n            <ng-container *ngIf=\"!loginLoading\">Login</ng-container>\n          </ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n          <ion-button expand=\"block\" color=\"facebookblue\" (click)=\"facebookLogin()\" >\n              <ion-icon name=\"logo-facebook\"></ion-icon> Login\n          </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <ion-text color=\"orange\" marginTop>\n              {{errorMessage}}\n            </ion-text>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  \n  <ion-grid padding>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\"><ion-text color=\"light\">Don't have an account?</ion-text></div>\n        <ion-button expand=\"block\" color=\"green\" (click)=\"register()\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-icon color=\"green\" size=\"large\" name=\"logo-facebook\"></ion-icon>\n    <ion-icon color=\"green\" size=\"large\" margin-left name=\"logo-instagram\"></ion-icon>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header, ion-footer, ion-toolbar {\n  --background:var(--color-darkGrey);\n  --border-width:0px;\n  --border-color:var(--color-darkGrey)\n\n; }\n\nion-item {\n  --border-radius:1.2rem;\n  --background: transparent;\n  --border-width: 2px;\n  --border-color: var(--color-transWhite);\n  --color:var(--color-transWhite); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0NBQWE7RUFDYixrQkFBZTtFQUNmOztBQUFlLEVBQUE7O0FBSW5CO0VBQ0ksc0JBQWdCO0VBQ2hCLHlCQUFhO0VBQ2IsbUJBQWU7RUFDZix1Q0FBZTtFQUNmLCtCQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50LGlvbi1oZWFkZXIsaW9uLWZvb3Rlcixpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0tY29sb3ItZGFya0dyZXkpO1xuICAgIC0tYm9yZGVyLXdpZHRoOjBweDtcbiAgICAtLWJvcmRlci1jb2xvcjp2YXIoLS1jb2xvci1kYXJrR3JleSlcblxufVxuXG5pb24taXRlbXtcbiAgICAtLWJvcmRlci1yYWRpdXM6MS4ycmVtO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItdHJhbnNXaGl0ZSk7XG4gICAgLS1jb2xvcjp2YXIoLS1jb2xvci10cmFuc1doaXRlKTtcbn0gICAgXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(router, _fireAuth, fb) {
        this.router = router;
        this._fireAuth = _fireAuth;
        this.fb = fb;
        this.email = "";
        this.password = "";
        this.loginLoading = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.email === "") {
            this.errorMessage = "Please enter email address";
            return;
        }
        if (this.password === "") {
            this.errorMessage = "Please enter password";
            return;
        }
        this.errorMessage = "";
        this.loginLoading = true;
        this._fireAuth.auth.signInWithEmailAndPassword(this.email.toLowerCase(), this.password)
            .then(function (user) {
            console.log("user", user);
            _this.email = "";
            _this.password = "";
            _this.loginLoading = false;
            _this.router.navigate(['main/tabs/home']);
        }).catch(function (error) {
            _this.loginLoading = false;
            _this.errorMessage = error.message;
        });
    };
    LoginPage.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.facebookLogin = function () {
        this.errorMessage = "";
        this.router.navigate(['main/tabs/home']);
        //  this.fb.getAccessToken().then((token)=>{
        //   console.log("Token",token)
        //  }).catch((error)=>{
        //    console.log("Error",error)
        //  })
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map