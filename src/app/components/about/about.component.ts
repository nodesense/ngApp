import { LoggerService } from './../../services/logger.service';
import { HighlightDirective } from './../../shared/directives/highlight.directive';
import { Component, OnInit
        , ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   members:string[] = ['Venkat', 'Krish'];  
   show: boolean = true;

   aboutLikes: number = 100;

  isMouseOver: boolean = false;

  myColor: string = 'lightgreen'

  @ViewChild("memberName")
  inputElement: ElementRef;

  @ViewChild("p1")
  p1Element: ElementRef;

  // access directive inst
  @ViewChild("highlight1")
  highlight: HighlightDirective;

  constructor(private logger: LoggerService) { 
   // throw new Error("Boom about cons");

  }

  ngOnInit() {
    this.p1Element.nativeElement.textContent = 'from TS';
    this.inputElement.nativeElement.focus(); // set the cursor

    //TODO: 
    console.log("Dir ", this.highlight.color);
    this.highlight.setColor('blue');

    this.logger.error("Theme not set");
  }

  empty() {
    this.members = [];
  }

  addMember(name: string) {
     
    this.members.push(name);
  }

  throwError() {
    throw new Error("Unknown in remote location");
  }

}
