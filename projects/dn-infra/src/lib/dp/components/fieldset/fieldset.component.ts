import { Component, OnInit, Input } from '@angular/core';
import { FieldsetDefinitions } from './objects/fieldset-definitions';

@Component({
  selector: 'dp-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent implements OnInit {

  constructor() { }

  @Input() definition: FieldsetDefinitions;

  ngOnInit(): void {
  }

}
