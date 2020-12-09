import { Component, OnInit, Input, forwardRef, Provider, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TableStoreService } from '../../services/table-store.service';
import { InputtextDefinitions, InputTextMode, InputTextProperties } from './objects/inputtext-definitions';
// import { GridColumn } from '../dp-grid/objects/grid-definitions';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const TEXTINPUT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputtextComponent),
  multi: true
};

@Component({
  selector: 'dp-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss'],
  providers: [TEXTINPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputtextComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  inputTextModeEnum = InputTextMode;

  @Input() definition: InputtextDefinitions;

  @Input() ngModelDP: any;

  @Input() rowData: any;

  @Input() columnDefinition: any;

  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  private _innerValue: string;

  private onChangeCallback: (_: string) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  ngOnInit(): void {

    if (this.definition == null) {
      this.definition = new InputtextDefinitions({ isStandAlone: false });
      // if (this.columnDefinition.columnParams.params.length > 0) {

      //   if (this.columnDefinition.columnParams.isKeyExist(InputTextProperties.mode)) {
      //     this.definition.mode = this.columnDefinition.columnParams.getValueByKey(InputTextProperties.mode);
      //   }

      //   if (this.columnDefinition.columnParams.isKeyExist(InputTextProperties.floatMessage)) {
      //     this.definition.floatMessage = this.columnDefinition.columnParams.getValueByKey(InputTextProperties.floatMessage);
      //   }
      // }
    }
  }

  public get innerValue(): string {
    return this._innerValue;
  }

  public set innerValue(newValue: string) {
    this._innerValue = newValue;
    this.onChangeCallback(newValue);
  }

  public onBlur() {
    this.onTouchedCallback();
  }

  public writeValue(value: string) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


  public registerOnChange(callback: (_: string) => void) {
    this.onChangeCallback = callback;
  }


  public registerOnTouched(callback: () => void) {
    this.onTouchedCallback = callback;
  }

}
