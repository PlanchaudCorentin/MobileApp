(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devices-devices-module"],{

/***/ "./src/app/device/device.page.html":
/*!*****************************************!*\
  !*** ./src/app/device/device.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{device.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        Average\n      </ion-label>\n      <ion-note color=\"primary\" slot=\"end\">50</ion-note>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label>Send a command</ion-label>\n        <ion-select value=\"command\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option value=\"0\">Change temperature</ion-select-option>\n          <ion-select-option value=\"1\">Send signal</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Chart all sensors average</ion-card-subtitle>\n      </ion-card-header>\n      <google-chart stye=\"padding:30px\" *ngIf=\"pieChartData\" [data]=\"pieChartData\"></google-chart>\n    </ion-card>\n\n\n    <ion-list-header color=\"\">Device sensors</ion-list-header>\n    <ion-list>\n      <!--<ion-item button clear *ngFor=\"let sensor of sensor\" (click)=\"itemClicked(sensor)\">\n        {{sensor.name}}\n      </ion-item>-->\n      <ion-item button clear *ngFor=\"let item of (result | async)\" (click)=\"itemClicked(item)\">\n          {{item.id}} - {{item.name}}\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/device/device.page.scss":
/*!*****************************************!*\
  !*** ./src/app/device/device.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9kZXZpY2UvZGV2aWNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/device/device.page.ts":
/*!***************************************!*\
  !*** ./src/app/device/device.page.ts ***!
  \***************************************/
/*! exports provided: DevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePage", function() { return DevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devices_devices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../devices/devices.service */ "./src/app/devices/devices.service.ts");
/* harmony import */ var _sensors_sensor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sensors/sensor.service */ "./src/app/sensors/sensor.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");







var DevicePage = /** @class */ (function () {
    function DevicePage(activatedRoute, devicesService, sensorsService, dataService, route) {
        this.activatedRoute = activatedRoute;
        this.devicesService = devicesService;
        this.sensorsService = sensorsService;
        this.dataService = dataService;
        this.route = route;
        this.sensorslists = this.sensorsService.lists;
        this.dataTable = [];
        this.lines = [];
    }
    DevicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.itemInfo = this.activatedRoute.snapshot.paramMap.get('id');
        this.device = this.devicesService.lists.find(function (e) { return e.id === _this.itemInfo; });
        this.sensor = this.sensorsService.lists.filter(function (e) { return e.id_device === _this.device.id; });
        this.result = this.dataService.getDeviceById(this.itemInfo);
    };
    DevicePage.prototype.itemClicked = function (item) {
        this.route.navigateByUrl('/sensors/' + item.id);
    };
    DevicePage.prototype.ionViewDidEnter = function () {
        this.useAngularLibrary();
    };
    /*dataTable = [[
      'Type', 'Average', 'Sum'
    ],
    ['Sensor 1', 12, 13],
    ['Sensor 2', 15, 13],
    ['Sensor 3', 16, 32]];
    
    useAngularLibrary() {
      this.pieChartData = {
        chartType: 'ColumnChart',
        dataTable: this.dataTable,
        legend: {
          position: 'bottom'
        }
      };
    
    }*/
    DevicePage.prototype.useAngularLibrary = function () {
        var _this = this;
        this.lines.push('Type', 'Average');
        this.dataTable.push(this.lines);
        this.sensor.forEach(function (e) {
            e.data.forEach(function (i) {
                _this.dataTable.push(['Sensor ' + (e.id), i.average]);
            });
        });
        this.pieChartData = {
            chartType: 'ColumnChart',
            dataTable: this.dataTable,
            options: {
                'title': 'Average for all sensors by hours'
            }
        };
    };
    DevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.page.html */ "./src/app/device/device.page.html"),
            styles: [__webpack_require__(/*! ./device.page.scss */ "./src/app/device/device.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _devices_devices_service__WEBPACK_IMPORTED_MODULE_3__["DevicesService"], _sensors_sensor_service__WEBPACK_IMPORTED_MODULE_4__["SensorsService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DevicePage);
    return DevicePage;
}());



/***/ }),

/***/ "./src/app/devices/devices.module.ts":
/*!*******************************************!*\
  !*** ./src/app/devices/devices.module.ts ***!
  \*******************************************/
/*! exports provided: DevicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesPageModule", function() { return DevicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _devices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devices.page */ "./src/app/devices/devices.page.ts");
/* harmony import */ var _device_device_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../device/device.page */ "./src/app/device/device.page.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");









var routes = [
    {
        path: '',
        component: _devices_page__WEBPACK_IMPORTED_MODULE_6__["DevicesPage"]
    },
    {
        path: ':id',
        component: _device_device_page__WEBPACK_IMPORTED_MODULE_7__["DevicePage"]
    }
];
var DevicesPageModule = /** @class */ (function () {
    function DevicesPageModule() {
    }
    DevicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__["Ng2GoogleChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_devices_page__WEBPACK_IMPORTED_MODULE_6__["DevicesPage"], _device_device_page__WEBPACK_IMPORTED_MODULE_7__["DevicePage"]]
        })
    ], DevicesPageModule);
    return DevicesPageModule;
}());



/***/ }),

/***/ "./src/app/devices/devices.page.html":
/*!*******************************************!*\
  !*** ./src/app/devices/devices.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (ionInput)=\"getItems($event)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>List all devices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar></ion-searchbar>\n  <ion-list>\n    <!--<ion-item button clear *ngFor=\"let devicelist of devicelists\" (click)=\"itemClicked(devicelist)\">\n      {{devicelist.name}}\n    </ion-item>-->\n    <ion-item button clear *ngFor=\"let item of (result | async)\" (click)=\"itemClicked(item)\">\n      {{item.name}} - {{item.mac_address}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/devices/devices.page.scss":
/*!*******************************************!*\
  !*** ./src/app/devices/devices.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9kZXZpY2VzL2RldmljZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/devices/devices.page.ts":
/*!*****************************************!*\
  !*** ./src/app/devices/devices.page.ts ***!
  \*****************************************/
/*! exports provided: DevicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesPage", function() { return DevicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _devices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices.service */ "./src/app/devices/devices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_msal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/msal.service */ "./src/app/services/msal.service.ts");






var DevicesPage = /** @class */ (function () {
    function DevicesPage(dataService, route, data, msal) {
        this.dataService = dataService;
        this.route = route;
        this.data = data;
        this.msal = msal;
        this.initializeItems();
    }
    //public devicelists = this.data.lists;
    DevicesPage.prototype.itemClicked = function (item) {
        this.route.navigateByUrl('/devices/' + item.id);
    };
    DevicesPage.prototype.ngOnInit = function () {
        this.result = this.dataService.searchData(this.msal.getUserEmail());
        console.log('result :' + this.result);
    };
    DevicesPage.prototype.initializeItems = function () {
        this.items = this.result;
        console.log(this.items);
    };
    DevicesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DevicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! ./devices.page.html */ "./src/app/devices/devices.page.html"),
            styles: [__webpack_require__(/*! ./devices.page.scss */ "./src/app/devices/devices.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _devices_service__WEBPACK_IMPORTED_MODULE_2__["DevicesService"], _services_msal_service__WEBPACK_IMPORTED_MODULE_5__["MsalService"]])
    ], DevicesPage);
    return DevicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=devices-devices-module.js.map