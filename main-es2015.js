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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  \n</div> -->\n\n<main-navbar></main-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/countries/countries.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/countries/countries.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-white text-center\">\n        <h1 class=\"display-4\">Corona Covid19 Tracker Country Wise</h1>\n        <hr>\n\n        <div class=\"mx-auto\">\n                <div class=\"form-group col-lg-5 mx-auto\">\n                        <label for=\"c\">Select Country</label>\n                        <select name=\"\" class=\"form-control\" id=\"c\" #input (change)='updateValues(input.value)'>\n                                <!-- <option value=\"\">Select Country</option> -->\n                                <option value=\"{{country}}\" *ngFor=\"let country of countries\">{{country}}</option>\n                        </select>\n                </div>\n        </div>\n        <app-dashboard-card [totalConfirmed]='totalConfirmed' [totalRecovered]='totalRecovered'\n                        [totalDeaths]='totalDeaths' [totalActive]='totalActive'></app-dashboard-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard-card/dashboard-card.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard-card/dashboard-card.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"card col p-3 m-3\">\n        <div class=\"ui statistic\">\n            <div class=\"label\">\n                <h3>Confirmed</h3>\n            </div>\n            <div class=\"value\">\n                {{totalConfirmed}}\n            </div>\n        </div>\n    </div>\n    <div class=\"card col p-2 m-3\">\n        <div class=\"ui statistic\">\n            <div class=\"label\">\n                <h3>Recovered</h3>\n            </div>\n            <div class=\"value\">\n                {{totalRecovered}}\n            </div>\n        </div>\n    </div>\n    <div class=\"card col p-3 m-3\">\n        <div class=\"ui statistic\">\n            <div class=\"label\">\n                <h3>Deaths</h3>\n            </div>\n            <div class=\"value\">\n                {{totalDeaths}}\n            </div>\n        </div>\n    </div>\n    <div class=\"card col p-2 m-3\">\n        <div class=\"ui statistic\">\n            <div class=\"label\">\n                <h3>Active</h3>\n            </div>\n            <div class=\"value\">\n                {{totalActive}}\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>error works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-white text-center\">\n    <h1 class=\"display-4\">Corona Covid19 Tracker</h1>\n    <hr>\n\n    <app-dashboard-card [totalConfirmed]='totalConfirmed' [totalRecovered]='totalRecovered'\n                        [totalDeaths]='totalDeaths' [totalActive]='totalActive'></app-dashboard-card>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main-navbar/main-navbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main-navbar/main-navbar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Covid19-Tracker</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" \n            data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"true\" [attr.aria-expanded]=\"!isCollapsed\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/countries\">Countries</a>\n        </li> -->\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/report\">Report</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/update\">Updates</a>\n        </li>\n       </ul> \n      <!-- <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form> -->\n    </div>\n  </nav>\n\n  <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" href=\"#\">Features</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Pricing</a>\n        <a class=\"nav-item nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </div>\n    </div>\n  </nav> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/report/report.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/report/report.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n    <thead>\n        <tr>\n            <th>Country</th>\n            <th>Confirmed</th>\n            <th>Deaths</th>\n            <th>Recovered</th>\n            <th>Active</th>\n            <!-- <th>Lastname</th>\n            <th>Email</th> -->\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let report of reports\">\n            <td>{{report.country}}</td>\n            <td>{{report.confirmed}}</td>\n            <td>{{report.deaths}}</td>\n            <td>{{report.recovered}}</td>\n            <td>{{report.active}}</td>\n            <!-- <td>{{report.username}}</td>\n            <td>{{report.email}}</td> -->\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/update/update.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/update/update.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Coming Soon</h2>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_update_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/update/update.component */ "./src/app/components/update/update.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");








