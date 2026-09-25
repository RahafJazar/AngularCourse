import { AfterViewInit, Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor() {
    console.log("Hello directive")
  }

  private readonly ele = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  ngAfterViewInit(): void { //initalization
    this.renderer.addClass(this.ele.nativeElement, 'bg-warning')
  }


  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.addClass(this.ele.nativeElement, 'text-info')
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.removeClass(this.ele.nativeElement, 'text-info')
  }
}
