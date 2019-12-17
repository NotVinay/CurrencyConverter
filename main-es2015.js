(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-converter></app-converter>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/converter.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/converter.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3 class=\"mat-subheading-1 muted-heading text-center\">All figures are live mid-market rates as published by European Central Bank.</h3>\n  <div class=\"converter-elements\">\n    <form>\n    <div class=\"flex-grid\">\n      <div class=\"col\">\n        <mat-form-field>\n          <mat-label for=\"fromCurrencyCode\">From</mat-label>\n          <mat-select [(value)]=\"fromCurrency.code\" id=\"fromCurrencyCode\" name=\"fromCurrencyCode\"\n            (selectionChange)=\"selectsChanged('fromCurrency')\" class=\"form-control\">\n            <mat-select-trigger>\n              <div class=\"option-icon\">\n                <img alt=\"country flag\" src=\"{{ fromCurrency.metaData.countryFlag }}\" />\n              </div>\n              {{ fromCurrency.code + \" \" + fromCurrency.metaData.currencyName }}\n            </mat-select-trigger>\n            <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\n              <div class=\"option-icon\">\n                <img alt=\"country flag\" src=\"{{ currency.countryFlag }}\" />\n              </div>\n              {{ currency.currencyCode + \" \" + currency.currencyName }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [formControl]=\"fromCurrency.value\" type=\"number\" placeholder=\"From Amount\"\n            (keyup)=\"fromValueChanged($event)\" (wheel)=\"fromValueChanged($event)\" class=\"xxl-input\" min=\"0\" [errorStateMatcher]=\"matcher\"/>\n          <mat-error *ngIf=\"toCurrency.value.invalid\">\n            Please enter the amount.\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"col\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label for=\"toCurrencyCode\">To</mat-label>\n          <mat-select [(value)]=\"toCurrency.code\" id=\"toCurrencyCode\" name=\"toCurrencyCode\"\n            (selectionChange)=\"selectsChanged('toCurrency')\" class=\"form-control\">\n            <mat-select-trigger>\n              <div class=\"option-icon\">\n                <img alt=\"country flag\" src=\"{{ toCurrency.metaData.countryFlag }}\" />\n              </div>\n              {{ toCurrency.code + \" \" + toCurrency.metaData.currencyName }}\n            </mat-select-trigger>\n            <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\n              <div class=\"option-icon\">\n                <img alt=\"country flag\" src=\"{{ currency.countryFlag }}\" />\n              </div>\n              {{ currency.currencyCode + \" \" + currency.currencyName }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [formControl]=\"toCurrency.value\" type=\"number\" placeholder=\"To Amount\"\n            (keyup)=\"toValueChanged($event)\" (wheel)=\"toValueChanged($event)\" class=\"xxl-input\" [errorStateMatcher]=\"matcher\" min=\"0\"/>\n          <mat-error *ngIf=\"toCurrency.value.invalid\">\n            Please enter a valid amount.\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    </form>\n    <div class=\"text-center\">\n        <h4 class=\"mat-body-1 caption\" [ngClass]=\"{'mat-error': error, 'caption': !error}\">{{ error ? \"Error\" : \"Current Rate\" }}</h4>\n        <p class=\"mat-h2 text-center\">\n          <span *ngIf=\"error\" class=\"mat-error\">{{error}}</span>\n          <span *ngIf=\"!error\">1 {{fromCurrency.code}} = {{fromCurrency.rate.toFixed(2) + \" \" + toCurrency.code}}</span>\n        </p>\n  </div>\n  <app-graph [historicalRates]=\"historicalRates\"></app-graph>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph/graph.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph/graph.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"historical-rates-graph\" class=\"canvas\"></div>\n<!-- <p class=\"mat-h3 graph-title text-center\">Exchange rates over last 12 months.</p> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"mat-h1 logo\">\n    <span class=\"pink\">Currency </span><span class=\"indigo\">Converter</span>\n  </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .text-center {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Currency Converter';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_converter_converter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/converter/converter.component */ "./src/app/components/converter/converter.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/graph/graph.component */ "./src/app/components/graph/graph.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_converter_converter_component__WEBPACK_IMPORTED_MODULE_5__["ConverterComponent"],
            _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_8__["GraphComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"]],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ShowOnDirtyErrorStateMatcher"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/converter/converter.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/converter/converter.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*\n* TYPOGRAPHY\n*/\n\n.caption {\n  color: rgb(55, 70, 154);\n}\n\n.muted-heading {\n  margin-top: 20px;\n  color: rgba(0,0,0,.54);\n}\n\n/* REMOVING THE STEPPERS FROM INPUT */\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n\n/*\n* CURRENCY SELECT OPTION ICON CSS\n*/\n\n.xxl-input {\n  font-size: x-large;\n}\n\n.option-icon {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  overflow: hidden;\n  position: relative;\n  font-size: 1.25rem;\n  align-items: center;\n  flex-shrink: 0;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 50%;\n  justify-content: center;\n  margin-right: 5px;\n}\n\n.option-icon img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  text-align: center;\n}\n\n@media (min-width: 992px) {\n  .xxl-input {\n    font-size: x-large;\n  }\n  .option-icon {\n    width: 40px;\n    height: 40px;\n  }\n}\n\n/*\n* RESPONSIVE CONTAINER CSS\n*/\n\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.flex-grid {\n  display: flex;\n  max-width: 1140px;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.col {\n  margin: auto;\n  width: calc(100% - 20px);\n}\n\n.col mat-form-field {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.converter-elements {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 400px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n  .flex-grid {\n    display: flex;\n    max-width: 1140px;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0px;\n    margin: 0px auto;\n  }\n  .col {\n    width: unset;\n    flex-grow: 1;\n  }\n\n  .col mat-form-field {\n    margin: 20px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\nmat-form-field {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDOztBQUVEO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFHQSxxQ0FBcUM7O0FBQ3JDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7O0NBRUM7O0FBQ0Q7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVEQUF1RDtFQUN2RCxjQUFjO0VBQ2QseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBR0E7O0NBRUM7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4qIFRZUE9HUkFQSFlcbiovXG5cbi5jYXB0aW9uIHtcbiAgY29sb3I6IHJnYig1NSwgNzAsIDE1NCk7XG59XG5cbi5tdXRlZC1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcbn1cblxuXG4vKiBSRU1PVklORyBUSEUgU1RFUFBFUlMgRlJPTSBJTlBVVCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxuICBtYXJnaW46IDA7IFxufVxuXG4vKlxuKiBDVVJSRU5DWSBTRUxFQ1QgT1BUSU9OIElDT04gQ1NTXG4qL1xuLnh4bC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLm9wdGlvbi1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm9wdGlvbi1pY29uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAueHhsLWlucHV0IHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH1cbiAgLm9wdGlvbi1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuXG4vKlxuKiBSRVNQT05TSVZFIENPTlRBSU5FUiBDU1NcbiovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmZsZXgtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb2wge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbi5jb2wgbWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29udmVydGVyLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTcwcHg7XG4gIH1cbiAgLmZsZXgtZ3JpZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5jb2wge1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAuY29sIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE3MHB4O1xuICB9XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/converter/converter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/converter/converter.component.ts ***!
  \*************************************************************/
