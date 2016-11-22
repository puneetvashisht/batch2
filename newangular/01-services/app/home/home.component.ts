import { Component, ViewEncapsulation } from '@angular/core';
import {NewService, IService, NormalEngine, PlaneEngine, Engine} from './../services/new.service';
 


@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['home.component.css'],
    providers: [,
        {provide: NewService, useExisting: IService}
        
        {provide: IService, useValue: 
        {name: 'test', 
            doSomething: function(){console.log('test value')}
        }},
    
{
provide: Engine,   
useFactory: (service: IService)=> {
    console.log(service.name)
if(service.name == "newservice"){
     return new PlaneEngine();
}
else{
     return new NormalEngine();
}
    
   
    },
        deps: [IService]        
}
    
    ],
    templateUrl: './home.component.html'   
   
})
export class HomeComponent {

constructor(private _service : IService, private _engine: Engine) {

    }

}