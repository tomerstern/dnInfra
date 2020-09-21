import { Component, OnInit, Input, forwardRef, Provider, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TableStoreService } from '../../services/table-store.service';
import { InputtextDefinitions, InputTextMode, InputTextProperties } from './objects/inputtext-definitions';
// import { GridColumn } from '../dp-grid/objects/grid-definitions';


@Component({
  selector: 'dp-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
})
export class InputtextComponent implements OnInit {

  constructor() { }

  inputTextModeEnum = InputTextMode;

  @Input() definition: InputtextDefinitions;

  @Input() ngModelDP: any;

  @Input() rowData: any;

  @Input() columnDefinition: any;

  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {

    if (this.definition == null) {
      this.definition = new InputtextDefinitions({ isStandAlone: false });
      if (this.columnDefinition.columnParams.params.length > 0) {

        if (this.columnDefinition.columnParams.isKeyExist(InputTextProperties.mode)) {
          this.definition.mode = this.columnDefinition.columnParams.getValueByKey(InputTextProperties.mode);
        }

        if (this.columnDefinition.columnParams.isKeyExist(InputTextProperties.floatMessage)) {
          this.definition.floatMessage = this.columnDefinition.columnParams.getValueByKey(InputTextProperties.floatMessage);
        }
      }
    }
  }

}
