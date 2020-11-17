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
  // tslint:disable-next-line: component-selector
  selector: 'dp-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AC_CONTROL_VALUE_ACCESSOR]
})

export class AutocompleteComponent implements OnInit, OnChanges, ControlValueAccessor {

  val = ''; /* for ControlValueAccessor*/

  @Input() definition: AutocompleteDefinitions;
  @Input() datasource: any = [];
  @Input() required: boolean;
  ngModelDP: any;
  hasTouched = false;

  isDynamicDataLoad = false;

  @Input() rowData: any = [];
  @Input() initVal: any;
  @Input() columnDefinition: any = [];
  @Output() firstInteraction: EventEmitter<boolean> = new EventEmitter();
  @Output() getSelected: EventEmitter<any> = new EventEmitter();

  // @Input('datasource') datasource123: any = [];
  // @Input('datasource') datasource: any = [];
  // @Input('account-id') datasource: any = [];

  /*for grid start*/
  /* @Input() rowData: any = [];
  @Input() columndefinition: any = []; */
  /*for grid end*/

  // @Output() autocompleteSelectChanged: EventEmitter<string[]> = new EventEmitter();

  filteredData: any = [];

  isInited = false;

  datasource_val: string;

  ArrTable_Keys: string[] = []; /* holds the table json keys */
  ArrTable_fieldsToSearch: number[] = []; /* list of columns(index) to filter by */
  ArrTable_ColumnsStyle: string[] = [];  /* list of table columns(index) style */

  entitySelected: any;

  // ngModelVal: any;

  private _innerValue: any;

  private onChangeCallback: (_: any) => void = () => { };
  private onTouchedCallback: () => void = () => { };


  ngOnChanges(changes: SimpleChanges) {

    // if (changes.initVal && changes.initVal.previousValue === undefined) {
    //   this.setInitVal();
    // } else if (changes.initVal.previousValue !== undefined &&
    //   changes.initVal.previousValue !== changes.initVal.previousValue) {
    //   this.setInitVal(true);
    // }

    // if (changes.initVal && changes.initVal.previousValue === undefined) {
    //   // this.setInitVal();
    //   console.log('hey');
    // }

    if (this.isDynamicDataLoad) { /* if data was loades on key press / start writingthen load suggestions*/
      this.isDynamicDataLoad = false;
      this.filteredData = this.datasource;
    }
  }

  setInitVal(newVal?: boolean) {
    if (this.datasource === undefined || this.datasource.length === 0) {
      if (this.initVal !== undefined) {
        this.innerValue = this.initVal;
        this.getSelected.emit(this.innerValue);
      }
      return;
    }

    const typeOfData = typeof this.datasource[0];

    if (!this.definition.multiple) {
      if (typeOfData === 'string') {
        this.datasource.forEach(item => {
          if (item === this.initVal) {
            this.innerValue = item;
          }
        });
        // uncomment this if you want set init val which does not exist in 'suggestions'
        // if (!this.innerValue) {
        //   this.innerValue =  this.initVal;
        // }
        // console.log(this.innerValue);
      }
      if (typeOfData === 'object') {
        Object.keys(this.datasource).forEach(key => {
          if (this.datasource[key][this.definition.field] === this.initVal) {
            this.innerValue = this.datasource[key];
          }
        });
        // uncomment this if you want set init val which does not exist in 'suggestions'
        // if (!this.innerValue) {
        //   this.innerValue = { [this.definition.field]: this.initVal };
        // }
      }
    } else if (this.definition.multiple && Array.isArray(this.initVal)) {
      const arr = [];
      Object.keys(this.datasource).forEach(key => {
        if (this.initVal.includes(this.datasource[key][this.definition.field])) {
          arr.push(this.datasource[key]);
        }
        this.innerValue = arr;
      });
    } else if (this.definition.multiple && !Array.isArray(this.initVal)) {
      throw new Error('Autocomplete.ts: @input [initVal] for multi select must be an array');
    }
    // this.getSelected.emit(this.innerValue);
  }

  clear(val) {
    if (val !== null) {
      this.getSelected.emit('');
    }
  }
  emit(val) {
    if (val !== null && val !== undefined) {
      this.getSelected.emit(val);
    }
  }
  blurEmit(val) {
    // if (val === null && this.innerValue) {
    //   this.getSelected.emit(this.innerValue);
    // }
  }

