import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<h3>Click image</h3>
		<div class="container">
			<img toggle src="//lorempixel.com/200/200/sports/3/" alt="">
		</div>
	`
	})
	export class AppComponent {
	}
