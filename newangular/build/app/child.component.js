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
var ChildComponent = (function () {
    function ChildComponent() {
        console.log('In app component');
    }
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'my-child',
            encapsulation: core_1.ViewEncapsulation.Native,
            styles: ["\n  \tdiv{\n\t\tcolor: corflowerblue;\n\t\tborder-radius: 15px;\n\t\tborder: 1px solid darkseagreen;\n\t\ttext-align: center;\n\t\tbackground: white;\n\t\tmargin: 25px;\n\t}\n  "],
            template: "\n    <div>\n\t\t<h2>Child Component</h2>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;

//# sourceMappingURL=child.component.js.map
