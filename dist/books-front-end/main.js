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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Logo</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">Home</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n\n                <li *ngIf=\"!_userService.token\"><a data-toggle=\"modal\" data-target=\"#modalLoginForm\" href=\"#\">Login<span\n                        class=\" glyphicon glyphicon-log-in\"></span> </a></li>\n                <!--<li *ngIf=\"_userService.token\"><h3>{{ _userService.username }}</h3></li>-->\n                <li *ngIf=\"_userService.token\"><a href=\"logout()\"> Logout<span\n                        class=\"glyphicon glyphicon-log-out\"></span> </a></li>\n\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<div class=\"container-fluid text-center\">\n    <div class=\"row content\">\n        <div class=\"col-sm-2 sidenav\">\n        </div>\n\n        <div class=\"col-sm-8 text-left \">\n            <div class=\"col-sm-12 text-center\" >\n                <h2>Second Treasures Bookstore</h2>\n            </div>\n            <div class=\"col-sm-12 text-left\" *ngIf=\"_userService.token\">\n                <button  type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addBookModal\">\n                    Add New Book\n                </button>\n            </div>\n\n\n            <div class=\"col-sm-12 text-center\">\n                <h4>List of all available books</h4>\n            </div>\n\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th>ISBN</th>\n                    <th>Title</th>\n                    <th>Author</th>\n                    <th>Genre</th>\n                    <th>Price</th>\n                    <th *ngIf=\"_userService.token\">Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let post of posts\">\n                    <td>{{ post.id }}</td>\n                    <td>{{ post.name }}</td>\n                    <td>{{ post.author }}</td>\n                    <td>{{ post.genre }}</td>\n                    <td>${{ post.price }}</td>\n                    <td *ngIf=\"_userService.token\">\n                        <span>\n                            <button class=\"btn btn-info\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"showEditBook(post)\" data-target=\"#updateBookModal\">\n                            <span class=\"glyphicon glyphicon-edit\"></span>\n                        </button>\n                        </span>\n                        <span>\n                         <button (click)=\"deleteBook(post.id)\" class=\"btn btn-danger\">\n                            <span class=\"glyphicon glyphicon-trash\"></span>\n                        </button>\n                        </span>\n                    </td>\n\n\n                </tr>\n\n                </tbody>\n            </table>\n\n\n            <div class=\"modal fade\" id=\"addBookModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addBookModalLabel\"\n                 aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                        <form id=\"add_form\">\n                        <div class=\"modal-header\">\n                            <h3 class=\"modal-title\" id=\"exampleModalLabel\">Add New Book</h3>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div class=\"form-group\">\n                                <label for=\"title\">Book Title</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_post.name\" id=\"title\"\n                                       placeholder=\"Book Title\" name=\"post_name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"author\">Author Name</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_post.author\" id=\"author\"\n                                       placeholder=\"Author Name\" name=\"author_name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"genre\">Genre</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_post.genre\" id=\"genre\"\n                                       placeholder=\"Genre\" name=\"book_genre\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"price\">Price</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_post.price\" id=\"price\"\n                                       placeholder=\"$Price\" name=\"book_price\">\n                            </div>\n\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                            <button (click)=\"addBook();\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                        </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"modal fade\" id=\"updateBookModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateBookModalLabel\"\n                 aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                            <form id=\"update_form\">\n                            <div class=\"modal-header\">\n                                <h3 class=\"modal-title\" id=\"updateBookModalLabel\">Update Book Details</h3>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"form-group\">\n                                    <label for=\"title\">Book Title</label>\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookdetails.name\" id=\"updateTitle\"\n                                           placeholder=\"Book Title\" name=\"update_book_name\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"author\">Author Name</label>\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookdetails.author\" id=\"updateAuthor\"\n                                           placeholder=\"Author Name\" name=\"update_author_name\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"genre\">Genre</label>\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookdetails.genre\" id=\"updateGenre\"\n                                           placeholder=\"Genre\" name=\"update_book_genre\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"price\">Price</label>\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookdetails.price\" id=\"updatePrice\"\n                                           placeholder=\" $Price \" name=\"update_book_price\">\n                                </div>\n\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                <button (click)=\"updateBook(bookdetails)\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                            </div>\n                            </form>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-sm-2 sidenav\">\n        </div>\n\n\n        <div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginFormlLabel\"\n             aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <form id=\"login_form\">\n                    <div class=\"modal-header\">\n                        <h3 class=\"modal-title\" id=\"loginFormModel\">Login as Employee</h3>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" name=\"login-username\" [(ngModel)]=\"user.username\"\n                                   id=\"username\" placeholder=\"Username\">\n                            <span *ngFor=\"let error of _userService.errors.username\"><br/>{{ error }}</span>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" name=\"login-password\" [(ngModel)]=\"user.password\"\n                                   id=\"password\" placeholder=\"Password\">\n                            <span *ngFor=\"let error of _userService.errors.password\"><br/>{{ error }}</span>\n                        </div>\n\n                    </div>\n                    <div class=\"modal-footer\">\n                        <div>\n                            <span class=\"alert alert-danger error-msg\" *ngFor=\"let error of _userService.errors.non_field_errors\">{{ error }}</span>\n                        </div>\n                        <span><button (click)=\"login()\" class=\"btn btn-primary\">Log In</button></span>\n\n                    </div>\n                    </form>\n                </div>\n\n\n\n\n            </div>\n        </div>\n    </div>\n\n\n</div>\n\n\n\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book_list.service */ "./src/app/book_list.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // Angular 6/RxJS 6
var AppComponent = /** @class */ (function () {
    function AppComponent(_bookListService, _userService) {
        this._bookListService = _bookListService;
        this._userService = _userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllBooks();
        this.new_post = {};
        this.bookdetails = {};
        this.user = {
            username: '',
            password: ''
        };
    };
    AppComponent.prototype.login = function () {
        this._userService.login({ 'username': this.user.username, 'password': this.user.password });
    };
    AppComponent.prototype.refreshToken = function () {
        this._userService.refreshToken();
    };
    AppComponent.prototype.logout = function () {
        this._userService.logout();
    };
    AppComponent.prototype.getAllBooks = function () {
        var _this = this;
        this._bookListService.list().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.posts = data;
            // console.log(data);
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading booklist'); });
    };
    AppComponent.prototype.addBook = function () {
        var _this = this;
        // console.log(this.new_post);
        this._bookListService.create(this.new_post, this.user.token).subscribe(function (data) {
            // refresh the list
            _this.getAllBooks();
            $('#addBookModal').modal('hide');
            $('#add_form')[0].reset();
            return true;
        }, function (error) {
            // console.error('Error saving!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    };
    AppComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this._bookListService.delete(id, this.user.token).subscribe(function (data) {
            // refresh the list
            _this.getAllBooks();
            return true;
        }, function (error) {
            console.error('Error saving booklist!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    };
    AppComponent.prototype.showEditBook = function (book) {
        this.bookdetails = book;
    };
    AppComponent.prototype.updateBook = function (book) {
        var _this = this;
        this._bookListService.update(book, this.user.token).subscribe(function (data) {
            $('#updateBookModal').modal('hide');
            $('#update_form')[0].reset();
            // refresh the list
            _this.getAllBooks();
            return true;
        }, function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_book_list_service__WEBPACK_IMPORTED_MODULE_1__["BookListService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _book_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book_list.service */ "./src/app/book_list.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_book_list_service__WEBPACK_IMPORTED_MODULE_5__["BookListService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book_list.service.ts":
/*!**************************************!*\
  !*** ./src/app/book_list.service.ts ***!
  \**************************************/
/*! exports provided: BookListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListService", function() { return BookListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListService = /** @class */ (function () {
    function BookListService(http, _userService) {
        this.http = http;
        this._userService = _userService;
        this.apiUrl = 'https://django-books-rest-api.herokuapp.com';
    }
    // Uses http.get() to load data from a single API endpoint
    BookListService.prototype.list = function () {
        return this.http.get(this.apiUrl + '/all/');
    };
    // send a POST request to the API to create a new data object
    BookListService.prototype.create = function (post, token) {
        return this.http.post(this.apiUrl + '/booklists/', JSON.stringify(post), this.getHttpOptions());
    };
    BookListService.prototype.delete = function (id, token) {
        return this.http.delete(this.apiUrl + '/booklists/' + id + '/', this.getHttpOptions());
    };
    BookListService.prototype.update = function (book, token) {
        return this.http.patch(this.apiUrl + '/booklists/' + book.id + '/', JSON.stringify(book), this.getHttpOptions());
    };
    // helper function to build the HTTP headers
    BookListService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token
            })
        };
    };
    BookListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BookListService);
    return BookListService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // error messages received from the login attempt
        this.errors = [];
        this.apiUrl = 'https://django-books-rest-api.herokuapp.com/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
    UserService.prototype.login = function (user) {
        var _this = this;
        this.http.post(this.apiUrl + '/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(function (data) {
            // console.log('login success', data);
            _this.updateData(data['token']);
            if (data['token']) {
                $('#login_form')[0].reset();
                $('#modalLoginForm').modal('hide');
            }
        }, function (err) {
            console.error('login error', err);
            _this.errors = err['error'];
        });
    };
    /**
     * Refreshes the JWT token, to extend the time the user is logged in
     */
    UserService.prototype.refreshToken = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api-token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(function (data) {
            // console.log('refresh success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('refresh error', err);
            _this.errors = err['error'];
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.token_expires = null;
        this.username = null;
    };
    UserService.prototype.updateData = function (token) {
        this.token = token;
        this.errors = [];
        // decode the token to read the username and expiration timestamp
        var token_parts = this.token.split(/\./);
        var token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/waseemwasii/WebstormProjects/books-front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map