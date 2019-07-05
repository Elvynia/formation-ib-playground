import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now: Date;
  counter: Observable<number>;

  constructor() {
    this.now = new Date();
    this.counter = interval(1000);
  }
}
