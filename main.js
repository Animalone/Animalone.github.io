(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/profile-edit/profile-edit.component.ts");






var routes = [{
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'edit',
        component: _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProfileEditComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Welcome to {{ title }}!</a>\n    </div>\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"#\">Home</a></li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"login\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'website-profile';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-edit/profile-edit.component */ "./src/app/profile-edit/profile-edit.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProfileEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/account-storage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/account-storage.service.ts ***!
  \*************************************************/
/*! exports provided: AccountStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStorageService", function() { return AccountStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var USERNAME_KEY = 'AuthUsername';
var NAME_KEY = 'Authname';
var ADDRESS_KEY = 'AuthAddress';
var EMAIL_KEY = 'AuthEMAIL';
var DATE_KEY = 'AuthDATE';
var PASSWORD_KEY = "PASS_KEY";
var AccountStorageService = /** @class */ (function () {
    function AccountStorageService() {
    }
    AccountStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    AccountStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    AccountStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    AccountStorageService.prototype.saveName = function (name) {
        window.sessionStorage.removeItem(NAME_KEY);
        window.sessionStorage.setItem(NAME_KEY, name);
    };
    AccountStorageService.prototype.getName = function () {
        return sessionStorage.getItem(NAME_KEY);
    };
    AccountStorageService.prototype.saveAddress = function (address) {
        window.sessionStorage.removeItem(ADDRESS_KEY);
        window.sessionStorage.setItem(ADDRESS_KEY, address);
    };
    AccountStorageService.prototype.getAddress = function () {
        return sessionStorage.getItem(ADDRESS_KEY);
    };
    AccountStorageService.prototype.saveEmail = function (email) {
        window.sessionStorage.removeItem(EMAIL_KEY);
        window.sessionStorage.setItem(EMAIL_KEY, email);
    };
    AccountStorageService.prototype.getEmail = function () {
        return sessionStorage.getItem(EMAIL_KEY);
    };
    AccountStorageService.prototype.saveMyDate = function (date) {
        window.sessionStorage.removeItem(DATE_KEY);
        window.sessionStorage.setItem(DATE_KEY, date);
    };
    AccountStorageService.prototype.getMyDate = function () {
        return sessionStorage.getItem(DATE_KEY);
    };
    AccountStorageService.prototype.savePassword = function (password) {
        window.sessionStorage.removeItem(PASSWORD_KEY);
        window.sessionStorage.setItem(PASSWORD_KEY, password);
    };
    AccountStorageService.prototype.getPassword = function () {
        return sessionStorage.getItem(PASSWORD_KEY);
    };
    AccountStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountStorageService);
    return AccountStorageService;
}());



/***/ }),

/***/ "./src/app/auth/accountViewModel.ts":
/*!******************************************!*\
  !*** ./src/app/auth/accountViewModel.ts ***!
  \******************************************/
/*! exports provided: AccountViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountViewModel", function() { return AccountViewModel; });
var AccountViewModel = /** @class */ (function () {
    function AccountViewModel(userName, name, password, email, birthDate, address) {
        this.name = name;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.birthDate = birthDate;
        this.address = address;
    }
    return AccountViewModel;
}());



/***/ }),

