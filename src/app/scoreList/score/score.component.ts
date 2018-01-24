import { Component, Input } from '@angular/core';
import { Score } from '../score.model';

@Component({
  selector: 'score',
  templateUrl: './score.component.html'
})
export class scoreComponent {
  @Input() score: Score;
}