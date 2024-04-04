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

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container m-5\">\r\n  <router-outlet></router-outlet>\r\n</div>"

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
        this.title = 'spotify-api';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "./src/app/components/shared/loading/loading.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/artist/artist.component */ "./src/app/components/artist/artist.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/domseguro.pipe */ "./src/app/pipes/domseguro.pipe.ts");
/* harmony import */ var _pipes_noaudio_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/noaudio.pipe */ "./src/app/pipes/noaudio.pipe.ts");
/* harmony import */ var _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/noimage.pipe */ "./src/app/pipes/noimage.pipe.ts");





// Componentes







// Rutas

// Pipes



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_9__["CardsComponent"],
                _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_10__["ArtistComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_13__["DomseguroPipe"],
                _pipes_noaudio_pipe__WEBPACK_IMPORTED_MODULE_14__["NoAudioPipe"],
                _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_15__["NoimagePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], { useHash: true })
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/artist/artist.component */ "./src/app/components/artist/artist.component.ts");



var ROUTES = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'search',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]
    },
    {
        path: 'artist/:id',
        component: _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_2__["ArtistComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];


/***/ }),

/***/ "./src/app/components/artist/artist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/artist/artist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loadingArtist\"></app-loading>\r\n\r\n<div class=\"row animated fadein\" *ngIf=\"!loadingArtist\">\r\n\t<div class=\"col-2 my-auto\">\r\n\t\t<img [src]=\"artist | noimage\" [alt]=\"artist.name\" [title]=\"artist.name\" class=\"img-thumbnail img-circle\">\r\n\t</div>\r\n\r\n\t<div class=\"col my-auto\">\r\n\t\t<h3>\r\n\t\t\t{{ artist.name }}\r\n\t\t</h3>\r\n\t</div>\r\n\r\n\t<div class=\"col-4 my-auto text-right\">\r\n\t\t<p>\r\n\t\t\t<a [href]=\"artist.external_urls.spotify\" class=\"text-white text-decoration-none\" target=\"_blank\">\r\n\t\t\t\tGo to the artist page\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<app-loading *ngIf=\"loadingTopTracks\"></app-loading>\r\n\r\n<div class=\"row m-5\" *ngIf=\"!loadingTopTracks\">\r\n\t<div class=\"col\">\r\n\t\t<h1 class=\"text-center my-5\">\r\n\t\t\tArtist\r\n\t\t</h1>\r\n\r\n\t\t<div class=\"table-responsive text-center\">\r\n\t\t\t<table class=\"table table-dark\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Photo</th>\r\n\t\t\t\t\t\t<th>Song</th>\r\n\t\t\t\t\t\t<th>Album</th>\r\n\t\t\t\t\t\t<th>Preview</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let track of topTracks\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<img [src]=\"track.album | noimage\" [alt]=\"track.album.name\" [title]=\"track.album.name\" class=\"img-thumb\">\r\n\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t<td> {{ track.name }} </td>\r\n\r\n\t\t\t\t\t\t<td> {{track.album.name }} </td>\r\n\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<iframe [src]=\"track.uri | domseguro\" width=\"300\" height=\"80\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n\t\t\t\t\t\t\t<!-- <audio [src]=\"track.preview_url | noaudio\" controls *ngIf=\"track.preview_url | noaudio\"></audio>\r\n\t\t\t\t\t\t\t<p *ngIf=\"!track.preview_url | noaudio\">\r\n\t\t\t\t\t\t\t\tNo se encontro el audio correspondiente\r\n\t\t\t\t\t\t\t</p> -->\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<app-loading *ngIf=\"loadingAlbums\"></app-loading>\r\n\r\n<div class=\"row m-5\" *ngIf=\"!loadingAlbums\">\r\n\t<div class=\"col\">\r\n\t\t<h1 class=\"text-center my-5\">\r\n\t\t\tAlbums\r\n\t\t</h1>\r\n\r\n\t\t<div class=\"table-responsive text-center\">\r\n\t\t\t<table class=\"table table-dark\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Album Name</th>\r\n\t\t\t\t\t\t<th>Artist</th>\r\n\t\t\t\t\t\t<th>Release Date</th>\r\n\t\t\t\t\t\t<th>Songs Number</th>\r\n\t\t\t\t\t\t<th>Preview</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let album of albums\">\r\n\t\t\t\t\t\t<td> {{ album.name }} </td>\r\n\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"badge badge-pill badge-primary\" *ngFor=\"let artist of album.artists\">\r\n\t\t\t\t\t\t\t\t{{ artist.name }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t<td> {{ album.release_date }} </td>\r\n\t\t\t\t\t\t<td> {{ album.total_tracks }} </td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<iframe [src]=\"album.uri | domseguro\" width=\"300\" height=\"80\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/artist/artist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/artist/artist.component.ts ***!
  \*******************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");




