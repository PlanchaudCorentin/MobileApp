(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _services_msal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/msal.service */ "./src/app/services/msal.service.ts");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            providers: [
                _services_msal_service__WEBPACK_IMPORTED_MODULE_7__["MsalService"],
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Accueil\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"center\" *ngIf=\"isUserLoggedIn()\">\n    <ion-card class=\"welcome-card\">\n      <!--<ion-img src=\"/assets/shapes.svg\"></ion-img>-->\n      <ion-card-header>\n          <ion-button style=\"float:right;\" size=\"small\" (click)=\"logout()\">Logout</ion-button>\n        <ion-card-subtitle>C'est parti</ion-card-subtitle>\n        <ion-card-title>Welcome !</ion-card-title>\n        <div class=\"center\" *ngIf=\"isUserLoggedIn()\">\n          <ion-text> {{fullname()}} </ion-text>\n        </div>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      </ion-card-content>\n    </ion-card>\n\n\n    <div class=\"center\" *ngIf=\"!isUserLoggedIn()\">\n      <!--<ion-button padding expand=\"block\" (click)=\"onGoToLogin()\">Login page</ion-button>-->\n      <ion-button padding expand=\"block\" (click)=\"goTo()\">Login page</ion-button>\n    </div>\n  </div>\n\n  <div class=\"center\" *ngIf=\"!isUserLoggedIn()\">\n      <ion-card class=\"welcome-card\">\n      <!--<ion-img src=\"/assets/shapes.svg\"></ion-img>-->\n      <ion-card-header>\n        <ion-card-subtitle>C'est parti</ion-card-subtitle>\n        <ion-card-title>Welcome !</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>You need to connect to your account.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-button padding expand=\"block\" (click)=\"goTo()\">Login page</ion-button>\n  \n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9RdWVudGluVmFybGV0L2RldlByb2plY3QyL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiIuLi90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_msal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/msal.service */ "./src/app/services/msal.service.ts");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(router, msalService) {
        this.router = router;
        this.msalService = msalService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        console.log(this.msalService.isLoggedIn);
    };
    Tab1Page.prototype.goTo = function () {
        this.router.navigateByUrl('/login');
    };
    Tab1Page.prototype.useremail = function () {
        var useremail = this.msalService.getUserEmail();
        return useremail;
    };
    Tab1Page.prototype.fullname = function () {
        var fullname = this.msalService.getFullName();
        return fullname;
        console.log(fullname);
    };
    Tab1Page.prototype.logout = function () {
        //this.router.navigateByUrl('/login');
        this.msalService.logout();
    };
    Tab1Page.prototype.isUserLoggedIn = function () {
        return this.msalService.isLoggedIn();
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_msal_service__WEBPACK_IMPORTED_MODULE_3__["MsalService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map