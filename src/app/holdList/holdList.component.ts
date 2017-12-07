import { Component, OnInit } from '@angular/core';

import { Hold } from './hold.model';

@Component({
  selector: 'hold-list',
  templateUrl: './holdList.component.html'
})
export class holdListComponent {
  holds: Hold[] = [
    new Hold('1', [200, 180], false),
    new Hold('2', [600, 200], false)
  ];

  constructor() {

  }

  ngOnInit() {

  }
}