var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(router, spotify) {
        var _this = this;
        this.router = router;
        this.spotify = spotify;
        this.artist = {};
        this.topTracks = [];
        this.albums = {};
        this.loadingArtist = true;
        this.loadingAlbums = true;
        this.loadingTopTracks = true;
        this.router.params.subscribe(function (params) {
            _this.getArtist(params['id']);
            _this.getTopTracks(params['id']);
            _this.getAlbums(params['id']);
        });
    }
    ArtistComponent.prototype.getArtist = function (id) {
        var _this = this;
        this.loadingArtist = true;
        this.spotify.getArtist(id)
            .subscribe(function (artist) {
            _this.artist = artist;
            _this.loadingArtist = false;
        });
    };
    ArtistComponent.prototype.getAlbums = function (id) {
        var _this = this;
        this.loadingAlbums = true;
        this.spotify.getAlbums(id)
            .subscribe(function (album) {
            _this.albums = album;
            _this.loadingAlbums = false;
        });
    };
    ArtistComponent.prototype.getTopTracks = function (id) {
        var _this = this;
        this.loadingTopTracks = true;
        this.spotify.getTopTracks(id)
            .subscribe(function (topTracks) {
            _this.topTracks = topTracks;
            _this.loadingTopTracks = false;
        });
    };
    ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__(/*! ./artist.component.html */ "./src/app/components/artist/artist.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/cards.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/cards/cards.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"color-white text-center my-5\">\r\n    {{ titleCards }}\r\n  </h1>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let item of items\" class=\"my-3 animated fadein\" [ngClass]=\"columns\">\r\n      <div class=\"card puntero\">\r\n        <img [src]=\"item | noimage\" [alt]=\"item.name\" [title]=\"item.name\" (click)=\"viewArtist(item)\" class=\"card-img-top\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">\r\n            {{ item.name }}\r\n          </h5>\r\n    \r\n          <p class=\"card-text\">\r\n            <span class=\"badge badge-pill badge-primary\" *ngFor=\"let artist of item.artists\">\r\n              {{ artist.name }}\r\n            </span>\r\n          </p>\r\n\r\n          <iframe [src]=\"item.uri | domseguro\" width=\"100%\" height=\"80\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CardsComponent = /** @class */ (function () {
    function CardsComponent(router) {
        this.router = router;
        this.items = [];
    }
    CardsComponent.prototype.viewArtist = function (item) {
        var artistId;
        if (item.type === 'artist') {
            artistId = item.id;
        }
        else {
            artistId = item.artists[0].id;
        }
        this.router.navigate(['/artist', artistId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardsComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardsComponent.prototype, "titleCards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardsComponent.prototype, "columns", void 0);
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/components/cards/cards.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"isLoadingReleases\"></app-loading>\r\n\r\n<div class=\"alert alert-danger animated fadein\" *ngIf=\"error\">\r\n\t<h3>\r\n\t\tError\r\n\t</h3>\r\n\r\n\t<p>\r\n\t\t{{ messageError }}\r\n\t</p>\r\n</div>\r\n\r\n<app-cards *ngIf=\"!isLoadingReleases && releases.length !== 0\" [items]=\"releases\" titleCards=\"New Releases Songs\" columns=\"col-md-4 col-sm-6 col-xs-12\"></app-cards>\r\n\r\n<nav class=\"my-5\" *ngIf=\"!isLoadingReleases && releases.length !== 0\">\r\n\t<ul class=\"pagination justify-content-center\">\r\n\t\t<li class=\"page-item disabled\" [ngClass]=\"{'disabled': pagRelease === 1}\" *ngIf=\"releases.length > 0\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"firstRelease(); getNewReleases(0)\" title=\"Primera\">\r\n\t\t\t\t<i class=\"fa fa-angle-double-left\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item disabled\" [ngClass]=\"{'disabled': pagRelease === 1}\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"getNewReleases(pagRelease * releases.length - releases.length * 2); prevRelease()\" title=\"Anterior\">\r\n\t\t\t\t<i class=\"fa fa-angle-left\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item\" *ngFor=\"let releasesQuantity of [].constructor(totalReleases); index as i\" [ngClass]=\"{'active': pagRelease === i + 1}\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"getNewReleases(releases.length * i); goRelease(i + 1)\">\r\n\t\t\t\t{{ i + 1 }}\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item\" [ngClass]=\"{'disabled': pagRelease === releases.length || pagRelease == 1000}\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"nextRelease(); getNewReleases(pagRelease * releases.length - releases.length)\" title=\"Siguiente\">\r\n\t\t\t\t<i class=\"fa fa-angle-right\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item\" [ngClass]=\"{'disabled': pagRelease === releases.length || pagRelease == 1000}\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"lastRelease(); getNewReleases(totalReleases * releases.length - releases.length)\" title=\"Última\">\r\n\t\t\t\t<i class=\"fa fa-angle-double-right\"></i>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(spotify) {
        this.spotify = spotify;
        this.releases = [];
        this.isLoadingReleases = false;
        this.pagRelease = 1;
        this.getNewReleases(0);
    }
    HomeComponent.prototype.getNewReleases = function (offset) {
        var _this = this;
        this.isLoadingReleases = true;
        this.spotify.getNewReleases(offset)
            .subscribe(function (data) {
            _this.releases = data.items;
            _this.pageOffset = data.offset;
            _this.isLoadingReleases = false;
            _this.totalReleases = data.total / data.items.length;
        }, function (errorService) {
            _this.isLoadingReleases = false;
            _this.error = true;
            _this.releases = [];
            _this.messageError = errorService.error.error.message;
        });
    };
    HomeComponent.prototype.firstRelease = function () {
        this.pagRelease = 1;
    };
    HomeComponent.prototype.prevRelease = function () {
        if (this.pagRelease !== 1) {
            this.pagRelease = this.pagRelease - 1;
        }
    };
    HomeComponent.prototype.goRelease = function (number) {
        this.pagRelease = number;
    };
    HomeComponent.prototype.nextRelease = function () {
        this.pagRelease = this.pagRelease + 1;
    };
    HomeComponent.prototype.lastRelease = function () {
        if (this.totalReleases <= 999) {
            this.pagRelease = this.totalReleases;
        }
        else {
            this.pagRelease = 1000;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-5\">\r\n  <div class=\"col-md-6 col-sm-12 cols-xs-12\">\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" (keyup.enter)=\"searchArtist(termArtist.value, null)\" #termArtist>\r\n      <div class=\"input-group-append\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchArtist(termArtist.value, null)\">\r\n          <i class=\"fa fa-search\"></i>\r\n          Artist\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-sm-12 cols-xs-12\">\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" (keyup.enter)=\"searchTrack(termTrack.value, null)\" #termTrack>\r\n      <div class=\"input-group-append\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchTrack(termTrack.value, null)\">\r\n          <i class=\"fa fa-search\"></i>\r\n          Song\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <app-loading *ngIf=\"isLoadingArtist\"></app-loading>\r\n\r\n      <app-cards *ngIf=\"!isLoadingArtist && artists.length !== 0\" [items]=\"artists\" titleCards=\"Artist\" columns=\"col-md-12 col-sm-12 col-xs-12\"></app-cards>\r\n\r\n      <div class=\"alert alert-danger animated fadein\" *ngIf=\"isErrorArtist\">\r\n        <h3>\r\n          Error\r\n        </h3>\r\n      \r\n        <p>\r\n          {{ errorArtistMessage }}\r\n        </p>\r\n      </div>\r\n\r\n      <nav class=\"my-5\">\r\n        <ul class=\"pagination justify-content-center\">\r\n          <li class=\"page-item disabled\" [ngClass]=\"{'disabled': pagArtist === 1}\" *ngIf=\"totalArtist.length > 0\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"firstArtist(); searchArtist(termArtist.value)\" title=\"Primera\">\r\n              <i class=\"fa fa-angle-double-left\"></i>\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item disabled\" [ngClass]=\"{'disabled': pagArtist === 1}\" *ngIf=\"totalArtist.length > 0\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"prevArtist(); searchArtist(termArtist.value)\" title=\"Anterior\">\r\n              <i class=\"fa fa-angle-left\"></i>\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item\" *ngFor=\"let item of totalArtist\" [ngClass]=\"{'active': pagArtist === item}\">\r\n            <a class=\"page-link\" *ngIf=\"item >= minArtist && item <= maxArtist && item <= 1000\" href=\"javascript:void(0);\" (click)=\"goArtist(item); searchArtist(termArtist.value)\">\r\n              {{ item }}\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item\" *ngIf=\"totalArtist.length > 0\" [ngClass]=\"{'disabled': pagArtist === totalArtist.length || pagArtist == 1000}\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"nextArtist(); searchArtist(termArtist.value)\" title=\"Siguiente\">\r\n              <i class=\"fa fa-angle-right\"></i>\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item\" *ngIf=\"totalArtist.length > 0\" [ngClass]=\"{'disabled': pagArtist === totalArtist.length || pagArtist == 1000}\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"lastArtist(); searchArtist(termArtist.value)\" title=\"Última\">\r\n              <i class=\"fa fa-angle-double-right\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <app-loading *ngIf=\"isLoadingTrack\"></app-loading>\r\n\r\n      <app-cards *ngIf=\"!isLoadingTrack && tracks.length !== 0\" [items]=\"tracks\" titleCards=\"Songs\" columns=\"col-md-12 col-sm-12 col-xs-12\"></app-cards>\r\n\r\n      <div class=\"alert alert-danger animated fadein\" *ngIf=\"isErrorTracks\">\r\n        <h3>\r\n          Error\r\n        </h3>\r\n      \r\n        <p>\r\n          {{ errorTracksMessage }}\r\n        </p>\r\n      </div>\r\n      \r\n      <nav class=\"my-5\">\r\n        <ul class=\"pagination justify-content-center\">\r\n          <li class=\"page-item disabled\" [ngClass]=\"{'disabled': pagTrack === 1}\" *ngIf=\"totalTrack.length > 0\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"firstTrack(); searchTrack(termTrack.value, null)\" title=\"Primera\">\r\n              <i class=\"fa fa-angle-double-left\"></i>\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item disabled\" [ngClass]=\"{'disabled': pagTrack === 1}\" *ngIf=\"totalTrack.length > 0\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"prevTrack(); searchTrack(termTrack.value)\" title=\"Anterior\">\r\n              <i class=\"fa fa-angle-left\"></i>\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item\" *ngFor=\"let item of totalTrack\" [ngClass]=\"{'active': pagTrack === item}\">\r\n            <a class=\"page-link\" *ngIf=\"item >= minTrack && item <= maxTrack && item <= 1000\" href=\"javascript:void(0);\" (click)=\"goTrack(item); searchTrack(termTrack.value)\">\r\n              {{ item }}\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item\" *ngIf=\"totalTrack.length > 0\" [ngClass]=\"{'disabled': pagTrack === totalTrack.length || pagTrack == 1000}\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"nextTrack(); searchTrack(termTrack.value)\" title=\"Siguiente\">\r\n              <i class=\"fa fa-angle-right\"></i>\r\n            </a>\r\n          </li>\r\n      \r\n          <li class=\"page-item\" *ngIf=\"totalTrack.length > 0\" [ngClass]=\"{'disabled': pagTrack === totalTrack.length || pagTrack == 1000}\">\r\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"lastTrack(); searchTrack(termTrack.value)\" title=\"Última\">\r\n              <i class=\"fa fa-angle-double-right\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(spotify) {
        this.spotify = spotify;
        this.artists = [];
        this.tracks = [];
        // Loading
        this.isLoadingArtist = false;
        this.isLoadingTrack = false;
        // Pag
        this.pagArtist = 1;
        this.pagTrack = 1;
        this.totalArtist = [];
        this.totalTrack = [];
        // Errors
        this.isErrorArtist = false;
        this.isErrorTracks = false;
    }
    SearchComponent.prototype.firstArtist = function () {
        this.pagArtist = 1;
    };
    SearchComponent.prototype.prevArtist = function () {
        if (this.pagArtist !== 1) {
            this.pagArtist = this.pagArtist - 1;
        }
    };
    SearchComponent.prototype.goArtist = function (number) {
        this.pagArtist = number;
    };
    SearchComponent.prototype.paginationArtist = function () {
        if (this.pagArtist > 9) {
            this.minArtist = this.pagArtist - 8;
            this.maxArtist = this.pagArtist + 1;
        }
        else {
            this.minArtist = 1;
            this.maxArtist = 10;
        }
    };
    SearchComponent.prototype.nextArtist = function () {
        this.pagArtist = this.pagArtist + 1;
    };
    SearchComponent.prototype.lastArtist = function () {
        if (this.totalArtist.length <= 999) {
            this.pagArtist = this.totalArtist.length;
        }
        else {
            this.pagArtist = 1000;
        }
    };
    SearchComponent.prototype.searchArtist = function (termArtist, number) {
        var _this = this;
        this.isLoadingArtist = true;
        if (termArtist === '') {
            return false;
        }
        if (this.nameArtist !== termArtist) {
            this.nameArtist = termArtist;
            this.pagArtist = 1;
        }
        number = (this.pagArtist - 1) * 10;
        this.paginationArtist();
        this.spotify.getArtists(termArtist, number.toString())
            .subscribe(function (data) {
            _this.artists = data.items;
            _this.isLoadingArtist = false;
            _this.totalArtist = [];
            for (var i = 0; i < data.total / 10; i++) {
                _this.totalArtist.push(i + 1);
            }
        }, function (error) {
            _this.artists = [];
            _this.isErrorArtist = true;
            _this.isLoadingArtist = false;
            _this.errorArtistMessage = error.error.error.message;
        });
    };
    SearchComponent.prototype.firstTrack = function () {
        this.pagTrack = 1;
    };
    SearchComponent.prototype.prevTrack = function () {
        if (this.pagTrack !== 1) {
            this.pagTrack = this.pagTrack - 1;
        }
    };
    SearchComponent.prototype.goTrack = function (number) {
        this.pagTrack = number;
    };
    SearchComponent.prototype.paginationTrack = function () {
        if (this.pagTrack > 9) {
            this.minTrack = this.pagTrack - 8;
            this.maxTrack = this.pagTrack + 1;
        }
        else {
            this.minTrack = 1;
            this.maxTrack = 10;
        }
    };
    SearchComponent.prototype.nextTrack = function () {
        this.pagTrack = this.pagTrack + 1;
    };
    SearchComponent.prototype.lastTrack = function () {
        if (this.totalTrack.length <= 999) {
            this.pagTrack = this.totalTrack.length;
        }
        else {
            this.pagTrack = 1000;
        }
    };
    SearchComponent.prototype.searchTrack = function (termTrack, number) {
        var _this = this;
        this.isLoadingTrack = true;
        if (termTrack === '') {
            return false;
        }
        if (this.nameTrack !== termTrack) {
            this.nameTrack = termTrack;
            this.pagTrack = 1;
        }
        number = (this.pagTrack - 1) * 10;
        this.paginationTrack();
        this.spotify.getTracks(termTrack, number.toString())
            .subscribe(function (data) {
            _this.tracks = data.items;
            _this.isLoadingTrack = false;
            _this.totalTrack = [];
            for (var i = 0; i < data.total / 10; i++) {
                _this.totalTrack.push(i + 1);
            }
        }, function (error) {
            _this.tracks = [];
            _this.isErrorTracks = true;
            _this.isLoadingTrack = false;
            _this.errorTracksMessage = error.error.error.message;
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center animated fadein\">\r\n  <div class=\"col\">\r\n    <i class=\"fa fa-refresh fa-5x fa-spin\"></i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/shared/loading/loading.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">\r\n    Spotify\r\n  </a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">\r\n          Home\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"search\">\r\n          Search\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/domseguro.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/domseguro.pipe.ts ***!
  \*****************************************/
/*! exports provided: DomseguroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomseguroPipe", function() { return DomseguroPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var DomseguroPipe = /** @class */ (function () {
    function DomseguroPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    DomseguroPipe.prototype.transform = function (value) {
        var url = 'https://open.spotify.com/embed?uri=';
        return this.domSanitizer.bypassSecurityTrustResourceUrl("" + url + value);
    };
    DomseguroPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'domseguro'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DomseguroPipe);
    return DomseguroPipe;
}());



/***/ }),

/***/ "./src/app/pipes/noaudio.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/noaudio.pipe.ts ***!
  \***************************************/
/*! exports provided: NoAudioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAudioPipe", function() { return NoAudioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoAudioPipe = /** @class */ (function () {
    function NoAudioPipe() {
    }
    NoAudioPipe.prototype.transform = function (audios) {
        if (audios === null) {
            return false;
        }
        else {
            return audios;
        }
    };
    NoAudioPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noaudio'
        })
    ], NoAudioPipe);
    return NoAudioPipe;
}());



