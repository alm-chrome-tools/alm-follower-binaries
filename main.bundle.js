webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 117;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__(123);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_0__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vsts_projects_vsts_projects_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__vsts_projects_vsts_projects_component__["a" /* VstsProjectsComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(vstsDataService) {
        this.vstsDataService = vstsDataService;
        this.title = 'Chrome Connector to ALM';
        this.isBusy = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vstsDataService.isBusy.subscribe(function (newValue) {
            _this.isBusy = newValue;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-root',
        template: __webpack_require__(214),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_data_service__["a" /* VstsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_data_service__["a" /* VstsDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_by_pipe__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_module__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quality_indicator_quality_indicator_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selected_builds_selected_builds_module__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sonar_sonar_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vsts_build_card_vsts_build_card_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vsts_vsts_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vsts_project_vsts_project_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vsts_projects_vsts_projects_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__vsts_projects_vsts_projects_component__["a" /* VstsProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__vsts_build_card_vsts_build_card_component__["a" /* VstsBuildCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__vsts_project_vsts_project_component__["a" /* VstsProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_11__quality_indicator_quality_indicator_component__["a" /* QualityIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__order_by_pipe__["a" /* OrderByPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_15__vsts_vsts_module__["a" /* VstsModule */],
            __WEBPACK_IMPORTED_MODULE_12__selected_builds_selected_builds_module__["a" /* SelectedBuildsModule */],
            __WEBPACK_IMPORTED_MODULE_13__sonar_sonar_module__["a" /* SonarModule */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* unused harmony export ORDERBY_PROVIDERS */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = OrderByPipe_1 = (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe._orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        //invalid input given
        if (!input)
            return input;
        //make a copy of the input's reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1._orderByComparator(aValue, bValue)
                        : -OrderByPipe_1._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1._orderByComparator(aValue, bValue)
                        : -OrderByPipe_1._orderByComparator(aValue, bValue);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    return OrderByPipe;
}());
OrderByPipe = OrderByPipe_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderBy',
        pure: false
    })
], OrderByPipe);

var ORDERBY_PROVIDERS = [
    OrderByPipe
];
var OrderByPipe_1;
//# sourceMappingURL=order-by.pipe.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCredentials; });
var ProfileCredentials = (function () {
    function ProfileCredentials() {
    }
    ProfileCredentials.prototype.getBasic = function () {
        return btoa(this.login.toLowerCase() + ':' + this.password);
    };
    return ProfileCredentials;
}());

//# sourceMappingURL=profile-credentials.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vsts_profile_vsts_profile_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_dialog_login_dialog_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sonarqube_profile_sonarqube_profile_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__vsts_profile_vsts_profile_component__["a" /* VstsProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sonarqube_profile_sonarqube_profile_component__["a" /* SonarqubeProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__vsts_profile_vsts_profile_component__["a" /* VstsProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sonarqube_profile_sonarqube_profile_component__["a" /* SonarqubeProfileComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_dialog_login_dialog_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonarqubeProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SonarqubeProfileComponent = (function () {
    function SonarqubeProfileComponent(dialog, profileService) {
        this.dialog = dialog;
        this.profileService = profileService;
        this.buttonLabel = "Connect SonarQube";
    }
    SonarqubeProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.profilesInitiated.subscribe(function (profiles) {
            if (profiles.lastIndexOf("sonarqube") > -1) {
                _this.buttonLabel = "SonarQube";
            }
            else {
                _this.buttonLabel = "Connect SonarQube";
            }
        });
        this.profileService.getProfile("sonarqube");
    };
    SonarqubeProfileComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */], { data: { profile: "sonarqube" } });
        dialogRef.afterClosed().subscribe(function (result) {
            //TODO: Variabilize button content !
        });
    };
    return SonarqubeProfileComponent;
}());
SonarqubeProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-sonarqube-profile',
        template: __webpack_require__(216),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */]) === "function" && _b || Object])
], SonarqubeProfileComponent);

var _a, _b;
//# sourceMappingURL=sonarqube-profile.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_dialog_login_dialog_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vsts_vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VstsProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VstsProfileComponent = (function () {
    function VstsProfileComponent(dialog, vstsDataService) {
        this.dialog = dialog;
        this.vstsDataService = vstsDataService;
        this.buttonLabel = 'Connect VSTS';
    }
    VstsProfileComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */], { data: { profile: "vsts" } });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.vstsDataService.getProjects().subscribe(function (list) {
                _this.buttonLabel = (list.count === 0) ? 'Connect VSTS' : 'Connected (' + list.count + ' prj)';
            });
        });
    };
    VstsProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vstsDataService.projects.subscribe(function (list) {
            _this.buttonLabel = (list.count === 0) ? 'Connect VSTS' : 'Connected (' + list.count + ' prj)';
        });
        this.vstsDataService.getProjects().subscribe(function (list) {
            _this.buttonLabel = (list.count === 0) ? 'Connect VSTS' : 'Connected (' + list.count + ' prj)';
        });
        ;
    };
    return VstsProfileComponent;
}());
VstsProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Y" /* Component */])({
        selector: 'follow-vsts-profile',
        template: __webpack_require__(217),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__vsts_vsts_data_service__["a" /* VstsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vsts_vsts_data_service__["a" /* VstsDataService */]) === "function" && _b || Object])
], VstsProfileComponent);

var _a, _b;
//# sourceMappingURL=vsts-profile.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QualityIndicatorComponent = (function () {
    function QualityIndicatorComponent() {
    }
    QualityIndicatorComponent.prototype.ngOnInit = function () {
    };
    return QualityIndicatorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], QualityIndicatorComponent.prototype, "indicatorName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], QualityIndicatorComponent.prototype, "indicatorValue", void 0);
QualityIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-quality-indicator',
        template: __webpack_require__(218),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [])
], QualityIndicatorComponent);

//# sourceMappingURL=quality-indicator.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_project__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QualityIndicator = (function () {
    function QualityIndicator(name, value, color, lastAnalysis, lastVersion, sevenDays, type) {
        this.name = name;
        this.value = value;
        this.color = color;
        this.type = type;
        this.lastAnalysis = lastAnalysis;
        this.lastVersion = lastVersion;
        this.sevenDays = sevenDays;
    }
    return QualityIndicator;
}());
var QualityIndicatorHistory = (function () {
    function QualityIndicatorHistory(diff, color) {
        this.diff = diff;
        this.color = color;
    }
    return QualityIndicatorHistory;
}());
var CardComponent = (function () {
    function CardComponent() {
        this.build = new __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_project__["a" /* MainBuildsInfo */](new __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_project__["b" /* VstsBuildDefinition */]());
        this.measures = new Array();
        this.indicators = new Array();
    }
    CardComponent.prototype.ngOnInit = function () {
        this.setBuildIndicators();
    };
    CardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.measures && changes.measures.currentValue && changes.measures.currentValue.length > 0) {
            this.setBuildIndicators();
        }
    };
    CardComponent.prototype.setBuildIndicators = function () {
        var _this = this;
        var indicators = new Array(); //<- ré-instancié quand l'un des appel arrive après l'autre
        var haveTests = false;
        var haveCoverages = false;
        if (this.measures) {
            this.measures.forEach(function (measure) {
                if (measure.metric === "test_errors") {
                    if (measure.value !== "0") {
                        indicators.push(new QualityIndicator("Tests Failed", measure.value, "crimson", measure.period2Evolution ? new QualityIndicatorHistory(measure.period2Evolution, (measure.period2Evolution === "+") ? "crimson" : "limegreen") : null, measure.period1Evolution ? new QualityIndicatorHistory(measure.period1Evolution, (measure.period1Evolution === "+") ? "crimson" : "limegreen") : null, measure.period3Evolution ? new QualityIndicatorHistory(measure.period3Evolution, (measure.period3Evolution === "+") ? "crimson" : "limegreen") : null));
                    }
                    haveTests = true;
                }
                else if (measure.metric === "tests") {
                    if (measure.value !== "0") {
                        indicators.push(new QualityIndicator("Total Tests", measure.value, "#6E6E6E", measure.period2Evolution ? new QualityIndicatorHistory(measure.period2Evolution, (measure.period2Evolution === "+") ? "limegreen" : "crimson") : null, measure.period1Evolution ? new QualityIndicatorHistory(measure.period1Evolution, (measure.period1Evolution === "+") ? "limegreen" : "crimson") : null, measure.period3Evolution ? new QualityIndicatorHistory(measure.period3Evolution, (measure.period3Evolution === "+") ? "limegreen" : "crimson") : null));
                    }
                    haveTests = true;
                }
                else if (measure.metric === "coverage") {
                    var cov = +measure.value;
                    var color = "#6E6E6E";
                    if (cov >= 99) {
                        color = "limegreen";
                    }
                    else if (cov >= 80) {
                        color = "lightgreen";
                    }
                    else if (cov >= 65) {
                        color = "khaki";
                    }
                    else if (cov >= 50) {
                        color = "#DF7401";
                    }
                    else {
                        color = "crimson";
                    }
                    indicators.push(new QualityIndicator("Coverage", cov.toString(), color, measure.period2Evolution ? new QualityIndicatorHistory(measure.period2Evolution, (measure.period2Evolution === "+") ? "limegreen" : "crimson") : null, measure.period1Evolution ? new QualityIndicatorHistory(measure.period1Evolution, (measure.period1Evolution === "+") ? "limegreen" : "crimson") : null, measure.period3Evolution ? new QualityIndicatorHistory(measure.period3Evolution, (measure.period3Evolution === "+") ? "limegreen" : "crimson") : null, "percent"));
                    haveCoverages = true;
                }
                else {
                    indicators.push({
                        name: measure.metric.replace("_", " "),
                        value: measure.value,
                        color: _this.getColorByNote(measure.value),
                        lastAnalysis: measure.period2Evolution ? new QualityIndicatorHistory(measure.period2Evolution, (measure.period2Evolution === "+") ? "crimson" : "limegreen") : null,
                        lastVersion: measure.period1Evolution ? new QualityIndicatorHistory(measure.period1Evolution, (measure.period1Evolution === "+") ? "crimson" : "limegreen") : null,
                        sevenDays: measure.period3Evolution ? new QualityIndicatorHistory(measure.period3Evolution, (measure.period3Evolution === "+") ? "crimson" : "limegreen") : null
                    });
                }
            });
        }
        if (this.build.testResult && this.build.testResult.totalTests > 0) {
            if (!haveTests) {
                indicators.push(new QualityIndicator("Total Tests", this.build.testResult.totalTests.toString(), "#6E6E6E"));
                if (this.build.testResult.failedTests > 0) {
                    indicators.push(new QualityIndicator("Tests Failed", this.build.testResult.failedTests.toString(), "crimson"));
                }
                if (this.build.testResult.ignoredTests > 0) {
                    indicators.push(new QualityIndicator("Tests Ignored", this.build.testResult.ignoredTests.toString(), "#DF7401"));
                }
            }
            if (!haveCoverages && this.build.testResult.coverageStats && this.build.testResult.coverageStats.length > 0) {
                this.build.testResult.coverageStats.forEach(function (stat) {
                    var cov = Math.round((stat.covered / stat.total) * 100);
                    var color = "gainsboro";
                    if (cov >= 99) {
                        color = "limegreen";
                    }
                    else if (cov >= 80) {
                        color = "lightgreen";
                    }
                    else if (cov >= 65) {
                        color = "khaki";
                    }
                    else if (cov >= 50) {
                        color = "#DF7401";
                    }
                    else {
                        color = "crimson";
                    }
                    indicators.push(new QualityIndicator("Cover (" + stat.label + ")", cov.toString(), color, null, null, null, "percent"));
                });
            }
        }
        this.indicators = indicators.sort(function (prev, next) { return prev.name.localeCompare(next.name); });
    };
    CardComponent.prototype.getDefaultColor = function () {
        return "#6E6E6E";
    };
    CardComponent.prototype.getBuildColor = function (build) {
        var color = "#6E6E6E";
        if (build) {
            switch (build.result) {
                case "succeeded":
                    color = "#088A08";
                    break;
                case "partiallySucceeded":
                    color = "#DF7401";
                    break;
                case "failed":
                    color = "#B40404";
                    break;
                default:
                    color = "#6E6E6E";
                    break;
            }
        }
        return color;
    };
    CardComponent.prototype.getColorByNote = function (note) {
        var color;
        switch (note) {
            case "A":
                color = "limegreen";
                break;
            case "B":
                color = "lightgreen";
                break;
            case "C":
                color = "khaki";
                break;
            case "D":
                color = "#DF7401";
                break;
            case "E":
                color = "crimson";
                break;
            default:
                color = "#6E6E6E";
                break;
        }
        return color;
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_project__["a" /* MainBuildsInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vsts_vsts_project__["a" /* MainBuildsInfo */]) === "function" && _a || Object)
], CardComponent.prototype, "build", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "measures", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-card',
        template: __webpack_require__(219),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicatorTileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndicatorTileComponent = (function () {
    function IndicatorTileComponent() {
    }
    IndicatorTileComponent.prototype.ngOnInit = function () {
    };
    IndicatorTileComponent.prototype.getPercentClass = function (value) {
        return "p" + value;
    };
    return IndicatorTileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], IndicatorTileComponent.prototype, "indicatorName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], IndicatorTileComponent.prototype, "indicatorValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], IndicatorTileComponent.prototype, "indicatorColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], IndicatorTileComponent.prototype, "indicatorType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], IndicatorTileComponent.prototype, "historyDiff", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], IndicatorTileComponent.prototype, "historyColor", void 0);
IndicatorTileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-indicator-tile',
        template: __webpack_require__(220),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [])
], IndicatorTileComponent);

//# sourceMappingURL=indicator-tile.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_last__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selected_builds_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sonar_sonar_data_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vsts_vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListComponent = (function () {
    function ListComponent(selectedBuildService, vstsDataService, sonarService) {
        this.selectedBuildService = selectedBuildService;
        this.vstsDataService = vstsDataService;
        this.sonarService = sonarService;
        this.selectedBuilds = new Array();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedBuildService.selectedBuilds.subscribe(function (builds) {
            if (builds && builds.length > 0) {
                var projects = builds.map(function (build) {
                    var prj = new __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["c" /* VstsProject */]();
                    prj.id = build.projectGuid;
                    return new __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["d" /* FullProject */](prj);
                }).filter(function (v, i, a) { return a.findIndex(function (r) { return v.project.id === r.project.id; }) === i; });
                _this.vstsDataService.getDefinitionsBatch(projects).subscribe(function (definitions) {
                    var allDefinitions = [].concat.apply([], definitions);
                    var selectedDefinitions = allDefinitions
                        .filter(function (definition) { return _this.isDefinitionSelected(definition); })
                        .sort(function (a, b) { return (a.project.name + a.name).localeCompare(b.project.name + b.name); });
                    _this.vstsDataService.getBuildsForDefinitionGroup(selectedDefinitions).subscribe(function (buildInfos) {
                        _this.selectedBuilds = buildInfos;
                        _this.vstsDataService.getTestResultsForDefinitionGroup(buildInfos).subscribe(function (buildsWithTests) {
                            _this.selectedBuilds = buildsWithTests;
                            _this.vstsDataService.getTestCoverageForDefinitionGroup(buildsWithTests).subscribe(function (buildsWithCoverages) {
                                _this.selectedBuilds = buildsWithCoverages;
                                _this.selectedBuilds.forEach(function (selectedBuild) {
                                    _this.vstsDataService.getBuildsWithPlanId(selectedBuild).subscribe(function (build) {
                                        selectedBuild.last.planId = build.last.planId;
                                        _this.vstsDataService.getPlan(selectedBuild, build.last.planId).subscribe(function (recordId) {
                                            if (recordId) {
                                                _this.vstsDataService.getRecords(selectedBuild, build.last.planId, recordId).subscribe(function (record) {
                                                    var logUri = _this.vstsDataService.getLogUrlForSonar(record);
                                                    if (logUri) {
                                                        _this.vstsDataService.getSonarKey(logUri).subscribe(function (result) {
                                                            selectedBuild.last.sonarKey = result;
                                                            _this.sonarService.getIndicators(selectedBuild.last.sonarKey).subscribe(function (measures) {
                                                                selectedBuild.measures = measures;
                                                            });
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        });
    };
    ListComponent.prototype.isDefinitionSelected = function (definition) {
        return (this.selectedBuildService.getSelectedBuilds().findIndex(function (selection) { return (selection.projectGuid === definition.project.id && selection.buildDefinitionId === definition.id); }) !== -1);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Y" /* Component */])({
        selector: 'follow-list',
        template: __webpack_require__(221),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__selected_builds_service__["a" /* SelectedBuildsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__selected_builds_service__["a" /* SelectedBuildsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__vsts_vsts_data_service__["a" /* VstsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__vsts_vsts_data_service__["a" /* VstsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__sonar_sonar_data_service__["a" /* SonarDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__sonar_sonar_data_service__["a" /* SonarDataService */]) === "function" && _c || Object])
], ListComponent);

var MainBuildsInfoExtended = (function (_super) {
    __extends(MainBuildsInfoExtended, _super);
    function MainBuildsInfoExtended() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.measures = new Array();
        return _this;
    }
    return MainBuildsInfoExtended;
}(__WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["a" /* MainBuildsInfo */]));
var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_card_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__indicator_tile_indicator_tile_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selected_builds_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selection_toggle_selection_toggle_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sonar_sonar_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tile_tile_component__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedBuildsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SelectedBuildsModule = (function () {
    function SelectedBuildsModule() {
    }
    return SelectedBuildsModule;
}());
SelectedBuildsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9__sonar_sonar_module__["a" /* SonarModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_1__card_card_component__["a" /* CardComponent */], __WEBPACK_IMPORTED_MODULE_8__selection_toggle_selection_toggle_component__["a" /* SelectionToggleComponent */], __WEBPACK_IMPORTED_MODULE_10__tile_tile_component__["a" /* TileComponent */], __WEBPACK_IMPORTED_MODULE_3__indicator_tile_indicator_tile_component__["a" /* IndicatorTileComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__selected_builds_service__["a" /* SelectedBuildsService */]]
    })
], SelectedBuildsModule);

//# sourceMappingURL=selected-builds.module.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectionToggleComponent = (function () {
    function SelectionToggleComponent() {
    }
    SelectionToggleComponent.prototype.ngOnInit = function () {
    };
    return SelectionToggleComponent;
}());
SelectionToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-selection-toggle',
        template: __webpack_require__(222),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [])
], SelectionToggleComponent);

//# sourceMappingURL=selection-toggle.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TileComponent = (function () {
    function TileComponent() {
        this.colspan = 1;
        this.rowspan = 1;
        this.title = "";
    }
    TileComponent.prototype.ngOnInit = function () {
    };
    return TileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], TileComponent.prototype, "colspan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], TileComponent.prototype, "rowspan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "backgroundColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], TileComponent.prototype, "title", void 0);
TileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-tile',
        template: __webpack_require__(223),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [])
], TileComponent);

//# sourceMappingURL=tile.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Measure; });
var Measure = (function () {
    function Measure() {
    }
    return Measure;
}());

//# sourceMappingURL=sonar-model.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_result__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vsts_vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VstsBuildCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QualityIndicator = (function () {
    function QualityIndicator() {
    }
    return QualityIndicator;
}());
var VstsBuildCardComponent = (function () {
    function VstsBuildCardComponent(vstsDataService) {
        this.vstsDataService = vstsDataService;
        this.build = new __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["a" /* MainBuildsInfo */](new __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["b" /* VstsBuildDefinition */]());
        this.project = new __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["d" /* FullProject */](new __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["c" /* VstsProject */]());
        this.indicators = new Array();
        this.calculatedCoverages = new Array();
        this.testResult = new __WEBPACK_IMPORTED_MODULE_2__test_result__["a" /* TestResult */]();
        this.buildMode = true;
    }
    VstsBuildCardComponent.prototype.ngOnInit = function () {
        if (this.build.last) {
            this.buildMode = true;
            this.initiateBuildMode();
        }
        else {
            this.buildMode = false;
        }
    };
    VstsBuildCardComponent.prototype.changeSelection = function (build) {
        this.vstsDataService.toogleSelection(build);
    };
    VstsBuildCardComponent.prototype.initiateBuildMode = function () {
        var _this = this;
        this.setSonarNullInformations();
        this.vstsDataService.getTestResultForBuild(this.build).subscribe(function (result) {
            _this.build.testResult = result;
            _this.testResult = result;
            _this.testColor = _this.getTestColor();
            if (_this.build.testResult.totalTests > 0) {
                _this.vstsDataService.getTestCoverageForBuild(_this.build).subscribe(function (coverages) {
                    _this.build.testResult.coverageStats = coverages;
                    _this.testResult.coverageStats = coverages;
                    coverages.forEach(function (stat) {
                        var cov = Math.round((stat.covered / stat.total) * 100);
                        if (_this.build.testResult.failedTests === 0 && cov < 80) {
                            _this.testColor = "goldenrod";
                        }
                        _this.calculatedCoverages.push(stat.label + " : " + cov.toString() + " %");
                    });
                });
            }
        });
    };
    VstsBuildCardComponent.prototype.getTestColor = function () {
        if (!this.build) {
            return this.getDefaultColor();
        }
        if (!this.build.testResult) {
            return this.getDefaultColor();
        }
        if (this.build.testResult.totalTests == 0) {
            return this.getDefaultColor();
        }
        if (this.build.testResult.failedTests > 0) {
            return "crimson";
        }
        if (this.build.testResult.ignoredTests > 0) {
            return "goldenrod";
        }
        return "limegreen";
    };
    VstsBuildCardComponent.prototype.getDefaultColor = function () {
        return "gainsboro";
    };
    VstsBuildCardComponent.prototype.getBuildColor = function (build) {
        var color = "gainsboro";
        if (build) {
            switch (build.result) {
                case "succeeded":
                    color = "limegreen";
                    break;
                case "partiallySucceeded":
                    color = "goldenrod";
                    break;
                case "failed":
                    color = "crimson";
                    break;
                default:
                    color = "gainsboro";
                    break;
            }
        }
        return color;
    };
    VstsBuildCardComponent.prototype.getColorByNote = function (note) {
        var color;
        switch (note) {
            case "A":
                color = "limegreen";
                break;
            case "B":
                color = "lightgreen";
                break;
            case "C":
                color = "khaki";
                break;
            case "D":
                color = "goldenrod";
                break;
            case "E":
                color = "crimson";
                break;
            default:
                color = "gainsboro";
                break;
        }
        return color;
    };
    VstsBuildCardComponent.prototype.setSonarNullInformations = function () {
        this.indicators.push({
            name: "Reliability",
            value: "-",
            color: this.getColorByNote("-")
        });
        this.indicators.push({
            name: "Security",
            value: "-",
            color: this.getColorByNote("-")
        });
        this.indicators.push({
            name: "Maintainability",
            value: "-",
            color: this.getColorByNote("-")
        });
        this.indicators.push({
            name: "Coverage",
            value: "-",
            color: this.getColorByNote("F")
        });
    };
    return VstsBuildCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["a" /* MainBuildsInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["a" /* MainBuildsInfo */]) === "function" && _a || Object)
], VstsBuildCardComponent.prototype, "build", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["d" /* FullProject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_project__["d" /* FullProject */]) === "function" && _b || Object)
], VstsBuildCardComponent.prototype, "project", void 0);
VstsBuildCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Y" /* Component */])({
        selector: 'follow-vsts-build-card',
        template: __webpack_require__(224),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__vsts_vsts_data_service__["a" /* VstsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vsts_vsts_data_service__["a" /* VstsDataService */]) === "function" && _c || Object])
], VstsBuildCardComponent);

