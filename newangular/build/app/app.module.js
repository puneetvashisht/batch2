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
var home_module_1 = require('./home/home.module');
var app_component_1 = require('./app.component');
var child_component_1 = require('./child.component');
//import { MyService } from './services/my.service';
var AppModule = (function () {
    function AppModule() {
        console.log('In App module');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                //provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc
                platform_browser_1.BrowserModule,
                home_module_1.HomeModule
            ],
            declarations: [app_component_1.AppComponent, child_component_1.ChildComponent],
            //	providers: [MyService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
