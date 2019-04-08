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
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");















var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_5__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_6__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_4__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_11__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__["WidgetEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_13__["FlickrImageSearchComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });
//const routes: Routes = [];
// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


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

module.exports = "\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n\n<router-outlet>\n  <!--<div class=\"container\">-->\n    <!--<ul><a routerLink=\"/login\">                login               </a></ul>-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/register\">             register             </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website\">          WebSiteList               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/new\">          WebsiteNewComponent               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111\">          WebsiteComponentWithId              </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/edit\">          WebSiteEdit               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page\">          PageListComponent               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/new\">          PageNewComponent               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100\">          PageEditComponent               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100/widget\">          WidgetListComponent               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100/widget/new\">          WidgetChooserComponent               </a></ul>&ndash;&gt;-->\n    <!--&lt;!&ndash;<ul><a routerLink=\"/user/123/website/111/page/100/widget/123\">          WidgetEditComponentWithId              </a></ul>&ndash;&gt;-->\n  <!--</div>-->\n</router-outlet>\n"

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _components_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/widget/widget-list/sortable.directive */ "./src/app/components/widget/widget-list/sortable.directive.ts");
/* harmony import */ var _components_widget_widget_list_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/widget/widget-list/safe-pipe.pipe */ "./src/app/components/widget/widget-list/safe-pipe.pipe.ts");
/* harmony import */ var _components_widget_widget_list_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/widget/widget-list/order-by-pipe.pipe */ "./src/app/components/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-html/widget-html.component */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-text/widget-text.component */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");




