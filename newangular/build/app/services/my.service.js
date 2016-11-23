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
var log_service_1 = require('./log.service');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Employee = (function () {
    function Employee(name, role) {
        this.name = name;
        this.role = role;
    }
    return Employee;
}());
exports.Employee = Employee;
var MyService = (function () {
    function MyService(logService, http) {
        this.logService = logService;
        this.http = http;
        this.employees = [];
        this.id = 0;
        var emp1 = new Employee('Ravi', 'IT Manager');
        var emp2 = new Employee('Jasmine', 'Admin');
        logService.log(emp1.name);
        // this.employees.push(emp1)
        //this.employees.push(emp2)
    }
    MyService.prototype.fetchEmployees = function () {
        var _this = this;
        this.http.get('/employees.json')
            .map(this.extractData)
            .subscribe(function (data) {
            console.log(data);
            _this.employees = data;
        });
    };
    MyService.prototype.extractData = function (res) {
        return res.json();
    };
    MyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [log_service_1.LogService, http_1.Http])
    ], MyService);
    return MyService;
}());
exports.MyService = MyService;

//# sourceMappingURL=my.service.js.map
