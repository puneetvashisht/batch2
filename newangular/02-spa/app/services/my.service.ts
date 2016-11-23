import {Injectable} from '@angular/core';
import {LogService} from './log.service'
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
export class Employee{
constructor(public name:string, public role:string){
    
}
}

@Injectable()
export class MyService {

employees: Array<Employee> = [];

    id = 0;
fetchEmployees(){
    this.http.get('/employees.json')
        .map(this.extractData)
        .subscribe(data => {
        console.log(data);
            this.employees = data;
        })
}
   
extractData(res: Response){
    return res.json();
}
    
    
    
constructor(private logService: LogService,private http: Http) {
    let emp1:Employee = new Employee('Ravi', 'IT Manager')
    let emp2:Employee = new Employee('Jasmine', 'Admin')
    logService.log(emp1.name);
        
   // this.employees.push(emp1)
    //this.employees.push(emp2)
        
    }
	
	
	

}