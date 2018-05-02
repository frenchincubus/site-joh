import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
   @HostBinding('class.open') isOpen = false;

    constructor() { }

    @HostListener('mouseover') toggleOpen () {
        this.isOpen = true;
    }

    @HostListener('mouseleave') toggle () {
      this.isOpen = false;
    }
}
