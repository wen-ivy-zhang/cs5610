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
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");















var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_6__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_12__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
//const routes: Routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n\n  <router-outlet>\n    <!--<div class=\"container\">-->\n      <!--<ul><a routerLink=\"/login\">                login               </a></ul>-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/register\">             register             </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website\">          WebSiteList               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/new\">          WebsiteNewComponent               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111\">          WebsiteComponentWithId              </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/edit\">          WebSiteEdit               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page\">          PageListComponent               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/new\">          PageNewComponent               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100\">          PageEditComponent               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100/widget\">          WidgetListComponent               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100/widget/new\">          WidgetChooserComponent               </a></ul>&ndash;&gt;-->\n      <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100/widget/123\">          WidgetEditComponentWithId              </a></ul>&ndash;&gt;-->\n    <!--</div>-->\n  </router-outlet>\n"

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
        this.title = 'my-project';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_15__["WebsiteListComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_16__["PageEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_17__["PageListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_18__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_19__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_20__["WidgetListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_21__["PageNewComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_22__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__["WidgetYoutubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_6__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_7__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_8__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtZWRpdC9wYWdlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtZWRpdC9wYWdlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7Ki9cbi8qQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4wL2Nzcy9hbGwuY3NzXCIpOyovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"updatePage()\" #updatepage =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}'>Edit Page</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n      <!--<a class=\"nav-link\" href=\"page-list.html\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      <!--</a>-->\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n<form (ngSubmit)=\"deletePage()\" #deletepage =\"ngForm\">\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"pagename\">Name</label>\n      <input [(ngModel)]=\"page.name\" type = \"text\" class=\"form-control\"\n             id = \"pagename\" name=\"pagename\" placeholder=\"{{page.name}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"pagetitle\"> Title</label>\n      <input [(ngModel)]=\"page.title\" type = \"text\" class=\"form-control\"\n             id = \"pagetitle\" name=\"pagetitle\" placeholder=\"{{page.title}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>Delete</a>-->\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n</div>\n</form>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        console.log('user id: ' + this.userId);
        console.log('web id: ' + this.websiteId);
        console.log('page id: ' + this.pageId);
        this.page = this.pageService.findPageById(this.pageId);
        console.log('Got Page');
    };
    PageEditComponent.prototype.updatePage = function () {
        console.log('entering update page');
        this.page = this.pageService.updatePage(this.pageId, this.page);
        console.log('exiting update page');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.deletePage = function () {
        console.log('entering delete page');
        this.pageService.deletePage(this.pageId);
        console.log('exiting delete page');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updatepage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageEditComponent.prototype, "updatePageFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletepage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageEditComponent.prototype, "deletePageFrom", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n/*.cl-list-item-borderless {*/\n/*border-top: 0 none;*/\n/*border-bottom: 0 none;*/\n/*border-left: 0 none;*/\n/*border-right: 0 none;*/\n/*}*/\n/*.cl-list-group-borderless{*/\n/*border-top: 0 none;*/\n/*border-bottom: 0 none;*/\n/*border-left: 0 none;*/\n/*border-right: 0 none;*/\n/*}*/\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFO0FBRTFFLDZCQUE2QjtBQUMzQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDMUIsSUFBSTtBQUVKLDZCQUE2QjtBQUMzQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDMUIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyovXG4vKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjcuMC9jc3MvYWxsLmNzc1wiKTsqL1xuXG4vKi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7Ki9cbiAgLypib3JkZXItdG9wOiAwIG5vbmU7Ki9cbiAgLypib3JkZXItYm90dG9tOiAwIG5vbmU7Ki9cbiAgLypib3JkZXItbGVmdDogMCBub25lOyovXG4gIC8qYm9yZGVyLXJpZ2h0OiAwIG5vbmU7Ki9cbi8qfSovXG5cbi8qLmNsLWxpc3QtZ3JvdXAtYm9yZGVybGVzc3sqL1xuICAvKmJvcmRlci10b3A6IDAgbm9uZTsqL1xuICAvKmJvcmRlci1ib3R0b206IDAgbm9uZTsqL1xuICAvKmJvcmRlci1sZWZ0OiAwIG5vbmU7Ki9cbiAgLypib3JkZXItcmlnaHQ6IDAgbm9uZTsqL1xuLyp9Ki9cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink ='/user/{{userId}}/website'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>Pages</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <div *ngFor = \"let page of pages\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget'>{{page.name}}</a>\n        <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}' class=\"navbar-link float-right\">\n          <i class=\"fas fa-cog fontawsome_icon\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        console.log('website id: ' + this.websiteId);
        console.log('user id: ' + this.userId);
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
        console.log('Got pages');
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbmV3L3BhZ2UtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLHdGQUF3RiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS43LjAvY3NzL2FsbC5jc3NcIik7Ki9cbi8qQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"newPage()\" #newpage =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/new'>New Page</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n      <!--<a class=\"nav-link\" href=\"page-list.html\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      <!--</a>-->\n      </button>\n  </ul>\n</nav>\n\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <!--<form>-->\n    <div class = \"form-group\">\n      <label for = \"pagename\">Name</label>\n      <input type = \"text\"\n             name = \"pagename\"\n             class = \"form-control\"\n             id = \"pagename\"\n             placeholder = \"Page Name\"\n             ngModel required #pagename=\"ngModel\"/>\n    </div>\n    <div class = \"form-group\">\n      <label for = \"title\"> Title</label>\n      <input type = \"text\"\n             name = \"pagetitle\"\n             class = \"form-control\"\n             id = \"title\"\n             placeholder=\"Page Title\"\n             ngModel required #pagetitle=\"ngModel\"/>\n    </div>\n  <!--</form>-->\n</div>\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var PageNewComponent = /** @class */ (function () {
    // errorFlag: boolean;
    // errorMsg = 'Registration failed!';
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        console.log('new page user id: ' + this.userId);
        console.log('new page web id: ' + this.websiteId);
    };
    PageNewComponent.prototype.newPage = function () {
        console.log(this.myNewPageFrom.value.pagename);
        console.log(this.myNewPageFrom.value.pagetitle);
        this.page = this.pageService.createPage(this.websiteId, new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"]('000', this.myNewPageFrom.value.pagename, this.websiteId, this.myNewPageFrom.value.pagetitle));
        console.log("check page id: ", this.page._id);
        console.log("check page name: ", this.page.name);
        if (this.page) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
        // else{
        //   this.errorFlag = true;
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newpage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageNewComponent.prototype, "myNewPageFrom", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container-fluid\">\n\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<h1> Login </h1>\n\n<form (ngSubmit)=\"login()\" #f =\"ngForm\">\n  <div class = \"form-group\">\n  <input placeholder = \"username\" name = \"username\" type = \"text\" class = \"form-control\"\n         ngModel required #username = \"ngModel\"/>\n  </div>\n\n\n  <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter a valid username!\n  </span>\n\n <div class = \"form-group\">\n  <input   placeholder=\"password\" name=\"password\" type=\"text\" class=\"form-control\"\n           ngModel required #password=\"ngModel\"/>\n </div>\n\n  <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n        Please enter a valid password!\n  </span>\n\n  <div class = \"form-group\">\n  <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!f.valid\"> Login </button>\n  </div>\n\n  <div class = \"form-group\">\n  <a class = \"btn btn-success btn-block\" routerLink ='/register'>Register</a>\n  </div>\n\n</form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.myloginFrom.value.username;
        this.password = this.myloginFrom.value.password;
        console.log(this.username);
        console.log(this.password);
        this.user = this.userService.findUserByCredential(this.username, this.password);
        if (this.user) {
            this.router.navigate(['/user', this.user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "myloginFrom", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar bg-primary navbar-fixed-top\">-->\n  <!--<div class=\"container-fluid \">-->\n\n    <!--&lt;!&ndash;<a class=\"navbar-brand cl-text-white\" routerLink=\"\">Profile</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;<a (click)=\"UpdateUser()\" class=\"btn-primary navbar-text pull-right\"><span class=\"glyphicon glyphicon-ok cl-text-white\"></span></a>&ndash;&gt;-->\n\n  <!--</div>-->\n<!--</nav>-->\n<form (ngSubmit)=\"UpdateUser()\" #f =\"ngForm\">\n\n\n  <!--<nav class=\"navbar navbar-expand-md navbar-light bg-light\">-->\n    <!--<ul class=\"navbar-nav\">-->\n      <!--<li class=\"nav-item active col-1\">-->\n        <!--<a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>-->\n          <!--<i class=\"fas fa-chevron-left fontawsome_icon\"></i>-->\n        <!--</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item col-3\">-->\n        <!--<a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/new'>New Page</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n\n    <!--<ul class=\"navbar-nav ml-auto\">-->\n      <!--<li class=\"nav-item active\">-->\n        <!--<button class = \"btn btn-primary btn-block\" type = \"submit\">-->\n          <!--&lt;!&ndash;<a class=\"nav-link\" href=\"page-list.html\">&ndash;&gt;-->\n          <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\n        <!--</button>-->\n    <!--</ul>-->\n  <!--</nav>-->\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary navbar-fixed-top\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}'>\n        Profile\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n            <!--<a class=\"navbar-brand\" type = \"submit\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n            <!--</a>-->\n      </button>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container\">\n  <h1>Profile</h1>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\"\n           id=\"username\" name=\"username\" placeholder=\"{{user.username}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input [(ngModel)]=\"user.email\" type=\"text\" class=\"form-control\"\n           id=\"email\" name=\"email\" placeholder=\"{{user.email}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"first-name\">First Name</label>\n    <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\"\n           id=\"first-name\" name=\"first-name\" placeholder=\"{{user.firstName}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"last-name\">Last Name</label>\n    <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\"\n           id=\"last-name\" name=\"last-name\" placeholder=\"{{user.lastName}}\">\n  </div>\n\n  <a class=\"btn btn-primary btn-block\" routerLink='/user/{{userId}}/website'>Websites</a>\n  <a class=\"btn btn-danger  btn-block\" routerLink='/login'>Logout</a>\n</div>\n</form>\n\n\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n  <div class=\"container\">\n    <div class=\"row navbar-text\">\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-star\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-heart\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<!--<nav class=\"navbar navbar-default navbar-fixed-bottom\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row navbar-text\">-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-plus\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-star\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-heart\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n\n<!--<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\" role = \"navigation\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<div class=\"navbar-header\">-->\n      <!--<a class=\"navbar-brand\" href=\"#\">-->\n        <!--Profile-->\n      <!--</a>-->\n      <!--<p class=\"navbar-text pull-right\">-->\n        <!--<a href=\"#\" class=\"navbar-link\">-->\n          <!--<span class=\"glyphicon glyphicon-plus\">-->\n          <!--</span>-->\n        <!--</a>-->\n      <!--</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n<!--<form (ngSubmit)=\"login()\" #f =\"ngForm\">-->\n<!--<div class = \"container\">-->\n  <!--<form>-->\n    <!--<div class = \"form-group\">-->\n      <!--<label for = \"username\"> Username</label>-->\n      <!--<input type = \"text\" class=\"form-control\" id = \"username\" placeholder=\"jannunzi\">-->\n    <!--</div>-->\n    <!--<div class = \"form-group\">-->\n      <!--<label for = \"email\"> Email</label>-->\n      <!--<input type = \"email\" class=\"form-control\" id = \"email\" placeholder=\"jannunzi@gmail.com\">-->\n    <!--</div>-->\n    <!--<div class = \"form-group\">-->\n      <!--<label for = \"firstname\"> First Name</label>-->\n      <!--<input type = \"text\" class=\"form-control\" id = \"firstname\" placeholder=\"Jose\">-->\n    <!--</div>-->\n    <!--<div class = \"form-group\">-->\n      <!--<label for = \"lastname\"> Last Name</label>-->\n      <!--<input type = \"text\" class=\"form-control\" id = \"lastname\" placeholder=\"Annunziato\">-->\n    <!--</div>-->\n  <!--</form>-->\n\n  <!--<a class = \"btn btn-primary btn-block\" href = \"website-list.html\">Websites</a>-->\n  <!--<a class = \"btn btn-danger btn-block\" href = \"login.html\">Logout</a>-->\n<!--</div>-->\n<!--</form>-->\n\n\n\n\n\n<!--<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row navbar-text\">-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-plus\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-star\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-3 text-center\">-->\n        <!--<a href=\"#\">-->\n          <!--<span class=\"glyphicon glyphicon-heart\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




;

//import {core} from '@angular/compiler'; @angular/core
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ProfileComponent.prototype.UpdateUser = function () {
        console.log(this.user.username);
        console.log(this.user.firstName);
        console.log(this.user.lastName);
        this.userService.updateUser(this.userId, this.user);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log('user id: ' + _this.userId);
        });
        this.user = this.userService.findUserById(this.userId);
        console.log('profile check: username:' + this.user.username);
        this.username = this.user['username'];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "myloginForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit)=\"register()\" #f =\"ngForm\">\n    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"username\" ngModel required #username=\"ngModel\"/>\n    <input type=\"text\" name=\"password\" class=\"form-control\" placeholder=\"password\" ngModel required #password=\"ngModel\"/>\n    <input type=\"text\" name=\"password\" class=\"form-control\" placeholder=\"verify password\"/>\n    <!--<a class=\"btn btn-primary btn-block\" href=\"profile.html\">Register</a>-->\n    <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!f.valid\">Register</button>\n    <a class=\"btn btn-danger  btn-block\" routerLink ='/login'>Cancel</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Registration failed!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        //this.user = new User(this.myRegisterFrom.value.username, this.myRegisterFrom.value.password);
        console.log(this.myRegisterFrom.value.username);
        console.log(this.myRegisterFrom.value.password);
        this.user = this.userService.createUser(new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]('000', this.myRegisterFrom.value.username, this.myRegisterFrom.value.password, 'empty', 'empty', 'empty'));
        console.log("checkpoint this.userId: ", this.user._id);
        console.log("checkpoint this.username: ", this.user.username);
        if (this.user) {
            this.router.navigate(['/user', this.user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], RegisterComponent.prototype, "myRegisterFrom", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtZWRpdC93ZWJzaXRlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtZWRpdC93ZWJzaXRlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7Ki9cbi8qQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4wL2Nzcy9hbGwuY3NzXCIpOyovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"updateWebsite()\" #updateweb =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink='/user/{{userId}}/website'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-3 d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink='/user/{{userId}}/website'>Websites</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink='/user/{{userId}}/website/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-8\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink='/user/{{userId}}/website/{{websiteId}}'>Edit Website</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n\n<form (ngSubmit)=\"deleteWebsite()\" #deleteweb =\"ngForm\">\n<div class=\"contain-fluid row\">\n  <div class=\"col-4 d-none d-sm-block\">\n\n    <div *ngFor = \"let website of websites\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}/page'>{{website.name}}</a>\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right hide-on-landscape\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\"> Website Name</label>\n        <input [(ngModel)]=\"website.name\" type=\"text\" class=\"form-control\"\n               id=\"website-name\" name=\"website-name\" placeholder=\"{{website.name}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  name=\"website-description\" placeholder=\"{{website.description}}\"></textarea>\n      </div>\n    </form>\n\n    <button class = \"btn btn-danger btn-block\" type = \"submit\">\n      Delete\n    </button>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        console.log('user id: ' + this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.website = this.websiteService.findWebsiteById(this.websiteId);
        console.log('Got websites');
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        console.log('entering update website');
        this.website = this.websiteService.updateWebsite(this.websiteId, this.website);
        console.log('exiting update website');
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        console.log('entering delete website');
        this.websiteService.deleteWebsite(this.websiteId);
        console.log('exiting delete website');
        this.router.navigate(['/user', this.userId, 'website']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateweb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteEditComponent.prototype, "updateWebFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteweb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WebsiteEditComponent.prototype, "deleteWebFrom", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n/*.cl-list-item-borderless {*/\n/*border-top: 0 none;*/\n/*border-bottom: 0 none;*/\n/*border-left: 0 none;*/\n/*border-right: 0 none;*/\n/*}*/\n/*.cl-list-group-borderless{*/\n/*border-top: 0 none;*/\n/*border-bottom: 0 none;*/\n/*border-left: 0 none;*/\n/*border-right: 0 none;*/\n/*}*/\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbGlzdC93ZWJzaXRlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFO0FBRTFFLDZCQUE2QjtBQUMzQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDMUIsSUFBSTtBQUVKLDZCQUE2QjtBQUMzQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDMUIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyovXG4vKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjcuMC9jc3MvYWxsLmNzc1wiKTsqL1xuXG4vKi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7Ki9cbiAgLypib3JkZXItdG9wOiAwIG5vbmU7Ki9cbiAgLypib3JkZXItYm90dG9tOiAwIG5vbmU7Ki9cbiAgLypib3JkZXItbGVmdDogMCBub25lOyovXG4gIC8qYm9yZGVyLXJpZ2h0OiAwIG5vbmU7Ki9cbi8qfSovXG5cbi8qLmNsLWxpc3QtZ3JvdXAtYm9yZGVybGVzc3sqL1xuICAvKmJvcmRlci10b3A6IDAgbm9uZTsqL1xuICAvKmJvcmRlci1ib3R0b206IDAgbm9uZTsqL1xuICAvKmJvcmRlci1sZWZ0OiAwIG5vbmU7Ki9cbiAgLypib3JkZXItcmlnaHQ6IDAgbm9uZTsqL1xuLyp9Ki9cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary css-orientation row\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink ='/user/{{userId}}'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website'>Websites</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto hide-on-landscape\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngFor = \"let website of websites\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink = '/user/{{userId}}/website/{{website._id}}/page'>{{website.name}}</a>\n        <a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right hide-on-landscape\">\n          <i class=\"fas fa-cog fontawsome_icon\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand hide-on-landscape\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log('user id: ' + this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        console.log('Got websites');
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbmV3L3dlYnNpdGUtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGO0FBQ3hGLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMi4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTsqL1xuLypAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS43LjAvY3NzL2FsbC5jc3NcIik7Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"newWebsite()\" #newWeb =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-3 d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website'>Websites</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-8\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/new' >New Website</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n      <!--<a class=\"navbar-brand\" type = \"submit\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      <!--</a>-->\n      </button>\n    </li>\n  </ul>\n\n</nav>\n\n\n<div class=\"contain-fluid row\">\n\n  <div class=\"col-4 d-none d-sm-block\">\n    <div *ngFor = \"let website of websites\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}/page'>{{website.name}}</a>\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right hide-on-landscape\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8\">\n    <!--<form>-->\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\"\n               name=\"webname\"\n               class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"Name\"\n               ngModel required #webname=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea name=\"description\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Description\"\n                  ngModel required #description=\"ngModel\"></textarea>\n      </div>\n    <!--</form>-->\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n</form>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        console.log('new web user id: ' + this.userId);
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        console.log('new web Got websites');
    };
    WebsiteNewComponent.prototype.newWebsite = function () {
        console.log('new web check: ' + this.myNewWebFrom.value.webname);
        console.log('new web check: ' + this.myNewWebFrom.value.description);
        this.website = this.websiteService.createWebsite(this.userId, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('000', this.myNewWebFrom.value.webname, this.userId, this.myNewWebFrom.value.description));
        console.log("checkpoint website ID: ", this.website._id);
        console.log("checkpoint website Name", this.website.name);
        if (this.website) {
            this.router.navigate(['/user', this.userId, 'website']);
        }
        //else{
        //  this.errorFlag = true;
        //}
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newWeb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteNewComponent.prototype, "myNewWebFrom", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWNob29zZXIvd2lkZ2V0LWNob29zZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWNob29zZXIvd2lkZ2V0LWNob29zZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7Ki9cbi8qQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4wL2Nzcy9hbGwuY3NzXCIpOyovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\"\n         routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Choose Widget</a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <!--<form (ngSubmit)=\"createWidget('HEADING')\" #h =\"ngForm\">-->\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a type = \"submit\">Header</a>-->\n      <!--{{widget.widgetType}}='HEADING'-->\n      <!--<a [(ngModel)]=\"widget.widgetType\" name=\"widgetType\" #HEADING-->\n      <!--routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Header</a>-->\n      <a (click) = \"createWidget('HEADING')\" [routerLink]=url> Header </a>\n    </li>\n    <!--</form>-->\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Label</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>HTML</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Text Input</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Link</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Button</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a href=\"widget-image.html\">Image</a>-->\n      <!--<a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Image</a>-->\n      <a (click) = \"createWidget('IMAGE')\" [routerLink]=url> Image </a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a href=\"widget-youtube.html\">You Tube</a>-->\n      <!--<a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>YouTube</a>-->\n      <a (click) = \"createWidget('YOUTUBE')\" [routerLink]=url> YouTube </a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Data Table</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Repeater</a>\n    </li>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetChooserComponent = /** @class */ (function () {
    // errorFlag: boolean;
    // errorMsg = 'Registration failed!';
    function WidgetChooserComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        console.log('new widget user id: ' + this.userId);
        console.log('new widget web id: ' + this.websiteId);
        console.log('new widget page id: ' + this.pageId);
        //this.widget = this.widgetService.createWidget(this.pageId, new Widget('000', 'unknown', this.pageId))
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        console.log('entering  createWidget');
        var newWidget = {
            _id: '', widgetType: widgetType, pageId: '100', size: '1', text: 'text', url: 'url', width: '100%'
        };
        this.widgetService.createWidget(this.pageId, newWidget);
        console.log('new widget user id: ' + this.userId);
        console.log('new widget web id: ' + this.websiteId);
        console.log('new widget page id: ' + this.pageId);
        console.log('newWidget ID ' + newWidget._id);
        var url = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + newWidget._id;
        console.log('url:' + url);
        this.router.navigate([url]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('h'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetChooserComponent.prototype, "headingFrom", void 0);
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjIuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7Ki9cbi8qQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4wL2Nzcy9hbGwuY3NzXCIpOyovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('user id: ' + this.userId);
        console.log('website id: ' + this.websiteId);
        console.log('page id: ' + this.pageId);
        console.log('widget id: ' + this.widgetId);
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        console.log('widget type: ' + this.widget.widgetType);
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWhlYWRlci93aWRnZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGO0FBQ3hGLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMi4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTsqL1xuLypAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS43LjAvY3NzL2FsbC5jc3NcIik7Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"updateHeading()\" #updateheading =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <!--<a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>-->\n        <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n      <!--</a>-->\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n<form (ngSubmit)=\"deleteHeading()\" #deleteheading =\"ngForm\">\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"headingname\">Name</label>\n      <!--<input [(ngModel)]=\"widget.text\" type = \"text\" class=\"form-control\"-->\n             <!--id = \"headingname\" name=\"headingname\" placeholder=\"{{widget.text}}\">-->\n      <input type = \"text\" class=\"form-control\" id = \"headingname\" placeholder=\"Heading\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"text\"> Text </label>\n      <input [(ngModel)]=\"widget.text\" type = \"text\" class=\"form-control\"\n             id = \"text\" name=\"text\" placeholder=\"{{widget.text}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"size\"> Size </label>\n      <input [(ngModel)]=\"widget.size\" type = \"text\" class=\"form-control\"\n             id = \"size\" name=\"size\" placeholder=\"{{widget.size}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n</div>\n</form>\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('header user id: ' + this.userId);
        console.log('header web id: ' + this.websiteId);
        console.log('header page id: ' + this.pageId);
        console.log('header widget id: ' + this.widgetId);
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        console.log('Got widget');
    };
    WidgetHeaderComponent.prototype.updateHeading = function () {
        console.log('entering update heading');
        this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
        console.log('exiting update heading');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.deleteHeading = function () {
        console.log('entering delete heading');
        this.widgetService.deleteWidget(this.widgetId);
        console.log('exiting delete heading');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateheading'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "updateHeadFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteheading'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetHeaderComponent.prototype, "deleteHeadFrom", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWltYWdlL3dpZGdldC1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4RiwwRUFBMEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyovXG4vKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjcuMC9jc3MvYWxsLmNzc1wiKTsqL1xuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"updateImage()\" #updateimage =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n  </ul>\n</nav>\n</form>\n\n\n<!--<form (ngSubmit)=\"deleteImage()\" #deleteimage =\"ngForm\">-->\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"name\">Name</label>\n      <input type = \"text\" class=\"form-control\" id = \"name\" placeholder=\"Image\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"text\"> Text</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"text\" placeholder=\"Description of the image\">-->\n      <input [(ngModel)] = \"widget.text\" type = \"text\" class = \"form-control\"\n             id = \"text\" name = \"text\" placeholder = \"{{widget.text}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"URL\"> URL </label>\n      <!--<input type = \"url\" class=\"form-control\" id = \"URL\" placeholder=\"URL of the image\">-->\n      <input [(ngModel)] = \"widget.url\" type = \"url\" class = \"form-control\"\n             id = \"URL\" name = \"URL\" placeholder = \"{{widget.url}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"width\"> Width</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"width\" placeholder=\"100%\">-->\n      <input [(ngModel)] = \"widget.width\" type = \"text\" class = \"form-control\"\n             id = \"width\" name = \"width\" placeholder = \"{{widget.width}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"upload\"> Upload </label>\n      <!--<input type = \"file\" class=\"form-control\" id = \"upload\" placeholder=\"No File Chosen\">-->\n      <input [(ngModel)] = \"uploadUrl\" type = \"file\" class=\"form-control\"\n             id = \"upload\" name = \"uploadUrl\" placeholder=\"{{uploadUrl}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-primary btn-block\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Upload Image</a>-->\n  <form (ngSubmit)=\"uploadImage()\" #uploadimage =\"ngForm\">\n    <button class = \"btn btn-primary btn-block\" type = \"submit\">\n      Upload Image\n    </button>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n  <form (ngSubmit)=\"deleteImage()\" #deleteimage =\"ngForm\">\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n  </form>\n</div>\n<!--</form>-->\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.uploadUrl = "No File Chosen";
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('image user id: ' + this.userId);
        console.log('image web id: ' + this.websiteId);
        console.log('image page id: ' + this.pageId);
        console.log('image widget id: ' + this.widgetId);
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        console.log('Got widget');
    };
    WidgetImageComponent.prototype.updateImage = function () {
        console.log('entering update image');
        this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
        console.log('exiting update image');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        console.log('entering delete image');
        this.widgetService.deleteWidget(this.widgetId);
        console.log('exiting delete image');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.uploadImage = function () {
        console.log('entering upload image');
        this.widget.url = this.uploadUrl;
        this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
        console.log('exiting upload image');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetImageComponent.prototype, "updateImageFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploadimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetImageComponent.prototype, "uploadImageFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetImageComponent.prototype, "deleteImageFrom", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");\n@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LXlvdXR1YmUvd2lkZ2V0LXlvdXR1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEYsc0VBQXNFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LXlvdXR1YmUvd2lkZ2V0LXlvdXR1YmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4wL2Nzcy9hbGwuY3NzXCIpO1xuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"updateYoutube()\" #updateyoutube =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <!--<a class=\"nav-link\" href=\"widget-list.html\">-->\n        <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n      <!--</a>-->\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n\n<form (ngSubmit)=\"deleteYoutube()\" #deleteyoutube =\"ngForm\">\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"name\">Name</label>\n      <input type = \"text\" class=\"form-control\" id = \"name\" placeholder=\"YouTube\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"text\"> Text</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"text\" placeholder=\"Description of the video\">-->\n      <input [(ngModel)] = \"widget.text\" type = \"text\" class = \"form-control\"\n             id = \"text\" name = \"text\" placeholder = \"{{widget.text}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"URL\"> URL </label>\n      <input [(ngModel)] = \"widget.url\" type = \"url\" class = \"form-control\"\n             id = \"URL\" name = \"URL\" placeholder = \"{{widget.url}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"width\"> Width</label>\n      <input [(ngModel)] = \"widget.width\" type = \"text\" class = \"form-control\"\n             id = \"width\" name = \"width\" placeholder = \"{{widget.width}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n</div>\n</form>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('youtube user id: ' + this.userId);
        console.log('youtube web id: ' + this.websiteId);
        console.log('youtube page id: ' + this.pageId);
        console.log('youtube widget id: ' + this.widgetId);
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        console.log('Got widget');
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        console.log('entering update youtube');
        this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
        console.log('exiting update youtube');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        console.log('entering delete youtube');
        this.widgetService.deleteWidget(this.widgetId);
        console.log('exiting delete youtube');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateyoutube'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "updateYoutubeFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteyoutube'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "deleteYoutubeFrom", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css\");*/\n/*@import url(\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\");*/\n/*.cl-list-item-borderless {*/\n/*border-top: 0 none;*/\n/*border-bottom: 0 none;*/\n/*border-left: 0 none;*/\n/*border-right: 0 none;*/\n/*}*/\n/*.cl-list-group-borderless{*/\n/*border-top: 0 none;*/\n/*border-bottom: 0 none;*/\n/*border-left: 0 none;*/\n/*border-right: 0 none;*/\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFDeEYsMEVBQTBFO0FBRzFFLDZCQUE2QjtBQUMzQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDMUIsSUFBSTtBQUVKLDZCQUE2QjtBQUMzQixzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDMUIsSUFBSSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4yLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyovXG4vKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjcuMC9jc3MvYWxsLmNzc1wiKTsqL1xuXG5cbi8qLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHsqL1xuICAvKmJvcmRlci10b3A6IDAgbm9uZTsqL1xuICAvKmJvcmRlci1ib3R0b206IDAgbm9uZTsqL1xuICAvKmJvcmRlci1sZWZ0OiAwIG5vbmU7Ki9cbiAgLypib3JkZXItcmlnaHQ6IDAgbm9uZTsqL1xuLyp9Ki9cblxuLyouY2wtbGlzdC1ncm91cC1ib3JkZXJsZXNzeyovXG4gIC8qYm9yZGVyLXRvcDogMCBub25lOyovXG4gIC8qYm9yZGVyLWJvdHRvbTogMCBub25lOyovXG4gIC8qYm9yZGVyLWxlZnQ6IDAgbm9uZTsqL1xuICAvKmJvcmRlci1yaWdodDogMCBub25lOyovXG4vKn0qL1xuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>Widgets</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <div *ngFor = \"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <li class=\"list-group-item cl-list-item-borderless\">\n            <!--<a routerLink =\"widget-heading.html\" class=\"navbar-link float-right\">-->\n            <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n              <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n            </a>\n            <h2>{{widget.text}}</h2>\n          </li>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <li class=\"list-group-item cl-list-item-borderless\">\n            <!--<a href=\"widget-youtube.html\" class=\"navbar-link float-right\">-->\n            <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n            <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n            </a>\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <!--<iframe width=\"500\" height=\"315\" src=\"https://www.youtube.com/embed/WrDGpMGF1pk\" frameborder=\"0\"-->\n                      <!--allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen\" ></iframe>-->\n              <iframe width=\"500\" height=\"315\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\"\n                      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen\" ></iframe>\n            </div>\n          </li>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <li class=\"list-group-item cl-list-item-borderless\">\n            <div>\n              <!--<a href=\"widget-image.html\" class=\"navbar-link float-right\">-->\n              <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n              <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n              </a>\n              <!--<img class=\"img-responsive img-rounded cl-widget-images\"-->\n                   <!--src=\"https://accuweather.brightspotcdn.com/dims4/default/0ceeafe/2147483647/resize/590x/quality/90/?url=http%3A%2F%2Faccuweather-bsp.s3.amazonaws.com%2F43%2F58%2F4548c8ce4d4cb5c0d873628c770f%2Fnw-snow.jpeg\">-->\n              <img class=\"img-responsive img-rounded cl-widget-images\"\n                   src=\"{{widget.url}}\">\n            </div>\n          </li>\n        </div>\n\n        <!--<div *ngSwitchCase=\"'HTML'\">-->\n          <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n            <!--<a href=\"widget-heading.html\" class=\"navbar-link float-right\">-->\n              <!--<i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>-->\n            <!--</a>-->\n            <!--<h2>Another winter storm to bring snow, cold across Seattle, northwestern US at late week</h2>-->\n          <!--</li>-->\n        <!--</div>-->\n\n      </div>\n    </div>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-play\"></i>\n      </a>\n\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-eye\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand cl-icon-padding \" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        console.log('user id: ' + this.userId);
        console.log('website id: ' + this.websiteId);
        console.log('page id: ' + this.pageId);
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
        console.log('Got widgets');
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var resultSet = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                resultSet.push(this.pages[x]);
            }
        }
        return resultSet;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x].name = page.name;
                this.pages[x].websiteId = page.websiteId;
                this.pages[x].title = page.title;
                return this.pages[x];
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// injecting service into module
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "Alice.Wonder@gmail.com" },
            { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "Bob.Marley@gmail.com" },
            { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "Charly.Garcia@gmail.com" },
            { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "Jose.Annunzi@gmail.com" }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredential': this.findUserByCredential,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        //this.user.username = username;
        //this.user.password = password;
        user._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
        //this.user = new User(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(), username, password);
        this.users.push(user);
        return user;
        //this.users.push(new User(user._id, user.username, user.password));
    };
    UserService.prototype.findUserById = function (userId) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
                //return true;
                return this.users[i];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x].username === username && this.users[x].password === password) {
        //     return true;
        //   }
        // }
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x].username = user.username;
                this.users[x].password = user.password;
                this.users[x].firstName = user.firstName;
                this.users[x].lastName = user.lastName;
                return this.users[x];
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var i in this.users) {
            if (this.users[i]._id === userId) {
                var j = +i;
                this.users.splice(j, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
            { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
            { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        //this.website = new Website(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(), name, userId, description);
        website._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var resultSet = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                resultSet.push(this.websites[x]);
            }
        }
        return resultSet;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x].name = website.name;
                this.websites[x].developerId = website.developerId;
                this.websites[x].description = website.description;
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            { _id: "123", widgetType: "HEADING", pageId: "321", size: "2", text: "GIZMODO", url: "url", width: "100%" },
            { _id: "234", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", url: "url", width: "100%" },
            { _id: "345", widgetType: "IMAGE", pageId: "321", size: "unknown", text: "unknown", url: "http://lorempixel.com/400/200/", width: "100%" },
            //{_id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
            { _id: "567", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", url: "url", width: "100%" },
            { _id: "678", widgetType: "YOUTUBE", pageId: "321", size: "unknown", text: "unknown", url: "https://www.youtube.com/embed/WrDGpMGF1pk", width: "100%" },
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var resultSet = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                resultSet.push(this.widgets[x]);
            }
        }
        return resultSet;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x].pageId = widget.pageId;
                switch (widget.widgetType) {
                    case 'HEADING':
                        this.widgets[x].text = widget.text;
                        this.widgets[x].size = widget.size;
                        return this.widgets[x];
                    case 'IMAGE':
                        this.widgets[x].width = widget.width;
                        this.widgets[x].url = widget.url;
                        return this.widgets[x];
                    case 'HTML':
                        this.widgets[x].text = widget.text;
                        return this.widgets[x];
                    case 'YOUTUBE':
                        this.widgets[x].width = widget.width;
                        this.widgets[x].url = widget.url;
                        return this.widgets[x];
                }
            }
        }
        return widget;
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WidgetService);
    return WidgetService;
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

module.exports = __webpack_require__(/*! /Users/wenzhang/cs5610/my-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map