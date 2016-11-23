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
var my_service_1 = require('./../services/my.service');
var log_service_1 = require('./../services/log.service');
var router_1 = require('@angular/router');
var EditComponent = (function () {
    function EditComponent(myService, logService, router) {
        this.myService = myService;
        this.logService = logService;
        this.router = router;
        this.employee = new my_service_1.Employee('', '');
    }
    EditComponent.prototype.addEmployee = function () {
        this.logService.log(this.employee);
        this.myService.employees.push(this.employee);
    };
    EditComponent.prototype.onNavigate = function () {
        this.router.navigate(['/']);
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            template: "<h2>Edit Component !</h2>\n    <input type=\"text\" [(ngModel)]=\"employee.name\"/>\n    <input type=\"text\" [(ngModel)]=\"employee.role\"/>\n    <button (click)=\"addEmployee()\">Add Employee</button>\n    \n    <hr>\n    \n    <button (click)=\"onNavigate()\">Programatic Navigation</button>\n              \n    "
        }), 
        __metadata('design:paramtypes', [my_service_1.MyService, log_service_1.LogService, router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;

//# sourceMappingURL=edit.component.js.map