var _a, _b, _c;
//# sourceMappingURL=vsts-build-card.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VstsProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VstsProjectComponent = (function () {
    function VstsProjectComponent(vstsDataService) {
        this.vstsDataService = vstsDataService;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["d" /* FullProject */](new __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["c" /* VstsProject */]());
        this.projects = new Array();
    }
    VstsProjectComponent.prototype.ngOnInit = function () {
    };
    VstsProjectComponent.prototype.singleProjectMode = function () {
        return (!this.projects || this.projects.length === 0);
    };
    return VstsProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["d" /* FullProject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_project__["d" /* FullProject */]) === "function" && _a || Object)
], VstsProjectComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], VstsProjectComponent.prototype, "projects", void 0);
VstsProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Y" /* Component */])({
        selector: 'follow-vsts-project',
        template: __webpack_require__(225),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_data_service__["a" /* VstsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__vsts_vsts_data_service__["a" /* VstsDataService */]) === "function" && _b || Object])
], VstsProjectComponent);

var _a, _b;
//# sourceMappingURL=vsts-project.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VstsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VstsModule = (function () {
    function VstsModule() {
    }
    return VstsModule;
}());
VstsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* JsonpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__vsts_data_service__["a" /* VstsDataService */]
        ],
        declarations: []
    })
], VstsModule);

