import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-child',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
  	div{
		color: corflowerblue;
		border-radius: 15px;
		border: 1px solid darkseagreen;
		text-align: center;
		background: white;
		margin: 25px;
	}
  `],
  template: `
    <div>
		<h2>Child Component</h2>
    </div>
  `
})
export class ChildComponent { 
	constructor(){
		console.log('In app component');
	}
}

