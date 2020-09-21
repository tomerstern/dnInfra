
import { Component, OnInit, Input, ViewEncapsulation, ɵConsole, forwardRef, Output, EventEmitter } from '@angular/core';
import { AutocompleteDefinitions, AutocompleteProperties } from './Objects/autocomplete-definitions';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dp-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AutocompleteComponent implements OnInit {

  val = ''; /* for ControlValueAccessor*/

  @Input() definition: AutocompleteDefinitions;
  @Input() datasource: any = [];
  ngModelDP: any;
  @Input() rowData: any = [];
  @Input() columnDefinition: any = [];
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

  ngOnInit() {


    if (this.definition == null) {
      // this.definition = new AutocompleteDefinitions({ isStandAlone: false });

      // this.definition = new AutocompleteDefinitions(false, 'elem_table', 'Event Code', 1, false, 1, 'ph text 3', true,
      // '', '', '', '', '');

      this.definition = new AutocompleteDefinitions({});


      if (this.columnDefinition.columnParams && this.columnDefinition.columnParams.length > 0) {
        this.definition = new AutocompleteDefinitions({ isStandAlone: false});
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


      }
    }
    // console.log(this.datasource);
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

  filterEntity(event, Loc_dp_AutocompleteType: number, Loc_dpAutocompleteMaxSuggestionsToShow: number): any[] {

    if (this.datasource !== undefined) {
      if (this.datasource[0] === ':::') {

        this.datasource = this.dpAutocompleteLazyDataFunc();

        // this.datasource = this.getDynamicData(); /* working */

        // this.countryService.getData_iis(`http://import-iis-dev:8090/Assist/GetCountriesCode`)
        // .subscribe((data: []) => {
        //   this.datasource = data;
        // });

      }
    }

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

    console.log('in InitDatasourceKeys, isInited =  ' + this.isInited);

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


  dpAutocompleteLazyDataFunc() {

    console.log('');
    console.log(this.definition.dpAutocompleteLazyDataFunc);

    return this.definition.dpAutocompleteLazyDataFunc();
  }

}



