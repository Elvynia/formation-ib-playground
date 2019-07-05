import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderHover]'
})
export class BorderHoverDirective {
  @Input('appBorderHover') borderWidth: number;
  @Input() color: string;

  constructor(private el: ElementRef) {
    this.borderWidth = 1;
    this.color = 'black';
  }

  @HostListener('mouseenter', ['$event'])
  private setBorder(event: MouseEvent) {
    let element = <HTMLElement>this.el.nativeElement;
    element.style.border = `${this.borderWidth}px solid ${this.color}`;
  }

  @HostListener('mouseleave')
  private removeBorder() {
    this.el.nativeElement.style.border = '';
  }
}
