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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var LoginComponent = (function () {
    function LoginComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.errorMessage = '';
    }
    LoginComponent.prototype.onSubmit = function (email, pwd) {
        var _this = this;
        console.log('http call' + email + " : " + pwd);
        var empData = { email: email, pwd: pwd };
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post('http://localhost:8000/authenticate', empData, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.sucess) {
                _this._router.navigate(['welcome']);
            }
            else {
                _this.errorMessage = 'Invalid Username/Password!!';
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n         <h1>Login</h1>\n    {{errorMessage}}\n    <input type=\"text\" placeholder=\"Enter email\" #email (keyup)=\"0\"/>\n        <input type=\"password\" #pwd (keyup)=\"0\"/>\n        <button (click)=\"onSubmit(email.value, pwd.value)\">Login</button>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
