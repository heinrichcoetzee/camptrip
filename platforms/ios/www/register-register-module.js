(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon color=\"light\" name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-title color=\"light\">Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item margin-bottom>\n          <ion-input placeholder=\"Name\" type=\"text\" [(ngModel)]=\"model.name\"></ion-input>\n        </ion-item>\n        <ion-item margin-bottom>\n          <ion-input placeholder=\"Surname\" type=\"text\" [(ngModel)]=\"model.surname\"></ion-input>\n        </ion-item>\n        <ion-item margin-bottom>\n          <ion-input placeholder=\"Email\" type=\"text\" [(ngModel)]=\"model.email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"model.password\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"green\" margin-top (click)=\"registerUser()\">Register</ion-button>\n        <ion-button expand=\"block\" color=\"facebookblue\" (click)=\"facebookLogin()\">\n          <ion-icon name=\"logo-facebook\"></ion-icon> Login\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text marginTop color=\"orange\">\n          {{errorMessage}}\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header, ion-footer, ion-toolbar {\n  --background:var(--color-darkGrey);\n  --border-width:0px;\n  --border-color:var(--color-darkGrey)\n\n; }\n\nion-item {\n  --border-radius:1.2rem;\n  --background: transparent;\n  --border-width: 2px;\n  --border-color: var(--color-transWhite);\n  --color:var(--color-transWhite); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWE7RUFDYixrQkFBZTtFQUNmOztBQUFlLEVBQUE7O0FBSW5CO0VBQ0ksc0JBQWdCO0VBQ2hCLHlCQUFhO0VBQ2IsbUJBQWU7RUFDZix1Q0FBZTtFQUNmLCtCQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCxpb24taGVhZGVyLGlvbi1mb290ZXIsaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWNvbG9yLWRhcmtHcmV5KTtcbiAgICAtLWJvcmRlci13aWR0aDowcHg7XG4gICAgLS1ib3JkZXItY29sb3I6dmFyKC0tY29sb3ItZGFya0dyZXkpXG5cbn1cblxuaW9uLWl0ZW17XG4gICAgLS1ib3JkZXItcmFkaXVzOjEuMnJlbTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXRyYW5zV2hpdGUpO1xuICAgIC0tY29sb3I6dmFyKC0tY29sb3ItdHJhbnNXaGl0ZSk7XG59ICAgIFxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, _fireAuth) {
        this.router = router;
        this._fireAuth = _fireAuth;
        this.errorMessage = "";
        this.model = {
            name: "",
            surname: "",
            email: "",
            password: ""
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.back = function () {
        this.router.navigate(['login']);
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this._fireAuth.auth
            .createUserWithEmailAndPassword(this.model.email.toLowerCase(), this.model.password)
            .then(function (user) {
            console.log("User - ", user);
            _this._fireAuth.auth.currentUser.updateProfile({
                displayName: _this.model.name + " " + _this.model.surname
            }).then(function (updatedUser) {
                console.log("Updated User", updatedUser);
                _this.model.name = "";
                _this.model.surname = "";
                _this.model.email = "";
                _this.model.password = "";
                _this.back();
            }).catch(function (error) {
                console.log("Could not update user", error);
                _this.errorMessage = error.message;
            });
        })
            .catch(function (error) {
            console.log("Could not create user", error);
            _this.errorMessage = error.message;
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map