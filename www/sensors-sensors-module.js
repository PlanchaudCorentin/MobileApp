(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sensors-sensors-module"],{

/***/ "./src/app/sensors/sensors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sensors/sensors.module.ts ***!
  \*******************************************/
/*! exports provided: SensorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsPageModule", function() { return SensorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sensors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensors.page */ "./src/app/sensors/sensors.page.ts");
/* harmony import */ var _sensor_sensor_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sensor/sensor.page */ "./src/app/sensor/sensor.page.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");









var routes = [
    {
        path: '',
        component: _sensors_page__WEBPACK_IMPORTED_MODULE_6__["SensorsPage"]
    },
    {
        path: ':id',
        component: _sensor_sensor_page__WEBPACK_IMPORTED_MODULE_7__["SensorPage"]
    }
];
var SensorsPageModule = /** @class */ (function () {
    function SensorsPageModule() {
    }
    SensorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__["Ng2GoogleChartsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sensors_page__WEBPACK_IMPORTED_MODULE_6__["SensorsPage"], _sensor_sensor_page__WEBPACK_IMPORTED_MODULE_7__["SensorPage"]]
        })
    ], SensorsPageModule);
    return SensorsPageModule;
}());



/***/ }),

/***/ "./src/app/sensors/sensors.page.html":
/*!*******************************************!*\
  !*** ./src/app/sensors/sensors.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>List all sensors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!--<ion-item button clear *ngFor=\"let sensorslists of sensorslists\" (click)=\"itemClicked(sensorslists)\">\n      {{sensorslists.name}}\n    </ion-item>-->\n    <ion-item button clear *ngFor=\"let item of (result | async)\" (click)=\"itemClicked(item)\">\n      {{item.id}} - {{item.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/sensors/sensors.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sensors/sensors.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zZW5zb3JzL3NlbnNvcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sensors/sensors.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sensors/sensors.page.ts ***!
  \*****************************************/
/*! exports provided: SensorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsPage", function() { return SensorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sensor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensor.service */ "./src/app/sensors/sensor.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





var SensorsPage = /** @class */ (function () {
    function SensorsPage(route, data, dataService) {
        this.route = route;
        this.data = data;
        this.dataService = dataService;
        this.sensorslists = this.data.lists;
    }
    SensorsPage.prototype.itemClicked = function (item) {
        console.log(item);
        this.route.navigateByUrl('/sensors/' + item.id);
    };
    SensorsPage.prototype.ngOnInit = function () {
        this.result = this.dataService.getSensors();
    };
    SensorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sensors',
            template: __webpack_require__(/*! ./sensors.page.html */ "./src/app/sensors/sensors.page.html"),
            styles: [__webpack_require__(/*! ./sensors.page.scss */ "./src/app/sensors/sensors.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _sensor_service__WEBPACK_IMPORTED_MODULE_3__["SensorsService"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], SensorsPage);
    return SensorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sensors-sensors-module.js.map