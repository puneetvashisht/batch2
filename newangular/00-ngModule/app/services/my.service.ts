import {Injectable} from '@angular/core';

export class Employee{
constructor(public name:string, public role:string){
    
}
}

@Injectable()
export class MyService {

employees: Array<Employee> = [];

    id = 0;

    constructor() {
    let emp1:Employee = new Employee('Ravi', 'IT Manager')
    let emp2:Employee = new Employee('Jasmine', 'Admin')
    this.employees.push(emp1)
    this.employees.push(emp2)
        
    }
	
	
	

}