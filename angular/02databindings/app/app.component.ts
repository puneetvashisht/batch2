import {Component} from "@angular/core";
import {ChildComponent} from "./child.component"
@Component({
    selector: 'my-app',
    template: `
        <div>
           <h2>Parent Component</h2>
           
    <select #c (change)="0">
    <option *ngFor="let country of countries" value="{{country}}">{{country}}</option>
            </select>
    
    City selected is: {{output}}


<my-child country="{{c.value}}" (cityChanged)="captureEvent($event)"></my-child>

    <input type="text" #t1 (keyup)="0"/>
<my-child [country]="t1.value" (countryChanged)="captureEvent($event)"></my-child>

<br>
    
            
        </div>
    `,
    directives: [ChildComponent]
        
})
export class AppComponent{
 output: string; 
    captureEvent(event){
       this.output =  event
        console.log('In capture event' + event);
    }
countries: Array<string> = ['India', 'US']

    
    
    
    
    
    
    
    
    
    
}