//import { AppRoutingModule } from './app-routing.module';

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_16__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_17__["WebsiteEditComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_18__["WebsiteListComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_19__["PageEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_20__["PageListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_21__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_22__["WidgetEditComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_23__["WidgetListComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_24__["PageNewComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_25__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_26__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_27__["WidgetYoutubeComponent"],
                _components_widget_widget_list_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["SortableDirective"],
                _components_widget_widget_list_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_30__["OrderByPipe"],
                _components_widget_widget_list_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_29__["SafePipe"],
                _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_31__["WidgetHtmlComponent"],
                _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_32__["WidgetTextComponent"],
                _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_33__["FlickrImageSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routing"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_7__["QuillEditorModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_9__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_10__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_11__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_34__["FlickrService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_35__["SharedService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
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

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<form (ngSubmit)=\"updatePage()\" #updatepage =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}'>Edit Page</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!updatepage.valid\">\n      <!--<a class=\"nav-link\" href=\"page-list.html\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      <!--</a>-->\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n<form (ngSubmit)=\"deletePage()\" #deletepage =\"ngForm\">\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"pagename\">Name</label>\n      <input [(ngModel)]=\"page.name\" type = \"text\" class=\"form-control\"\n             id = \"pagename\" name=\"pagename\" placeholder=\"{{page.name}}\">\n      <div [hidden]=\"!pagename || pagename.valid || pagename.untouched\"\n           class=\"alert alert-danger\">\n        Name is required\n      </div>\n    </div>\n    <div class = \"form-group\">\n      <label for = \"pagetitle\"> Title</label>\n      <input [(ngModel)]=\"page.title\" type = \"text\" class=\"form-control\"\n             id = \"pagetitle\" name=\"pagetitle\" placeholder=\"{{page.title}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>Delete</a>-->\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n</div>\n</form>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"]('', '', '');
        this.errorMsg = 'Page name is required!';
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
        this.pageService.findPageById(this.pageId).subscribe(function (data) {
            _this.page = data;
            console.log('Got Page');
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        console.log('entering update page');
        if (!this.page.name || this.page.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.pageService.updatePage(this.pageId, this.page).subscribe(function (data) {
            _this.page = data;
            console.log('exiting update page');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        console.log('entering delete page');
        this.pageService.deletePage(this.pageId).subscribe(function (data) {
            _this.page = data;
            console.log('exiting delete page');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updatepage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageEditComponent.prototype, "updatePageFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletepage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageEditComponent.prototype, "deletePageFrom", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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
        this.pageService.findPagesByWebsiteId(this.websiteId).subscribe(function (data) {
            _this.pages = data;
            console.log('Got pages');
        });
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

module.exports = "\n<form (ngSubmit)=\"newPage()\" #newpage =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/new'>New Page</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!newpage.valid\">\n      <!--<a class=\"nav-link\" href=\"page-list.html\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      <!--</a>-->\n      </button>\n  </ul>\n</nav>\n\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <!--<form>-->\n    <div class = \"form-group\">\n      <label for = \"pagename\">Name</label>\n      <input type = \"text\"\n             name = \"pagename\"\n             class = \"form-control\"\n             id = \"pagename\"\n             placeholder = \"Page Name\"\n             ngModel required #pagename=\"ngModel\"/>\n      <div [hidden]=\"pagename.valid || pagename.untouched\"\n           class=\"alert alert-danger\">\n        Name is required\n      </div>\n    </div>\n    <div class = \"form-group\">\n      <label for = \"title\"> Title</label>\n      <input type = \"text\"\n             name = \"pagetitle\"\n             class = \"form-control\"\n             id = \"title\"\n             placeholder=\"Page Title\"\n             ngModel required #pagetitle=\"ngModel\"/>\n    </div>\n  <!--</form>-->\n</div>\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n</form>\n"

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
    // errorMsg = 'Registration failed!';
    function PageNewComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"]('', '', '');
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
        var _this = this;
        console.log(this.myNewPageFrom.value.pagename);
        console.log(this.myNewPageFrom.value.pagetitle);
        this.pageService.createPage(this.websiteId, new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"](this.myNewPageFrom.value.pagename, this.websiteId, this.myNewPageFrom.value.pagetitle)).subscribe(function (data) {
            _this.page = data;
            console.log("check page id: ", _this.page._id);
            console.log("check page name: ", _this.page.name);
            if (_this.page) {
                _this.errorFlag = false;
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
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

module.exports = "\n<div class = \"container-fluid\">\n\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<h1> Login </h1>\n\n<form (ngSubmit)=\"login()\" #f =\"ngForm\">\n  <div class = \"form-group\">\n  <input placeholder = \"username\" name = \"username\" type = \"text\" class = \"form-control\"\n         ngModel required #username = \"ngModel\"/>\n  </div>\n\n  <div [hidden]=\"username.untouched || username.valid \"\n       class=\"alert alert-danger\">\n    Name is required\n  </div>\n  <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n        <!--Please enter a valid username!-->\n  <!--</span>-->\n\n <div class = \"form-group\">\n  <input   placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\"\n           ngModel required #password=\"ngModel\"/>\n </div>\n\n  <div [hidden]=\"password.untouched || password.valid \"\n       class=\"alert alert-danger\">\n    Password is required\n  </div>\n  <!--<span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">-->\n        <!--Please enter a valid password!-->\n  <!--</span>-->\n\n  <div class = \"form-group\">\n  <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!f.valid\"> Login </button>\n  </div>\n\n  <div class = \"form-group\">\n  <a class = \"btn btn-success btn-block\" routerLink = '/register'>Register</a>\n  </div>\n\n</form>\n\n  <!--<a href=\"https://webdev-wenzhang-cs5610.herokuapp.com/facebook/login\" class=\"btn btn-primary btn-block\">-->\n  <a href = '/facebook/login' class=\"btn btn-primary btn-block\" >\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n\n</div>\n\n"

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
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.myloginFrom.value.username;
        this.password = this.myloginFrom.value.password;
        console.log(this.username);
        console.log(this.password);
        //this.user = this.userService.findUserByCredential(this.username, this.password);
        //this.userService.findUserByCredential(this.username, this.password)
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            //this.user = data;
            _this.sharedService.user = data;
            if (_this.sharedService.user) {
                console.log("login this.userId: ", _this.sharedService.user['_id']);
                console.log("login this.username: ", _this.sharedService.user['username']);
                _this.errorFlag = false;
                //this.router.navigate(['/user', this.user._id]);
                _this.router.navigate(['/profile']);
            }
            else {
                _this.errorFlag = true;
            }
        }, function (error) {
            console.log("login error: " + error);
            _this.errorFlag = true;
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
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

module.exports = "<!--<nav class=\"navbar bg-primary navbar-fixed-top\">-->\n  <!--<div class=\"container-fluid \">-->\n\n    <!--&lt;!&ndash;<a class=\"navbar-brand cl-text-white\" routerLink=\"\">Profile</a>&ndash;&gt;-->\n    <!--&lt;!&ndash;<a (click)=\"UpdateUser()\" class=\"btn-primary navbar-text pull-right\"><span class=\"glyphicon glyphicon-ok cl-text-white\"></span></a>&ndash;&gt;-->\n\n  <!--</div>-->\n<!--</nav>-->\n<form (ngSubmit)=\"UpdateUser()\" #f =\"ngForm\">\n\n\n  <!--<nav class=\"navbar navbar-expand-md navbar-light bg-light\">-->\n    <!--<ul class=\"navbar-nav\">-->\n      <!--<li class=\"nav-item active col-1\">-->\n        <!--<a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>-->\n          <!--<i class=\"fas fa-chevron-left fontawsome_icon\"></i>-->\n        <!--</a>-->\n      <!--</li>-->\n      <!--<li class=\"nav-item col-3\">-->\n        <!--<a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/new'>New Page</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n\n    <!--<ul class=\"navbar-nav ml-auto\">-->\n      <!--<li class=\"nav-item active\">-->\n        <!--<button class = \"btn btn-primary btn-block\" type = \"submit\">-->\n          <!--&lt;!&ndash;<a class=\"nav-link\" href=\"page-list.html\">&ndash;&gt;-->\n          <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n          <!--&lt;!&ndash;</a>&ndash;&gt;-->\n        <!--</button>-->\n    <!--</ul>-->\n  <!--</nav>-->\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary navbar-fixed-top\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}'>\n        Profile\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n            <!--<a class=\"navbar-brand\" type = \"submit\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n            <!--</a>-->\n      </button>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container\">\n  <h1>Profile</h1>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\"\n           id=\"username\" name=\"username\" placeholder=\"{{user.username}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input [(ngModel)]=\"user.email\" type=\"text\" class=\"form-control\"\n           id=\"email\" name=\"email\" placeholder=\"{{user.email}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"first-name\">First Name</label>\n    <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\"\n           id=\"first-name\" name=\"first-name\" placeholder=\"{{user.firstName}}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"last-name\">Last Name</label>\n    <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\"\n           id=\"last-name\" name=\"last-name\" placeholder=\"{{user.lastName}}\">\n  </div>\n\n  <!--<a class=\"btn btn-primary btn-block\" routerLink='/user/{{userId}}/website'>Websites</a>-->\n  <button class=\"btn btn-primary btn-block\" routerLink='/user/{{userId}}/website'>Websites</button>\n  <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"DeleteUser()\">Delete</button>\n  <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"logout()\">Logout</button>\n  <!--<a class=\"btn btn-danger  btn-block\" routerLink='/login'>Logout</a>-->\n</div>\n</form>\n\n\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n  <div class=\"container\">\n    <div class=\"row navbar-text\">\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-star\"></span>\n        </a>\n      </div>\n      <div class=\"col-xs-3 text-center\">\n        <a href=\"#\">\n          <span class=\"glyphicon glyphicon-heart\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");




;



//import {core} from '@angular/compiler'; @angular/core
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, route, sharedService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('000', '', '', '', '', '', '');
    }
    ProfileComponent.prototype.UpdateUser = function () {
        var _this = this;
        console.log("updating user");
        console.log(this.user.username);
        console.log(this.user.firstName);
        console.log(this.user.lastName);
        //this.userService.updateUser(this.userId, this.user);
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (data) {
            _this.user = data;
            console.log("after update: " + _this.user.username);
            console.log("after update: " + _this.user.firstName);
            console.log("after update: " + _this.user.lastName);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    ProfileComponent.prototype.DeleteUser = function () {
        var _this = this;
        console.log("deleting user");
        console.log(this.user.username);
        console.log(this.user.firstName);
        console.log(this.user.lastName);
        return this.userService.deleteUser(this.userId)
            .subscribe(function (data) {
            _this.route.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        return this.userService.logout()
            .subscribe(function (data) {
            console.log('this is logout');
            _this.route.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        console.log('user id: ' + this.userId);
        // this.router.params.subscribe((params: any) => {
        //   this.userId = params['uid'];
        //   console.log('user id: ' + this.userId);
        // });
        //this.user = this.userService.findUserById(this.userId)
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
            console.log('profile check: username:' + _this.user.username);
            _this.username = _this.user['username'];
        }, function (error) {
            _this.errorFlag = true;
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
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

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit)=\"register()\" #f =\"ngForm\">\n    <input type=\"text\" name=\"username\" class=\"form-control\" placeholder=\"username\"\n           ngModel required #username=\"ngModel\"/>\n    <div [hidden]=\"username.valid || username.untouched\"\n         class=\"alert alert-danger\">\n      Name is required\n    </div>\n\n    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\"\n           ngModel required #password=\"ngModel\"/>\n    <div [hidden]=\"password.untouched || password.valid \"\n         class=\"alert alert-danger\">\n      Password is required\n    </div>\n\n    <input type=\"password\" name=\"vpassword\" class=\"form-control\" placeholder=\"verify password\"\n           ngModel required #vpassword=\"ngModel\"/>\n    <div [hidden]=\"vpassword.untouched || vpassword.valid \"\n         class=\"alert alert-danger\">\n      Verify Password is required\n    </div>\n\n    <div *ngIf=\"pwErrorFlag\"\n         class=\"alert alert-danger\">\n      {{pwErrorMsg}}\n    </div>\n\n    <!--<a class=\"btn btn-primary btn-block\" href=\"profile.html\">Register</a>-->\n    <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!f.valid\">Register</button>\n    <a class=\"btn btn-danger  btn-block\" routerLink ='/login'>Cancel</a>\n  </form>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Registration failed!';
        this.pwErrorMsg = 'Password should be same';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.myRegisterFrom.value.username);
        console.log(this.myRegisterFrom.value.password);
        console.log(this.myRegisterFrom.value.vpassword);
        this.username = this.myRegisterFrom.value.username;
        this.password = this.myRegisterFrom.value.password;
        this.vpassword = this.myRegisterFrom.value.vpassword;
        // this.userService.createUser(
        //   new User('000',
        //     this.myRegisterFrom.value.username,
        //     this.myRegisterFrom.value.password,
        //     'empty',
        //     'empty',
        //     'empty'))
        // call user service only if passwords match else show the same error
        if (this.password === this.vpassword) {
            // this.userService.createUser(this.username, this.password) // without credential
            this.userService.register(this.username, this.password)
                .subscribe(function (data) {
                //this.user = data;
                _this.sharedService.user = data;
                // console.log("checkpoint this.userId: ", this.user._id);
                // console.log("checkpoint this.username: ", this.user.username);
                console.log("register this.userId: ", _this.sharedService.user['_id']);
                console.log("register this.username: ", _this.sharedService.user['username']);
                if (_this.sharedService.user) {
                    _this.errorFlag = false;
                    //this.router.navigate(['/user', this.user._id]);
                    _this.router.navigate(['/profile']);
                }
            }, function (error) {
                _this.errorFlag = true;
            });
        }
        else {
            this.pwErrorFlag = true;
            return;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "myRegisterFrom", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
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

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<form (ngSubmit)=\"updateWebsite()\" #updateweb =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink='/user/{{userId}}/website'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-3 d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink='/user/{{userId}}/website'>Websites</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink='/user/{{userId}}/website/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-8\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink='/user/{{userId}}/website/{{websiteId}}'>Edit Website</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!updateweb.valid\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n\n<form (ngSubmit)=\"deleteWebsite()\" #deleteweb =\"ngForm\">\n<div class=\"contain-fluid row\">\n  <div class=\"col-4 d-none d-sm-block\">\n\n    <div *ngFor = \"let website of websites\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}/page'>{{website.name}}</a>\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right hide-on-landscape\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\"> Website Name</label>\n        <input [(ngModel)]=\"website.name\" type=\"text\" class=\"form-control\"\n               id=\"website-name\" name=\"webname\" placeholder=\"{{website.name}}\"/>\n        <!--<div [hidden]=\"!webname || webname.valid || webname.untouched\"-->\n             <!--class=\"alert alert-danger\">-->\n          <!--Name is required-->\n        <!--</div>-->\n\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  name=\"website-description\" placeholder=\"{{website.description}}\"></textarea>\n      </div>\n    </form>\n\n    <button class = \"btn btn-danger btn-block\" type = \"submit\">\n      Delete\n    </button>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n</form>\n\n\n"

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
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router, activatedRoute) {
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"]('Name', '', '');
        this.websites = [];
        this.errorMsg = 'Website name is required!';
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        console.log('user id: ' + this.userId + ' website id: ' + this.websiteId);
        //this.websites = this.websiteService.findWebsitesByUser(this.userId);
        //this.website = this.websiteService.findWebsiteById(this.websiteId);
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (data) {
            _this.websites = data;
            console.log('Got websites');
        });
        this.websiteService.findWebsiteById(this.websiteId).subscribe(function (data) {
            _this.website = data;
            console.log('Got website');
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        console.log('entering update website');
        if (!this.website.name || this.website.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.websiteService.updateWebsite(this.websiteId, this.website)
            .subscribe(function (data) {
            _this.website = data;
            console.log('exiting update website');
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        console.log('entering delete website');
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function (data) {
            console.log('exiting delete website');
            _this.router.navigate(['/user', _this.userId, 'website']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateweb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteEditComponent.prototype, "updateWebFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteweb'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteEditComponent.prototype, "deleteWebFrom", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary css-orientation row\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink ='/user/{{userId}}'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website'>Websites</a>\n    </li>\n  </ul>\n  <!--<ul class=\"navbar-nav ml-auto hide-on-landscape\">-->\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngFor = \"let website of websites\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink = '/user/{{userId}}/website/{{website._id}}/page'>{{website.name}}</a>\n        <!--<a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right hide-on-landscape\">-->\n        <a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right\">\n          <i class=\"fas fa-cog fontawsome_icon\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

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
        //this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
            console.log('Got websites');
        });
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

module.exports = "\n<form (ngSubmit)=\"newWebsite()\" #newWeb =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-3 d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website'>Websites</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto d-none d-sm-block\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav col-8\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/new'>New Website</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\" [disabled]=\"!newWeb.valid\">\n      <!--<a class=\"navbar-brand\" type = \"submit\">-->\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      <!--</a>-->\n      </button>\n    </li>\n  </ul>\n\n</nav>\n\n\n<div class=\"contain-fluid row\">\n\n  <div class=\"col-4 d-none d-sm-block\">\n    <div *ngFor = \"let website of websites\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless\">\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}/page'>{{website.name}}</a>\n          <a routerLink = '/user/{{userId}}/website/{{website._id}}' class=\"navbar-link float-right hide-on-landscape\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8\">\n    <!--<form>-->\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\"\n               name=\"webname\"\n               class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"Name\"\n               ngModel required #webname=\"ngModel\"/>\n        <div [hidden]=\"webname.valid || webname.untouched\"\n             class=\"alert alert-danger\">\n          Name is required\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea name=\"description\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Description\"\n                  ngModel required #description=\"ngModel\"></textarea>\n      </div>\n    <!--</form>-->\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n</form>\n"

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
        // this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (data) {
            _this.websites = data;
            console.log('new web Got websites');
        });
    };
    WebsiteNewComponent.prototype.newWebsite = function () {
        var _this = this;
        console.log('new web check: ' + this.myNewWebFrom.value.webname);
        console.log('new web check: ' + this.myNewWebFrom.value.description);
        // this.website = this.websiteService.createWebsite(
        //   this.userId,
        //   new Website('000', this.myNewWebFrom.value.webname, this.userId, this.myNewWebFrom.value.description)
        // );
        this.websiteService.createWebsite(this.userId, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](this.myNewWebFrom.value.webname, this.userId, this.myNewWebFrom.value.description)).subscribe(function (data) {
            _this.website = data;
            console.log("checkpoint this.website Id: ", _this.website._id);
            console.log("checkpoint this.website Name: ", _this.website.name);
            console.log("checkpoint this.website developerId: ", _this.website.developerId);
            if (_this.website) {
                _this.errorFlag = false;
                _this.router.navigate(['/user', _this.userId, 'website']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\"\n         routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Choose Widget</a>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <!--<form (ngSubmit)=\"createWidget('HEADING')\" #h =\"ngForm\">-->\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a type = \"submit\">Header</a>-->\n      <!--{{widget.widgetType}}='HEADING'-->\n      <!--<a [(ngModel)]=\"widget.widgetType\" name=\"widgetType\" #HEADING-->\n      <!--routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Header</a>-->\n      <a (click) = \"createWidget('HEADING')\"> Header </a>\n    </li>\n    <!--</form>-->\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Label</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>HTML</a>-->\n      <a (click) = \"createWidget('HTML')\"> HTML </a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Text Input</a>-->\n      <a (click) = \"createWidget('TEXT')\"> TEXT </a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Link</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Button</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a href=\"widget-image.html\">Image</a>-->\n      <!--<a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Image</a>-->\n      <a (click) = \"createWidget('IMAGE')\"> Image </a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <!--<a href=\"widget-youtube.html\">You Tube</a>-->\n      <!--<a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>YouTube</a>-->\n      <a (click) = \"createWidget('YOUTUBE')\"> YouTube </a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Data Table</a>\n    </li>\n\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>Repeater</a>\n    </li>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






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
        var _this = this;
        console.log('entering  createWidget');
        // const newWidget : Widget = {
        //   widgetType: widgetType, pageId:'100', size:'1',text:'text',url:'url',width:'100%'
        // }
        var newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('name', widgetType, '100', '1', 'text', '100%', 'url', '1', 'placeholder', false);
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (data) {
            _this.widget = data;
            console.log('new widget id ' + _this.widget._id);
            console.log('new widget page id: ' + _this.widget.pageId);
            console.log('new widget type: ' + _this.widget.widgetType);
            var url = '/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/' + _this.widget._id;
            console.log('url:' + url);
            _this.router.navigate([url]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('h'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetChooserComponent.prototype, "headingFrom", void 0);
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '', '', '', '', '', '', false);
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
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('widget type: ' + _this.widget.widgetType);
        }, function (error) {
            console.log('Can not find widget.');
        });
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

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<form (ngSubmit)=\"updateHeading()\" #updateheading =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <!--<a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>-->\n        <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n      <!--</a>-->\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n<form (ngSubmit)=\"deleteHeading()\" #deleteheading =\"ngForm\">\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"headingname\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type = \"text\" class=\"form-control\"\n             id = \"headingname\" name=\"headingname\" placeholder=\"{{widget.name}}\">\n      <!--<input type = \"text\" class=\"form-control\" id = \"headingname\" placeholder=\"Heading\">-->\n    </div>\n    <div class = \"form-group\">\n      <label for = \"text\"> Text </label>\n      <input [(ngModel)]=\"widget.text\" type = \"text\" class=\"form-control\"\n             id = \"text\" name=\"text\" placeholder=\"{{widget.text}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"size\"> Size </label>\n      <input [(ngModel)]=\"widget.size\" type = \"text\" class=\"form-control\"\n             id = \"size\" name=\"size\" placeholder=\"{{widget.size}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n</div>\n</form>\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', '', '', '', '', '', '', false);
        this.errorMsg = 'Widget name is required!';
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
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('Got widget, type' + _this.widget.widgetType);
        }, function (error) {
            console.log('Can not find widget.');
        });
    };
    WidgetHeaderComponent.prototype.updateHeading = function () {
        var _this = this;
        console.log('entering update heading');
        if (!this.widget.name || this.widget.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting update heading');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Update Heading failed');
        });
    };
    WidgetHeaderComponent.prototype.deleteHeading = function () {
        var _this = this;
        console.log('entering delete heading');
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting delete heading');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Delete Heading failed');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateheading'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHeaderComponent.prototype, "updateHeadFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteheading'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHeaderComponent.prototype, "deleteHeadFrom", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<!--Header-->\n<form (ngSubmit)=\"updateHTML()\" #updatehtml =\"ngForm\">\n  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <!--<a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>-->\n        <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n        <!--</a>-->\n        <button class = \"btn btn-primary btn-block\" type = \"submit\">\n          <i class=\"fas fa-check fontawsome_icon\"></i>\n        </button>\n      </li>\n    </ul>\n  </nav>\n</form>\n\n\n<form (ngSubmit)=\"deleteHTML()\" #deletehtml =\"ngForm\">\n  <div class=\"container-fluid cl-container-padding\">\n    <form>\n      <div class=\"form-group\">\n        <label for = \"Name\"> Name </label>\n        <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\"\n               id=\"name\" name=\"name\" placeholder=\"{{widget.name}}\" required>\n        <!--<span class=\"alert-class\"-->\n              <!--*ngIf=\"flag\">{{alert}}</span>-->\n      </div>\n\n      <!-- use with ngModel -->\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </form>\n    <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n    <button class = \"btn btn-danger btn-block\" type = \"submit\">\n      Delete\n    </button>\n  </div>\n</form>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', '', '', '', '', '', '', false);
        this.errorMsg = 'Widget name is required!';
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('html user id: ' + this.userId);
        console.log('html web id: ' + this.websiteId);
        console.log('html page id: ' + this.pageId);
        console.log('html widget id: ' + this.widgetId);
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('Got widget, type' + _this.widget.widgetType);
        }, function (error) {
            console.log('Can not find widget.');
        });
    };
    WidgetHtmlComponent.prototype.updateHTML = function () {
        var _this = this;
        console.log('entering update html');
        if (!this.widget.name || this.widget.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting update html');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Update HTML failed');
        });
    };
    WidgetHtmlComponent.prototype.deleteHTML = function () {
        var _this = this;
        console.log('entering delete html');
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting delete html');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Delete HTML failed');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updatehtml'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHtmlComponent.prototype, "updateHTMLFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletehtml'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHtmlComponent.prototype, "deleteHTMLFrom", void 0);
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS9mbGlja3ItaW1hZ2Utc2VhcmNoL2ZsaWNrci1pbWFnZS1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\">Search Flickr</a>\n    </li>\n  </ul>\n</nav>\n\n\n<!--Material on the page-->\n<div class = \"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n      <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n        <span class=\"glyphicon glyphicon-search\"></span>\n      </a>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <!--<div *ngFor = \"let pic of photos['photo']\"-->\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n      <p></p>\n    </div>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");






var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('', '', '', '', '', '', '', '', '', false);
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('flickr image user id: ' + this.userId);
        console.log('flickr image web id: ' + this.websiteId);
        console.log('flickr image page id: ' + this.pageId);
        console.log('flickr image widget id: ' + this.widgetId);
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('Got widget, type' + _this.widget.widgetType);
            console.log('Got widget, type' + _this.widget.url);
        }, function (error) {
            console.log('Can not find widget.');
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            console.log('entering photo search');
            console.log(data);
            //let val = data._body;
            var val = data;
            console.log("val: " + val);
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        }, function (error) {
            console.log(error);
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        console.log("flickr: " + url);
        this.widget.url = url;
        this.widgetService
            .updateWidget(this.widgetId, this.widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget', _this.widgetId]);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
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

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<form (ngSubmit)=\"updateImage()\" #updateimage =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n  </ul>\n</nav>\n</form>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"name\">Name</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"name\" placeholder=\"Image\">-->\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\"\n             id=\"name\" name=\"name\" placeholder=\"{{widget.name}}\" required>\n    </div>\n    <div class = \"form-group\">\n      <label for = \"text\"> Text</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"text\" placeholder=\"Description of the image\">-->\n      <input [(ngModel)] = \"widget.text\" type = \"text\" class = \"form-control\"\n             id = \"text\" name = \"text\" placeholder = \"{{widget.text}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"URL\"> URL </label>\n      <!--<input type = \"url\" class=\"form-control\" id = \"URL\" placeholder=\"URL of the image\">-->\n      <input [(ngModel)] = \"widget.url\" type = \"url\" class = \"form-control\"\n             id = \"URL\" name = \"URL\" placeholder = \"{{widget.url}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"width\"> Width</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"width\" placeholder=\"100%\">-->\n      <input [(ngModel)] = \"widget.width\" type = \"text\" class = \"form-control\"\n             id = \"width\" name = \"width\" placeholder = \"{{widget.width}}\">\n    </div>\n  </form>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n    <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/flickr'>Search From Flickr</a>\n  <!--<a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>-->\n  <!--<button class=\"btn btn-primary btn-block\" (click)=\"search()\">Search</button>-->\n\n  <!--<a class = \"btn btn-primary btn-block\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Upload Image</a>-->\n  <!--<form (ngSubmit)=\"uploadImage()\" #uploadimage =\"ngForm\">-->\n    <!--<button class = \"btn btn-primary btn-block\" type = \"submit\">-->\n      <!--Upload Image-->\n    <!--</button>-->\n  <!--</form>-->\n  <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n  <form (ngSubmit)=\"deleteImage()\" #deleteimage =\"ngForm\">\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n  </form>\n</div>\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");







var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', '', '', '', '', '', '', false);
        //uploadUrl: string = "No File Chosen";
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.errorMsg = 'Widget name is required!';
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
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('Got widget, type' + _this.widget.widgetType);
            console.log('Got widget, type' + _this.widget.url);
        }, function (error) {
            console.log('Can not find widget.');
        });
    };
    WidgetImageComponent.prototype.updateImage = function () {
        var _this = this;
        console.log('entering update image');
        console.log('widget url' + this.widget.url);
        if (!this.widget.name || this.widget.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting update image');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Update Image failed');
        });
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        var _this = this;
        console.log('entering delete image');
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting delete image');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Delete Image failed');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetImageComponent.prototype, "updateImageFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploadimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetImageComponent.prototype, "uploadImageFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteimage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetImageComponent.prototype, "deleteImageFrom", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC10ZXh0L3dpZGdldC10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<!--Header-->\n<form (ngSubmit)=\"updateText()\" #updatetext =\"ngForm\">\n  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <!--<a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>-->\n        <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n        <!--</a>-->\n        <button class = \"btn btn-primary btn-block\" type = \"submit\">\n          <i class=\"fas fa-check fontawsome_icon\"></i>\n        </button>\n      </li>\n    </ul>\n  </nav>\n</form>\n\n<!--Body of the page -->\n<form (ngSubmit)=\"deleteText()\" #deletetext =\"ngForm\">\n  <div class=\"container-fluid cl-container-padding\">\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"heading-text\">Text</label>\n        <input [(ngModel)]=\"widget.text\" type = \"text\" name=\"text\" class=\"form-control\" id=\"heading-text\"/>\n        <!--<div [hidden]=\"text.valid || text.untouched\"-->\n        <!--class=\"alert alert-danger\">-->\n        <!--Text is required-->\n        <!--</div>-->\n      </div>\n      <div class=\"form-group\">\n        <label for=\"heading-rows\">Rows</label>\n        <input [(ngModel)]=\"widget.rows\" name=\"rows\" class=\"form-control\" type=\"number\" id=\"heading-rows\"/>\n        <label for=\"Name\">Name</label>\n        <div>\n          <input [(ngModel)]=\"widget.name\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"Name\"\n                 name=\"name\"\n                 placeholder=\"Name\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"heading-placeholder\">Placeholder</label>\n        <input [(ngModel)]=\"widget.placeholder\" name=\"placeholder\" class=\"form-control\" required id=\"heading-placeholder\"/>\n        <div class=\"input-group\">\n          <input type=\"text\"\n                 readonly\n                 value=\"Formatted\"\n                 class=\"form-control\"/>\n          <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" name=\"checkbox\"\n               type=\"checkbox\"/></span>\n        </div>\n      </div>\n\n    </form>\n    <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n    <button class = \"btn btn-danger btn-block\" type = \"submit\">\n      Delete\n    </button>\n  </div>\n</form>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '', '', '', '', '', '', false);
        this.errorMsg = 'Widget name is required!';
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        console.log('text user id: ' + this.userId);
        console.log('text web id: ' + this.websiteId);
        console.log('text page id: ' + this.pageId);
        console.log('text widget id: ' + this.widgetId);
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('Got widget, type' + _this.widget.widgetType);
        }, function (error) {
            console.log('Can not find widget.');
        });
    };
    WidgetTextComponent.prototype.updateText = function () {
        var _this = this;
        console.log('entering update text');
        if (!this.widget.name || this.widget.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting update text');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Update Text failed');
        });
    };
    WidgetTextComponent.prototype.deleteText = function () {
        var _this = this;
        console.log('entering delete text');
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting delete text');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Delete Text failed');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updatetext'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetTextComponent.prototype, "updateTextFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deletetext'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetTextComponent.prototype, "deleteTextFrom", void 0);
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
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

