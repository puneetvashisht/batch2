import { RouterModule, Routes } from "@angular/router";

import { DisplayComponent } from "./display.component";
import { EditComponent } from "./edit.component";


const APP_ROUTES: Routes = [
    { path: 'display', component: DisplayComponent },
    { path: 'edit', component: EditComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
