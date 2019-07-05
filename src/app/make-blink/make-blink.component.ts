import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-make-blink',
  templateUrl: './make-blink.component.html',
  styleUrls: ['./make-blink.component.css']
})
export class MakeBlinkComponent implements OnInit {
  @Input() time: number;
  visible: boolean;

  constructor() {
    this.time = 800;
    this.visible = true;
  }

  ngOnInit() {
    interval(this.time).subscribe(() => this.visible = !this.visible);
  }

}