/*! exports provided: ConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterComponent", function() { return ConverterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_currencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/currencies */ "./src/app/shared/currencies.ts");
/* harmony import */ var _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/exchange-rates.service */ "./src/app/services/exchange-rates.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/errorStateMatcher */ "./src/app/shared/errorStateMatcher.ts");






let ConverterComponent = class ConverterComponent {
    constructor(exchangeRatesService) {
        this.exchangeRatesService = exchangeRatesService;
        this.error = null;
        this.loading = false;
        // TODO Add Model for from and to currency
        this.fromCurrency = {
            code: "GBP",
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            rate: 0,
            metaData: {}
        };
        this.toCurrency = {
            code: "USD",
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            rate: 0,
            metaData: {}
        };
        this.matcher = new _shared_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MatErrorStateMatcher"]();
        this.currencies = _shared_currencies__WEBPACK_IMPORTED_MODULE_2__["default"];
        const fromCurrencyData = this.currencies.filter(currency => currency.currencyCode === this.fromCurrency.code)[0];
        this.fromCurrency.metaData = fromCurrencyData;
        const toCurrencyData = this.currencies.filter(currency => currency.currencyCode === this.toCurrency.code)[0];
        this.toCurrency.metaData = toCurrencyData;
    }
    ngOnInit() {
        this.fetchExchangeRates();
        this.fetchHistoricalRates();
    }
    /**
     * Fetches the latest exchange rates.
     * @returns boolean, true if fetching is successfull, false otherwise
     */
    fetchExchangeRates() {
        let _this = this;
        this.loading = true;
        this.error = null;
        var promise = new Promise(function (resolve, reject) {
            _this.exchangeRatesService
                .fetchExchangeRate(_this.fromCurrency.code, _this.toCurrency.code)
                .subscribe(data => {
                _this.fromCurrency.rate = data.rates[_this.toCurrency.code];
                _this.toCurrency.rate = 1 / data.rates[_this.toCurrency.code];
                resolve(true);
                _this.loading = false;
            }, error => {
                reject(true);
                _this.loading = false;
                _this.error = "Error in fetching Exchange Rates";
            });
        });
        return promise;
    }
    /**
     * Fetches the historical rates.
     */
    fetchHistoricalRates() {
        this.loading = true;
        this.error = null;
        this.exchangeRatesService
            .fetchHistoricalRates(this.fromCurrency.code, this.toCurrency.code)
            .subscribe(data => {
            console.log("Historical Rates response", data);
            this.historicalRates = data;
            this.loading = false;
        }, error => {
            console.log("error", error);
            this.loading = false;
            this.error = "Error in fetching historial rates";
        });
    }
    /**
     * This function is called when currency selects are changed.
     */
    selectsChanged(sender) {
        const target = (sender == "fromCurrency") ? "toCurrency" : "fromCurrency";
        const currencyData = this.currencies.filter(currency => currency.currencyCode === this[sender].code)[0];
        this[sender].metaData = currencyData;
        this.fetchExchangeRates().then(() => {
            if (this[sender].value.valid) {
                this[target].value.setValue(Math.round(this[sender].value.value * this[sender].rate * 100) / 100);
            }
        });
        this.fetchHistoricalRates();
    }
    /**
     * This function is called when from currency value is changed.
     */
    fromValueChanged(event) {
        if (this.fromCurrency.value.valid) {
            this.toCurrency.value.setValue(Math.round(event.target.value * this.fromCurrency.rate * 100) / 100);
        }
    }
    /**
     * This function is called when to currency value is changed.
     */
    toValueChanged(event) {
        if (this.toCurrency.value.valid) {
            this.fromCurrency.value.setValue(Math.round(event.target.value * this.toCurrency.rate * 100) / 100);
        }
    }
};
ConverterComponent.ctorParameters = () => [
    { type: _services_exchange_rates_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeRatesService"] }
];
ConverterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-converter",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./converter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/converter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./converter.component.css */ "./src/app/components/converter/converter.component.css")).default]
    })
], ConverterComponent);



