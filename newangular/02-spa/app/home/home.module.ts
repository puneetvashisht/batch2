import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeComponent } from "./home.component";
import { DisplayComponent } from "./display.component";
import { EditComponent } from "./edit.component";
import { LoginComponent } from "./login.component";
import { WelcomeComponent } from "./welcome.component";
import { MyService } from './../services/my.service';
import { LogService } from './../services/log.service';
import { ReversePipe } from './../pipes/reverse.pipe';
import { FilterPipe } from './../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./home.routing";

@NgModule({
    
    imports: [
    //provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc
    BrowserModule,
     HttpModule,
      routing,
    FormsModule, ReactiveFormsModule    
  ],
    
    declarations: [HomeComponent, DisplayComponent,EditComponent, LoginComponent, WelcomeComponent, ReversePipe, FilterPipe],
  bootstrap: [ HomeComponent ],
providers: [MyService,LogService]

   
})
export class HomeModule {
	constructor(){
		console.log('In Home module');
	}

}