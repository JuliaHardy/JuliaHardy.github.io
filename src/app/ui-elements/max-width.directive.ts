import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core'
import { MIN_FONT, MAX_FONT } from '../app.constants'

@Directive({
  selector: '[appMaxWidth]',
})
export class MaxWidthDirective implements AfterViewChecked, AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setFontSize()
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#FFDF5C')
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex')
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'center')
    this.renderer.setStyle(this.el.nativeElement, 'margin', '0 20px')
  }

  public ngAfterViewInit() {
    this.setFontSize()
  }

  public ngAfterViewChecked() {
    this.setFontSize()
  }

  private isOverflown(): boolean {
    return (
      this.el.nativeElement.clientWidth <
      this.el.nativeElement.querySelector('p')!.clientWidth
    )
  }

  private setFontSize() {
    let overflow = false
    let i = MIN_FONT
    while (!overflow && i < MAX_FONT) {
      this.el.nativeElement.querySelector('p')!.style.fontSize = `${i}px`
      overflow = this.isOverflown()
      if (!overflow) i++
    }
    this.el.nativeElement.querySelector('p')!.style.fontSize = `${i - 1}px`
  }
}
