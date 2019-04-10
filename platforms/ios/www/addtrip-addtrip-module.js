(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtrip-addtrip-module"],{

/***/ "./src/app/tabs/addtrip/addtrip.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/addtrip/addtrip.module.ts ***!
  \************************************************/
/*! exports provided: AddtripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtripPageModule", function() { return AddtripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addtrip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtrip.page */ "./src/app/tabs/addtrip/addtrip.page.ts");







var routes = [
    {
        path: '',
        component: _addtrip_page__WEBPACK_IMPORTED_MODULE_6__["AddtripPage"]
    }
];
var AddtripPageModule = /** @class */ (function () {
    function AddtripPageModule() {
    }
    AddtripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addtrip_page__WEBPACK_IMPORTED_MODULE_6__["AddtripPage"]]
        })
    ], AddtripPageModule);
    return AddtripPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/addtrip/addtrip.page.html":
/*!************************************************!*\
  !*** ./src/app/tabs/addtrip/addtrip.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Trip</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"section\" *ngIf=\"!showDetails\">\n      <ion-col size=\"12\">\n          <ion-header text-center>Details</ion-header>\n        </ion-col>\n        <ion-col size=\"12\">\n            <ion-button expand=\"block\" color=\"green\" (click)=\"showDetails = true\">\n              <ion-icon name=\"add-circle\"></ion-icon> Add Details\n            </ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"section\" *ngIf=\"showDetails\">\n        <ion-col size=\"12\">\n            <ion-header text-center>Details</ion-header>\n          </ion-col>\n        <ion-col size=\"12\">\n                <ion-item>\n                    <ion-label position=\"stacked\">Trip Name</ion-label>\n                    <ion-input [(ngModel)]=\"trip.name\"></ion-input>\n                </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Location</ion-label>\n              <ion-input [(ngModel)]=\"trip.location\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Description</ion-label>\n              <ion-textarea [(ngModel)]=\"trip.description\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Kilometers traveled</ion-label>\n              <ion-input [(ngModel)]=\"trip.kilometersTraveled\" type=\"number\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">From Date</ion-label>\n              <ion-datetime display-format=\"DD MMM YYYY\" [(ngModel)]=\"trip.fromDate\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">To Date</ion-label>\n              <ion-datetime display-format=\"DD MMM YYYY\" [(ngModel)]=\"trip.toDate\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Trip Duration (Days)</ion-label>\n              <ion-input [(ngModel)]=\"trip.duration\" type=\"number\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Caravan Used</ion-label>\n              <ion-input [(ngModel)]=\"trip.caravanUsed\" type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Vehicle Used</ion-label>\n              <ion-input [(ngModel)]=\"trip.vehicleUsed\" type=\"text\"></ion-input>\n            </ion-item>\n          </ion-col>\n    </ion-row>\n\n    <ion-row class=\"section\">\n      <ion-col size=\"12\">\n        <ion-header text-center>Memories</ion-header>\n      </ion-col>\n      <ng-container *ngFor=\"let memory of trip.memories;let index = index;let last = last\">\n        <ion-col size=\"10\">\n          <ion-item>\n            <ion-label position=\"stacked\">Memory Name ({{index+1}})</ion-label>\n            <ion-input [(ngModel)]=\"memory.name\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"2\" padding-top>\n          <ion-icon (click)=\"removeMemory(index)\" size=\"large\" name=\"trash\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Describe Memory</ion-label>\n            <ion-textarea [(ngModel)]=\"memory.description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ng-container>\n      <ion-col size=\"12\">\n          <ion-button expand=\"block\" color=\"green\" (click)=\"addMemory()\">\n            <ion-icon name=\"add-circle\"></ion-icon> Add {{trip.memories.length!=0?'More':''}} Memories\n          </ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"section\">\n        <ion-col size=\"12\">\n            <ion-header text-center>Photos</ion-header>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"!trip.memories.length\">\n              <ion-button expand=\"block\" color=\"green\" (click)=\"uploadPhoto()\">\n                <ion-icon name=\"add-circle\"></ion-icon> Add Photos\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <!-- <img *ngFor=\"let image of photos\" [src]=\"image\" width=\"80%\"> -->\n              <ion-text *ngFor=\"let image of photos\">{{image}}</ion-text>\n            </ion-col>\n    </ion-row>\n\n    <ion-row margin-top margin-bottom>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"orange\" (click)=\"addTrip()\">\n         <img src=\"../../../assets/images/campTrip_logo_white.png\" height=\"90%\"> Create Trip\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/addtrip/addtrip.page.scss":
/*!************************************************!*\
  !*** ./src/app/tabs/addtrip/addtrip.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content, ion-header, ion-toolbar {\n  --background:var(--color-navy);\n  --color:#fff; }\n\nion-item {\n  --border-radius:1.2rem;\n  --background: transparent;\n  --border-width: 2px;\n  --border-color: var(--color-transWhite);\n  --color:var(--color-transWhite);\n  margin-bottom: 1rem; }\n\n.section {\n  border-radius: 1rem;\n  border: 1px solid #fff;\n  margin-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWlucmljaC9Eb2N1bWVudHMvR0lUL2NhbXB0cmlwX2lvbmljL3NyYy9hcHAvdGFicy9hZGR0cmlwL2FkZHRyaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQWE7RUFDYixZQUFRLEVBQUE7O0FBR1o7RUFDSSxzQkFBZ0I7RUFDaEIseUJBQWE7RUFDYixtQkFBZTtFQUNmLHVDQUFlO0VBQ2YsK0JBQVE7RUFDUixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9hZGR0cmlwL2FkZHRyaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQsaW9uLWhlYWRlcixpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0tY29sb3ItbmF2eSk7XG4gICAgLS1jb2xvcjojZmZmO1xufVxuXG5pb24taXRlbXtcbiAgICAtLWJvcmRlci1yYWRpdXM6MS4ycmVtO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItdHJhbnNXaGl0ZSk7XG4gICAgLS1jb2xvcjp2YXIoLS1jb2xvci10cmFuc1doaXRlKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSAgICBcbi5zZWN0aW9ue1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/addtrip/addtrip.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/addtrip/addtrip.page.ts ***!
  \**********************************************/
