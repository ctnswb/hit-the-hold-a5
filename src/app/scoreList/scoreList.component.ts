import { Component } from '@angular/core';
import { Score } from './score.model';

@Component({
  selector: 'score-list',
  templateUrl: './scoreList.component.html'
})
export class scoreListComponent {
  scores: Score[] = [
      new Score('Candice', '10.5'),
      new Score('Michael', '8.2')
    ];
}