  ngOnInit() {

    if (this.definition == null || this.definition === undefined) {
      // this.definition = new AutocompleteDefinitions({ isStandAlone: false });

      // this.definition = new AutocompleteDefinitions(false, 'elem_table', 'Event Code', 1, false, 1, 'ph text 3', true,
      // '', '', '', '', '');

      this.definition = new AutocompleteDefinitions({});


      if (this.columnDefinition.columnParams && this.columnDefinition.columnParams.params.length > 0) {
        this.definition = new AutocompleteDefinitions({ isStandAlone: false });

        // if (this.columnDefinition.columnParams.isKeyExist(AutocompleteProperties.isStandAlone)) {
        //   this.definition.isStandAlone = this.columnDefinition.columnParams.getValueByKey(AutocompleteProperties.isStandAlone);
        // }

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
    }
    this.setInitVal();
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

  log(a) {
    console.log('tomer');
    console.log(a);
  }

  get(event) {
    console.log(event);
  }
  constructor() { }

  // constructor(private countryService: CountryService) { }

  // clearItem(autocomplete: any) {
  //   autocomplete.value = '';
  //   autocomplete.handleDropdownClick();
  // }\

  // hey($event) {
  //   console.log($event);
  // }

  filterEntity(el, event, Loc_dp_AutocompleteType: number, Loc_dpAutocompleteMaxSuggestionsToShow: number): any[] {

    // if (!this.hasTouched2) {
    //   debugger
    //   this.hasTouched2 = true;
    //   this.firstInteraction.emit(true);
    //   this.datasource = this.definition.LateDataSource;
    // }

    if (!this.hasTouched && (this.datasource === undefined || this.datasource.length === 0)) {
      // console.log(event);
      this.hasTouched = true;
      this.datasource = this.dpAutocompleteLateDataLoadFunc();
    }

    /*
    if (this.datasource !== undefined) {

      if (this.datasource[0] === ':::') {
        this.datasource = this.dpAutocompleteLateDataLoadFunc();

        // this.datasource = this.getDynamicData(); // working

        // this.countryService.getData_iis(`http://import-iis-dev:8090/Assist/GetCountriesCode`)
        // .subscribe((data: []) => {
        //   this.datasource = data;
        // });

      }
    }*/

    if (this.datasource === undefined) {
      return;
    }



    // this.countryService.get_data('assets/EventCodes.json').then(dataForAc5 => {
    //   this.datasource = dataForAc5;
    //   console.log('GET DATA 5');
    // });

    // if (true === true) {
    //   import('/common/myjson/myfunc').then(stringHelpers => {
    //     stringHelpers.reverse('Hello World');
    //   });
    // }

    this.InitDatasourceKeys(Loc_dp_AutocompleteType);

    this.filteredData = [];

    const filtered: any[] = [];
    if (Loc_dp_AutocompleteType === 1) { /* Table */
      this.filteredData = this.filterEntityWithTable(event, Loc_dpAutocompleteMaxSuggestionsToShow);
      return this.filteredData;
    } else if (Loc_dp_AutocompleteType === 2) { /* WithImage */
      this.filteredData = this.filterEntityWithImage(event, Loc_dpAutocompleteMaxSuggestionsToShow);
      return this.filteredData;
    }

    for (let i = 0; i < this.datasource.length && filtered.length <
      Loc_dpAutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than this number of suggestions*/
      const foundedEntity = this.datasource[i];
      // this.entitySelected = foundedEntity;
      // console.log(this.datasource[i]);
      // console.log(this.definition.field);


      if (foundedEntity.name !== undefined) {
        if (foundedEntity.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          filtered.push(foundedEntity);
        }
      }
    }

    // for (let i = 0; i < this.datasource.length && filtered.length <
    //   Loc_dpAutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than this number of suggestions*/
    //   const foundedEntity = this.datasource[i];
    //   if (foundedEntity !== undefined) {
    //     if (foundedEntity[this.definition.field].toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
    //       // filtered.push(foundedEntity[this.definition.field]);
    //       filtered.push(foundedEntity);
    //     }
    //   }
    // }
    this.filteredData = filtered;
    return filtered;
  }

  filterEntityWithImage(event, Loc_dpAutocompleteMaxSuggestionsToShow: number): any[] {
    const filtered: any[] = [];
    this.filteredData = [];

    for (let i = 0; i < this.datasource.length && filtered.length <
      Loc_dpAutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than this number of suggestions*/
      const foundedEntity = this.datasource[i];
      // this.entitySelected = foundedEntity;
      this.val = foundedEntity;
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
      Loc_dpAutocompleteMaxSuggestionsToShow; i++) { /* dont want to load more than 200 suggestions*/
      const foundedEntity = this.datasource[i];
      // const foundedEntity = this.datasource["Active"];
      isFound = false;
      for (let j = 0; j < this.ArrTable_Keys.length && !isFound && this.ArrTable_fieldsToSearch.includes(j); j++) {
        /* move on all row fileds. stop looping if found match in one column. loop only on ArrTable_fieldsToSearch */
        if (i === 0) {
          filtered.push(foundedEntity); /* re insert header row */
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

  // getStyle(id) {

  // }

  // onAutocompleteonUnselect(autoComplete_value, ev) {
  //   /* for multi select */
  //   if (autoComplete_value.length) {
  //     this.getSelected.emit(autoComplete_value);
  //   } else {
  //     this.getSelected.emit('');
  //   }
  // }


  InitDatasourceKeys(tmp_dp_AutocompleteType: number) {
    /* for the first time put the datasource keys in arr */

    // console.log('in InitDatasourceKeys, isInited =  ' + this.isInited);

    if (this.isInited === true || tmp_dp_AutocompleteType !== 1) {
      return;
    }

    /* create an array of keys by the first element*/
    if (this.ArrTable_Keys.length === 0) {

      if (this.datasource === undefined) {
        return;
      }
      const jsonData = this.datasource[0];
      // tslint:disable-next-line: forin
      for (const myIndex in jsonData) {
        const key = myIndex;
        this.ArrTable_Keys.push(key);
      }
    }

    let strHeaderItem = '';
    let strPsik = '';

    if (this.definition.dp_AutocompleteTableFields !== undefined) {
      const ColumnsExtradata = this.definition.dp_AutocompleteTableFields;

      // json loop, create arrays for ColumnsStyle, fieldsToSearch
      for (const key in ColumnsExtradata) {
        if (ColumnsExtradata.hasOwnProperty(key)) {
          this.ArrTable_ColumnsStyle.push(ColumnsExtradata[key].columnStyle);
          if (ColumnsExtradata[key].ToSearch === true) {
            this.ArrTable_fieldsToSearch.push(Number(key));
          }
        }
      }

      // const p_autocomplete_ID = '' ;
      // let tableFieldsCSS = ' p-autocomplete#' + p_autocomplete_ID + ' .clsWithTable ul { ';
      //   tableFieldsCSS = tableFieldsCSS + ' li :nth-child(1) {width:100px;background-color:yellow;} ';
      //   tableFieldsCSS = tableFieldsCSS + ' } ';

    } else { /* else -  put all indexes in ArrTable_fieldsToSearch arr */
      for (let ind = 0; ind < this.ArrTable_Keys.length; ind++) {
        this.ArrTable_fieldsToSearch.push(ind);

      }
    }

    if (this.ArrTable_Keys.length) {
      this.ArrTable_Keys.forEach((item, index) => {
        // console.log(item);

        if (index > 0) {
          strPsik = ',';
        }
        // this.ArrTable_fieldsToSearch.push(index);
        strHeaderItem = strHeaderItem + strPsik + ' "' + this.ArrTable_Keys[index] + '" :  "' + this.ArrTable_Keys[index] + '" ';
      });
      // for (let ind = 0; ind < this.ArrTable_Keys.length; ind++) {
      // }
    }

    // this.ArrTable_fieldsToSearch = [0, 1, 2, 3] ;

    // const newItem = {
    //   'Module Type': 'Module Type', 'Event Code': 'Event Code', 'Eng Desc': 'Eng Desc',
    //   'Heb Desc': 'Heb Desc', 'Active': 'Active'
    // };

    const newItem = JSON.parse('{ ' + strHeaderItem + ' }');
    this.datasource.unshift(newItem); /* add as first datasource item */

    this.isInited = true;

    // console.log('5) add newItem, isInited=' + this.isInited);

  }

  onPreventSelectFirstOption(event, Loc_dp_AutocompleteType: number) {

    // if (Loc_dp_AutocompleteType !== 1) {
    //   return; /* return if not autocomplete with table inside*/
    // }
    // console.log('onMyFunc2 !!!!!!');
    // event.preventDefault();
    // event.stopPropagation();
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


  // getDynamicData() {
  //   const retData = JSON.parse('[ {"name": "Bulgaria", "code": "BG"},{ "name": "Afghanistan", "code": "AF" },
  //   { "name": "Åland Islands", "code": "AX" },{ "name": "Albania", "code": "AL" },
  // { "name": "Algeria", "code": "DZ" },{ "name": "American Samoa", "code": "AS" },
  // { "name": "Andorra", "code": "AD" } ]');
  //   return retData;
  // }


  dpAutocompleteLateDataLoadFunc() {
    // console.log('');
    // console.log(this.definition.dpAutocompleteLateDataLoadFunc);
    this.isDynamicDataLoad = true;
    return this.definition.dpAutocompleteLateDataLoadFunc();
  }



}



