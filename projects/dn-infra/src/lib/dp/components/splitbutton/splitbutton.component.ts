import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { SplitbuttonDefinitions, SplitbuttonProperties } from './Objects/splitbutton-definitions';


@Component({
  selector: 'dp-splitbutton',
  templateUrl: './splitbutton.component.html',
  styleUrls: ['./splitbutton.component.scss'],
  styles: [`
  :host ::ng-deep .ui-splitbutton {
      margin-right: .25em;
  }
`],
  encapsulation: ViewEncapsulation.None
})
export class SplitbuttonComponent implements OnInit {

  @Input() definition: SplitbuttonDefinitions;
  @Input() model: any = [];
  @Output() click_: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
