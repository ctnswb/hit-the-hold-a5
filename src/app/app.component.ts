import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  player: String;
  count: Number = 3;
  seconds: Number = 0;
  ms: Number = 0;

  onPlayerEntered(name) {
    this.player = name;
  }
}
