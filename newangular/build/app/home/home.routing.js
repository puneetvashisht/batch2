"use strict";
var router_1 = require("@angular/router");
var display_component_1 = require("./display.component");
var edit_component_1 = require("./edit.component");
var login_component_1 = require("./login.component");
var welcome_component_1 = require("./welcome.component");
var APP_ROUTES = [
    { path: '', component: display_component_1.DisplayComponent },
    { path: 'edit', component: edit_component_1.EditComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);

//# sourceMappingURL=home.routing.js.map
