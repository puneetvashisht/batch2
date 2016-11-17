import {Component} from "@angular/core";
import {BadgeComponent} from "./badge.component";
@Component({
    selector: 'my-app',
    template: `
        <div>
            <p>Some changes</p>
            <my-badge text="Sent" count="4"></my-badge>
            <my-badge text="Inbox" count="44"></my-badge>
        </div>
    `,
    directives: [BadgeComponent]
        
})
export class AppComponent{
    
}