import {Pipe, PipeTransform} from "@angular/core"; 
import {Employee} from '../services/my.service'

@Pipe({
        name: 'filter'
        })

export class FilterPipe implements PipeTransform{
    
transform(employees: any, ...args: any[]) : any{
let emps: Array<Employee> = [];
    console.log(args[0])
    for(let employee of employees ){
    console.log(employee);
    if(employee.name.startsWith(args[0])){
        emps.push(employee)
    }
        
    }
    
    return emps;
}
}