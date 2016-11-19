import { Component, ViewEncapsulation } from '@angular/core';
import { MyService } from './../services/my.service';

@Component({
    selector: 'display',
    template: `<h2>Display Component !</h2>
<input type="text" [(ngModel)]="myService.id"/>
              
    `
})
export class DisplayComponent {

    constructor(private myService: MyService) {

    }

}