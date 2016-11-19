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
var Employee = (function () {
    function Employee(name, role) {
        this.name = name;
        this.role = role;
    }
    return Employee;
}());
exports.Employee = Employee;
var MyService = (function () {
    function MyService() {
        this.employees = [];
        this.id = 0;
        var emp1 = new Employee('Ravi', 'IT Manager');
        var emp2 = new Employee('Jasmine', 'Admin');
        this.employees.push(emp1);
        this.employees.push(emp2);
    }
    MyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MyService);
    return MyService;
}());
exports.MyService = MyService;

//# sourceMappingURL=my.service.js.map