/*! exports provided: AddtripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtripPage", function() { return AddtripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/photo-library/ngx */ "./node_modules/@ionic-native/photo-library/ngx/index.js");




var AddtripPage = /** @class */ (function () {
    function AddtripPage(file, photoLibrary) {
        this.file = file;
        this.photoLibrary = photoLibrary;
        this.photos = [];
        this.trip = {
            fromDate: new Date(),
            toDate: new Date(),
            memories: []
        };
        this.showDetails = false;
    }
    AddtripPage.prototype.ngOnInit = function () {
    };
    AddtripPage.prototype.addTrip = function () {
        console.log("Trip", this.trip);
    };
    AddtripPage.prototype.uploadPhoto = function () {
        var _this = this;
        this.photoLibrary.requestAuthorization().then(function () {
            _this.photoLibrary.getLibrary().subscribe({
                next: function (library) {
                    library.forEach(function (libraryItem) {
                        this.photos.push(libraryItem.fileName);
                        // console.log(libraryItem.id);          // ID of the photo
                        // console.log(libraryItem.photoURL);    // Cross-platform access to photo
                        // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                        // console.log(libraryItem.fileName);
                        // console.log(libraryItem.width);
                        // console.log(libraryItem.height);
                        // console.log(libraryItem.creationDate);
                        // console.log(libraryItem.latitude);
                        // console.log(libraryItem.longitude);
                        // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
                    });
                },
                error: function (err) { console.log('could not get photos'); },
                complete: function () { console.log('done getting photos'); }
            });
        })
            .catch(function (err) { return console.log('permissions weren\'t granted'); });
    };
    AddtripPage.prototype.addMemory = function (memory) {
        console.log("memory", memory);
        this.trip.memories.push({ name: "", description: "" });
    };
    AddtripPage.prototype.removeMemory = function (index) {
        console.log("removeMemory", index);
        this.trip.memories.splice(index, 1);
    };
    AddtripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtrip',
            template: __webpack_require__(/*! ./addtrip.page.html */ "./src/app/tabs/addtrip/addtrip.page.html"),
            styles: [__webpack_require__(/*! ./addtrip.page.scss */ "./src/app/tabs/addtrip/addtrip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"], _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoLibrary"]])
    ], AddtripPage);
    return AddtripPage;
}());



/***/ })

}]);
//# sourceMappingURL=addtrip-addtrip-module.js.map