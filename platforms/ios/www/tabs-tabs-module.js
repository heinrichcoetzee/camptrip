(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"trips\">\n        <ion-icon name=\"book\"></ion-icon>\n        <ion-label>Trips</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button>\n\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"explore\">\n        <ion-icon name=\"globe\"></ion-icon>\n        <ion-label>Explore</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n    \n   \n  </ion-tab-bar>\n\n</ion-tabs>\n\n<ion-fab horizontal=\"center\" vertical=\"bottom\" edge>\n    <button class=\"add-button\" (click)=\"openAddTrip()\" [ngClass]=\"{'btn-active':activeTab=='addtrip'}\">\n      <ion-icon color=\"light\" class=\"add-icon\" name=\"add\"></ion-icon>\n      <ion-icon color=\"light\" class=\"arrow-icon\" name=\"arrow-up\"></ion-icon>\n    </button> \n</ion-fab>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-button {\n  position: relative;\n  background-color: var(--color-green);\n  width: 5rem;\n  height: 5rem;\n  border-radius: 50%;\n  padding-top: .6rem;\n  margin-left: -10px;\n  text-align: center;\n  transition: all .5s ease-in-out; }\n  .add-button:active, .add-button:focus {\n    outline: none;\n    box-shadow: none;\n    border: none; }\n  .add-button ion-icon {\n    transition: all .5s ease-in-out; }\n  .add-button .add-icon {\n    opacity: 1; }\n  .add-button .arrow-icon {\n    opacity: 0; }\n  .add-button.btn-active {\n    width: 3rem;\n    height: 3rem;\n    padding-top: .3rem;\n    margin-left: 0;\n    margin-top: -.4rem; }\n  .add-button.btn-active .add-icon {\n      opacity: 0; }\n  .add-button.btn-active .arrow-icon {\n      opacity: 1; }\n  .add-button.btn-active ion-icon {\n      font-size: 24px;\n      top: .7rem; }\n  .add-button ion-icon {\n    font-size: 50px;\n    position: absolute;\n    top: 1rem;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto; }\n  ion-fab {\n  bottom: .9rem; }\n  ion-tab-bar {\n  --background:var(--color-greyNavy); }\n  ion-tab-bar ion-tab-button {\n    --color-selected:#fff;\n    --color:rgba(255,255,255,0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFYbEIsK0JBQStCLEVBQUE7RUFHbkM7SUFXUSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQWJwQjtJQUhJLCtCQUErQixFQUFBO0VBR25DO0lBc0JRLFVBQVUsRUFBQTtFQXRCbEI7SUF5QlEsVUFBVSxFQUFBO0VBekJsQjtJQTRCUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFoQzFCO01Ba0NZLFVBQVUsRUFBQTtFQWxDdEI7TUFxQ1ksVUFBVSxFQUFBO0VBckN0QjtNQXdDWSxlQUFlO01BQ2YsVUFBVSxFQUFBO0VBekN0QjtJQThDUSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLGFBQWEsRUFBQTtFQUdqQjtFQUNJLGtDQUFhLEVBQUE7RUFEakI7SUFJUSxxQkFBaUI7SUFDakIsNkJBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdHJhbnNpdGlvbi1hbGwge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmctdG9wOiAuNnJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjphY3RpdmUsICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1hbGw7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tYWxsO1xuICAgIH1cbiAgICAuYWRkLWljb24ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuYXJyb3ctaWNvbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgICYuYnRuLWFjdGl2ZSB7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAuM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNHJlbTtcbiAgICAgICAgLmFkZC1pY29uIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmFycm93LWljb24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB0b3A6IC43cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG59XG5cbmlvbi1mYWIge1xuICAgIGJvdHRvbTogLjlyZW07XG59XG5cbmlvbi10YWItYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0tY29sb3ItZ3JleU5hdnkpO1xuXG4gICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgICAtLWNvbG9yLXNlbGVjdGVkOiNmZmY7XG4gICAgICAgIC0tY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabsPage = /** @class */ (function () {
    function TabsPage(router) {
        var _this = this;
        this.router = router;
        this.activeTab = 'home';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.activeTab = event.url.replace('/main/tabs/', '');
            }
        });
    }
    TabsPage.prototype.openAddTrip = function () {
        this.router.navigate(['main/tabs/addtrip']);
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'trips',
                children: [
                    {
                        path: '',
                        loadChildren: './trips/trips.module#TripsPageModule'
                    }
                ]
            },
            {
                path: 'addtrip',
                children: [
                    {
                        path: '',
                        loadChildren: './addtrip/addtrip.module#AddtripPageModule'
                    }
                ]
            },
            {
                path: 'explore',
                children: [
                    {
                        path: '',
                        loadChildren: './explore/explore.module#ExplorePageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map