import {Component, Input} from "@angular/core";
@Component({
        selector: 'my-child',
        template: `
            <hr>
            <h2>Child Component</h2>
    <p>Country is : {{country}}</p>
    <br>
    <p>{{cities}}</p>
    
        `
        
        })
export class ChildComponent{

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