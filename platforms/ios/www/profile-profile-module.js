(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/tabs/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/tabs/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/tabs/profile/profile.page.html":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>My Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row margin-bottom>\n      <ion-col>\n        <ion-avatar>\n          <img src=\"../../../assets/images/user_default.jpg\">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Name</ion-label>\n          <ion-input [(ngModel)]=\"profile.name\"></ion-input>\n        </ion-item>\n          <ion-item>\n              <ion-label position=\"stacked\">Email</ion-label>\n              <ion-input [(ngModel)]=\"profile.email\"></ion-input>\n          </ion-item>\n\n          <ion-button expand=\"block\" color=\"green\" (click)=\"changePassword()\">\n          <ion-icon name=\"unlock\"></ion-icon>  Change Password\n          </ion-button>\n\n          <ion-button margin-top color=\"orange\" (click)=\"signOut()\">\n              <ion-icon name=\"log-out\"></ion-icon> Sign Out\n              </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header, ion-toolbar {\n  --background:var(--color-navy);\n  --color:#fff; }\n\nion-avatar {\n  margin: auto;\n  width: 150px;\n  height: 150px; }\n\nion-item {\n  --border-radius:1.2rem;\n  --background: transparent;\n  --border-width: 2px;\n  --border-color: var(--color-transWhite);\n  --color:var(--color-transWhite);\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksOEJBQWE7RUFDYixZQUFRLEVBQUE7O0FBR1o7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHaEI7RUFDRyxzQkFBZ0I7RUFDaEIseUJBQWE7RUFDYixtQkFBZTtFQUNmLHVDQUFlO0VBQ2YsK0JBQVE7RUFDUixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudCxpb24taGVhZGVyLGlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1jb2xvci1uYXZ5KTtcbiAgICAtLWNvbG9yOiNmZmY7XG59XG5cbmlvbi1hdmF0YXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuIH1cblxuIGlvbi1pdGVte1xuICAgIC0tYm9yZGVyLXJhZGl1czoxLjJyZW07XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci10cmFuc1doaXRlKTtcbiAgICAtLWNvbG9yOnZhcigtLWNvbG9yLXRyYW5zV2hpdGUpO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59ICAgIl19 */"

/***/ }),

/***/ "./src/app/tabs/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, _fireAuth) {
        this.router = router;
        this._fireAuth = _fireAuth;
        this.profile = {
            name: "",
            surname: "",
            email: ""
        };
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.profile.name = this._fireAuth.auth.currentUser.displayName;
        this.profile.email = this._fireAuth.auth.currentUser.email;
    };
    ProfilePage.prototype.changePassword = function () {
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        this._fireAuth.auth.signOut().then(function (signedout) {
            console.log("signedout", signedout);
            _this.router.navigate(['login']);
        }).catch(function (error) {
            console.log("Error", error);
        });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/tabs/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/tabs/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map