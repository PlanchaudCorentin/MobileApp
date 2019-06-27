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
/* harmony import */ var _services_msal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/msal.service */ "./src/app/services/msal.service.ts");








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
            providers: [
                _services_msal_service__WEBPACK_IMPORTED_MODULE_7__["MsalService"],
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

module.exports = "<ion-content color=\"primary\" padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <img src=\"../../assets/images/atlantis-logo3.png\" alt=\"logo\">\n          </div>\n\n          <br><br><br>\n\n          <!--<div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"email@gmail.com\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\" (click)=\"goTo()\">Login</ion-button>\n          </div>-->\n          \n\n          \n          <div class=\"center\" *ngIf=\"!isUserLoggedIn()\">\n              <!--<ion-button (click)=\"login()\">Login</ion-button>\n              <ion-button expand=\"full\" (click)=\"signup()\">Sign Up</ion-button>-->\n\n\n\n              <ion-button expand=\"block\" (click)=\"login()\">\n                  <ion-icon slot=\"end\" name=\"ios-log-in\"></ion-icon>\n                  Sign in\n              </ion-button>\n          </div>\n          \n            <div class=\"center\" *ngIf=\"isUserLoggedIn()\">\n              <ion-button expand=\"block\" (click)=\"goTo()\">Enter</ion-button>\n              <ion-button expand=\"block\" color=\"danger\" (click)=\"logout()\">Logout</ion-button>\n            </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"center\" *ngIf=\"!isUserLoggedIn()\">\n    <ion-footer>\n      <div class=\"signup\" (click)=\"signup()\">\n        <ion-text>You don't have an account ? Sign up now...</ion-text>\n      </div>\n    </ion-footer>\n    </div>\n\n\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input-box {\n  margin-top: 200px; }\n\nimg {\n  margin-top: 100px;\n  height: 65%;\n  width: 65%; }\n\nion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\nion-button {\n  --color: #3880ff;\n  --background: #fff; }\n\n.signup {\n  position: fixed;\n  bottom: 20px;\n  text-decoration: underline; }\n\n.center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9RdWVudGluVmFybGV0L2RldlByb2plY3QyL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFFRSxxQkFBYTtFQUNiLGFBQVEsRUFBQTs7QUFFVjtFQUNFLGdCQUFRO0VBQ1Isa0JBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixZQUFXO0VBQ1gsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoiLi4vbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlucHV0LWJveHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbmltZ3tcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGhlaWdodDogNjUlO1xuICB3aWR0aDogNjUlO1xufVxuXG5pb24taXRlbXtcblxuICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5pb24tYnV0dG9ue1xuICAtLWNvbG9yOiAjMzg4MGZmO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zaWdudXB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOjIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var _services_msal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/msal.service */ "./src/app/services/msal.service.ts");




var LoginPage = /** @class */ (function () {
    function LoginPage(router, msalService) {
        this.router = router;
        this.msalService = msalService;
        this.title = 'b2c-basic-app';
    }
    LoginPage.prototype.goTo = function () {
        this.router.navigateByUrl('/tabs/tab1');
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.useremail = function () {
        var useremail = this.msalService.getUserEmail();
        return useremail;
    };
    LoginPage.prototype.login = function () {
        this.msalService.login();
    };
    LoginPage.prototype.signup = function () {
        this.msalService.signup();
    };
    LoginPage.prototype.logout = function () {
        this.msalService.logout();
    };
    LoginPage.prototype.isUserLoggedIn = function () {
        return this.msalService.isLoggedIn();
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_msal_service__WEBPACK_IMPORTED_MODULE_3__["MsalService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map