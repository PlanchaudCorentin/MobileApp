(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sensor-sensor-module"],{

/***/ "./src/app/sensor/sensor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sensor/sensor.module.ts ***!
  \*****************************************/
/*! exports provided: SensorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorPageModule", function() { return SensorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sensor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensor.page */ "./src/app/sensor/sensor.page.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");








var routes = [
    {
        path: '/sensor/:id',
        component: _sensor_page__WEBPACK_IMPORTED_MODULE_6__["SensorPage"]
    }
];
var SensorPageModule = /** @class */ (function () {
    function SensorPageModule() {
    }
    SensorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__["Ng2GoogleChartsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sensor_page__WEBPACK_IMPORTED_MODULE_6__["SensorPage"]]
        })
    ], SensorPageModule);
    return SensorPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=sensor-sensor-module.js.map