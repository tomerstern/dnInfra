import { Component, OnInit, Input } from '@angular/core';
import { ButtonDefinitions } from './objects/button-definitions';

@Component({
  selector: 'dp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input()
  definition: ButtonDefinitions;

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new ButtonDefinitions({ label: 'Click' });
    }
  }

  clickMe() { }

}
