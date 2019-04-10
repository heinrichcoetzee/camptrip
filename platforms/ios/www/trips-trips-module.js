(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trips-trips-module"],{

/***/ "./src/app/tabs/trips/trips.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/trips/trips.module.ts ***!
  \********************************************/
/*! exports provided: TripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageModule", function() { return TripsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trips.page */ "./src/app/tabs/trips/trips.page.ts");







var routes = [
    {
        path: '',
        component: _trips_page__WEBPACK_IMPORTED_MODULE_6__["TripsPage"]
    }
];
var TripsPageModule = /** @class */ (function () {
    function TripsPageModule() {
    }
    TripsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_trips_page__WEBPACK_IMPORTED_MODULE_6__["TripsPage"]]
        })
    ], TripsPageModule);
    return TripsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/trips/trips.page.html":
/*!********************************************!*\
  !*** ./src/app/tabs/trips/trips.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Logged Trips</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let trip of dummyData\">\n      <ion-col size=\"3\">\n        <div class=\"trip-picture\">\n          <img src=\"../../../assets/images/campTrip_logo_white.png\">\n        </div>\n        <ion-button class=\"ion-align-self-center\" (click)=\"editItem(trip)\" color=\"green\">\n          <!-- <ion-icon name=\"edit\"></ion-icon>  -->\n          Edit\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"9\" padding>\n\n        <ion-text>Name: <span class=\"text-right\">{{trip.name}}</span></ion-text>\n        <ion-text>Location: <span class=\"text-right\">{{trip.location}}</span></ion-text>\n        <ion-text>Description: <span class=\"text-right\">{{trip.description}}</span></ion-text>\n        <ion-text>Date: <span class=\"text-right\">{{trip.fromDate | date:'dd/MM/yyyy'}} to {{trip.fromDate | date:'dd/MM/yyyy'}}</span></ion-text>\n        <ion-text>Duration: <span class=\"text-right\">{{trip.duration}} days</span></ion-text>\n        <ion-text>Distance Traveled Used: <span class=\"text-right\">{{trip.kilometersTraveled}} km</span></ion-text>\n        <ion-text>Caravan Used: <span class=\"text-right\">{{trip.caravanUsed}}</span></ion-text>\n        <ion-text>Vehicle Used: <span class=\"text-right\">{{trip.vehicleUsed}}</span></ion-text>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/trips/trips.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/trips/trips.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header, ion-toolbar {\n  --background:var(--color-navy);\n  --color:#fff; }\n\n.trip-picture {\n  border: 1px solid #fff;\n  border-radius: 50%;\n  min-width: 100px;\n  min-height: 100px;\n  vertical-align: middle;\n  text-align: center;\n  position: relative;\n  overflow: hidden; }\n\n.trip-picture img {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 1rem;\n    margin: 0 auto; }\n\nion-text {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvdGFicy90cmlwcy90cmlwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw4QkFBYTtFQUNiLFlBQVEsRUFBQTs7QUFFWjtFQUNJLHNCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFScEI7SUFVUSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYyxFQUFBOztBQVF0QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdHJpcHMvdHJpcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1jb250ZW50LGlvbi1oZWFkZXIsaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWNvbG9yLW5hdnkpO1xuICAgIC0tY29sb3I6I2ZmZjtcbn1cbi50cmlwLXBpY3R1cmV7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59XG4vLyBpb24tYXZhdGFye1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gfVxuaW9uLXRleHR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/trips/trips.page.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/trips/trips.page.ts ***!
  \******************************************/
/*! exports provided: TripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPage", function() { return TripsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TripsPage = /** @class */ (function () {
    function TripsPage(router) {
        this.router = router;
        this.dummyData = [
            {
                name: "Namib Toer",
                location: "Walvis Bay",
                description: "Trip to Namibia",
                fromDate: new Date(),
                toDate: new Date(),
                duration: 5,
                caravanUsed: "Jurgens",
                vehicleUsed: "Amarok",
                kilometersTraveled: 500,
            },
            {
                name: "Namib Toer",
                location: "Walvis Bay",
                description: "Trip to Namibia",
                fromDate: new Date(),
                toDate: new Date(),
                duration: 5,
                caravanUsed: "Jurgens",
                vehicleUsed: "Amarok",
                kilometersTraveled: 500,
            }, {
                name: "Namib Toer",
                location: "Walvis Bay",
                description: "Trip to Namibia",
                fromDate: new Date(),
                toDate: new Date(),
                duration: 5,
                caravanUsed: "Jurgens",
                vehicleUsed: "Amarok",
                kilometersTraveled: 500,
            },
            {
                name: "Namib Toer",
                location: "Walvis Bay",
                description: "Trip to Namibia",
                fromDate: new Date(),
                toDate: new Date(),
                duration: 5,
                caravanUsed: "Jurgens",
                vehicleUsed: "Amarok",
                kilometersTraveled: 500,
            },
            {
                name: "Namib Toer",
                location: "Walvis Bay",
                description: "Trip to Namibia",
                fromDate: new Date(),
                toDate: new Date(),
                duration: 5,
                caravanUsed: "Jurgens",
                vehicleUsed: "Amarok",
                kilometersTraveled: 500,
            }
        ];
    }
    TripsPage.prototype.ngOnInit = function () {
    };
    TripsPage.prototype.editItem = function (trip) {
        this.router.navigate(['edit-trip']);
    };
    TripsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.page.html */ "./src/app/tabs/trips/trips.page.html"),
            styles: [__webpack_require__(/*! ./trips.page.scss */ "./src/app/tabs/trips/trips.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TripsPage);
    return TripsPage;
}());



/***/ })

}]);
//# sourceMappingURL=trips-trips-module.js.map