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
var DisplayComponent = (function () {
    /*this.http.get('/dummydb/foods.json')
          .map((res:Response) => res.json())
          .subscribe(
            data => {
                console.log(data);
                this.foods = data;
            },
            err => console.error(err),
            () => console.log('done')
          );
      }*/
    /*extractData(Response res){
        console.log(res.json());
    }  */
    function DisplayComponent(myService) {
        this.myService = myService;
    }
    DisplayComponent = __decorate([
        core_1.Component({
            selector: 'display',
            template: "<h4>Display Component !</h4>\n    <button (click)=\"myService.fetchEmployees()\">Load Data</button>\n    <input type=\"search\" #searchOnName (keyup)=\"0\" placeholder=\"Search By Name\"/>   \n<table>\n<tr *ngFor=\"let employee of myService.employees | filter: searchOnName.value\">\n    <td>{{employee.name}}</td>\n    <td>{{employee.role}}</td>\n    </tr>\n</table>\n              \n    "
        }), 
        __metadata('design:paramtypes', [my_service_1.MyService])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;

//# sourceMappingURL=display.component.js.map
