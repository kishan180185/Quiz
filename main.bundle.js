webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_topics_topics_component__ = __webpack_require__("../../../../../src/app/components/topics/topics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_quiz_level_quiz_level_component__ = __webpack_require__("../../../../../src/app/components/quiz-level/quiz-level.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/components/quiz/quiz.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'topics',
        component: __WEBPACK_IMPORTED_MODULE_3__components_topics_topics_component__["a" /* TopicsComponent */]
    },
    {
        path: 'topics/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_level_quiz_level_component__["a" /* QuizLevelComponent */]
    },
    {
        path: 'topics/:id/quiz/:level',
        component: __WEBPACK_IMPORTED_MODULE_5__components_quiz_quiz_component__["a" /* QuizComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_topics_topics_component__ = __webpack_require__("../../../../../src/app/components/topics/topics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quiz_level_quiz_level_component__ = __webpack_require__("../../../../../src/app/components/quiz-level/quiz-level.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/components/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_topics_topics_component__["a" /* TopicsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_quiz_level_quiz_level_component__["a" /* QuizLevelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_quiz_quiz_component__["a" /* QuizComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_quiz_service__["a" /* QuizService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0.8))), url(" + escape(__webpack_require__("../../../../../src/assets/images/bg.jpg")) + ");\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" + escape(__webpack_require__("../../../../../src/assets/images/bg.jpg")) + "); /* makes background image blackish*/ \r\n    background-size: cover;\r\n    background-position: center; \r\n    height: 90.8vh;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    color: #fff; \r\n}\r\n\r\n/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\n\r\na,\r\na:focus,\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Custom default button */\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n  color: #333;\r\n  text-shadow: none; /* Prevent inheritance from `body` */\r\n  background-color: #fff;\r\n  border: .05rem solid #fff;\r\n}\r\n\r\n/*\r\n * Base structure\r\n */\r\n\r\n.cover-container {\r\n  max-width: 42em;\r\n}\r\n\r\nmain {\r\n  margin-top: 20%;\r\n}\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.cover .btn-lg {\r\n  padding: .75rem 1.25rem;\r\n  font-weight: 700;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n.mastfoot {\r\n  color: rgba(255, 255, 255, .5);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"text-center\">\n  <div class=\"cover-container d-flex h-100 p-3 mx-auto flex-column\">\n\n    <main role=\"main\" class=\"inner cover\">\n      <h1 class=\"cover-heading\">MAKE LEARNING AWESOME!</h1>\n      <p class=\"lead\">QuizMaster! brings fun into learning web technologies. Explore your knowledge, and you always walk away learning something new! <br><br>Test your knowledge Now!!!</p>\n      <p class=\"lead\">\n        <a routerLink=\"/topics\" class=\"btn btn-lg btn-secondary\">Get Started</a>\n      </p>\n    </main>\n\n\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    background-color: #000 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"\">QuizMaster</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/topics\" routerLinkActive=\"active\">Topics</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-level/quiz-level.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-level/quiz-level.component.html":
/***/ (function(module, exports) {

module.exports = "<main style=\"margin-top:3%;\" role=\"main\" class=\"container\">\n  <div class=\"jumbotron\">\n    <div *ngFor=\"let x of topic;\">\n      <h1><strong>{{x.topicName}}</strong> QUIZ</h1><br>\n      <p class=\"lead\">This level assessment Quiz, which only takes a few minutes to complete, will give you an      approximate idea of your knowledge in Web Technologies.<br><br>\n        You can take this test in three levels of difficulty: beginner, intermediate and difficult. You can start with the easiest level, or take a more difficult quiz directly.</p><br><br>\n      <a class=\"btn btn-lg btn-primary\" routerLink=\"/topics/{{x.topicId}}/quiz/beginner\" routerLinkActive=\"active\" role=\"button\">BEGINNER</a>\n      <a class=\"btn btn-lg btn-success\" routerLink=\"/topics/{{x.topicId}}/quiz/intermediate\" routerLinkActive=\"active\" role=\"button\">INTERMEDIATE</a>\n      <a class=\"btn btn-lg btn-danger\" routerLink=\"/topics/{{x.topicId}}/quiz/difficult\" routerLinkActive=\"active\" role=\"button\">DIFFICULT</a>  \n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/quiz-level/quiz-level.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizLevelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizLevelComponent = /** @class */ (function () {
    function QuizLevelComponent(_qs, router) {
        this._qs = _qs;
        this.router = router;
    }
    QuizLevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            _this._qs.getTopics().subscribe(function (res) {
                _this.data1 = res;
                for (var i = 0; i < _this.data1.length; i++) {
                    _this.data2 = _this.data1[i];
                    if (_this.data2.topicId == id) {
                        _this.topic = Array.of(_this.data2);
                    }
                }
            });
        });
    };
    QuizLevelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-level',
            template: __webpack_require__("../../../../../src/app/components/quiz-level/quiz-level.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-level/quiz-level.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], QuizLevelComponent);
    return QuizLevelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<main style=\"margin-top:3%;\" role=\"main\" class=\"container\">\n\n    <div class=\"jumbotron\">\n\n        <div *ngFor=\"let x of data; let i = index;\">\n            <div *ngIf=\"i == ind\">\n\n            <h2>\n                <strong>{{i + 1}}.&nbsp;&nbsp;{{x.question}}</strong>\n            </h2>\n            <br>\n                    <div *ngFor=\"let y of x.options; let j = index;\">\n                        <div class=\"radio\">\n                            <label>\n                            <input type=\"radio\" [(ngModel)]=\"myradio\" name=\"{{'myradio'+j}}\" id=\"{{'myradio'+j}}\" value=\"{{y}}\">&nbsp;&nbsp;&nbsp;&nbsp;{{y}}</label>\n                        </div>\n                        \n                    </div>\n                <br>\n                <button class=\"btn btn-lg btn-success\" [disabled]=\"!myradio\" (click)=\"showAnswer(myradio,x.answer)\">CHECK ANSWER</button>\n                <a class=\"btn btn-lg btn-primary\" (click) = \"prev()\"  role=\"button\">PREV &laquo;</a>\n                <a class=\"btn btn-lg btn-primary\" (click) = \"next()\"  role=\"button\">NEXT &raquo;</a>\n                <br>\n                <br>\n                <div *ngIf=\"isCorrect\" class=\"alert alert-success pos\" role=\"alert\">\n                        CORRECT ANSWER!!!\n                    </div>\n                    <div *ngIf=\"isWrong\" class=\"alert alert-danger pos\" role=\"alert\">\n                        WRONG ANSWER!!!\n                </div>\n            </div>\n        </div>\n        <h1> Total Score: {{count}} out of 5</h1>\n\n    </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = /** @class */ (function () {
    function QuizComponent(_qs, router, route) {
        this._qs = _qs;
        this.router = router;
        this.route = route;
        this.data = [];
        this.isCorrect = false;
        this.isWrong = false;
        this.count = 0;
        this.ind = 0;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data1;
        var data2;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            var level = params['level'];
            _this._qs.getBeginnerQuestions().subscribe(function (res) {
                data1 = res;
                for (var i = 0; i < data1.length; i++) {
                    data2 = data1[i];
                    if (data2.topicId == id && data2.category == level) {
                        _this.data.push(data2);
                    }
                }
                return _this.data;
            });
            _this._qs.getIntermediateQuestions().subscribe(function (res) {
                data1 = res;
                for (var i = 0; i < data1.length; i++) {
                    data2 = data1[i];
                    if (data2.topicId == id && data2.category == level) {
                        _this.data.push(data2);
                    }
                }
                return _this.data;
            });
            _this._qs.getDifficultQuestions().subscribe(function (res) {
                data1 = res;
                for (var i = 0; i < data1.length; i++) {
                    data2 = data1[i];
                    if (data2.topicId == id && data2.category == level) {
                        _this.data.push(data2);
                    }
                }
                return _this.data;
            });
        });
    };
    QuizComponent.prototype.showAnswer = function (value, answer) {
        if (value === answer) {
            this.isCorrect = true;
            this.isWrong = false;
            this.count++;
        }
        else {
            this.isWrong = true;
            this.isCorrect = false;
        }
    };
    QuizComponent.prototype.next = function () {
        this.ind++;
        this.isCorrect = false;
        this.isWrong = false;
    };
    QuizComponent.prototype.prev = function () {
        if (this.ind == 0) {
            this.ind = 1;
        }
        this.ind--;
        this.isCorrect = false;
        this.isWrong = false;
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz',
            template: __webpack_require__("../../../../../src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/topics/topics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topics/topics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album py-5 bg-light\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-3\">\n        <div class=\"card mb-3 box-shadow\">\n          <img routerLink=\"/topics/1\" class=\"card-img-top\" src=\"assets/images/html.jpg\" alt=\"Card image cap\">\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"card mb-3 box-shadow\">\n          <img routerLink=\"/topics/2\" class=\"card-img-top\" src=\"assets/images/css.jpg\" alt=\"Card image cap\">\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"card mb-3 box-shadow\">\n          <img routerLink=\"/topics/3\" class=\"card-img-top\" src=\"assets/images/javascript.jpg\" alt=\"Card image cap\">\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"card mb-3 box-shadow\">\n          <img routerLink=\"/topics/4\" class=\"card-img-top\" src=\"assets/images/bootstrap.jpg\" alt=\"Card image cap\">\n        </div>\n      </div>\n\n    </div>\n\n    <!-- second row -->\n    <div class=\"row\">\n\n        <div class=\"col-md-3\">\n          <div class=\"card mb-3 box-shadow\">\n            <img routerLink=\"/topics/5\" class=\"card-img-top\" src=\"assets/images/angular.jpg\" alt=\"Card image cap\">\n          </div>\n        </div>\n  \n        <div class=\"col-md-3\">\n          <div class=\"card mb-3 box-shadow\">\n            <img routerLink=\"/topics/6\" class=\"card-img-top\" src=\"assets/images/node.js.jpg\" alt=\"Card image cap\">\n            </div>\n        </div>\n  \n        <div class=\"col-md-3\">\n          <div class=\"card mb-3 box-shadow\">\n            <img routerLink=\"/topics/7\" class=\"card-img-top\" src=\"assets/images/react.js.jpg\" alt=\"Card image cap\">\n            </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"card mb-3 box-shadow\">\n            <img routerLink=\"/topics/8\" class=\"card-img-top\" src=\"assets/images/angular.js.jpg\" alt=\"Card image cap\">\n          </div>\n        </div>\n  \n      </div>\n\n      <!-- Third row -->\n\n      <div class=\"row\">\n\n          <div class=\"col-md-3\">\n            <div class=\"card mb-3 box-shadow\">\n              <img routerLink=\"/topics/9\" class=\"card-img-top\" src=\"assets/images/typescript.jpg\" alt=\"Card image cap\">\n            </div>\n          </div>\n  \n    \n          <div class=\"col-md-3\">\n            <div class=\"card mb-3 box-shadow\">\n              <img routerLink=\"/topics/10\" class=\"card-img-top\" src=\"assets/images/jquery.jpg\" alt=\"Card image cap\">\n            </div>\n          </div>\n        \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/topics/topics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicsComponent = /** @class */ (function () {
    function TopicsComponent() {
    }
    TopicsComponent.prototype.ngOnInit = function () {
    };
    TopicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topics',
            template: __webpack_require__("../../../../../src/app/components/topics/topics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/topics/topics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicsComponent);
    return TopicsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = /** @class */ (function () {
    function QuizService(_http) {
        this._http = _http;
    }
    QuizService.prototype.getTopics = function () {
        return this._http.get('assets/data.json')
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.getBeginnerQuestions = function () {
        return this._http.get('assets/beginner.json')
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.getIntermediateQuestions = function () {
        return this._http.get('assets/intermediate.json')
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.getDifficultQuestions = function () {
        return this._http.get('assets/difficult.json')
            .map(function (res) { return res.json(); });
    };
    QuizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.5e5fd1eeb449d1bafbda.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map