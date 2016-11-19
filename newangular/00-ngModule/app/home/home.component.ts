import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'my-app',
	styles: [`
  	div{
		color: white;
		border-radius: 15px;
		border: 1px solid white;
		text-align: center;
		background: black;
		margin: 15px;
	}
  `],
    template: `<h2>Parent Component !</h2>
    <hr>
    <display></display>
    <edit></edit>
              
    `
})
export class HomeComponent {

    constructor() {

    }

}