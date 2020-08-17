import { Component, OnInit, Input } from '@angular/core';
import {CheckboxDefinitions} from './objects/checkbox-definitions';

@Component({ 
  selector: 'dp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() definition: CheckboxDefinitions = null;
  @Input() ngModelDP: any;
  @Input() rowData: any;
  @Input() columnDefinition: any;

  constructor() { }

  ngOnInit(): void {
    if (this.definition === null) {
      this.definition = new CheckboxDefinitions({ isStandAlone: false});
      if (this.columnDefinition.columnParams.length > 0) {

        if (this.columnDefinition.columnParams.isKeyExist('binary')) {
          this.definition.binary = this.columnDefinition.columnParams.getValueByKey('binary');
        }

        if (this.columnDefinition.columnParams.isKeyExist('disabled')) {
          this.definition.disabled = this.columnDefinition.columnParams.getValueByKey('disabled');
        }
      }
    }
  }
}
