import { Component, OnInit, Input, forwardRef, Provider, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputNumberDefinitions, InputNumberProperties } from './objects/inputnumber-definitions';

export const NUMINPUT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputnumberComponent),
  multi: true
};


@Component({
  selector: 'dp-inputnumber',
  templateUrl: './inputnumber.component.html',
  styleUrls: ['./inputnumber.component.scss'],
  providers: [NUMINPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputnumberComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() definition: InputNumberDefinitions;


  @Input() columnDefinition: any;
  @Output() blurEvent: EventEmitter<number> = new EventEmitter();

  private innerVal: number;

  private onChangeCallback: (_: number) => void = () => { };
  private onTouchedCallback: () => void = () => { };


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

  public get innerValue(): number {
    return this.innerVal;
  }

  public set innerValue(newValue: number) {
    this.innerVal = newValue;
    this.onChangeCallback(newValue);
  }

  public onBlur() {
    this.onTouchedCallback();
  }

  public writeValue(value: number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


  public registerOnChange(callback: (_: number) => void) {
    this.onChangeCallback = callback;
  }


  public registerOnTouched(callback: () => void) {
    this.onTouchedCallback = callback;
  }

}