/***/ }),

/***/ "./src/app/components/graph/graph.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/graph/graph.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".canvas {\n  height: 200px;\n  width: 100%;\n  display: block;\n  max-width: 1040px;\n  margin: auto;\n}\n.graph-title {\n  margin-top: 10px;\n  color: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaC9ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXMge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZ3JhcGgtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogY3VycmVudENvbG9yO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/graph/graph.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/graph/graph.component.ts ***!
  \*****************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cytoscape */ "./node_modules/cytoscape/dist/cytoscape.cjs.js");
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_2__);



const MONTHS = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};
let GraphComponent = class GraphComponent {
    constructor() { }
    set historicalRates(historicalRates) {
        this._historicalRates = historicalRates;
        if (this._historicalRates != undefined) {
            this.updateGraph();
        }
    }
    ngOnInit() {
        this.cy = cytoscape__WEBPACK_IMPORTED_MODULE_2___default()({
            container: document.getElementById("historical-rates-graph"),
            style: [
                // the stylesheet for the graph
                {
                    selector: "node",
                    style: {
                        "background-color": "#ff6384",
                        label: "data(label)",
                        height: 20,
                        width: 20
                    }
                },
                {
                    selector: "edge",
                    style: {
                        width: 3,
                        "line-color": "#f96899",
                        "opacity": 0.5,
                        "target-arrow-color": "#ccc",
                        "target-arrow-shape": "triangle"
                    }
                }
            ]
        });
    }
    /**
     * Getting the max value from rates
     */
    getRatesBounds() {
        let maxRate = 0;
        let minRate = Number.MAX_VALUE;
        for (const key in this._historicalRates) {
            if (this._historicalRates[key] > maxRate) {
                maxRate = this._historicalRates[key];
            }
            if (this._historicalRates[key] < minRate) {
                minRate = this._historicalRates[key];
            }
        }
        ;
        return { minRate, maxRate };
    }
    /**
     * Generates the nodes and edges from the exchange rates data recieved.
     */
    generateElements() {
        let elements = [];
        const YAxisLength = this.cy.height();
        const XAxisLength = this.cy.width();
        const { minRate, maxRate } = this.getRatesBounds();
        //adding nodes
        var i = 0;
        var keys = Object.keys(this._historicalRates);
        keys.map(key => {
            // calculating the position of the nodes relative to canvas
            const xCoordinate = (i / 11) * XAxisLength;
            const yCoordinate = YAxisLength - ((this._historicalRates[key] - minRate) / (maxRate - minRate)) * YAxisLength;
            elements.push({
                group: "nodes",
                data: {
                    id: key,
                    label: `${MONTHS[key.substr(5, 7)]} ${key.substr(0, 4)} - ${this._historicalRates[key].toFixed(2)}`
                },
                position: { x: xCoordinate, y: yCoordinate }
            });
            i += 1;
        });
        // adding edges
        for (i = 0; i < keys.length - 1; i++) {
            elements.push({
                group: "edges",
                data: {
                    id: `e ${i}`,
                    source: keys[i],
                    target: keys[i + 1]
                }
            });
        }
        return elements;
    }
    /**
     * Updates the nodes and animates them to its new positions.
     */
    updateElements() {
        const YAxisLength = this.cy.height();
        const XAxisLength = this.cy.width();
        const { minRate, maxRate } = this.getRatesBounds();
        console.log("X-Axis", XAxisLength, "Y-Axis", YAxisLength);
        var i = 0;
        for (const key in this._historicalRates) {
            // calculating the position of the nodes relative to canvas
            const xCoordinate = (i / 11) * XAxisLength;
            const yCoordinate = YAxisLength - ((this._historicalRates[key] - minRate) / (maxRate - minRate)) * YAxisLength;
            this.cy.$(`node#${key}`).data({
                label: `${MONTHS[key.substr(5, 7)]} ${key.substr(0, 4)} - ${this._historicalRates[key].toFixed(2)}`
            });
            if (key == "2019-12") {
                console.log("X", xCoordinate, "Y", yCoordinate);
            }
            this.cy.elements(`node#${key}`).animate({
                position: { x: xCoordinate, y: yCoordinate }
            }, {
                duration: 1000
            });
            i += 1;
        }
        ;
    }
    /**
     * Render's graph using the elements received from the parent component
     */
    updateGraph() {
        if (this.elements) {
            //this.cy.remove(this.elements);
            this.cy.autolock(false); // unlocking the nodes
            this.cy.panningEnabled(true);
            this.updateElements();
        }
        else {
            this.elements = this.cy.add(this.generateElements());
        }
        this.cy.fit(this.elements, 2); // to fit the elements to canvas
        this.cy.zoomingEnabled(false); // to disable zooming
        // allowing the graph to animate and than locking it in place
        setTimeout(() => {
            this.cy.panningEnabled(false);
            this.cy.autolock(true); // to lock the nodes in place
        }, 1000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "historicalRates", null);
GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-graph",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graph.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph/graph.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./graph.component.css */ "./src/app/components/graph/graph.component.css")).default]
    })
], GraphComponent);



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  height: 80px;\n  text-align: center;\n  display: flex;\n}\n\n.header div {\n  margin: auto;\n}\n\n.logo {\n  letter-spacing: 2px;\n  font-variant-caps: all-small-caps;\n  font-weight: 700;\n}\n\n.indigo {\n  color: indigo;\n}\n\n.pink {\n  color: #E91E63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXIgZGl2IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtc21hbGwtY2FwcztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmluZGlnbyB7XG4gIGNvbG9yOiBpbmRpZ287XG59XG4ucGluayB7XG4gIGNvbG9yOiAjRTkxRTYzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/services/exchange-rates.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/exchange-rates.service.ts ***!
  \****************************************************/
/*! exports provided: ExchangeRatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRatesService", function() { return ExchangeRatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





// headers for http rquest
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
let ExchangeRatesService = class ExchangeRatesService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Fetches exchange rate from api
     * @param fromCurrency base currency code
     * @param toCurrency currency code to convert to
     */
    fetchExchangeRate(fromCurrency, toCurrency) {
        const reqUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].exchangeRatesApi}/latest?base=${fromCurrency}&symbols=${toCurrency}`;
        return this.http.get(reqUrl, httpOptions);
    }
    /**
     * Fetches exchange rates over last 12 months
     * @param fromCurrency base currency code
     * @param toCurrency currency code to convert to
     */
    fetchHistoricalRates(fromCurrency, toCurrency) {
        var endDate = new Date().toLocaleDateString("en-CA");
        const today = new Date();
        var startDate = new Date(today.setFullYear(today.getFullYear() - 1)).toLocaleDateString("en-CA");
        const reqUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].exchangeRatesApi}/history?base=${fromCurrency}&symbols=${toCurrency}&start_at=${startDate}&end_at=${endDate}`;
        return this.http.get(reqUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return this.process(response.rates, toCurrency);
        }));
    }
    /**
     * Processes historical rates to find average rate over each month.
     * @param historicalRates historical rates data to process
     * @param toCurrency
     */
    process(historicalRates, toCurrency) {
        // grouping by month
        var grouped = {};
        Object.keys(historicalRates)
            .sort()
            .map(key => {
            if (key.substring(0, 7) in grouped) {
                grouped[key.substring(0, 7)].push(historicalRates[key][toCurrency]);
            }
            else {
                grouped[key.substring(0, 7)] = [];
            }
        });
        delete grouped[Object.keys(grouped)[0]];
        // getting average rates over each month
        Object.keys(grouped)
            .sort()
            .map(key => {
            let count = grouped[key].length;
            grouped[key] = grouped[key].reduce((previous, current) => (current += previous));
            grouped[key] /= count;
        });
        return grouped;
    }
};
ExchangeRatesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ExchangeRatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ExchangeRatesService);



