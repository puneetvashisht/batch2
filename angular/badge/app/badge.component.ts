import {Component,Input} from "@angular/core";
@Component({
    selector: 'my-badge',
    template: `
    <button class="btn btn-primary" type="button">
    {{text}} <span class="badge">{{cnt}}</span>
    </button>
    `
        
        })
export class BadgeComponent{
    
@Input('text') text: string = "Inbox"
@Input('count') cnt: number; 
     
}