import { Component, OnInit, Input } from '@angular/core';
import { InputNumberDefinitions, InputNumberProperties } from './objects/inputnumber-definitions';
//import { GridColumn } from '../dp-grid/objects/grid-definitions';

@Component({
  selector: 'dp-inputnumber',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss']
})
export class InputnumberComponent implements OnInit {

  constructor() { }

  @Input() definition: InputNumberDefinitions;

  @Input() ngModelDP: any;

  @Input() rowData: any;

  @Input() columnDefinition: any;
  //@Input() columnDefinition: GridColumn;

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new InputNumberDefinitions({ isStandAlone: false });
      if (this.columnDefinition.columnParams.params.length > 0) {
        if (this.columnDefinition.columnParams.isKeyExist(InputNumberProperties.prefix)) {
          this.definition.prefix = this.columnDefinition.columnParams.getValueByKey(InputNumberProperties.prefix);
        }

        if (this.columnDefinition.columnParams.isKeyExist(InputNumberProperties.suffix)) {
          this.definition.suffix = this.columnDefinition.columnParams.getValueByKey(InputNumberProperties.suffix);
        }

        if (this.columnDefinition.columnParams.isKeyExist(InputNumberProperties.step)) {
          this.definition.step = this.columnDefinition.columnParams.getValueByKey(InputNumberProperties.step);
        }
      }
    }
  }
}
