import { Component, OnInit, Input, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {CheckboxDefinitions} from './objects/checkbox-definitions';

export const CB_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'dp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CB_CONTROL_VALUE_ACCESSOR]

})
export class CheckboxComponent implements OnInit, ControlValueAccessor  {

  @Input() definition: CheckboxDefinitions = null;
  @Input() ngModelDP: any;
  @Input() rowData: any;
  @Input() columnDefinition: any;

  constructor() { }
  private _innerValue: any;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };


  ngOnInit(): void {
    // if (this.definition === null) {
    //   this.definition = new CheckboxDefinitions({ isStandAlone: false});
    //   if (this.columnDefinition.columnParams.length > 0) {

    //     if (this.columnDefinition.columnParams.isKeyExist('binary')) {
    //       this.definition.binary = this.columnDefinition.columnParams.getValueByKey('binary');
    //     }

    //     if (this.columnDefinition.columnParams.isKeyExist('disabled')) {
    //       this.definition.disabled = this.columnDefinition.columnParams.getValueByKey('disabled');
    //     }
    //   }
    // }
  }

  public get innerValue(): any {
    return this._innerValue;
  }

  public set innerValue(newValue: any) {
    this._innerValue = newValue;
    this.onChangeCallback(newValue);
  }

  public onBlur() {
    this.onTouchedCallback();
  }

  public writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


  public registerOnChange(callback: (_: any) => void) {
    this.onChangeCallback = callback;
  }


  public registerOnTouched(callback: () => void) {
    this.onTouchedCallback = callback;
  }
}
