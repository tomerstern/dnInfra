import { Component, OnInit, Input, forwardRef, Provider, EventEmitter, Output } from '@angular/core';
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
  @Input() columnDefinition: any;
  @Output() blurEvent: EventEmitter<number> = new EventEmitter();


  constructor() { }
  private _innerValue: any;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };


  ngOnInit(): void {
 
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