/***/ }),

/***/ "./src/app/shared/currencies.ts":
/*!**************************************!*\
  !*** ./src/app/shared/currencies.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ([
    {
        currencyCode: "AUD",
        currencyName: "Australian dollar",
        currencySymbol: "$",
        countryFlag: "https://restcountries.eu/data/aus.svg",
        countryName: "Australia",
        countryCode: "AUS"
    },
    {
        currencyCode: "BGN",
        currencyName: "Bulgarian lev",
        currencySymbol: "лв",
        countryFlag: "https://restcountries.eu/data/bgr.svg",
        countryName: "Bulgaria",
        countryCode: "BGR"
    },
    {
        currencyCode: "BRL",
        currencyName: "Brazilian real",
        currencySymbol: "R$",
        countryFlag: "https://restcountries.eu/data/bra.svg",
        countryName: "Brazil",
        countryCode: "BRA"
    },
    {
        currencyCode: "CAD",
        currencyName: "Canadian dollar",
        currencySymbol: "$",
        countryFlag: "https://restcountries.eu/data/can.svg",
        countryName: "Canada",
        countryCode: "CAN"
    },
    {
        currencyCode: "CHF",
        currencyName: "Swiss franc",
        currencySymbol: "Fr",
        countryFlag: "https://restcountries.eu/data/che.svg",
        countryName: "Switzerland",
        countryCode: "CHE"
    },
    {
        currencyCode: "CNY",
        currencyName: "Chinese yuan",
        currencySymbol: "¥",
        countryFlag: "https://restcountries.eu/data/chn.svg",
        countryName: "China",
        countryCode: "CHN"
    },
    {
        currencyCode: "CZK",
        currencyName: "Czech koruna",
        currencySymbol: "Kč",
        countryFlag: "https://restcountries.eu/data/cze.svg",
        countryName: "Czech Republic",
        countryCode: "CZE"
    },
    {
        currencyCode: "DKK",
        currencyName: "Danish krone",
        currencySymbol: "kr",
        countryFlag: "https://restcountries.eu/data/dnk.svg",
        countryName: "Denmark",
        countryCode: "DNK"
    },
    {
        currencyCode: "GBP",
        currencyName: "British pound",
        currencySymbol: "£",
        countryFlag: "https://restcountries.eu/data/gbr.svg",
        countryName: "United Kingdom of Great Britain and Northern Ireland",
        countryCode: "GBR"
    },
    {
        currencyCode: "HKD",
        currencyName: "Hong Kong dollar",
        currencySymbol: "$",
        countryFlag: "https://restcountries.eu/data/hkg.svg",
        countryName: "Hong Kong",
        countryCode: "HKG"
    },
    {
        currencyCode: "HRK",
        currencyName: "Croatian kuna",
        currencySymbol: "kn",
        countryFlag: "https://restcountries.eu/data/hrv.svg",
        countryName: "Croatia",
        countryCode: "HRV"
    },
    {
        currencyCode: "HUF",
        currencyName: "Hungarian forint",
        currencySymbol: "Ft",
        countryFlag: "https://restcountries.eu/data/hun.svg",
        countryName: "Hungary",
        countryCode: "HUN"
    },
    {
        currencyCode: "IDR",
        currencyName: "Indonesian rupiah",
        currencySymbol: "Rp",
        countryFlag: "https://restcountries.eu/data/idn.svg",
        countryName: "Indonesia",
        countryCode: "IDN"
    },
    {
        currencyCode: "ILS",
        currencyName: "Israeli new shekel",
        currencySymbol: "₪",
        countryFlag: "https://restcountries.eu/data/isr.svg",
        countryName: "Israel",
        countryCode: "ISR"
    },
    {
        currencyCode: "INR",
        currencyName: "Indian rupee",
        currencySymbol: "₹",
        countryFlag: "https://restcountries.eu/data/ind.svg",
        countryName: "India",
        countryCode: "IND"
    },
    {
        currencyCode: "ISK",
        currencyName: "Icelandic króna",
        currencySymbol: "kr",
        countryFlag: "https://restcountries.eu/data/isl.svg",
        countryName: "Iceland",
        countryCode: "ISL"
    },
    {
        currencyCode: "JPY",
        currencyName: "Japanese yen",
        currencySymbol: "¥",
        countryFlag: "https://restcountries.eu/data/jpn.svg",
        countryName: "Japan",
        countryCode: "JPN"
    },
    {
        currencyCode: "KRW",
        currencyName: "South Korean won",
        currencySymbol: "₩",
        countryFlag: "https://restcountries.eu/data/kor.svg",
        countryName: "Korea (Republic of)",
        countryCode: "KOR"
    },
    {
        currencyCode: "MXN",
        currencyName: "Mexican peso",
        currencySymbol: "$",
        countryFlag: "https://restcountries.eu/data/mex.svg",
        countryName: "Mexico",
        countryCode: "MEX"
    },
    {
        currencyCode: "MYR",
        currencyName: "Malaysian ringgit",
        currencySymbol: "RM",
        countryFlag: "https://restcountries.eu/data/mys.svg",
        countryName: "Malaysia",
        countryCode: "MYS"
    },
    {
        currencyCode: "NOK",
        currencyName: "Norwegian krone",
        currencySymbol: "kr",
        countryFlag: "https://restcountries.eu/data/nor.svg",
        countryName: "Norway",
        countryCode: "NOR"
    },
    {
        currencyCode: "NZD",
        currencyName: "New Zealand dollar",
        currencySymbol: "$",
        countryFlag: "https://restcountries.eu/data/nzl.svg",
        countryName: "New Zealand",
        countryCode: "NZL"
    },
    {
        currencyCode: "PHP",
        currencyName: "Philippine peso",
        currencySymbol: "₱",
        countryFlag: "https://restcountries.eu/data/phl.svg",
        countryName: "Philippines",
        countryCode: "PHL"
    },
    {
        currencyCode: "PLN",
        currencyName: "Polish złoty",
        currencySymbol: "zł",
        countryFlag: "https://restcountries.eu/data/pol.svg",
        countryName: "Poland",
        countryCode: "POL"
    },
    {
        currencyCode: "RON",
        currencyName: "Romanian leu",
        currencySymbol: "lei",
        countryFlag: "https://restcountries.eu/data/rou.svg",
        countryName: "Romania",
        countryCode: "ROU"
    },
    {
        currencyCode: "RUB",
        currencyName: "Russian ruble",
        currencySymbol: "₽",
        countryFlag: "https://restcountries.eu/data/rus.svg",
        countryName: "Russian Federation",
        countryCode: "RUS"
    },
    {
        currencyCode: "SEK",
        currencyName: "Swedish krona",
        currencySymbol: "kr",
        countryFlag: "https://restcountries.eu/data/swe.svg",
        countryName: "Sweden",
        countryCode: "SWE"
    },
    {
        currencyCode: "THB",
        currencyName: "Thai baht",
        currencySymbol: "฿",
        countryFlag: "https://restcountries.eu/data/tha.svg",
        countryName: "Thailand",
        countryCode: "THA"
    },
    {
        currencyCode: "TRY",
        currencyName: "Turkish lira",
        currencySymbol: null,
        countryFlag: "https://restcountries.eu/data/tur.svg",
        countryName: "Turkey",
        countryCode: "TUR"
    },
    {
        currencyCode: "USD",
        currencyName: "United States dollar",
        currencySymbol: "$",
        countryFlag: "https://restcountries.eu/data/usa.svg",
        countryName: "United States of America",
        countryCode: "USA"
    },
    {
        currencyCode: "ZAR",
        currencyName: "South African rand",
        currencySymbol: "R",
        countryFlag: "https://restcountries.eu/data/zaf.svg",
        countryName: "South Africa",
        countryCode: "ZAF"
    }
]);


/***/ }),

/***/ "./src/app/shared/errorStateMatcher.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/errorStateMatcher.ts ***!
  \*********************************************/
/*! exports provided: MatErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatErrorStateMatcher", function() { return MatErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** Error when invalid control is dirty, touched, or submitted. */
class MatErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    exchangeRatesApi: "https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vinay/Desktop/CurrencyConverter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map