//# sourceMappingURL=vsts.module.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__test_result__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vsts_project__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selected_builds_selected_builds_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_Subscriber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_Subscriber__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VstsDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var SonarQubeScannerMsBuildEnd = "6d01813a-9589-4b15-8491-8164aeb38055";
var SonarQubeScannerCli = "9f57024b-31f9-4e58-9e39-a47ccc098f03";
var VstsDataService = (function () {
    function VstsDataService(profileService, http, selectedBuildService) {
        var _this = this;
        this.profileService = profileService;
        this.http = http;
        this.selectedBuildService = selectedBuildService;
        this.projectListSuffix = "/defaultcollection/_apis/projects?api-version=2.0";
        this.projects = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (e) { return _this.emitter = e; });
        this.isBusy = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (e) { return _this.busyEmitter = e; });
        this.vstsProjectList = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (observer) {
            setTimeout(function () {
                var projectsCount = 0;
                _this.projects.subscribe(function (projects) {
                    if (projects.count > 0) {
                        _this.initiateProjects(observer);
                    }
                });
            });
        });
    }
    VstsDataService.prototype.setProfileAndHeaders = function () {
        this.profile = this.profileService.getProfile("vsts");
        if (this.profile) {
            var basic = 'Basic ' + btoa(this.profile.login.toLowerCase() + ':' + this.profile.password);
            var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* Headers */]({ 'Authorization': basic });
            this.requestOptions = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    VstsDataService.prototype.launchGetForUrl = function (url) {
        return this.http.get(url, this.requestOptions);
    };
    VstsDataService.prototype.toogleSelection = function (build) {
        if (build) {
            var selection = new __WEBPACK_IMPORTED_MODULE_12__selected_builds_selected_builds_service__["b" /* SelectedBuild */](build.definition.project.id, build.definition.id);
            this.selectedBuildService.toggleSelectedBuild(selection);
        }
    };
    VstsDataService.prototype.getTaskId = function (build, planId, timelineId) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_16_rxjs_Subscriber__["Subscriber"]();
        var obs = new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (e) { sub = e; });
        this.getRecords(build, planId, timelineId).subscribe(function (records) {
            var logResult = _this.getLog(records);
            if (logResult) {
                logResult.subscribe(function (log) {
                    sub.next(log);
                    sub.complete();
                });
            }
        });
        return obs;
    };
    VstsDataService.prototype.getLogUrlForSonar = function (records) {
        var _this = this;
        var filteredRecords = records.filter(function (record) {
            return (record.task && _this.isSonarTask(record.task.id) && record.log);
        });
        if (filteredRecords && filteredRecords.length > 0) {
            return filteredRecords[0].log.location;
        }
        else {
            return null;
        }
    };
    VstsDataService.prototype.isSonarTask = function (taskId) {
        return (taskId === SonarQubeScannerMsBuildEnd || taskId === SonarQubeScannerCli);
    };
    VstsDataService.prototype.getLog = function (logs) {
        var _this = this;
        var filteredLines = logs.value.filter(function (record) {
            return (record.task && _this.isSonarTask(record.task.id) && record.state === "completed" && record.log && record.log.length > 0);
        });
        if (filteredLines && filteredLines.length > 0) {
            return this.getLogs(filteredLines[0]).map(function (result) {
                return result;
            });
        }
        else {
            return null;
        }
    };
    VstsDataService.prototype.getLogs = function (sonarEndBuildTask) {
        return this.launchGetForUrl(sonarEndBuildTask.logs[0]).map(function (result) {
            return JSON.parse(result.text()).value.filter(function (line) {
                return line.lastIndexOf("More about the report processing at ") > -1;
            })[0].split(" ").replace('",', '');
        });
    };
    VstsDataService.prototype.getSonarTaskUri = function (logUri) {
        return this.launchGetForUrl(logUri).map(function (result) {
            var logs = JSON.parse(result.text()).value;
            var filteredLog = logs.filter(function (line) {
                var ln = "" + line;
                return ln.indexOf("More about the report processing at ") > -1;
            })[0].split(" ");
            return filteredLog[filteredLog.length - 1].replace('",', '');
        });
    };
    VstsDataService.prototype.getSonarKey = function (logUri) {
        return this.launchGetForUrl(logUri).map(function (result) {
            var logs = JSON.parse(result.text()).value;
            var filteredLog = logs.filter(function (line) {
                var ln = "" + line;
                return ln.indexOf("ANALYSIS SUCCESSFUL, you can browse ") > -1;
            })[0].split("/");
            return filteredLog[filteredLog.length - 1];
        });
    };
    VstsDataService.prototype.getBuildsWithPlanId = function (build) {
        return this.launchGetForUrl(this.getBuildDetailsUrl(build)).map(function (buildResp) {
            var response = JSON.parse(buildResp.text());
            var result = build;
            if (response.plans && response.plans.length > 0) {
                result.last.planId = response.plans[0].planId;
            }
            return result;
        });
    };
    VstsDataService.prototype.getBuildsWithSonarUriBatch = function (builds) {
        var _this = this;
        var batch = new Array();
        builds.forEach(function (build) {
            batch.push(_this.getBuildsWithPlanId(build));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getPlan = function (build, planId) {
        return this.launchGetForUrl(this.getPlanUrl(build, planId)).map(function (buildResp) {
            var timelines = JSON.parse(buildResp.text()).value;
            if (timelines.length > 0) {
                return timelines[0].id;
            }
            else {
                return null;
            }
        });
    };
    VstsDataService.prototype.getRecords = function (build, planId, timelineId) {
        return this.launchGetForUrl(this.getRecordsUrl(build, planId, timelineId)).map(function (buildResp) {
            return JSON.parse(buildResp.text()).value;
        });
    };
    VstsDataService.prototype.getBuildDetailsUrl = function (build) {
        return this.getProjectApisUrl(build.definition.project) + "build/builds/" + build.last.id + "?api-version=3.0-preview";
    };
    VstsDataService.prototype.getPlanUrl = function (build, planId) {
        return this.getProjectApisUrl(build.definition.project) + "distributedtask/hubs/Build/plans/" + planId + "/timelines";
    };
    VstsDataService.prototype.getRecordsUrl = function (build, planId, timelineId) {
        return this.getProjectApisUrl(build.definition.project) + "distributedtask/hubs/Build/plans/" + planId + "/timelines/" + timelineId + "/records";
    };
    VstsDataService.prototype.getProjectsList = function () {
        return this.launchGetForUrl(this.getProjectsApiUrl())
            .map(function (resp) {
            var newValue = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["e" /* VstsProjectList */](resp.text());
            return newValue.value.sort(function (a, b) { return a.name.localeCompare(b.name); });
        });
    };
    VstsDataService.prototype.initiateProjects = function (emitter) {
        var _this = this;
        this.busyEmitter.next(true);
        var projects = new Array();
        this.getProjectsList().subscribe(function (projectReturnedList) {
            projectReturnedList.forEach(function (project) {
                projects.push(new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["d" /* FullProject */](project));
                emitter.next(projects);
            });
            _this.getDefinitionsBatch(projects).subscribe(function (definitions) {
                emitter.next(projects);
                _this.getBuildsBatch(definitions).subscribe(function (buildGroups) {
                    _this.supplyProjectsWithBuilds(projects, buildGroups);
                    emitter.next(projects);
                    _this.busyEmitter.next(false);
                });
            });
        });
    };
    VstsDataService.prototype.supplyProjectsWithBuilds = function (projects, buildGroups) {
        var _this = this;
        var selection = this.selectedBuildService.getSelectedBuilds();
        projects.forEach(function (project) {
            buildGroups.forEach(function (buildArray) {
                _this.supplyProjectWithBuilds(project, buildArray, selection);
            });
        });
    };
    VstsDataService.prototype.supplyProjectWithBuilds = function (project, buildArray, selectedBuilds) {
        if (buildArray.length > 0 && buildArray[0].definition.project.id === project.project.id) {
            this.addBuildsOnFullProject(project, buildArray.sort(function (a, b) { return a.definition.name.localeCompare(b.definition.name); }), selectedBuilds);
        }
    };
    VstsDataService.prototype.addBuildsOnFullProject = function (project, builds, selectedBuilds) {
        project.builds = new Array();
        builds.forEach(function (build) {
            if (selectedBuilds) {
                var selectedIndex = selectedBuilds.findIndex(function (element) {
                    return (element.projectGuid === project.project.id && element.buildDefinitionId === build.definition.id);
                });
                build.selected = (selectedIndex > -1);
            }
            project.builds.push(build);
        });
    };
    VstsDataService.prototype.getBuildsBatch = function (buildsDefinitions) {
        var _this = this;
        var batch = new Array();
        buildsDefinitions.forEach(function (definitionGroup) {
            batch.push(_this.getBuildsForDefinitionGroup(definitionGroup));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getBuildsForDefinitionGroup = function (definitionGroup) {
        var _this = this;
        var batch = new Array();
        definitionGroup.forEach(function (build) {
            batch.push(_this.getBuildByDefinition(build));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getTestResultsBatch = function (buildsGroups) {
        var _this = this;
        var batch = new Array();
        buildsGroups.forEach(function (buildsGroup) {
            batch.push(_this.getTestResultsForDefinitionGroup(buildsGroup));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getTestResultsForDefinitionGroup = function (builds) {
        var _this = this;
        var batch = new Array();
        builds.forEach(function (build) {
            batch.push(_this.getTestResultForMainBuild(build));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getTestResultForMainBuild = function (build) {
        if (build.last) {
            return this.getTestResultForBuild(build).map(function (result) {
                var newBuild = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["a" /* MainBuildsInfo */](build.definition);
                newBuild.last = build.last;
                newBuild.testResult = result;
                return newBuild;
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (e) {
                var newBuild = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["a" /* MainBuildsInfo */](build.definition);
                newBuild.testResult = new __WEBPACK_IMPORTED_MODULE_9__test_result__["a" /* TestResult */]();
                e.next(newBuild);
            }).map(function (result) {
                return result;
            });
        }
    };
    VstsDataService.prototype.getBuildByDefinition = function (definition) {
        return this.getLastBuildsForDefinition(definition, 10).map(function (builds) {
            var newBuild = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["a" /* MainBuildsInfo */](definition);
            newBuild.last = builds.filter(function (build) {
                //return build.reason === "schedule" || build.reason === "manual" || build.reason === "triggered" || build.re
                return build.reason !== "validateShelveset";
            }).sort(function (a, b) { return b.startTime.getTime() - a.startTime.getTime(); })[0];
            return newBuild;
        });
    };
    VstsDataService.prototype.getDefinitionsBatch = function (projects) {
        var _this = this;
        var batch = new Array();
        projects.forEach(function (project) {
            batch.push(_this.getBuildDefinitionsForProject(project.project));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getProjects = function () {
        var _this = this;
        var url = this.getProjectsApiUrl();
        if (url) {
            return this.launchGetForUrl(url)
                .map(function (resp) {
                var newValue = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["e" /* VstsProjectList */](resp.text());
                _this.emitter.next(newValue);
                return newValue;
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (e) { return e.next(new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["e" /* VstsProjectList */]("")); });
        }
    };
    VstsDataService.prototype.getBuildDefinitionsForProject = function (project) {
        return this.launchGetForUrl(this.getBuildDefinitionsUrl(project))
            .map(function (resp) {
            var list = new Array();
            try {
                var result = JSON.parse(resp.text()).value;
                result.forEach(function (buildDefinition) {
                    var definition = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["b" /* VstsBuildDefinition */]();
                    definition.id = buildDefinition.id;
                    definition.name = buildDefinition.name;
                    definition.project = project;
                    definition.project.name = buildDefinition.project.name;
                    definition.project.url = buildDefinition.project.url;
                    list.push(definition);
                });
            }
            catch (error) {
                console.log("json value bad format !");
            }
            return list;
        });
    };
    VstsDataService.prototype.getLastBuildsForDefinition = function (definition, numberOfBuilds) {
        //add queue system
        return this.launchGetForUrl(this.getTenLastBuildsUrl(definition, numberOfBuilds))
            .map(function (resp) {
            var list = new Array();
            try {
                var result = JSON.parse(resp.text()).value;
                result.forEach(function (receivedBuild) {
                    var build = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["f" /* VstsBuild */]();
                    build.id = receivedBuild.id;
                    build.buildNumber = receivedBuild.buildNumber;
                    build.reason = receivedBuild.reason;
                    build.result = receivedBuild.result;
                    build.queueTime = new Date(receivedBuild.queueTime);
                    build.startTime = new Date(receivedBuild.startTime);
                    build.finishTime = new Date(receivedBuild.finishTime);
                    list.push(build);
                });
            }
            catch (error) {
                console.log("json value bad format !");
            }
            return list;
        });
    };
    VstsDataService.prototype.getProjectsApiUrl = function () {
        this.setProfileAndHeaders();
        if (this.profile) {
            return this.profile.url + "/defaultcollection/_apis/projects?api-version=2.0";
        }
        else {
            return null;
        }
    };
    VstsDataService.prototype.getProjectApisUrl = function (project) {
        this.setProfileAndHeaders();
        return this.profile.url + "/defaultcollection/" + project.id + "/_apis/";
    };
    VstsDataService.prototype.getBuildDefinitionsUrl = function (project) {
        return this.getProjectApisUrl(project) + "build/definitions?api-version=2.0&type=build";
    };
    VstsDataService.prototype.getLastScheduledBuildUrl = function (projectApisUrl, buildDefinitionNumber) {
        return projectApisUrl + "build/builds?definitions=" + buildDefinitionNumber.toString() + "&statusFilter=completed&$top=1&reasonFilter=schedule&api-version=2.0";
    };
    VstsDataService.prototype.getLastManualBuildUrl = function (projectApisUrl, buildDefinitionNumber) {
        return projectApisUrl + "build/builds?definitions=" + buildDefinitionNumber.toString() + "&statusFilter=completed&$top=1&reasonFilter=manual&api-version=2.0";
    };
    VstsDataService.prototype.getLastTriggeredBuildUrl = function (projectApisUrl, buildDefinitionNumber) {
        return projectApisUrl + "build/builds?definitions=" + buildDefinitionNumber.toString() + "&statusFilter=completed&$top=1&reasonFilter=triggered&api-version=2.0";
    };
    VstsDataService.prototype.getTenLastBuildsUrl = function (buildDefinition, numberOfBuilds) {
        return this.getProjectApisUrl(buildDefinition.project) + "build/builds?definitions=" + buildDefinition.id.toString() + "&statusFilter=completed&$top=" + numberOfBuilds.toString() + "&api-version=2.0";
    };
    VstsDataService.prototype.getTestResultForBuild = function (build, includeFailureDetails) {
        var detailedFailures = false;
        if (includeFailureDetails) {
            includeFailureDetails = true;
        }
        return this.launchGetForUrl(this.getTestResultUrlForBuild(build, detailedFailures))
            .map(function (resp) {
            var result = JSON.parse(resp.text());
            var testResult = new __WEBPACK_IMPORTED_MODULE_9__test_result__["a" /* TestResult */]();
            testResult.build = new __WEBPACK_IMPORTED_MODULE_9__test_result__["b" /* BuildInfo */]();
            testResult.build.id = build.last.id;
            testResult.build.name = build.last.buildNumber;
            testResult.totalTests = result.aggregatedResultsAnalysis.totalTests;
            if (testResult.totalTests === 0) {
                return testResult;
            }
            if (result.aggregatedResultsAnalysis.resultsByOutcome.Passed) {
                testResult.passedTests = result.aggregatedResultsAnalysis.resultsByOutcome.Passed.count;
            }
            if (result.aggregatedResultsAnalysis.resultsByOutcome.Failed) {
                testResult.failedTests = result.aggregatedResultsAnalysis.resultsByOutcome.Failed.count;
            }
            if (result.aggregatedResultsAnalysis.resultsByOutcome.NotExecuted) {
                testResult.passedTests = result.aggregatedResultsAnalysis.resultsByOutcome.NotExecuted.count;
            }
            return testResult; /*
    
            return this.launchGetForUrl(this.getCodeCoverageUrlForBuild(build))
              .map(response => {
                let coverageResult = JSON.parse(response.text());
                testResult.build.url = coverageResult.build.url;
                if (coverageResult.coverageData.length == 0) {
                  return testResult;
                }
                coverageResult.coverageData.forEach(coverage => {
                  let newCoverage = new Coverage();
                  newCoverage.label = coverage.label;
                  newCoverage.position = coverage.position;
                  newCoverage.covered = coverage.covered;
                  newCoverage.total = coverage.total;
                  testResult.coverageStats.push(newCoverage);
                });
                return testResult;
              });*/
        });
    };
    VstsDataService.prototype.getTestCoverageForDefinitionGroup = function (builds) {
        var _this = this;
        var batch = new Array();
        builds.forEach(function (build) {
            batch.push(_this.getTestCoverageForMainBuild(build));
        });
        return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(batch);
    };
    VstsDataService.prototype.getTestCoverageForMainBuild = function (build) {
        if (build.last) {
            return this.getTestCoverageForBuild(build).map(function (result) {
                var newBuild = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["a" /* MainBuildsInfo */](build.definition);
                newBuild.last = build.last;
                newBuild.testResult = build.testResult;
                newBuild.testResult.coverageStats = result;
                return newBuild;
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (e) {
                var newBuild = new __WEBPACK_IMPORTED_MODULE_10__vsts_project__["a" /* MainBuildsInfo */](build.definition);
                newBuild.testResult = new __WEBPACK_IMPORTED_MODULE_9__test_result__["a" /* TestResult */]();
                e.next(newBuild);
            }).map(function (result) {
                return result;
            });
        }
    };
    VstsDataService.prototype.getTestCoverageForBuild = function (build) {
        return this.launchGetForUrl(this.getCodeCoverageUrlForBuild(build))
            .map(function (response) {
            var coverageResult = JSON.parse(response.text());
            var coverages = new Array();
            if (coverageResult.coverageData && coverageResult.coverageData.length > 0 && coverageResult.coverageData[0].coverageStats) {
                coverageResult.coverageData[0].coverageStats.forEach(function (coverage) {
                    var newCoverage = new __WEBPACK_IMPORTED_MODULE_9__test_result__["c" /* Coverage */]();
                    newCoverage.label = coverage.label;
                    newCoverage.position = coverage.position;
                    newCoverage.covered = coverage.covered;
                    newCoverage.total = coverage.total;
                    coverages.push(newCoverage);
                });
            }
            return coverages;
        });
    };
    VstsDataService.prototype.getTestResultUrlForBuild = function (build, includeFailureDetails) {
        var url = this.getProjectApisUrl(build.definition.project) + "test/ResultSummaryByBuild?buildId=" + build.last.id.toString();
        if (includeFailureDetails) {
            url += "&includeFailureDetails=true";
        }
        return url;
    };
    VstsDataService.prototype.getCodeCoverageUrlForBuild = function (build) {
        return this.getProjectApisUrl(build.definition.project) + "test/CodeCoverage?buildId=" + build.last.id.toString();
    };
    return VstsDataService;
}());
VstsDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_15__profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__profile_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_http__["e" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__selected_builds_selected_builds_service__["a" /* SelectedBuildsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__selected_builds_selected_builds_service__["a" /* SelectedBuildsService */]) === "function" && _c || Object])
], VstsDataService);

var _a, _b, _c;
//# sourceMappingURL=vsts-data.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".app-content {\r\n  padding: 20px;\r\n  width: 700px;\r\n}\r\n\r\n.app-content md-card {\r\n  margin: 20px;\r\n}\r\n\r\n.app-sidenav {\r\n  padding: 20px;\r\n  min-width: 150px;\r\n}\r\n\r\n.app-content md-checkbox {\r\n  margin: 10px;\r\n}\r\n\r\n.app-toolbar-filler {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.app-toolbar-menu {\r\n  padding: 0 14px 0 14px;\r\n  color: white;\r\n}\r\n\r\n.app-icon-button {\r\n  box-shadow: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  font-weight: normal;\r\n  height: auto;\r\n  line-height: inherit;\r\n  margin: 0;\r\n  min-width: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-action {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n}\r\n\r\n.app-input-icon {\r\n  font-size: 16px;\r\n}\r\n\r\n.app-list {\r\n  border: 1px solid rgba(0,0,0,0.12);\r\n  width: 350px;\r\n  margin: 20px;\r\n}\r\n\r\n.app-progress {\r\n  margin: 20px;\r\n}\r\n\r\nmd-toolbar .flex {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "table tr td {\r\n    text-align: center;\r\n    font-size: 10pt;\r\n    height: 20px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    line-height: 0pt;\r\n    vertical-align: bottom;\r\n}\r\n\r\na2 {\r\n  line-height: -4pt;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".card_header {\r\n  font-weight: bold;\r\n  color:#084B8A;\r\n  margin: -15px 0px 5px 0px;\r\n}\r\n\r\nmd-card {\r\n  color: rgba(0,0,0,0.87);\r\n  background-color: white;\r\n  margin: 8px;\r\n  width: 630px;\r\n}\r\n\r\ntable tr td {\r\n    text-align: justify;\r\n    font-size: 10pt;\r\n    height: 20px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    line-height: 0pt;\r\n    vertical-align: bottom;\r\n}\r\n\r\na2 {\r\n  line-height: -4pt;\r\n}\r\n\r\nfollow-quality-indicator {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "table tr td {\r\n    text-align: center;\r\n    font-size: 10pt;\r\n    height: 10px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    line-height: 0pt;\r\n    vertical-align: bottom;\r\n}\r\n\r\na2 {\r\n  line-height: -4pt;\r\n}\r\n\r\n.indicator_title{\r\n  font-weight: bold;\r\n  font-size: 10pt;\r\n  margin-bottom: 5px;\r\n}\r\n.indicator_value{\r\n  font-size: 20pt;\r\n  text-align: center;\r\n      margin-top: 20px;\r\n}\r\n.indicator_block{\r\n  min-height: 80px;\r\n}\r\n\r\n/****************************************************************\r\n *\r\n * CSS Percentage Circle\r\n * Author: Andre Firchow\r\n *\r\n*****************************************************************/\r\n.rect-auto, .c100.p51 .slice, .c100.p52 .slice, .c100.p53 .slice, .c100.p54 .slice, .c100.p55 .slice, .c100.p56 .slice, .c100.p57 .slice, .c100.p58 .slice, .c100.p59 .slice, .c100.p60 .slice, .c100.p61 .slice, .c100.p62 .slice, .c100.p63 .slice, .c100.p64 .slice, .c100.p65 .slice, .c100.p66 .slice, .c100.p67 .slice, .c100.p68 .slice, .c100.p69 .slice, .c100.p70 .slice, .c100.p71 .slice, .c100.p72 .slice, .c100.p73 .slice, .c100.p74 .slice, .c100.p75 .slice, .c100.p76 .slice, .c100.p77 .slice, .c100.p78 .slice, .c100.p79 .slice, .c100.p80 .slice, .c100.p81 .slice, .c100.p82 .slice, .c100.p83 .slice, .c100.p84 .slice, .c100.p85 .slice, .c100.p86 .slice, .c100.p87 .slice, .c100.p88 .slice, .c100.p89 .slice, .c100.p90 .slice, .c100.p91 .slice, .c100.p92 .slice, .c100.p93 .slice, .c100.p94 .slice, .c100.p95 .slice, .c100.p96 .slice, .c100.p97 .slice, .c100.p98 .slice, .c100.p99 .slice, .c100.p100 .slice {\r\n  clip: rect(auto, auto, auto, auto);\r\n}\r\n\r\n.pie, .c100 .bar, .c100.p51 .fill, .c100.p52 .fill, .c100.p53 .fill, .c100.p54 .fill, .c100.p55 .fill, .c100.p56 .fill, .c100.p57 .fill, .c100.p58 .fill, .c100.p59 .fill, .c100.p60 .fill, .c100.p61 .fill, .c100.p62 .fill, .c100.p63 .fill, .c100.p64 .fill, .c100.p65 .fill, .c100.p66 .fill, .c100.p67 .fill, .c100.p68 .fill, .c100.p69 .fill, .c100.p70 .fill, .c100.p71 .fill, .c100.p72 .fill, .c100.p73 .fill, .c100.p74 .fill, .c100.p75 .fill, .c100.p76 .fill, .c100.p77 .fill, .c100.p78 .fill, .c100.p79 .fill, .c100.p80 .fill, .c100.p81 .fill, .c100.p82 .fill, .c100.p83 .fill, .c100.p84 .fill, .c100.p85 .fill, .c100.p86 .fill, .c100.p87 .fill, .c100.p88 .fill, .c100.p89 .fill, .c100.p90 .fill, .c100.p91 .fill, .c100.p92 .fill, .c100.p93 .fill, .c100.p94 .fill, .c100.p95 .fill, .c100.p96 .fill, .c100.p97 .fill, .c100.p98 .fill, .c100.p99 .fill, .c100.p100 .fill {\r\n  position: absolute;\r\n  border: 0.08em solid #307bbb;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  clip: rect(0em, 0.5em, 1em, 0em);\r\n  border-radius: 50%;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.pie-fill, .c100.p51 .bar:after, .c100.p51 .fill, .c100.p52 .bar:after, .c100.p52 .fill, .c100.p53 .bar:after, .c100.p53 .fill, .c100.p54 .bar:after, .c100.p54 .fill, .c100.p55 .bar:after, .c100.p55 .fill, .c100.p56 .bar:after, .c100.p56 .fill, .c100.p57 .bar:after, .c100.p57 .fill, .c100.p58 .bar:after, .c100.p58 .fill, .c100.p59 .bar:after, .c100.p59 .fill, .c100.p60 .bar:after, .c100.p60 .fill, .c100.p61 .bar:after, .c100.p61 .fill, .c100.p62 .bar:after, .c100.p62 .fill, .c100.p63 .bar:after, .c100.p63 .fill, .c100.p64 .bar:after, .c100.p64 .fill, .c100.p65 .bar:after, .c100.p65 .fill, .c100.p66 .bar:after, .c100.p66 .fill, .c100.p67 .bar:after, .c100.p67 .fill, .c100.p68 .bar:after, .c100.p68 .fill, .c100.p69 .bar:after, .c100.p69 .fill, .c100.p70 .bar:after, .c100.p70 .fill, .c100.p71 .bar:after, .c100.p71 .fill, .c100.p72 .bar:after, .c100.p72 .fill, .c100.p73 .bar:after, .c100.p73 .fill, .c100.p74 .bar:after, .c100.p74 .fill, .c100.p75 .bar:after, .c100.p75 .fill, .c100.p76 .bar:after, .c100.p76 .fill, .c100.p77 .bar:after, .c100.p77 .fill, .c100.p78 .bar:after, .c100.p78 .fill, .c100.p79 .bar:after, .c100.p79 .fill, .c100.p80 .bar:after, .c100.p80 .fill, .c100.p81 .bar:after, .c100.p81 .fill, .c100.p82 .bar:after, .c100.p82 .fill, .c100.p83 .bar:after, .c100.p83 .fill, .c100.p84 .bar:after, .c100.p84 .fill, .c100.p85 .bar:after, .c100.p85 .fill, .c100.p86 .bar:after, .c100.p86 .fill, .c100.p87 .bar:after, .c100.p87 .fill, .c100.p88 .bar:after, .c100.p88 .fill, .c100.p89 .bar:after, .c100.p89 .fill, .c100.p90 .bar:after, .c100.p90 .fill, .c100.p91 .bar:after, .c100.p91 .fill, .c100.p92 .bar:after, .c100.p92 .fill, .c100.p93 .bar:after, .c100.p93 .fill, .c100.p94 .bar:after, .c100.p94 .fill, .c100.p95 .bar:after, .c100.p95 .fill, .c100.p96 .bar:after, .c100.p96 .fill, .c100.p97 .bar:after, .c100.p97 .fill, .c100.p98 .bar:after, .c100.p98 .fill, .c100.p99 .bar:after, .c100.p99 .fill, .c100.p100 .bar:after, .c100.p100 .fill {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.c100 {\r\n  position: relative;\r\n  font-size: 120px;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 0 0.1em 0.1em 0;\r\n  background-color: #cccccc;\r\n}\r\n.c100 *, .c100 *:before, .c100 *:after {\r\n  box-sizing: content-box;\r\n}\r\n.c100.center {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n.c100.big {\r\n  font-size: 240px;\r\n}\r\n.c100.small {\r\n  font-size: 60px;\r\n}\r\n.c100 > span {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 5em;\r\n  line-height: 5em;\r\n  font-size: 0.2em;\r\n  color: #cccccc;\r\n  display: block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 0.2s;\r\n  transition-duration: 0.2s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.c100:after {\r\n  position: absolute;\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: 50%;\r\n  background-color: whitesmoke;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  -webkit-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 0.2s;\r\n  transition-duration: 0.2s;\r\n  -webkit-transition-timing-function: ease-in;\r\n  transition-timing-function: ease-in;\r\n}\r\n.c100 .slice {\r\n  position: absolute;\r\n  width: 1em;\r\n  height: 1em;\r\n  clip: rect(0em, 1em, 1em, 0.5em);\r\n}\r\n.c100.p1 .bar {\r\n  -webkit-transform: rotate(3.6deg);\r\n  transform: rotate(3.6deg);\r\n}\r\n.c100.p2 .bar {\r\n  -webkit-transform: rotate(7.2deg);\r\n  transform: rotate(7.2deg);\r\n}\r\n.c100.p3 .bar {\r\n  -webkit-transform: rotate(10.8deg);\r\n  transform: rotate(10.8deg);\r\n}\r\n.c100.p4 .bar {\r\n  -webkit-transform: rotate(14.4deg);\r\n  transform: rotate(14.4deg);\r\n}\r\n.c100.p5 .bar {\r\n  -webkit-transform: rotate(18deg);\r\n  transform: rotate(18deg);\r\n}\r\n.c100.p6 .bar {\r\n  -webkit-transform: rotate(21.6deg);\r\n  transform: rotate(21.6deg);\r\n}\r\n.c100.p7 .bar {\r\n  -webkit-transform: rotate(25.2deg);\r\n  transform: rotate(25.2deg);\r\n}\r\n.c100.p8 .bar {\r\n  -webkit-transform: rotate(28.8deg);\r\n  transform: rotate(28.8deg);\r\n}\r\n.c100.p9 .bar {\r\n  -webkit-transform: rotate(32.4deg);\r\n  transform: rotate(32.4deg);\r\n}\r\n.c100.p10 .bar {\r\n  -webkit-transform: rotate(36deg);\r\n  transform: rotate(36deg);\r\n}\r\n.c100.p11 .bar {\r\n  -webkit-transform: rotate(39.6deg);\r\n  transform: rotate(39.6deg);\r\n}\r\n.c100.p12 .bar {\r\n  -webkit-transform: rotate(43.2deg);\r\n  transform: rotate(43.2deg);\r\n}\r\n.c100.p13 .bar {\r\n  -webkit-transform: rotate(46.8deg);\r\n  transform: rotate(46.8deg);\r\n}\r\n.c100.p14 .bar {\r\n  -webkit-transform: rotate(50.4deg);\r\n  transform: rotate(50.4deg);\r\n}\r\n.c100.p15 .bar {\r\n  -webkit-transform: rotate(54deg);\r\n  transform: rotate(54deg);\r\n}\r\n.c100.p16 .bar {\r\n  -webkit-transform: rotate(57.6deg);\r\n  transform: rotate(57.6deg);\r\n}\r\n.c100.p17 .bar {\r\n  -webkit-transform: rotate(61.2deg);\r\n  transform: rotate(61.2deg);\r\n}\r\n.c100.p18 .bar {\r\n  -webkit-transform: rotate(64.8deg);\r\n  transform: rotate(64.8deg);\r\n}\r\n.c100.p19 .bar {\r\n  -webkit-transform: rotate(68.4deg);\r\n  transform: rotate(68.4deg);\r\n}\r\n.c100.p20 .bar {\r\n  -webkit-transform: rotate(72deg);\r\n  transform: rotate(72deg);\r\n}\r\n.c100.p21 .bar {\r\n  -webkit-transform: rotate(75.6deg);\r\n  transform: rotate(75.6deg);\r\n}\r\n.c100.p22 .bar {\r\n  -webkit-transform: rotate(79.2deg);\r\n  transform: rotate(79.2deg);\r\n}\r\n.c100.p23 .bar {\r\n  -webkit-transform: rotate(82.8deg);\r\n  transform: rotate(82.8deg);\r\n}\r\n.c100.p24 .bar {\r\n  -webkit-transform: rotate(86.4deg);\r\n  transform: rotate(86.4deg);\r\n}\r\n.c100.p25 .bar {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.c100.p26 .bar {\r\n  -webkit-transform: rotate(93.6deg);\r\n  transform: rotate(93.6deg);\r\n}\r\n.c100.p27 .bar {\r\n  -webkit-transform: rotate(97.2deg);\r\n  transform: rotate(97.2deg);\r\n}\r\n.c100.p28 .bar {\r\n  -webkit-transform: rotate(100.8deg);\r\n  transform: rotate(100.8deg);\r\n}\r\n.c100.p29 .bar {\r\n  -webkit-transform: rotate(104.4deg);\r\n  transform: rotate(104.4deg);\r\n}\r\n.c100.p30 .bar {\r\n  -webkit-transform: rotate(108deg);\r\n  transform: rotate(108deg);\r\n}\r\n.c100.p31 .bar {\r\n  -webkit-transform: rotate(111.6deg);\r\n  transform: rotate(111.6deg);\r\n}\r\n.c100.p32 .bar {\r\n  -webkit-transform: rotate(115.2deg);\r\n  transform: rotate(115.2deg);\r\n}\r\n.c100.p33 .bar {\r\n  -webkit-transform: rotate(118.8deg);\r\n  transform: rotate(118.8deg);\r\n}\r\n.c100.p34 .bar {\r\n  -webkit-transform: rotate(122.4deg);\r\n  transform: rotate(122.4deg);\r\n}\r\n.c100.p35 .bar {\r\n  -webkit-transform: rotate(126deg);\r\n  transform: rotate(126deg);\r\n}\r\n.c100.p36 .bar {\r\n  -webkit-transform: rotate(129.6deg);\r\n  transform: rotate(129.6deg);\r\n}\r\n.c100.p37 .bar {\r\n  -webkit-transform: rotate(133.2deg);\r\n  transform: rotate(133.2deg);\r\n}\r\n.c100.p38 .bar {\r\n  -webkit-transform: rotate(136.8deg);\r\n  transform: rotate(136.8deg);\r\n}\r\n.c100.p39 .bar {\r\n  -webkit-transform: rotate(140.4deg);\r\n  transform: rotate(140.4deg);\r\n}\r\n.c100.p40 .bar {\r\n  -webkit-transform: rotate(144deg);\r\n  transform: rotate(144deg);\r\n}\r\n.c100.p41 .bar {\r\n  -webkit-transform: rotate(147.6deg);\r\n  transform: rotate(147.6deg);\r\n}\r\n.c100.p42 .bar {\r\n  -webkit-transform: rotate(151.2deg);\r\n  transform: rotate(151.2deg);\r\n}\r\n.c100.p43 .bar {\r\n  -webkit-transform: rotate(154.8deg);\r\n  transform: rotate(154.8deg);\r\n}\r\n.c100.p44 .bar {\r\n  -webkit-transform: rotate(158.4deg);\r\n  transform: rotate(158.4deg);\r\n}\r\n.c100.p45 .bar {\r\n  -webkit-transform: rotate(162deg);\r\n  transform: rotate(162deg);\r\n}\r\n.c100.p46 .bar {\r\n  -webkit-transform: rotate(165.6deg);\r\n  transform: rotate(165.6deg);\r\n}\r\n.c100.p47 .bar {\r\n  -webkit-transform: rotate(169.2deg);\r\n  transform: rotate(169.2deg);\r\n}\r\n.c100.p48 .bar {\r\n  -webkit-transform: rotate(172.8deg);\r\n  transform: rotate(172.8deg);\r\n}\r\n.c100.p49 .bar {\r\n  -webkit-transform: rotate(176.4deg);\r\n  transform: rotate(176.4deg);\r\n}\r\n.c100.p50 .bar {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.c100.p51 .bar {\r\n  -webkit-transform: rotate(183.6deg);\r\n  transform: rotate(183.6deg);\r\n}\r\n.c100.p52 .bar {\r\n  -webkit-transform: rotate(187.2deg);\r\n  transform: rotate(187.2deg);\r\n}\r\n.c100.p53 .bar {\r\n  -webkit-transform: rotate(190.8deg);\r\n  transform: rotate(190.8deg);\r\n}\r\n.c100.p54 .bar {\r\n  -webkit-transform: rotate(194.4deg);\r\n  transform: rotate(194.4deg);\r\n}\r\n.c100.p55 .bar {\r\n  -webkit-transform: rotate(198deg);\r\n  transform: rotate(198deg);\r\n}\r\n.c100.p56 .bar {\r\n  -webkit-transform: rotate(201.6deg);\r\n  transform: rotate(201.6deg);\r\n}\r\n.c100.p57 .bar {\r\n  -webkit-transform: rotate(205.2deg);\r\n  transform: rotate(205.2deg);\r\n}\r\n.c100.p58 .bar {\r\n  -webkit-transform: rotate(208.8deg);\r\n  transform: rotate(208.8deg);\r\n}\r\n.c100.p59 .bar {\r\n  -webkit-transform: rotate(212.4deg);\r\n  transform: rotate(212.4deg);\r\n}\r\n.c100.p60 .bar {\r\n  -webkit-transform: rotate(216deg);\r\n  transform: rotate(216deg);\r\n}\r\n.c100.p61 .bar {\r\n  -webkit-transform: rotate(219.6deg);\r\n  transform: rotate(219.6deg);\r\n}\r\n.c100.p62 .bar {\r\n  -webkit-transform: rotate(223.2deg);\r\n  transform: rotate(223.2deg);\r\n}\r\n.c100.p63 .bar {\r\n  -webkit-transform: rotate(226.8deg);\r\n  transform: rotate(226.8deg);\r\n}\r\n.c100.p64 .bar {\r\n  -webkit-transform: rotate(230.4deg);\r\n  transform: rotate(230.4deg);\r\n}\r\n.c100.p65 .bar {\r\n  -webkit-transform: rotate(234deg);\r\n  transform: rotate(234deg);\r\n}\r\n.c100.p66 .bar {\r\n  -webkit-transform: rotate(237.6deg);\r\n  transform: rotate(237.6deg);\r\n}\r\n.c100.p67 .bar {\r\n  -webkit-transform: rotate(241.2deg);\r\n  transform: rotate(241.2deg);\r\n}\r\n.c100.p68 .bar {\r\n  -webkit-transform: rotate(244.8deg);\r\n  transform: rotate(244.8deg);\r\n}\r\n.c100.p69 .bar {\r\n  -webkit-transform: rotate(248.4deg);\r\n  transform: rotate(248.4deg);\r\n}\r\n.c100.p70 .bar {\r\n  -webkit-transform: rotate(252deg);\r\n  transform: rotate(252deg);\r\n}\r\n.c100.p71 .bar {\r\n  -webkit-transform: rotate(255.6deg);\r\n  transform: rotate(255.6deg);\r\n}\r\n.c100.p72 .bar {\r\n  -webkit-transform: rotate(259.2deg);\r\n  transform: rotate(259.2deg);\r\n}\r\n.c100.p73 .bar {\r\n  -webkit-transform: rotate(262.8deg);\r\n  transform: rotate(262.8deg);\r\n}\r\n.c100.p74 .bar {\r\n  -webkit-transform: rotate(266.4deg);\r\n  transform: rotate(266.4deg);\r\n}\r\n.c100.p75 .bar {\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.c100.p76 .bar {\r\n  -webkit-transform: rotate(273.6deg);\r\n  transform: rotate(273.6deg);\r\n}\r\n.c100.p77 .bar {\r\n  -webkit-transform: rotate(277.2deg);\r\n  transform: rotate(277.2deg);\r\n}\r\n.c100.p78 .bar {\r\n  -webkit-transform: rotate(280.8deg);\r\n  transform: rotate(280.8deg);\r\n}\r\n.c100.p79 .bar {\r\n  -webkit-transform: rotate(284.4deg);\r\n  transform: rotate(284.4deg);\r\n}\r\n.c100.p80 .bar {\r\n  -webkit-transform: rotate(288deg);\r\n  transform: rotate(288deg);\r\n}\r\n.c100.p81 .bar {\r\n  -webkit-transform: rotate(291.6deg);\r\n  transform: rotate(291.6deg);\r\n}\r\n.c100.p82 .bar {\r\n  -webkit-transform: rotate(295.2deg);\r\n  transform: rotate(295.2deg);\r\n}\r\n.c100.p83 .bar {\r\n  -webkit-transform: rotate(298.8deg);\r\n  transform: rotate(298.8deg);\r\n}\r\n.c100.p84 .bar {\r\n  -webkit-transform: rotate(302.4deg);\r\n  transform: rotate(302.4deg);\r\n}\r\n.c100.p85 .bar {\r\n  -webkit-transform: rotate(306deg);\r\n  transform: rotate(306deg);\r\n}\r\n.c100.p86 .bar {\r\n  -webkit-transform: rotate(309.6deg);\r\n  transform: rotate(309.6deg);\r\n}\r\n.c100.p87 .bar {\r\n  -webkit-transform: rotate(313.2deg);\r\n  transform: rotate(313.2deg);\r\n}\r\n.c100.p88 .bar {\r\n  -webkit-transform: rotate(316.8deg);\r\n  transform: rotate(316.8deg);\r\n}\r\n.c100.p89 .bar {\r\n  -webkit-transform: rotate(320.4deg);\r\n  transform: rotate(320.4deg);\r\n}\r\n.c100.p90 .bar {\r\n  -webkit-transform: rotate(324deg);\r\n  transform: rotate(324deg);\r\n}\r\n.c100.p91 .bar {\r\n  -webkit-transform: rotate(327.6deg);\r\n  transform: rotate(327.6deg);\r\n}\r\n.c100.p92 .bar {\r\n  -webkit-transform: rotate(331.2deg);\r\n  transform: rotate(331.2deg);\r\n}\r\n.c100.p93 .bar {\r\n  -webkit-transform: rotate(334.8deg);\r\n  transform: rotate(334.8deg);\r\n}\r\n.c100.p94 .bar {\r\n  -webkit-transform: rotate(338.4deg);\r\n  transform: rotate(338.4deg);\r\n}\r\n.c100.p95 .bar {\r\n  -webkit-transform: rotate(342deg);\r\n  transform: rotate(342deg);\r\n}\r\n.c100.p96 .bar {\r\n  -webkit-transform: rotate(345.6deg);\r\n  transform: rotate(345.6deg);\r\n}\r\n.c100.p97 .bar {\r\n  -webkit-transform: rotate(349.2deg);\r\n  transform: rotate(349.2deg);\r\n}\r\n.c100.p98 .bar {\r\n  -webkit-transform: rotate(352.8deg);\r\n  transform: rotate(352.8deg);\r\n}\r\n.c100.p99 .bar {\r\n  -webkit-transform: rotate(356.4deg);\r\n  transform: rotate(356.4deg);\r\n}\r\n.c100.p100 .bar {\r\n  -webkit-transform: rotate(360deg);\r\n  transform: rotate(360deg);\r\n}\r\n.c100:hover {\r\n  cursor: default;\r\n}\r\n.c100:hover > span {\r\n  width: 3.33em;\r\n  line-height: 3.33em;\r\n  font-size: 0.3em;\r\n  color: #307bbb;\r\n}\r\n.c100:hover:after {\r\n  top: 0.04em;\r\n  left: 0.04em;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n}\r\n.c100.dark {\r\n  background-color: #777777;\r\n}\r\n.c100.dark .bar,\r\n.c100.dark .fill {\r\n  border-color: #c6ff00 !important;\r\n}\r\n.c100.dark > span {\r\n  color: #777777;\r\n}\r\n.c100.dark:after {\r\n  background-color: #666666;\r\n}\r\n.c100.dark:hover > span {\r\n  color: #c6ff00;\r\n}\r\n.c100.green .bar, .c100.green .fill {\r\n  border-color: #4db53c !important;\r\n}\r\n.c100.green:hover > span {\r\n  color: #4db53c;\r\n}\r\n.c100.green.dark .bar, .c100.green.dark .fill {\r\n  border-color: #5fd400 !important;\r\n}\r\n.c100.green.dark:hover > span {\r\n  color: #5fd400;\r\n}\r\n.c100.orange .bar, .c100.orange .fill {\r\n  border-color: #dd9d22 !important;\r\n}\r\n.c100.orange:hover > span {\r\n  color: #dd9d22;\r\n}\r\n.c100.orange.dark .bar, .c100.orange.dark .fill {\r\n  border-color: #e08833 !important;\r\n}\r\n.c100.orange.dark:hover > span {\r\n  color: #e08833;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\nmd-card {\r\n  color: rgba(0,0,0,0.87);\r\n  background-color: white;\r\n  margin: 10px;\r\n  width: 630px;\r\n}\r\n\r\ntable tr td {\r\n    text-align: center;\r\n    font-size: 10pt;\r\n    height: 20px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    line-height: 0pt;\r\n    vertical-align: bottom;\r\n}\r\n\r\na2 {\r\n  line-height: -4pt;\r\n}\r\n\r\nfollow-quality-indicator {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\n.content-style {\r\n  height: 100%;\r\n  min-height: 450px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n  <md-toolbar color=\"primary\">\r\n    {{title}}\r\n    <span class=\"flex\"></span>\r\n    <follow-vsts-profile></follow-vsts-profile>\r\n    <follow-sonarqube-profile></follow-sonarqube-profile>\r\n  </md-toolbar>\r\n  <md-progress-bar mode=\"indeterminate\" *ngIf=\"isBusy\"></md-progress-bar>\r\n\r\n  <div class=\"app-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>{{profileToDisplay()}} Connect</h1>\r\n<md-input-container>\r\n  <input mdInput placeholder=\"{{profileToDisplay()}} url\" [(ngModel)]=\"url\" type=\"url\">\r\n</md-input-container><br />\r\n<md-input-container>\r\n  <input mdInput placeholder=\"Login\" [(ngModel)]=\"login\">\r\n</md-input-container><br />\r\n<md-input-container>\r\n  <input mdInput placeholder=\"Password/Token\" [(ngModel)]=\"password\" type=\"password\">\r\n</md-input-container>\r\n<div md-dialog-actions>\r\n  <button md-button (click)=\"saveData()\">Connect</button>\r\n</div>\r\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<button md-button (click)=\"openDialog()\">{{buttonLabel}}</button>"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<button md-button (click)=\"openDialog()\">{{buttonLabel}}</button>\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<table style=\"width:100%\">\r\n  <tr>\r\n    <td>{{ indicatorName }}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <h2>{{ indicatorValue }}</h2>\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"build.definition\">\r\n  <div class=\"card_header\">{{ build.definition.project.name }}/{{ build.definition.name }} -\r\n    <span *ngIf=\"build.last\" [style.color]=\"getBuildColor(build.last)\">{{ build.last.buildNumber }} ({{ build.last.reason }})</span>\r\n    <span *ngIf=\"!build.last\" [style.color]=\"getDefaultColor()\">No build</span>\r\n  </div>\r\n  <md-grid-list cols=\"6\" >\r\n    <md-grid-tile *ngFor=\"let indicator of indicators\">\r\n      <follow-indicator-tile *ngIf=\"!indicator.lastAnalysis\" [indicatorName]=\"indicator.name\" [indicatorValue]=\"indicator.value\" [indicatorColor]=\"indicator.color\" [indicatorType]=\"indicator.type\"></follow-indicator-tile>\r\n      <follow-indicator-tile *ngIf=\"indicator.lastAnalysis\" [indicatorName]=\"indicator.name\" [indicatorValue]=\"indicator.value\" [indicatorColor]=\"indicator.color\" [indicatorType]=\"indicator.type\" [historyDiff]=\"indicator.sevenDays.diff\" [historyColor]=\"indicator.sevenDays.color\"></follow-indicator-tile>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n</md-card>\r\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<!--<table style=\"width:100%\" *ngIf=\"indicatorType != 'percent'\">\r\n  <tr>\r\n    <td>{{ indicatorName }}</td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <h2>{{ indicatorValue }}</h2>\r\n    </td>\r\n  </tr>\r\n</table>-->\r\n<div class=\"indicator_block\">\r\n  <div *ngIf=\"indicatorType != 'percent'\">\r\n    <div class=\"indicator_title\">{{ indicatorName }}</div>\r\n    <div class=\"indicator_value\" [style.color]=\"indicatorColor\">\r\n        <span>{{ indicatorValue }}</span><span *ngIf=\"historyDiff\" [style.color]=\"historyColor\">&nbsp; {{ historyDiff }}</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"indicatorType == 'percent'\">\r\n    <div class=\"indicator_title\">{{ indicatorName }}</div>\r\n    <div class=\"c100 small center\" [ngClass]=\"getPercentClass(indicatorValue)\">\r\n        <span>{{ indicatorValue }} %<span *ngIf=\"historyDiff\" [style.color]=\"historyColor\">&nbsp; {{ historyDiff }}</span></span>\r\n        <div class=\"slice\">\r\n            <div class=\"bar\"></div>\r\n            <div class=\"fill\"></div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<follow-card *ngFor=\"let build of selectedBuilds\" [build]=\"build\" [measures]=\"build.measures\"></follow-card>\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  selection-toggle works!\r\n</p>\r\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<md-grid-tile [colspan]=\"colspan\" [rowspan]=\"rowspan\" [style.background]=\"backgroundColor\">\r\n  <table style=\"width:100%\">\r\n    <tr>\r\n      <td style=\"width: 50px\">\r\n        <span>\r\n          <b>{{ title }}</b>\r\n        </span>\r\n      </td>\r\n    </tr><tr>\r\n      <td style=\"text-align: left\">\r\n        <ng-content></ng-content>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</md-grid-tile>"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<!--<md-card>\r\n  <md-grid-list cols=\"6\" rowHeight=\"100px\">\r\n    <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n      {{tile.text}}\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n</md-card>-->\r\n<md-card *ngIf=\"buildMode\">\r\n  <h1>{{ build.definition.name }}</h1>\r\n  <md-grid-list cols=\"6\" rowHeight=\"40px\">\r\n    <md-grid-tile colspan=\"4\" [style.background]=\"getBuildColor(build.last)\" *ngIf=\"build.last\">\r\n      <h2>{{ build.last.buildNumber }} ({{ build.last.reason }})</h2><br />\r\n    </md-grid-tile>\r\n    <md-grid-tile colspan=\"4\" [style.background]=\"getDefaultColor()\" *ngIf=\"!build.last\">\r\n      <h2>No build</h2><br />\r\n    </md-grid-tile>\r\n    <md-grid-tile colspan=\"2\" rowspan=\"2\" [style.background]=\"testColor\">\r\n      <div>\r\n        Unit Tests<br />\r\n        <ul *ngIf=\"testResult.totalTests > 0\">\r\n          <li>\r\n            Tests : <span style=\"color: green\"><b>{{ testResult.passedTests }}</b></span> &nbsp;/&nbsp; <span style=\"color: red\"><b>{{ testResult.failedTests }}</b></span>            &nbsp;/&nbsp; <span><b>{{ testResult.totalTests }}</b></span>\r\n          </li>\r\n          <li *ngFor=\"let coverage of calculatedCoverages\">\r\n            <span>{{ coverage }}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </md-grid-tile>\r\n    <md-grid-tile *ngFor=\"let indicator of indicators\" [style.background]=\"indicator.color\">\r\n      <follow-quality-indicator [indicatorName]=\"indicator.name\" [indicatorValue]=\"indicator.value\"></follow-quality-indicator>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n</md-card>\r\n\r\n<md-card *ngIf=\"!buildMode\">\r\n  <h1>{{ project.project.name }}</h1>\r\n  <md-grid-list cols=\"6\" rowHeight=\"40px\">\r\n    <md-grid-tile *ngFor=\"let tile of project.builds\" [colspan]=\"6\" [style.background]=\"getBuildColor(tile.last)\">\r\n      <table style=\"width:100%\">\r\n        <tr>\r\n          <td style=\"width: 50px\"><md-slide-toggle (change)=\"changeSelection(tile)\" color=\"primary\" [checked]=\"tile.selected\"></md-slide-toggle></td>\r\n          <td style=\"text-align: left\">\r\n            <div><h2>{{ tile.definition.name }}</h2></div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </md-grid-tile>\r\n  </md-grid-list>\r\n</md-card>"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "\r\n<md-grid-list cols=\"1\" rowHeight=\"4:1\" *ngIf=\"singleProjectMode()\">\r\n  <md-grid-tile *ngFor=\"let build of project.builds\">\r\n    <follow-vsts-build-card [build]=\"build\"></follow-vsts-build-card>\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n\r\n<!--<md-grid-list cols=\"1\" *ngIf=\"!singleProjectMode()\">\r\n  <md-grid-tile *ngFor=\"let prj of projects\">\r\n    <follow-vsts-build-card [project]=\"prj\"></follow-vsts-build-card>\r\n  </md-grid-tile>\r\n</md-grid-list>-->\r\n\r\n<follow-vsts-build-card *ngFor=\"let prj of projects\" [project]=\"prj\"></follow-vsts-build-card>"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<md-tab-group [dynamicHeight]=\"dynh\" flex>\r\n  <!--<md-tab *ngFor=\"let project of projects\" [label]=\"project.project.name\">\r\n    <follow-vsts-project [project]=\"project\"></follow-vsts-project>\r\n  </md-tab>-->\r\n  <md-tab label=\"Selection\">\r\n    <follow-list></follow-list>\r\n  </md-tab>\r\n  <md-tab label=\"All builds\" style=\"overflow: hidden\">\r\n    <follow-vsts-project [projects]=\"projects\"></follow-vsts-project>\r\n  </md-tab>\r\n</md-tab-group>"

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService() {
        var _this = this;
        this.profilesInitiatedSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscriber__["Subscriber"]();
        this.profilesInitiated = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (sub) { return _this.profilesInitiatedSub = sub; });
        this.profilesGetted = new Array();
    }
    ProfileService.prototype.getProfile = function (profile) {
        if (profile === void 0) { profile = ""; }
        var dataStr = localStorage.getItem(this.getStorageName(profile));
        this.config = JSON.parse(dataStr);
        if (this.config && !this.profilesGetted.find(function (elem) { return elem === profile; })) {
            this.profilesGetted.push(profile);
            this.profilesInitiatedSub.next(this.profilesGetted);
        }
        return this.config;
    };
    ProfileService.prototype.setProfile = function (profile, data) {
        if (profile === void 0) { profile = ""; }
        if (profile === "sonarqube" && data.url.slice(-1) !== "/") {
            data.url = data.url + "/";
        }
        if (profile === "vsts" && data.url.slice(-1) === "/") {
            data.url = data.url.substring(0, data.url.length - 1);
        }
        localStorage.setItem(this.getStorageName(profile), JSON.stringify(data));
        return (this.getProfile(profile) != null);
    };
    ProfileService.prototype.getStorageName = function (profile) {
        return profile + "Profile";
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProfileService);

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_result__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBuildsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FullProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VstsBuildDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return VstsBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VstsProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VstsProjectList; });

var MainBuildsInfo = (function () {
    function MainBuildsInfo(buildDefinition) {
        this.testResult = new __WEBPACK_IMPORTED_MODULE_0__test_result__["a" /* TestResult */]();
        this.selected = false;
        this.definition = buildDefinition;
    }
    return MainBuildsInfo;
}());

var FullProject = (function () {
    function FullProject(project) {
        this.builds = new Array();
        this.project = project;
    }
    return FullProject;
}());

var VstsBuildDefinition = (function () {
    function VstsBuildDefinition() {
    }
    return VstsBuildDefinition;
}());

var VstsBuild = (function () {
    function VstsBuild() {
    }
    return VstsBuild;
}());

var VstsProject = (function () {
    function VstsProject() {
    }
    return VstsProject;
}());

var VstsProjectList = (function () {
    function VstsProjectList(jsonValue) {
        try {
            var list = JSON.parse(jsonValue);
            this.count = list.count;
            this.value = list.value;
        }
        catch (error) {
            this.count = 0;
            this.value = [];
            console.log("json value bad format !");
        }
    }
    return VstsProjectList;
}());

//# sourceMappingURL=vsts-project.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_credentials__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LoginDialogComponent = (function () {
    function LoginDialogComponent(dialogRef, service, data) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.data = data;
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        var result = this.service.getProfile(this.data.profile);
        if (result) {
            this.url = result.url;
            this.login = result.login;
            this.password = result.password;
        }
    };
    LoginDialogComponent.prototype.saveData = function () {
        var toSet = new __WEBPACK_IMPORTED_MODULE_3__profile_credentials__["a" /* ProfileCredentials */]();
        toSet.url = this.url;
        toSet.login = this.login;
        toSet.password = this.password;
        this.service.setProfile(this.data.profile, toSet);
        this.dialogRef.close();
    };
    LoginDialogComponent.prototype.profileToDisplay = function () {
        if (!this.data.profile) {
            return this.data.profile;
        }
        return this.data.profile.charAt(0).toUpperCase() + this.data.profile.substr(1);
    };
    return LoginDialogComponent;
}());
LoginDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'follow-login-dialog',
        template: __webpack_require__(215),
        styles: [__webpack_require__(201)]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Optional */])()), __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object, Object])
], LoginDialogComponent);

var _a, _b;
//# sourceMappingURL=login-dialog.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedBuildsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectedBuild; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var STORAGE_NAME = "VstsSelectedBuildIds";
var SelectedBuildsService = (function () {
    function SelectedBuildsService() {
        var _this = this;
        this.selectedBuilds = __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].create(function (observer) {
            _this.emitter = observer;
            setTimeout(function () {
                _this.emitter.next(_this.getSelectedBuilds());
            });
        });
    }
    SelectedBuildsService.prototype.getSelectedBuilds = function () {
        var value = new Array();
        var dataStr = localStorage.getItem(STORAGE_NAME);
        value = JSON.parse(dataStr);
        return value;
    };
    SelectedBuildsService.prototype.toggleSelectedBuild = function (selection) {
        var builds = this.getSelectedBuilds();
        if (builds == null) {
            builds = new Array();
        }
        var index = builds.findIndex(function (element) {
            return (element.buildDefinitionId === selection.buildDefinitionId && element.projectGuid === selection.projectGuid);
        });
        if (index === -1) {
            builds.push(selection);
        }
        else {
            builds.splice(index, 1);
        }
        this.emitter.next(this.saveSelectedBuilds(builds));
    };
    SelectedBuildsService.prototype.saveSelectedBuilds = function (selection) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(selection));
        return this.getSelectedBuilds();
    };
    return SelectedBuildsService;
}());
SelectedBuildsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SelectedBuildsService);

