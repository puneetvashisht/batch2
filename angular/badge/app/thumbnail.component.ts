import {Component, Input} from '@angular/core'
import {BadgeComponent} from "./badge.component";
import {Badge} from "./badge";
@Component({
    selector: 'my-thumbnail',
    template: `
        <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="..." alt="...">
          <div class="caption">
    <h3>{{title}}</h3>
    <p>{{summary}}</p>
<p><my-badge [text]="badge.text" count="4"></my-badge>
</p>
          </div>
        </div>
      </div>
    </div>
    
    `,
    directives: [BadgeComponent]
        })

export class ThumbnailComponent{
@Input('title') title: string;    
@Input('summary') summary: string;    
abc:string = "Inbox";
badge: Badge;
badge2: Badge  = new Badge('Sent', 4);
    
    ngOnInit(){
    console.log("Initialization code");
        this.badge = new Badge("Spam" ,34);
    console.log(this.badge2.text)
    }
    
}




