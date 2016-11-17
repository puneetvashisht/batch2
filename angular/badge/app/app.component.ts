import {Component} from "@angular/core";
import {Thumbnail} from "./thumnail";

import {ThumbnailComponent} from "./thumbnail.component";
@Component({
    selector: 'my-app',
    template: `
        <div>
            <p>Some changes</p>
        
        
        <div *ngFor="let obj of list">
            
            <my-thumbnail [title]="obj.title" [summary]="obj.summary"></my-thumbnail>
        
        </div>    
            
    
        
        </div>
    `,
    directives: [ThumbnailComponent]
        
})
export class AppComponent{
    t1:Thumbnail  = new Thumbnail('AngularJS', 'JS framework by Google');
    t2:Thumbnail  = new Thumbnail('ReactJS', 'JS library by Facebook');
    list: Array<Thumbnail> = [
        this.t1,this.t2
    ]
    
}