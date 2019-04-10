(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-pages-edit-trip-edit-trip-module"],{

/***/ "./src/app/tabs/pages/edit-trip/edit-trip.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/tabs/pages/edit-trip/edit-trip.module.ts ***!
  \**********************************************************/
/*! exports provided: EditTripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTripPageModule", function() { return EditTripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_trip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-trip.page */ "./src/app/tabs/pages/edit-trip/edit-trip.page.ts");







var routes = [
    {
        path: '',
        component: _edit_trip_page__WEBPACK_IMPORTED_MODULE_6__["EditTripPage"]
    }
];
var EditTripPageModule = /** @class */ (function () {
    function EditTripPageModule() {
    }
    EditTripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_trip_page__WEBPACK_IMPORTED_MODULE_6__["EditTripPage"]]
        })
    ], EditTripPageModule);
    return EditTripPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/pages/edit-trip/edit-trip.page.html":
/*!**********************************************************!*\
  !*** ./src/app/tabs/pages/edit-trip/edit-trip.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-button (click)=\"back()\">\n          <ion-icon name=\"chevron-left\"></ion-icon>\n          Back\n      </ion-button>\n    <ion-title>\n      \n        Edit Trip</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/pages/edit-trip/edit-trip.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/tabs/pages/edit-trip/edit-trip.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header, ion-toolbar {\n  --background:var(--color-navy);\n  --color:#fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvdGFicy9wYWdlcy9lZGl0LXRyaXAvZWRpdC10cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFhO0VBQ2IsWUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wYWdlcy9lZGl0LXRyaXAvZWRpdC10cmlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQsaW9uLWhlYWRlcixpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0tY29sb3ItbmF2eSk7XG4gICAgLS1jb2xvcjojZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/pages/edit-trip/edit-trip.page.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/pages/edit-trip/edit-trip.page.ts ***!
  \********************************************************/
/*! exports provided: EditTripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTripPage", function() { return EditTripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditTripPage = /** @class */ (function () {
    function EditTripPage(router) {
        this.router = router;
    }
    EditTripPage.prototype.ngOnInit = function () {
    };
    EditTripPage.prototype.back = function () {
        this.router.navigate(['main/tabs/trips']);
    };
    EditTripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-trip',
            template: __webpack_require__(/*! ./edit-trip.page.html */ "./src/app/tabs/pages/edit-trip/edit-trip.page.html"),
            styles: [__webpack_require__(/*! ./edit-trip.page.scss */ "./src/app/tabs/pages/edit-trip/edit-trip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTripPage);
    return EditTripPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-pages-edit-trip-edit-trip-module.js.map