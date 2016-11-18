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
    
    {{c.value}}
            <my-child country="{{c.value}}"></my-child>
            
        </div>
    `,
    directives: [ChildComponent]
        
})
export class AppComponent{
countries: Array<string> = ['India', 'US']
}