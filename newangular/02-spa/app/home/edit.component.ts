import { Component, ViewEncapsulation } from '@angular/core';
import { MyService, Employee } from './../services/my.service';
import { LogService } from './../services/log.service';
import {Router} from '@angular/router'


@Component({
    selector: 'edit',
    template: `<h2>Edit Component !</h2>
    <input type="text" [(ngModel)]="employee.name"/>
    <input type="text" [(ngModel)]="employee.role"/>
    <button (click)="addEmployee()">Add Employee</button>
    
    <hr>
    
    <button (click)="onNavigate()">Programatic Navigation</button>
              
    `
})
export class EditComponent {
    
    employee: Employee = new Employee('','');
    
    addEmployee(){
        this.logService.log(this.employee)
        this.myService.employees.push(this.employee)
    }
    
    constructor(private myService: MyService, private logService: LogService,private router: Router) {

    }
    
    
    onNavigate() {
        this.router.navigate(['/']);
    }

}