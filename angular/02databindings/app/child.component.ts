import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
        selector: 'my-child',
        template: `
            <hr>
            <h2>Child Component</h2>
    <p>Country is : {{country}}</p>
    <br>
   
<select #c (change)="handleChange(c.value)">
    <option *ngFor="let city of cities" value="{{city}}">{{city}}</option>
            </select>
    {{c.value}}
        `
        
        })
export class ChildComponent{
    
    @Output('cityChanged') cityChanged: EventEmitter = new EventEmitter() ;
    
handleChange(city){
    console.log(city)
    this.cityChanged.emit(city);
}    

ngOnChanges(){
    console.log("Property changed" + this.country)
if(this.country === 'India'){
this.cities = this.indiacities;
}   
else{
    this.cities = this.uscities
}    
}    
    
cities: Array<string>    
uscities: Array<string> =['NY', 'LV'];
indiacities: Array<string> = ['Delhi', 'Mumbai'];    
@Input ('country') country: string = "default"
    
}