var SelectedBuild = (function () {
    function SelectedBuild(projectIdentifier, buildDefinitionIdentifier) {
        this.projectGuid = projectIdentifier;
        this.buildDefinitionId = buildDefinitionIdentifier;
    }
    return SelectedBuild;
}());

//# sourceMappingURL=selected-builds.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BuildInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Coverage; });
var TestResult = (function () {
    function TestResult() {
        this.coverageStats = new Array();
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;
        this.ignoredTests = 0;
    }
    return TestResult;
}());

var BuildInfo = (function () {
    function BuildInfo() {
    }
    return BuildInfo;
}());

var Coverage = (function () {
    function Coverage() {
    }
    return Coverage;
}());

//# sourceMappingURL=test-result.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retrywhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sonar_model__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonarDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SonarDataService = (function () {
    function SonarDataService(profileService, http) {
        this.profileService = profileService;
        this.http = http;
    }
    SonarDataService.prototype.setProfileAndHeaders = function () {
        this.profile = this.profileService.getProfile("sonarqube");
        if (this.profile) {
            var basic = 'Basic ' + btoa(this.profile.password + ":");
            var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Headers */]({ 'Authorization': basic });
            this.requestOptions = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    SonarDataService.prototype.launchGetForUrl = function (url) {
        return this.http.get(url, this.requestOptions);
    };
    SonarDataService.prototype.getIndicators = function (componentKey) {
        var _this = this;
        this.setProfileAndHeaders();
        return this.launchGetForUrl(this.profile.url + "api/measures/component?metricKeys=tests,test_errors,coverage,bugs,vulnerabilities,code_smells,sqale_rating,reliability_rating,security_rating&componentKey=" + componentKey)
            .map(function (resp) {
            var measures = new Array();
            var result = JSON.parse(resp.text());
            if (result.component && result.component.measures) {
                result.component.measures.forEach(function (item) {
                    var measure = new __WEBPACK_IMPORTED_MODULE_11__sonar_model__["a" /* Measure */]();
                    measure.metric = item.metric;
                    measure.value = item.value;
                    var splinted = measure.metric.split("_");
                    if (splinted[splinted.length - 1] === "rating") {
                        switch (item.value) {
                            case "1.0":
                                measure.value = "A";
                                break;
                            case "2.0":
                                measure.value = "B";
                                break;
                            case "3.0":
                                measure.value = "C";
                                break;
                            case "4.0":
                                measure.value = "D";
                                break;
                            case "5.0":
                                measure.value = "E";
                                break;
                            default:
                                measure.value = "-";
                                break;
                        }
                    }
                    if (item.periods) {
                        item.periods.forEach(function (period) {
                            switch (period.index) {
                                case 3:
                                    measure.period3Evolution = _this.setEvolution(period.value);
                                    break;
                                case 2:
                                    measure.period2Evolution = _this.setEvolution(period.value);
                                    break;
                                default:
                                    measure.period1Evolution = _this.setEvolution(period.value);
                                    break;
                            }
                        });
                    }
                    measures.push(measure);
                });
            }
            return measures.sort(function (a, b) { return a.metric.localeCompare(b.metric); });
        });
    };
    SonarDataService.prototype.setEvolution = function (value) {
        var val = null;
        if (value > 0) {
            val = "+";
        }
        if (value < 0) {
            val = "-";
        }
        return val;
    };
    return SonarDataService;
}());
SonarDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__profile_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* Http */]) === "function" && _b || Object])
], SonarDataService);

