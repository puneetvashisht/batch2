import { Component, ViewEncapsulation } from '@angular/core';
import { MyService } from './../services/my.service';


@Component({
    selector: 'display',
    template: `<h4>Display Component !</h4>
    <button (click)="myService.fetchEmployees()">Load Data</button>
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


    
    
    /*this.http.get('/dummydb/foods.json')
		  .map((res:Response) => res.json())
		  .subscribe(
			data => { 
                console.log(data);
                this.foods = data;    
            },
			err => console.error(err),
			() => console.log('done')
		  );
	  }*/

    
/*extractData(Response res){
    console.log(res.json());
}  */  
    
constructor(private myService: MyService) {

    }

    
    
    
    
    
    
    
    
    
    
}