module.exports = "\n<div *ngIf=\"errorFlag\" class = \"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<form (ngSubmit)=\"updateYoutube()\" #updateyoutube =\"ngForm\">\n<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}'>Widget Edit</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item active\">\n      <!--<a class=\"nav-link\" href=\"widget-list.html\">-->\n        <!--<i class=\"fas fa-check fontawsome_icon\"></i>-->\n      <!--</a>-->\n      <button class = \"btn btn-primary btn-block\" type = \"submit\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </button>\n    </li>\n  </ul>\n</nav>\n</form>\n\n\n<form (ngSubmit)=\"deleteYoutube()\" #deleteyoutube =\"ngForm\">\n<div class=\"container-fluid cl-container-padding\">\n  <form>\n    <div class = \"form-group\">\n      <label for = \"name\">Name</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"name\" placeholder=\"YouTube\">-->\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\"\n             id=\"name\" name=\"name\" placeholder=\"{{widget.name}}\" required>\n    </div>\n    <div class = \"form-group\">\n      <label for = \"text\"> Text</label>\n      <!--<input type = \"text\" class=\"form-control\" id = \"text\" placeholder=\"Description of the video\">-->\n      <input [(ngModel)] = \"widget.text\" type = \"text\" class = \"form-control\"\n             id = \"text\" name = \"text\" placeholder = \"{{widget.text}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"URL\"> URL </label>\n      <input [(ngModel)] = \"widget.url\" type = \"url\" class = \"form-control\"\n             id = \"URL\" name = \"URL\" placeholder = \"{{widget.url}}\">\n    </div>\n    <div class = \"form-group\">\n      <label for = \"width\"> Width</label>\n      <input [(ngModel)] = \"widget.width\" type = \"text\" class = \"form-control\"\n             id = \"width\" name = \"width\" placeholder = \"{{widget.width}}\">\n    </div>\n  </form>\n  <!--<a class = \"btn btn-danger btn-block\" href = \"widget-list.html\">Delete</a>-->\n  <button class = \"btn btn-danger btn-block\" type = \"submit\">\n    Delete\n  </button>\n</div>\n</form>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon mr-auto cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', '', '', '', '', '', '', false);
        this.errorMsg = 'Widget name is required!';
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
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('Got widget, type' + _this.widget.widgetType);
        }, function (error) {
            console.log('Can not find widget.');
        });
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        var _this = this;
        console.log('entering update youtube');
        if (!this.widget.name || this.widget.name.length === 0) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting update youtube');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Update Youtube failed');
        });
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        var _this = this;
        console.log('entering delete youtube');
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (data) {
            _this.widget = data;
            console.log('exiting delete youtube');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        }, function (error) {
            console.log('Delete Youtube failed');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateyoutube'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "updateYoutubeFrom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteyoutube'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "deleteYoutubeFrom", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/order-by-pipe.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/widget/widget-list/order-by-pipe.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/safe-pipe.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/widget/widget-list/safe-pipe.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        // splitting input url on '='
        // the result is two elements in the output array
        var parts = url.split('=');
        var id = parts[1];
        url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/sortable.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/widget/widget-list/sortable.directive.ts ***!
  \*********************************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBRSxTQUFTO0VBQ2pDLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgaGVpZ2h0OiAwO1xufVxuLnlvdXR1YmUtd2lkZ2V0IGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item active col-1\">\n      <a class=\"nav-link\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page'>\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item col-3\">\n      <a class=\"navbar-brand cl-text-bold\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>Widgets</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new'>\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <!--<ul class=\"list-group cl-list-group-borderless\">-->\n    <div *ngFor = \"let widget of widgets | orderBy\">\n      <div [ngSwitch]=\"widget.widgetType\">\n        <div class=\"jga-widget\">\n\n          <div class=\"jga-widget-tool\">\n            <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widget._id]\">\n              <span class=\"glyphicon glyphicon-cog\"> </span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n            <!--<a routerLink =\"widget-heading.html\" class=\"navbar-link float-right\">-->\n            <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n              <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n            </a>\n            <!--<h2>{{widget.text}}</h2>-->\n            <div [ngSwitch]=\"widget['size']\">\n              <div *ngSwitchCase=\"1\">\n                <h1>{{ widget['text'] }}</h1>\n              </div>\n              <div *ngSwitchCase=\"2\">\n                <h2>{{ widget['text'] }}</h2>\n              </div>\n              <div *ngSwitchCase=\"3\">\n                <h3>{{ widget['text'] }}</h3>\n              </div>\n              <div *ngSwitchCase=\"4\">\n                <h4>{{ widget['text'] }}</h4>\n              </div>\n              <div *ngSwitchCase=\"5\">\n                <h5>{{ widget['text'] }}</h5>\n              </div>\n              <div *ngSwitchCase=\"6\">\n                <h6>{{ widget['text'] }}</h6>\n              </div>\n            </div>\n          <!--</li>-->\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n          <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n            <!--<a href=\"widget-youtube.html\" class=\"navbar-link float-right\">-->\n            <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n            <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n            </a>\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <!--<iframe width=\"500\" height=\"315\" src=\"https://www.youtube.com/embed/WrDGpMGF1pk\" frameborder=\"0\"-->\n                      <!--allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen\" ></iframe>-->\n              <iframe width=\"500\" height=\"315\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\"\n                      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen\" ></iframe>\n            </div>\n          <!--</li>-->\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n            <div>\n              <!--<a href=\"widget-image.html\" class=\"navbar-link float-right\">-->\n              <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n              <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n              </a>\n              <!--<img class=\"img-responsive img-rounded cl-widget-images\"-->\n                   <!--src=\"https://accuweather.brightspotcdn.com/dims4/default/0ceeafe/2147483647/resize/590x/quality/90/?url=http%3A%2F%2Faccuweather-bsp.s3.amazonaws.com%2F43%2F58%2F4548c8ce4d4cb5c0d873628c770f%2Fnw-snow.jpeg\">-->\n              <img class=\"img-responsive img-rounded cl-widget-images\"\n                   src=\"{{widget.url}}\">\n            </div>\n          <!--</li>-->\n        </div>\n\n          <div *ngSwitchCase=\"'HTML'\">\n            <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n              <!--<span class=\"glyphicon glyphicon-menu-hamburger\"></span>-->\n              <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n            </a>\n            <!--<a routerLink=\"./{{widget._id}}\" class=\"pull-right\">-->\n              <!--<span class=\"glyphicon glyphicon-cog\"></span>-->\n            <!--</a>-->\n            <div [innerHTML] = \"widget.text\"></div>\n          </div>\n\n          <div *ngSwitchCase=\"'TEXT'\">\n            <a routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}' class=\"navbar-link float-right\">\n              <i class=\"fas fa-cog fontawsome_icon\" style=\"background-color: white\"></i>\n            </a>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n            </div>\n\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n\n      </div>\n    </div>\n    </div>\n  <!--</ul>-->\n  </div>\n</div>\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-bottom\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-play\"></i>\n      </a>\n\n      <a class=\"navbar-link navbar-brand\" routerLink = '/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget'>\n        <i class=\"fas fa-eye\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"navbar-link navbar-brand cl-icon-padding \" routerLink = '/user/{{userId}}'>\n        <i class=\"fas fa-user fontawsome_icon cl-icon-color\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

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
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        var _this = this;
        console.log('enter reorderWidgets, widget list');
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) {
            console.log(data);
            _this.widgets = data;
        });
    };
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
        //this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
        this.widgetService.findWidgetsByPageId(this.pageId).subscribe(function (data) {
            _this.widgets = data;
            console.log('Got widgets:');
            console.log(data);
        });
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
    //constructor(_id: string, name: string, websiteId: string, description: string) {
    function Page(name, websiteId, description) {
        //this._id = _id;
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
    function User(_id, username, password, firstName, lastName, email, phone) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
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
    //constructor(_id: string, name: string, developerId: string, description: string) {
    function Website(name, developerId, description) {
        //this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    //constructor(_id, type, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
    function Widget(name, type, pageId, size, text, width, url, rows, placeholder, formatted) {
        if (name === void 0) { name = 'name'; }
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        if (rows === void 0) { rows = '1'; }
        if (placeholder === void 0) { placeholder = 'placeholder'; }
        if (formatted === void 0) { formatted = false; }
        //this._id = _id;
        this.name = name;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
        this.rows = rows;
        this.placeholder = placeholder;
        this.formatted = formatted;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log("enter canActivate");
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = 'e232a3275cbdf250596b676a9f84fb7d';
        this.secret = 'fbef367ebcfbb5b0';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        console.log("Entering searchPhotos, search for: " + searchTerm);
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        console.log("url: " + url);
        return this.http.get(url, { responseType: "text" });
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() // needed as we're injecting Http service into this service
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








// injecting service into module
var UserService = /** @class */ (function () {
    function UserService(_http, http, sharedService, router) {
        this._http = _http;
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredential': this.findUserByCredential,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'login': this.login,
            'logout': this.logout,
            'register': this.register,
            'loggedIn': this.loggedIn
        };
    }
    UserService.prototype.login = function (username, password) {
        //this.options.withCredentials = true; // jga
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, { withCredentials: true });
        // .map(
        //   (res: Response) => {
        //     const data = res.json();
        //     return data;
        //   }
        // );
    };
    UserService.prototype.logout = function () {
        //this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', { withCredentials: true });
        // .map((response: Response) => {
        //   return response.json();
        // });
    };
    UserService.prototype.register = function (username, password) {
        //this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/register', user, { withCredentials: true });
        // .map(
        //   (res: Response) => {
        //     const data = res.json();
        //     return data;
        //   }
        // );
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        console.log("enter loggedIn");
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            var user = res.json();
            if (user !== 0) {
                console.log("user: " + user);
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    //createUser(user: User) {
    UserService.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/user/', user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username);
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url);
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url);
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
    production: false,
    baseUrl: "http://localhost:3200"
    //baseUrl: "http://localhost:3100"
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