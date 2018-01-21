import { Component, Input } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html'
})
export class countdownComponent {
  @Input() count: Number;
}