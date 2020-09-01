import { Directive,
         OnInit,
         OnDestroy,

         Input,
         Output,
         EventEmitter,

         HostListener,

         ElementRef,
         Renderer2
  } from '@angular/core';

@Directive({
  // [] must 
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnInit, OnDestroy {

  // appHighlight="lightgreen"  
  @Input("appHighlight")
  color: string;

  @Output("appHighlightChange")
  colorChange: EventEmitter<string> = new EventEmitter();

  constructor(private hostElement: ElementRef, 
             private renderer: Renderer2) { 
    console.log("Highlight directive created");
  }

  ngOnInit() {
    console.log("highlight init");
    console.log("Color ", this.color);
  }

  ngOnDestroy() {
    console.log("highlight destroy");
  }

  @HostListener('click')
  onClick() {
     console.log("Directive click");
     this.colorChange.emit("red");
  }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer
        .setStyle(this.hostElement.nativeElement,
                  'background', 
                  this.color);
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer
    .removeStyle(this.hostElement.nativeElement,
              'background');
  }

  setColor(color: string) {
    console.log('set color ', color);
    this.color = color;
  }

}
