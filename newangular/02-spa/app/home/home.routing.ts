import { RouterModule, Routes } from "@angular/router";

import { DisplayComponent } from "./display.component";
import { EditComponent } from "./edit.component";
import { LoginComponent } from "./login.component";
import { WelcomeComponent } from "./welcome.component";


const APP_ROUTES: Routes = [
    { path: '', component: DisplayComponent },
    { path: 'edit', component: EditComponent}
    { path: 'login', component: LoginComponent}
    { path: 'welcome', component: WelcomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
