"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IService = (function () {
    function IService() {
    }
    return IService;
}());
exports.IService = IService;
var core_1 = require('@angular/core');
var NewService = (function () {
    function NewService() {
        this.name = 'newservice';
    }
    NewService.prototype.doSomething = function () {
        console.log('does something');
    };
    NewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NewService);
    return NewService;
}());
exports.NewService = NewService;
var Engine = (function () {
    function Engine() {
    }
    Engine = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Engine);
    return Engine;
}());
exports.Engine = Engine;
var NormalEngine = (function (_super) {
    __extends(NormalEngine, _super);
    function NormalEngine() {
        _super.apply(this, arguments);
    }
    NormalEngine.prototype.start = function () {
        console.log('start normal engine');
    };
    NormalEngine = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NormalEngine);
    return NormalEngine;
}(Engine));
exports.NormalEngine = NormalEngine;
var PlaneEngine = (function (_super) {
    __extends(PlaneEngine, _super);
    function PlaneEngine() {
        _super.apply(this, arguments);
    }
    PlaneEngine.prototype.start = function () {
        console.log('start plane engine');
    };
    PlaneEngine = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlaneEngine);
    return PlaneEngine;
}(Engine));
exports.PlaneEngine = PlaneEngine;

//# sourceMappingURL=new.service.js.map
