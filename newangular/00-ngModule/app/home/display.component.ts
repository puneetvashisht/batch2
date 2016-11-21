import { Component, ViewEncapsulation } from '@angular/core';
import { MyService } from './../services/my.service';

@Component({
    selector: 'display',
    template: `<h4>Display Component !</h4>
    
    <input type="search" #searchOnName (keyup)="0" placeholder="Search By Name"/>   
<table>
<tr *ngFor="let employee of myService.employees | filter: searchOnName.value">
    <td>{{employee.name}}</td>
    <td>{{employee.role}}</td>
    </tr>
</table>
              
    `
})
export class DisplayComponent {

    constructor(private myService: MyService) {

    }

}