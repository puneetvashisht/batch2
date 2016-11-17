import {Component,Input} from "@angular/core";
@Component({
    selector: 'my-badge',
    template: `
<button class="btn btn-primary" type="button" (click)="incrementCount()">
    {{text}} <span class="badge">{{cnt}}</span>
    </button>
    `
    
        
        })
export class BadgeComponent{
    
@Input('text') text: string = "Inbox"
@Input('count') cnt: number; 
    
incrementCount(){
    console.log("called")
    this.cnt++;
}    
     
}