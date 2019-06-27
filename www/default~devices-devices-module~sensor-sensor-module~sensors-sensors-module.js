(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~devices-devices-module~sensor-sensor-module~sensors-sensors-module"],{

/***/ "./src/app/devices/devices.service.ts":
/*!********************************************!*\
  !*** ./src/app/devices/devices.service.ts ***!
  \********************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DevicesService = /** @class */ (function () {
    function DevicesService() {
        this.lists = [
            {
                name: 'Device 1',
                id: '1',
                data: []
            },
            {
                name: 'Device 2',
                id: '2',
                data: []
            },
            {
                name: 'Device 3',
                id: '3',
                data: []
            },
            {
                name: 'Device 4',
                id: '4',
                data: []
            },
        ];
    }
    DevicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/app/sensors/sensor.service.ts":
/*!*******************************************!*\
  !*** ./src/app/sensors/sensor.service.ts ***!
  \*******************************************/
/*! exports provided: SensorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorsService", function() { return SensorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SensorsService = /** @class */ (function () {
    function SensorsService() {
        this.lists = [
            {
                id: "1",
                name: "Sensor 1",
                id_device: "1",
                data: [
                    {
                        id: "1",
                        average: 25,
                        data_sensor: [
                            {
                                average: 10,
                                sum: 99,
                                hours: "10:07"
                            },
                            {
                                average: 25,
                                sum: 45,
                                hours: "10:08"
                            },
                            {
                                average: 14,
                                sum: 34,
                                hours: "10:09"
                            },
                            {
                                average: 34,
                                sum: 23,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "2",
                        average: 20,
                        data_sensor: [
                            {
                                average: 17,
                                sum: 65,
                                hours: "10:07"
                            },
                            {
                                average: 11,
                                sum: 76,
                                hours: "10:08"
                            },
                            {
                                average: 12,
                                sum: 45,
                                hours: "10:09"
                            },
                            {
                                average: 18,
                                sum: 98,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "3",
                        average: 28,
                        data_sensor: [
                            {
                                average: 29,
                                sum: 13,
                                hours: "10:07"
                            },
                            {
                                average: 10,
                                sum: 54,
                                hours: "10:08"
                            },
                            {
                                average: 9,
                                sum: 87,
                                hours: "10:09"
                            },
                            {
                                average: 15,
                                sum: 56,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "4",
                        average: 29,
                        data_sensor: [
                            {
                                average: 11,
                                sum: 45,
                                hours: "10:07"
                            },
                            {
                                average: 12,
                                sum: 11,
                                hours: "10:08"
                            },
                            {
                                average: 13,
                                sum: 12,
                                hours: "10:09"
                            },
                            {
                                average: 2,
                                sum: 87,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "5",
                        average: 24,
                        data_sensor: [
                            {
                                average: 7,
                                sum: 11,
                                hours: "10:07"
                            },
                            {
                                average: 5,
                                sum: 9,
                                hours: "10:08"
                            },
                            {
                                average: 9,
                                sum: 13,
                                hours: "10:09"
                            },
                            {
                                average: 3,
                                sum: 14,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "6",
                        average: 28,
                        data_sensor: [
                            {
                                average: 94,
                                sum: 11,
                                hours: "10:07"
                            },
                            {
                                average: 12,
                                sum: 76,
                                hours: "10:08"
                            },
                            {
                                average: 65,
                                sum: 67,
                                hours: "10:09"
                            },
                            {
                                average: 34,
                                sum: 47,
                                hours: "10:10"
                            },
                        ]
                    }
                ]
            },
            {
                id: "2",
                name: "Sensor 2",
                id_device: "1",
                data: [
                    {
                        id: "7",
                        average: 25,
                        data_sensor: [
                            {
                                average: 10,
                                sum: 99,
                                hours: "10:07"
                            },
                            {
                                average: 25,
                                sum: 45,
                                hours: "10:08"
                            },
                            {
                                average: 14,
                                sum: 34,
                                hours: "10:09"
                            },
                            {
                                average: 34,
                                sum: 23,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "8",
                        average: 20,
                        data_sensor: [
                            {
                                average: 17,
                                sum: 65,
                                hours: "10:07"
                            },
                            {
                                average: 11,
                                sum: 76,
                                hours: "10:08"
                            },
                            {
                                average: 12,
                                sum: 45,
                                hours: "10:09"
                            },
                            {
                                average: 18,
                                sum: 98,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "9",
                        average: 28,
                        data_sensor: [
                            {
                                average: 29,
                                sum: 13,
                                hours: "10:07"
                            },
                            {
                                average: 10,
                                sum: 54,
                                hours: "10:08"
                            },
                            {
                                average: 9,
                                sum: 87,
                                hours: "10:09"
                            },
                            {
                                average: 15,
                                sum: 56,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "10",
                        average: 29,
                        data_sensor: [
                            {
                                average: 11,
                                sum: 45,
                                hours: "10:07"
                            },
                            {
                                average: 12,
                                sum: 11,
                                hours: "10:08"
                            },
                            {
                                average: 13,
                                sum: 12,
                                hours: "10:09"
                            },
                            {
                                average: 2,
                                sum: 87,
                                hours: "10:10"
                            },
                        ]
                    }
                ]
            },
            {
                id: "3",
                name: "Sensor 3",
                id_device: "1",
                data: [
                    {
                        id: "11",
                        average: 15,
                        data_sensor: [
                            {
                                average: 10,
                                sum: 99,
                                hours: "10:07"
                            },
                            {
                                average: 25,
                                sum: 45,
                                hours: "10:08"
                            },
                            {
                                average: 14,
                                sum: 34,
                                hours: "10:09"
                            },
                            {
                                average: 34,
                                sum: 23,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "12",
                        average: 45,
                        data_sensor: [
                            {
                                average: 17,
                                sum: 65,
                                hours: "10:07"
                            },
                            {
                                average: 11,
                                sum: 76,
                                hours: "10:08"
                            },
                            {
                                average: 12,
                                sum: 45,
                                hours: "10:09"
                            },
                            {
                                average: 18,
                                sum: 98,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "13",
                        average: 28,
                        data_sensor: [
                            {
                                average: 29,
                                sum: 13,
                                hours: "10:07"
                            },
                            {
                                average: 10,
                                sum: 54,
                                hours: "10:08"
                            },
                            {
                                average: 9,
                                sum: 87,
                                hours: "10:09"
                            },
                            {
                                average: 15,
                                sum: 56,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "14",
                        average: 29,
                        data_sensor: [
                            {
                                average: 11,
                                sum: 45,
                                hours: "10:07"
                            },
                            {
                                average: 12,
                                sum: 11,
                                hours: "10:08"
                            },
                            {
                                average: 13,
                                sum: 12,
                                hours: "10:09"
                            },
                            {
                                average: 2,
                                sum: 87,
                                hours: "10:10"
                            },
                        ]
                    },
                ]
            },
            {
                id: "4",
                name: "Sensor 4",
                id_device: "2",
                data: [
                    {
                        id: "15",
                        average: 15,
                        data_sensor: [
                            {
                                average: 10,
                                sum: 99,
                                hours: "10:07"
                            },
                            {
                                average: 25,
                                sum: 45,
                                hours: "10:08"
                            },
                            {
                                average: 14,
                                sum: 34,
                                hours: "10:09"
                            },
                            {
                                average: 34,
                                sum: 23,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "16",
                        average: 45,
                        data_sensor: [
                            {
                                average: 17,
                                sum: 65,
                                hours: "10:07"
                            },
                            {
                                average: 11,
                                sum: 76,
                                hours: "10:08"
                            },
                            {
                                average: 12,
                                sum: 45,
                                hours: "10:09"
                            },
                            {
                                average: 18,
                                sum: 98,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "17",
                        average: 28,
                        data_sensor: [
                            {
                                average: 29,
                                sum: 13,
                                hours: "10:07"
                            },
                            {
                                average: 10,
                                sum: 54,
                                hours: "10:08"
                            },
                            {
                                average: 9,
                                sum: 87,
                                hours: "10:09"
                            },
                            {
                                average: 15,
                                sum: 56,
                                hours: "10:10"
                            },
                        ]
                    },
                    {
                        id: "18",
                        average: 29,
                        data_sensor: [
                            {
                                average: 11,
                                sum: 45,
                                hours: "10:07"
                            },
                            {
                                average: 12,
                                sum: 11,
                                hours: "10:08"
                            },
                            {
                                average: 13,
                                sum: 12,
                                hours: "10:09"
                            },
                            {
                                average: 2,
                                sum: 87,
                                hours: "10:10"
                            },
                        ]
                    },
                ]
            }
        ];
        this.datas = [];
    }
    SensorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SensorsService);
    return SensorsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~devices-devices-module~sensor-sensor-module~sensors-sensors-module.js.map