const routes = [
    { path: '', component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'countries', component: _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"] },
    { path: 'report', component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"] },
    { path: 'update', component: _components_update_update_component__WEBPACK_IMPORTED_MODULE_4__["UpdateComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'login-demo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-navbar/main-navbar.component */ "./src/app/components/main-navbar/main-navbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/update/update.component */ "./src/app/components/update/update.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/countries/countries.component */ "./src/app/components/countries/countries.component.ts");
/* harmony import */ var _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard-card/dashboard-card.component */ "./src/app/components/dashboard-card/dashboard-card.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_5__["MainNavbarComponent"],
            _components_report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"],
            _components_update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_13__["CountriesComponent"],
            _components_dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_14__["DashboardCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/countries/countries.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/countries/countries.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/countries/countries.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/countries/countries.component.ts ***!
  \*************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");



let CountriesComponent = class CountriesComponent {
    constructor(service) {
        this.service = service;
        this.countries = [];
        this.totalConfirmed = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.totalActive = 0;
    }
    ngOnInit() {
        this.service.getGlobalData().subscribe(result => {
            this.data = result;
            this.data.forEach(cs => {
                this.countries.push(cs.country);
            });
        });
    }
    updateValues(country) {
        console.log(country);
        this.data.forEach(cs => {
            if (cs.country == country) {
                this.totalActive = cs.active;
                this.totalConfirmed = cs.confirmed;
                this.totalDeaths = cs.deaths;
                this.totalRecovered = cs.recovered;
            }
        });
    }
};
CountriesComponent.ctorParameters = () => [
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
CountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countries',
        template: __webpack_require__(/*! raw-loader!./countries.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/countries/countries.component.html"),
        styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/components/countries/countries.component.css")]
    })
], CountriesComponent);



/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkLWNhcmQvZGFzaGJvYXJkLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard-card/dashboard-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard-card/dashboard-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardComponent", function() { return DashboardCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardCardComponent = class DashboardCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('totalConfirmed')
], DashboardCardComponent.prototype, "totalConfirmed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('totalRecovered')
], DashboardCardComponent.prototype, "totalRecovered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('totalDeaths')
], DashboardCardComponent.prototype, "totalDeaths", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('totalActive')
], DashboardCardComponent.prototype, "totalActive", void 0);
DashboardCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-card',
        template: __webpack_require__(/*! raw-loader!./dashboard-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard-card/dashboard-card.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-card.component.css */ "./src/app/components/dashboard-card/dashboard-card.component.css")]
    })
], DashboardCardComponent);



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");



let HomeComponent = class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.totalConfirmed = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.totalActive = 0;
    }
    ngOnInit() {
        this.dataService.getGlobalData().subscribe({
            next: (result) => {
                console.log(result);
                this.golbalData = result;
                result.forEach(cs => {
                    if (!Number.isNaN(cs.confirmed)) {
                        this.totalActive += cs.active;
                        this.totalConfirmed += cs.confirmed;
                        this.totalDeaths += cs.deaths;
                        this.totalRecovered += cs.recovered;
                    }
                });
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/main-navbar/main-navbar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/main-navbar/main-navbar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXZiYXIvbWFpbi1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/main-navbar/main-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-navbar/main-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarComponent", function() { return MainNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainNavbarComponent = class MainNavbarComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
    }
};
MainNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-navbar',
        template: __webpack_require__(/*! raw-loader!./main-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-navbar/main-navbar.component.html"),
        styles: [__webpack_require__(/*! ./main-navbar.component.css */ "./src/app/components/main-navbar/main-navbar.component.css")]
    })
], MainNavbarComponent);



/***/ }),

/***/ "./src/app/components/report/report.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/report/report.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\n    width: 90%;\n    margin: 20px 0 0 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDIwcHggMCAwIDc1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");




let ReportComponent = class ReportComponent {
    constructor(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.i = 1;
    }
    ngOnInit() {
        // let resp = this.http.get("https://jsonplaceholder.typicode.com/users");
        //resp.subscribe((data)=>this.reports=data);
        let resp = this.dataService.getGlobalData();
        resp.subscribe((data) => this.reports = data);
        // this.dataService.getGlobalData().subscribe({
        //   next : (result)=>{
        //     console.log(result);
        //   }
        // })
    }
};
ReportComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"] }
];
ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/report/report.component.html"),
        styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/components/report/report.component.css")]
    })
], ReportComponent);



/***/ }),

/***/ "./src/app/components/update/update.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/update/update.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/update/update.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/update/update.component.ts ***!
  \*******************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpdateComponent = class UpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: __webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/update/update.component.html"),
        styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/components/update/update.component.css")]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DataServiceService = class DataServiceService {
    constructor(_http) {
        this._http = _http;
        this.GOLBAL_DATA_URL = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-15-2020.csv`;
    }
    getGlobalData() {
        return this._http.get(this.GOLBAL_DATA_URL, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            let data = [];
            let raw = {};
            let rows = result.split('\n');
            rows.splice(0, 1);
            //console.log(rows);
            rows.forEach(row => {
                let cols = row.split(/,(?=\S)/);
                let cs = {
                    country: cols[3],
                    confirmed: +cols[7],
                    deaths: +cols[8],
                    recovered: +cols[9],
                    active: +cols[10]
                };
                let temp = raw[cs.country];
                if (temp) {
                    temp.active += cs.active;
                    temp.confirmed += cs.confirmed;
                    temp.deaths += cs.deaths;
                    temp.recovered += cs.recovered;
                    raw[cs.country] = temp;
                }
                else {
                    raw[cs.country] = cs;
                }
                //data.push(cs)
            });
            //console.log(raw);
            return Object.values(raw);
        }));
    }
};
DataServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataServiceService);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sarang/angular/sarang/Sarang_Project/covid19-trackers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map