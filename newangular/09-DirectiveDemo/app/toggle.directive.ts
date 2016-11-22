import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {

	private open;
	
    ngOnInit() {
        this.open = false;
    }

    @HostBinding('class.img-circle') get setSrc() {
      return this.open;
    };
  @HostListener('click') clickEvent() {
	  console.log("Clicked image")
    this.open = true;
  }
  @HostListener('mouseleave') mouseleaveEvent() {
	  console.log("Mouseleave from image")
    this.open = false;
  }
}