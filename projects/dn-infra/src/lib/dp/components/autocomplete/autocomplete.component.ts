import {
  Component, OnInit, Input, ViewEncapsulation, ɵConsole, forwardRef,
  Output, EventEmitter, Provider, OnChanges, SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoComplete } from 'primeng';
import { AutocompleteDefinitions, AutocompleteProperties } from './Objects/autocomplete-definitions';


export const AC_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteComponent),
  multi: true
};

@Component({
  selector: 'dp-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AC_CONTROL_VALUE_ACCESSOR]
})

export class AutocompleteComponent implements OnInit, OnChanges, ControlValueAccessor {

  constructor() { }
  @Input() definition: AutocompleteDefinitions = null;
  @Input() datasource: any = [];
  @Input() required: boolean = false;
  ngModelDP: any;
  hasTouched = false;

  isDynamicDataLoad = false;

  standAlone = false;
  @Input() columnDefinition: any = [];
  @Output() getSelected: EventEmitter<any> = new EventEmitter();
  filteredData: any = [];
  isInited = false;
  datasource_val: string;
  ArrTable_Keys: string[] = [];
  ArrTable_fieldsToSearch: number[] = [];
  ArrTable_ColumnsStyle: string[] = [];
  entitySelected: any;
  private _innerValue: any;
  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };
  ngOnChanges(changes: SimpleChanges) {
    if (this.isDynamicDataLoad) {
      this.isDynamicDataLoad = false;
      this.filteredData = this.datasource;
    }
  }

  clear(event) {
    //if (!this.standAlone) {
      this.getSelected.emit('');
    //}
  }

  select(event) {
    // if (!this.standAlone) {
      this.getSelected.emit(event[this.definition.field]);
    // }
  }

  ngOnInit() {
    if (!this.definition) {
      this.standAlone = false;
      this.definition = new AutocompleteDefinitions({ isStandAlone: false });
      this.definition = new AutocompleteDefinitions({});
      if (this.columnDefinition.columnParams && this.columnDefinition.columnParams.params.length > 0) {
        this.definition = new AutocompleteDefinitions({ isStandAlone: false });
        if (this.columnDefinition.columnParams.isKeyExist(AutocompleteProperties.field)) {
          this.definition.field = this.columnDefinition.columnParams.getValueByKey(AutocompleteProperties.field);
        }
        if (this.columnDefinition.columnParams.isKeyExist(AutocompleteProperties.dp_AutocompleteType)) {
          this.definition.dp_AutocompleteType = this.columnDefinition.columnParams.getValueByKey
            (AutocompleteProperties.dp_AutocompleteType);
        }
        if (this.columnDefinition.columnParams.isKeyExist(AutocompleteProperties.multiple)) {
          this.definition.multiple = this.columnDefinition.columnParams.getValueByKey(AutocompleteProperties.multiple);
        }
        if (this.columnDefinition.columnParams.isKeyExist(AutocompleteProperties.dropdown)) {
          this.definition.dropdown = this.columnDefinition.columnParams.getValueByKey(AutocompleteProperties.dropdown);
        }
        if (this.columnDefinition.columnParams.isKeyExist(AutocompleteProperties.initialValues)) {
          this.definition.initialValues = this.columnDefinition.columnParams.getValueByKey(AutocompleteProperties.initialValues);
        }
      }
    } else {
      this.standAlone = true;
    }
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
    if (!this.standAlone) {
      this.datasource.forEach(element => {
        if (element[this.definition.field] === value) {
          this.innerValue = element;
        }
      });
    } else if (this.definition.multiple) {
      this.innerValue = [this.innerValue = value];
    } else if(!this.isInited) {
      this.innerValue = value;
    }
  }

  public registerOnChange(callback: (_: any) => void) {
    this.onChangeCallback = callback;
  }

  public registerOnTouched(callback: () => void) {
    this.onTouchedCallback = callback;
  }

  filterEntity(el, event, Loc_dp_AutocompleteType: number, Loc_dpAutocompleteMaxSuggestionsToShow: number): any[] {
    // debugger
    //this.standAlone
    if (!this.hasTouched && (this.datasource === undefined || this.datasource.length === 0)) {
      this.hasTouched = true;
      this.datasource = this.dpAutocompleteLateDataLoadFunc();
    }
    if (this.datasource === undefined) {
      return;
    }
    this.InitDatasourceKeys(Loc_dp_AutocompleteType);
    this.filteredData = [];
    const filtered: any[] = [];
    if (Loc_dp_AutocompleteType === 1) {
      this.filteredData = this.filterEntityWithTable(event, Loc_dpAutocompleteMaxSuggestionsToShow);
      return this.filteredData;
    } else if (Loc_dp_AutocompleteType === 2) {
      this.filteredData = this.filterEntityWithImage(event, Loc_dpAutocompleteMaxSuggestionsToShow);
      return this.filteredData;
    }

    for (let i = 0; i < this.datasource.length && filtered.length <
      Loc_dpAutocompleteMaxSuggestionsToShow; i++) {
      const foundedEntity = this.datasource[i];

      if (foundedEntity.name !== undefined) {
        if (foundedEntity.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          filtered.push(foundedEntity);
        }
      }
    }
    this.filteredData = filtered;
    return filtered;
  }

  filterEntityWithImage(event, Loc_dpAutocompleteMaxSuggestionsToShow: number): any[] {
    const filtered: any[] = [];
    this.filteredData = [];
    for (let i = 0; i < this.datasource.length && filtered.length <
      Loc_dpAutocompleteMaxSuggestionsToShow; i++) {
      const foundedEntity = this.datasource[i];
      if (foundedEntity.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        filtered.push(foundedEntity);
      }
    }
    this.filteredData = filtered;
    return filtered;
  }

  filterEntityWithTable(event, Loc_dpAutocompleteMaxSuggestionsToShow: number): any[] {
    if (this.datasource === undefined) {
      return;
    }
    const Loc_dp_AutocompleteFieldsToFIlter = '';
    const filtered: any[] = [];
    this.filteredData = [];
    for (let i = 0, isFound = false; i < this.datasource.length && filtered.length <
      Loc_dpAutocompleteMaxSuggestionsToShow; i++) {
      const foundedEntity = this.datasource[i];
      isFound = false;
      for (let j = 0; j < this.ArrTable_Keys.length && !isFound && this.ArrTable_fieldsToSearch.includes(j); j++) {
        if (i === 0) {
          filtered.push(foundedEntity);
          isFound = true;
          continue;
        }
        if (foundedEntity[this.ArrTable_Keys[j]].toLowerCase().indexOf(event.query.toLowerCase()) === 0) { // if start with
          filtered.push(foundedEntity);
          isFound = true;
          continue;
        }
      }
    }
    this.filteredData = filtered;
    return filtered;
  }

  InitDatasourceKeys(tmp_dp_AutocompleteType: number) {
    if (this.isInited === true || tmp_dp_AutocompleteType !== 1) {
      return;
    }
    if (this.ArrTable_Keys.length === 0) {

      if (this.datasource === undefined) {
        return;
      }
      const jsonData = this.datasource[0];
      for (const myIndex in jsonData) {
        const key = myIndex;
        this.ArrTable_Keys.push(key);
      }
    }
    let strHeaderItem = '';
    let strPsik = '';
    if (this.definition.dp_AutocompleteTableFields !== undefined) {
      const ColumnsExtradata = this.definition.dp_AutocompleteTableFields;
      for (const key in ColumnsExtradata) {
        if (ColumnsExtradata.hasOwnProperty(key)) {
          this.ArrTable_ColumnsStyle.push(ColumnsExtradata[key].columnStyle);
          if (ColumnsExtradata[key].ToSearch === true) {
            this.ArrTable_fieldsToSearch.push(Number(key));
          }
        }
      }
    } else {
      for (let ind = 0; ind < this.ArrTable_Keys.length; ind++) {
        this.ArrTable_fieldsToSearch.push(ind);

      }
    }
    if (this.ArrTable_Keys.length) {
      this.ArrTable_Keys.forEach((item, index) => {
        if (index > 0) {
          strPsik = ',';
        }
        strHeaderItem = strHeaderItem + strPsik + ' "' + this.ArrTable_Keys[index] + '" :  "' + this.ArrTable_Keys[index] + '" ';
      });
    }
    const newItem = JSON.parse('{ ' + strHeaderItem + ' }');
    this.datasource.unshift(newItem);
    this.isInited = true;
  }
  onPreventSelectFirstOption(event, Loc_dp_AutocompleteType: number) {
  }
  funcConvertJsonValuesToStringArr(jsonElem: any) {
    const selected_result = [];
    let key;
    for (key in jsonElem) {
      if (jsonElem.hasOwnProperty(key)) {
        selected_result.push(jsonElem[key]);
      }
    }
    return selected_result;
  }
  dpAutocompleteLateDataLoadFunc() {
    this.isDynamicDataLoad = true;
    return this.definition.dpAutocompleteLateDataLoadFunc();
  }
}