/***/ "./src/app/auth/api.service.ts":
/*!*************************************!*\
  !*** ./src/app/auth/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    // private  httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     "Access-Control-Allow-Origin":"*"
    //   })
    // };
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = "https://n736i2jxrb.execute-api.ap-southeast-2.amazonaws.com/dev";
        this.profile_URL = this.BASE_URL + "/profile";
        this.login_URL = this.BASE_URL + "/login";
    }
    ApiService.prototype.registerAccount = function (account) {
        return this.http.post(this.profile_URL, account);
    };
    ApiService.prototype.loginAccount = function (account) {
        return this.http.post(this.login_URL, account);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n    <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n      <div>\n        <label for=\"username\">Username</label>\n        <input type=\"text\" readonly class=\"form-control\" value ={{form.username}} />\n      </div>\n      <div>\n        <label for=\"name\">Name</label>\n        <input type=\"text\" readonly class=\"form-control\" value ={{form.name}} />\n      </div>\n      <div>\n        <label for=\"name\">Email</label>\n        <input type=\"text\" readonly class=\"form-control\" value ={{form.email}} />\n      </div>\n      <div>\n        <label for=\"name\">Birth date</label>\n        <input type=\"text\" readonly class=\"form-control\" value ={{form.date}} />\n      </div>\n      <div>\n        <label for=\"name\">Address</label>\n        <input type=\"text\" readonly class=\"form-control\" value ={{form.inputAddress}} />\n      </div>\n      <br>\n      <div class=\"row col-sm-6\">\n        <a href=\"edit\" class=\"btn btn-success\">Edit Profile</a>\n      </div>\n      <div class=\"row col-sm-6\">\n        <button class=\"btn btn-success\" (click)=\"logout()\">Logout</button>\n      </div>\n    </div>\n</div>\n\n<ng-template #loggedOut>\n  <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Login</button>\n        <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n          Login failed: {{errorMessage}}\n        </div>\n      </div>\n    </form>\n    <hr />\n    <p>Don't have an account?</p>\n    <a href=\"register\" class=\"btn btn-success\">Sign Up</a>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_accountViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/accountViewModel */ "./src/app/auth/accountViewModel.ts");
