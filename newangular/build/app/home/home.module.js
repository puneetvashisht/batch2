"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var home_component_1 = require("./home.component");
var display_component_1 = require("./display.component");
var edit_component_1 = require("./edit.component");
var my_service_1 = require('./../services/my.service');
var forms_1 = require('@angular/forms');
var HomeModule = (function () {
    function HomeModule() {
        console.log('In Home module');
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                //provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [home_component_1.HomeComponent, display_component_1.DisplayComponent, edit_component_1.EditComponent],
            bootstrap: [home_component_1.HomeComponent],
            providers: [my_service_1.MyService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=home.module.js.map
