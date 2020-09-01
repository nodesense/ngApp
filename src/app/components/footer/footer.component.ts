import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, 
          Input,
          Output,
          EventEmitter
        
        } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // []
  @Input("x-company")
  company: string;

  @Input()
  date: Date;

  // Output/Event binding
  // (contactEvent)
  @Output()
  contactEvent: EventEmitter<number> = new EventEmitter();


  total: number;

  currentDateTime: Date;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("date ", typeof this.date);

    // RXJS Subscribe
    this.contactEvent
        .subscribe ( n  => {
          console.log("Contact ", n);
        })

    this.dataService.total$
                    .subscribe(n => {
                      this.total = n;
                    })

    setInterval(() => {
       this.currentDateTime = new Date();
    }, 1000);
 
  }

  contact() {
    // Publish (child)
    this.contactEvent.emit(Math.random());
  }

}