/***/ }),

/***/ "./src/app/pipes/noimage.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/noimage.pipe.ts ***!
  \***************************************/
/*! exports provided: NoimagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoimagePipe", function() { return NoimagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoimagePipe = /** @class */ (function () {
    function NoimagePipe() {
    }
    NoimagePipe.prototype.transform = function (item) {
        if (!item.images && item.album) {
            return item.album.images[0].url;
        }
        if (item.images.length > 0 || !item.images) {
            return item.images[0].url;
        }
        else {
            return 'assets/images/noimage.png';
        }
    };
    NoimagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noimage'
        })
    ], NoimagePipe);
    return NoimagePipe;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.getQuery = function (query) {
        var url = "https://api.spotify.com/v1/" + query;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer " + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].token
        });
        return this.http.get(url, { headers: headers });
    };
    SpotifyService.prototype.getNewReleases = function (number) {
        return this.getQuery("browse/new-releases?limit=10&offset=" + number)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data['albums']; }));
    };
    SpotifyService.prototype.getAlbums = function (id) {
        return this.getQuery("artists/" + id + "/albums?limit=10")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data['items']; }));
    };
    SpotifyService.prototype.getArtist = function (id) {
        return this.getQuery("artists/" + id);
    };
    SpotifyService.prototype.getArtists = function (term, number) {
        return this.getQuery("search?q=" + term + "&type=artist&limit=10&offset=" + number)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data['artists']; }));
    };
    SpotifyService.prototype.getTracks = function (term, number) {
        return this.getQuery("search?q=" + term + "&type=track&limit=10&offset=" + number)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data['tracks']; }));
    };
    SpotifyService.prototype.getTopTracks = function (id) {
        return this.getQuery("artists/" + id + "/top-tracks?country=us")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data['tracks']; }));
    };
    SpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
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
    token: 'BQArMRrZgnv8Lbxg-6aB61sS2cX6b0XEOwYsxfhNaQaoJ4MIgakxlXEig1k9YMoLFjmBB39lYdWWjjZ-C-sB00jhXEhNwsYV7t07N6TqeFuZUjD_Gss'
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

module.exports = __webpack_require__(/*! C:\Users\crian\Downloads\my-projects\spotify-api\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map