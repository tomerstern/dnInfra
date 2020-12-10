import { Component, OnInit, Input, forwardRef, Provider, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonDefinitions, RadioButtonProperties } from './objects/radiobutton-definitions';

export const RADIOB_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadiobuttonComponent),
  multi: true
};

@Component({
  selector: 'dp-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  providers: [RADIOB_CONTROL_VALUE_ACCESSOR]
})

export class RadiobuttonComponent implements OnInit, ControlValueAccessor {
  @Input() definition: RadioButtonDefinitions = null;
  @Output() blurEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  public onBlur() {
    this.onTouchedCallback();
  }

  public writeValue(value: any) {
    
  }


  public registerOnChange(callback: (_: any) => void) {
    this.onChangeCallback = callback;
  }


  public registerOnTouched(callback: () => void) {
    this.onTouchedCallback = callback;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new RadioButtonDefinitions({  });
      
    }
  }

}
