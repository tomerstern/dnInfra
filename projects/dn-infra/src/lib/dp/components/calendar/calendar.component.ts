import { Component, OnInit, Input, ViewEncapsulation, forwardRef, Provider, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarDefinitions, CalendarProperties, SelectionMode } from './objects/calendar-definitions';

export const CALENDAR_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true
};

@Component({
  selector: 'dp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss', '../../../infralib.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CALENDAR_CONTROL_VALUE_ACCESSOR]

})
export class CalendarComponent implements OnInit, ControlValueAccessor {

  lastInputDate: Date;
  isInputByUser: boolean;
  @Input() definition: CalendarDefinitions;
  @Output() selectEvent: EventEmitter<number> = new EventEmitter();
  tempVal = 0;
  private _innerValue: any;
  constructor() { }
  @Input() columnDefinition: any;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };

  ngOnInit(): void {
    if (this.definition == null) {
      this.definition = new CalendarDefinitions({ isStandAlone: false });
      if (this.columnDefinition.columnParams.params.length > 0) {
        if (this.columnDefinition.columnParams.isKeyExist(CalendarProperties.showTime)) {
          this.definition.showTime = this.columnDefinition.columnParams.getValueByKey(CalendarProperties.showTime);
        }
      }
    }
  }

  public get innerValue(): number {
    return this._innerValue;
  }

  public set innerValue(newValue: number)
  {
    if (newValue)
    {
      var d = new Date(newValue);
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
      // d.setMinutes( d.getMinutes() - d.getTimezoneOffset() );
      this._innerValue = d;
    }
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

  public registerOnChange(callback: (_: Date) => void) {
    this.onChangeCallback = callback;
  }

  public registerOnTouched(callback: () => void) {
    this.onTouchedCallback = callback;
  }

  onInputClickOutside(input) {

    if (this.definition.selectionMode === SelectionMode.range) {
      return;
    }

    let hour: string;
    let minute: string;

    if (input === '') {
      return;
    }

    if (this.definition.showTime) {
      const time = input.split(' ')[1];
      if (time !== undefined) {
        hour = time.split(':')[0];
        minute = time.split(':')[1];
        if (!this.validateTime(hour, minute)) {
          return;
        }
      }
    }

    input = input.split(' ')[0];
    input = this.setCorrectFormat(input, '/');
    input = this.setCorrectFormat(input, '.');

    if (isNaN(+input)) {
      return;
    }

    let date = new Date();

    if (input.length === 6 || input.length === 8) {
      date = this.getValidDateMonth(input.substr(0, 2), input.substr(2, 2), input.substr(4, 4), 2500, 1900);
    } else {
      // user wrote a number and expects to get the date. e.g. he wrote -30 and expects to get the date from a month ago.
      date.setDate(date.getDate() + +input);
    }

    if (this.definition.showTime && minute !== undefined) {
      date.setHours(+hour, +minute);
    }

    this.innerValue = Number(date);
  }

  setTempVal(event) {
    this.tempVal = event;
  }

  validateTime(aHouers, aMinute) {
    if (aHouers.trim() === '' || isNaN(aHouers)) { return false; }
    if (aMinute.trim() === '' || isNaN(aMinute)) { return false; }
    if (+aHouers < 0 || +aHouers > 23) { return false; }
    if (+aMinute < 0 || +aMinute > 59) { return false; }

    return true;
  }

  // change 12/5/20 to 120520
  // change 12.5.20 to 120520
  setCorrectFormat(insertedFormat, delimiter) {
    let retVal = '';
    const temp = insertedFormat.toString().split(delimiter);
    if (temp.length !== 3) {
      retVal = insertedFormat;
      return retVal;
    }

    temp.forEach(function (ele) {
      if (ele.length === 1) {
        ele = '0' + ele;
      }
      retVal = retVal + ele;
    });

    return retVal;
  }

  // gets value formatted in 6 or 8 chars e.g. 120520 / 12052020 and changes to date object.
  getValidDateMonth(sDay, sMonth, sYear, sTopYear, sLowYear) {

    let iDay;
    let iMonth;
    let iYear;

    if (+sDay < 1 || +sDay > 31) { return null; }
    if (+sMonth < 1 || +sMonth > 12) { return null; }

    if (sDay.length > 2 || sMonth.length > 2 || sYear.length < 1 || sYear.length > 4) { return null; }

    if (parseInt(sDay, 10) <= 0 || parseInt(sDay, 10) > 31) {
      return null;
    }

    iMonth = parseInt(sMonth, 10);
    iDay = parseInt(sDay, 10);
    iYear = parseInt(sYear, 10);

    if (iDay.toString().length === 1) {
      iDay = '0' + iDay;
    }
    if (iMonth.toString().length === 1) {
      iMonth = '0' + iMonth;
    }
    if (iYear.toString().length === 1) {
      iYear = '0' + iYear;
    }

    if (iYear.toString().length === 2) {
      if (parseInt(iYear, 10) > 30) {
        iYear = 1900 + parseInt(iYear, 10);
      } else {
        iYear = 2000 + parseInt(iYear, 10);
      }
    }

    if (iYear > sTopYear || iYear < sLowYear) { return null; }
    switch (iMonth) {
      case 4 || 6 || 9 || 11:
        if (iDay > 30) { return null; }
        break;
      case 2:
        if (iMonth % 4 === 0) {
          if (iDay > 29) { return null; } else if (iDay > 28) { return null; }
        }
        break;
    }
    try {
      return new Date(iYear, iMonth - 1, iDay);
    } catch (e) { return null; }
  }
}