/* harmony import */ var _auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/api.service */ "./src/app/auth/api.service.ts");
/* harmony import */ var _auth_account_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/account-storage.service */ "./src/app/auth/account-storage.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, accountStorage) {
        this.apiService = apiService;
        this.accountStorage = accountStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.accountStorage.getUsername()) {
            this.isLoggedIn = true;
            this.form.username = this.accountStorage.getUsername();
            this.form.email = this.accountStorage.getEmail();
            this.form.name = this.accountStorage.getName();
            this.form.date = this.accountStorage.getMyDate();
            this.form.inputAddress = this.accountStorage.getAddress();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.accountViewModel = new _auth_accountViewModel__WEBPACK_IMPORTED_MODULE_2__["AccountViewModel"](this.form.username, " ", this.form.password, " ", " ", " ");
        this.apiService.loginAccount(this.accountViewModel).subscribe(function (data) {
            console.log(data);
            _this.isLoggedIn = true;
            _this.isLoginFailed = false;
            _this.accountStorage.saveUsername(data.user_name);
            _this.accountStorage.saveName(data.name);
            _this.accountStorage.saveAddress(data.address);
            _this.accountStorage.saveEmail(data.email);
            _this.accountStorage.saveMyDate(data.birthDate);
            _this.form.username = _this.accountStorage.getUsername();
            _this.form.email = _this.accountStorage.getEmail();
            _this.form.name = _this.accountStorage.getName();
            _this.form.date = _this.accountStorage.getMyDate();
            _this.form.inputAddress = _this.accountStorage.getAddress();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.accountStorage.signOut();
        this.isLoggedIn = false;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _auth_account_storage_service__WEBPACK_IMPORTED_MODULE_4__["AccountStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row col-sm-6\" style=\"max-width:350px;\">\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"name\">Your name</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" placeholder={{name}} [(ngModel)]=\"form.name\" #name=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && name.invalid\">\n        <div *ngIf=\"name.errors.required\">Name is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" readonly class=\"form-control\" value ={{username}} name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n        required />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n        required minlength=\"6\" />\n      <div *ngIf=\"f.submitted && password.invalid\">\n        <div *ngIf=\"password.errors.required\">Password is required</div>\n        <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" name=\"email\" placeholder={{email}} [(ngModel)]=\"form.email\" #email=\"ngModel\" required email />\n      <div *ngIf=\"f.submitted && email.invalid\">\n        <div *ngIf=\"email.errors.required\">Email is required</div>\n        <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"date\">Birth Date</label>\n      <input class=\"form-control\" name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\" [(ngModel)]=\"form.date\" #date=\"ngModel\" required date />\n      <div *ngIf=\"f.submitted && date.invalid\">\n        <div *ngIf=\"date.errors.required\">Birth Date is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"inputAddress\" placeholder={{inputAddress}} [(ngModel)]=\"form.inputAddress\" #inputAddress=\"ngModel\" required inputAddress />\n        <div *ngIf=\"f.submitted && inputAddress.invalid\">\n        \t<div *ngIf=\"inputAddress.errors.required\">Address is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <button href=\"login\" class=\"btn btn-primary\">Submit</button>\n      <div *ngIf=\"f.submitted\" class=\"alert alert-warning\">\n        Signup failed!<br/>{{errorMessage}}\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_account_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/account-storage.service */ "./src/app/auth/account-storage.service.ts");
/* harmony import */ var _auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/api.service */ "./src/app/auth/api.service.ts");
/* harmony import */ var _auth_accountViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/accountViewModel */ "./src/app/auth/accountViewModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(router, accountStorage, apiService) {
        this.router = router;
        this.accountStorage = accountStorage;
        this.apiService = apiService;
        this.isUpdateFail = false;
        this.form = {};
        this.errorMessage = '';
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        if (this.accountStorage.getUsername()) {
            this.form.username = this.accountStorage.getUsername();
            this.form.email = this.accountStorage.getEmail();
            this.form.name = this.accountStorage.getName();
            this.form.date = this.accountStorage.getMyDate();
            this.form.inputAddress = this.accountStorage.getAddress();
        }
    };
    ProfileEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.accountViewModel = new _auth_accountViewModel__WEBPACK_IMPORTED_MODULE_4__["AccountViewModel"](this.form.username, this.form.name, this.form.password, this.form.email, this.form.date, this.form.inputAddress);
        this.accountStorage.saveUsername(this.form.username);
        this.accountStorage.saveName(this.form.name);
        this.accountStorage.saveAddress(this.form.inputAddress);
        this.accountStorage.saveEmail(this.form.email);
        this.accountStorage.saveMyDate(this.form.date);
        this.apiService.registerAccount(this.accountViewModel).subscribe(function (data) {
            console.log(data);
            _this.isUpdateFail = false;
            // this.reloadPage();
            _this.router.navigate(['login']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isUpdateFail = true;
        });
    };
    ProfileEditComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    ProfileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.component.html */ "./src/app/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-edit.component.css */ "./src/app/profile-edit/profile-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _auth_account_storage_service__WEBPACK_IMPORTED_MODULE_2__["AccountStorageService"], _auth_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSignedUp; else signupForm\">\n  Your registration is successful. Please login!\n</div>\n\n<ng-template #signupForm>\n  <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"name\">Your name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"form.name\" #name=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && name.invalid\">\n          <div *ngIf=\"name.errors.required\">Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required/>\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" #email=\"ngModel\" required email />\n        <div *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"date\">Birth Date</label>\n        <input class=\"form-control\" name=\"date\" placeholder=\"MM/DD/YYYY\" type=\"text\" [(ngModel)]=\"form.date\" #date=\"ngModel\" required date />\n        <div *ngIf=\"f.submitted && date.invalid\">\n          <div *ngIf=\"date.errors.required\">Birth Date is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"inputAddress\">Address</label>\n          <input type=\"text\" class=\"form-control\" name=\"inputAddress\" placeholder=\"Your Address\" [(ngModel)]=\"form.inputAddress\" #inputAddress=\"ngModel\" required inputAddress />\n          <div *ngIf=\"f.submitted && inputAddress.invalid\">\n          \t<div *ngIf=\"inputAddress.errors.required\">Address is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Register</button>\n        <div *ngIf=\"f.submitted && isSignUpFailed\" class=\"alert alert-warning\">\n          Signup failed!<br/>{{errorMessage}}\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/api.service */ "./src/app/auth/api.service.ts");
/* harmony import */ var _auth_accountViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/accountViewModel */ "./src/app/auth/accountViewModel.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService) {
        this.apiService = apiService;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.accountViewModel = new _auth_accountViewModel__WEBPACK_IMPORTED_MODULE_3__["AccountViewModel"](this.form.username, this.form.name, this.form.password, this.form.email, this.form.date, this.form.inputAddress);
        this.apiService.registerAccount(this.accountViewModel).subscribe(function (data) {
            console.log(data);
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wuangs/Documents/website-profile/front-end/website-profile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map