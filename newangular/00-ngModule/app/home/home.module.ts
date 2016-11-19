import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeComponent } from "./home.component";
import { DisplayComponent } from "./display.component";
import { EditComponent } from "./edit.component";
import { MyService } from './../services/my.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    
    imports: [
    //provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc
    BrowserModule,
      FormsModule  
  ],
  declarations: [HomeComponent, DisplayComponent,EditComponent],
  bootstrap: [ HomeComponent ],
   providers: [MyService]

   
})
export class HomeModule {
	constructor(){
		console.log('In Home module');
	}

}