import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'name-input',
  templateUrl: './nameInput.component.html'
})
export class nameInputComponent {
  @Output() nameEntered = new EventEmitter<String>();
  newPlayerName: String;

  onEnterName() {
    this.nameEntered.emit(this.newPlayerName);
    this.newPlayerName = "";
  }

}