import { Component, ViewEncapsulation } from '@angular/core';
import { MyService, Employee } from './../services/my.service';

@Component({
    selector: 'edit',
    template: `<h2>Edit Component !</h2>
    <input type="text" [(ngModel)]="employee.name"/>
    <input type="text" [(ngModel)]="employee.role"/>
    <button (click)="addEmployee()">Add Employee</button>
              
    `
})
export class EditComponent {
    
    employee: Employee = new Employee('','');
    
    addEmployee(){
        console.log(this.employee)
        this.myService.employees.push(this.employee)
    }
    
    constructor(private myService: MyService) {

    }

}