import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[host-template]'
})
export class HostTemplateDirective {

  data: any = "Dir";

  constructor(public viewContainerRef: ViewContainerRef) { }

}

 