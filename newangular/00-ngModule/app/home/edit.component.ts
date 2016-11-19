import { Component, ViewEncapsulation } from '@angular/core';
import { MyService } from './../services/my.service';

@Component({
    selector: 'edit',
    template: `<h2>Edit Component !</h2>
    <input type="text" [(ngModel)]="myService.id"/>
              
    `
})
export class EditComponent {

    constructor(private myService: MyService) {

    }

}