var _a, _b;
//# sourceMappingURL=sonar-data.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sonar_data_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SonarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SonarModule = (function () {
    function SonarModule() {
    }
    return SonarModule;
}());
SonarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__sonar_data_service__["a" /* SonarDataService */]]
    })
], SonarModule);

//# sourceMappingURL=sonar.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_data_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VstsProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VstsProjectsComponent = (function () {
    function VstsProjectsComponent(vstsDataService) {
        this.vstsDataService = vstsDataService;
        this.dynh = true;
    }
    VstsProjectsComponent.prototype.ngOnInit = function () {
        /*this.vstsDataService.projects.subscribe(list => {
          if (list.count > 0) {
            this.projects = list.value.sort((a, b) => {
              if (a.name < b.name)
                return -1;
              if (a.name > b.name)
                return 1;
              return 0;
            });
          }
        });*/
        var _this = this;
        this.vstsDataService.vstsProjectList.subscribe(function (list) {
            _this.projects = list;
        });
    };
    return VstsProjectsComponent;
}());
VstsProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Y" /* Component */])({
        selector: 'follow-vsts-projects',
        template: __webpack_require__(226),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_data_service__["a" /* VstsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__vsts_vsts_data_service__["a" /* VstsDataService */]) === "function" && _a || Object])
], VstsProjectsComponent);

var _a;
//# sourceMappingURL=vsts-projects.component.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.bundle.js.map