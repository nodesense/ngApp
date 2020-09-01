import { Component, 
          OnInit,

          Input,
          Output,
          EventEmitter
        
        } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // [(likes)]=""

  @Input()
  likes: number;

  // output ==> input + "Change"
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incr() {
    this.likesChange.emit(this.likes + 1);
  }

  decr() {
    this.likesChange.emit(this.likes - 1);
  }

}
