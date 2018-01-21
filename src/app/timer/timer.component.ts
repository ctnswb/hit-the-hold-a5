import { Component, Input } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class timerComponent {
  @Input() seconds : Number;
  @Input() ms : Number;
}