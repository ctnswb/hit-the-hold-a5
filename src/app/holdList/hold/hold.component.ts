import { Component, Input} from '@angular/core';
import { Hold } from '../hold.model';

@Component({
  selector: 'hold',
  templateUrl: './hold.component.html'
})
export class holdComponent {
  @Input() hold: Hold;
}