import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/objects/autocomplete-definitions';
import { AutocompleteDefinitions, AutocompleteProperties } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { GlobalFunctionsService } from 'projects/CustomsSiteExp/src/app/core/services/global-functions.service';
import { CommunicationService } from '../../../core/services/communication.service';
import { InputtextDefinitions, InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { CalendarDefinitions, CalendarProperties } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions, CheckboxProperties } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { ButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/button/objects/button-definitions';
import { GridColumn, GridDefinitions, GridColumnParams, GridColumnType} from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import {
  faChevronDown, faChevronUp, faCoffee,  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons';
// import { NgForm } from '@angular/forms';
// import {FieldsetModule} from 'primeng/fieldset';
// import {FieldsetModule} from 'primeng/primeng';
@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Test5Component implements OnInit {

  isShowParams = true;
  columns1: GridColumn[];
  gridData1: any[];
  gridShipmentsQueryDefinition: GridDefinitions;

  arrFieldsetIsOpen:any[];


  collapsed1 = false; collapsed2 = false; collapsed3 = false; collapsed4 = false; 
  collapsed5 = false; collapsed6 = false; collapsed7 = false; collapsed8 = false; 

  exporterBnNumber: string[] = []; // = ['436789'];
  acDataCustomsHouseExports: string[] = []; // any={code:'', name:''};
  gridEventsDefinition: GridDefinitions;
  gridColumnTypeEnum = GridColumnType;

  team: any ; // = {code: "2", name: "BU2"};
  fromOpenDate = '';
  toOpenDate= '';
  DeclarationID = '';

  faChevronDown=faChevronDown;
  faChevronUp=faChevronUp;
  faAngleDoubleDown = faAngleDoubleDown;
  isCloseMoreExporterBnNumbers = true;
  model: any = {};

  initDepartmentByUser: any;
  UserDepartmnet: string;
  InputNumberDef: InputNumberDefinitions;
 
  acDefDepartment: AutocompleteDefinitions;acDefOperationTeam: AutocompleteDefinitions;acDefOperationalCustomer: AutocompleteDefinitions;acDefBindingCustomer: AutocompleteDefinitions;  autocompleteDefinition5: AutocompleteDefinitions;
  acDefDeclarationType: AutocompleteDefinitions;acDefProcessCode: AutocompleteDefinitions;acDefCustomsHouseExports: AutocompleteDefinitions;acDefCargoIdType: AutocompleteDefinitions; acDefIncoterms: AutocompleteDefinitions;
  acDefStorageSiteType: AutocompleteDefinitions;acDefStorageSiteCode: AutocompleteDefinitions;acDefInternalPassages: AutocompleteDefinitions;autocompleteDefinition14: AutocompleteDefinitions;  autocompleteDefinition15: AutocompleteDefinitions;
  autocompleteDefinition16: AutocompleteDefinitions;autocompleteDefinition17: AutocompleteDefinitions;autocompleteDefinition18: AutocompleteDefinitions;autocompleteDefinition19: AutocompleteDefinitions; acDefOperationTeam0: AutocompleteDefinitions;

  acDefContinent: AutocompleteDefinitions;// 12
  acDefShipmentType: AutocompleteDefinitions;// 13
  acDefIncidentallyPprotest: AutocompleteDefinitions;// 14
  acDefAInitiated: AutocompleteDefinitions;// 15
  acDefReferenceType: AutocompleteDefinitions;// 16
  acDefPreferenceDocument: AutocompleteDefinitions;// 17
  acDefCssv: AutocompleteDefinitions;// 18 

  acDefEvent1: AutocompleteDefinitions;// 19 
  acDefEvent2: AutocompleteDefinitions;// 20 
  acDefEvent3: AutocompleteDefinitions;// 21 
  acDefEvent4: AutocompleteDefinitions;// 22 
  acDefEvent5: AutocompleteDefinitions;// 23 

  btnDef1: ButtonDefinitions;

  CalendarDefFromOpenDate: CalendarDefinitions;
  CalendarDefFromETD: CalendarDefinitions;
  CalendarDefFromATD: CalendarDefinitions;
  CalendarDefToOpenDate: CalendarDefinitions;
  CalendarDefToETD: CalendarDefinitions;
  CalendarDefToATD: CalendarDefinitions;


  CalendarDef2: CalendarDefinitions;

  // CalendarDefFromEventDate1: CalendarDefinitions; CalendarDefToEventDate1: CalendarDefinitions;
  // CalendarDefFromEventDate2: CalendarDefinitions; CalendarDefToEventDate2: CalendarDefinitions;
  // CalendarDefFromEventDate3: CalendarDefinitions; CalendarDefToEventDate3: CalendarDefinitions;
  // CalendarDefFromEventDate4: CalendarDefinitions; CalendarDefToEventDate4: CalendarDefinitions;
  // CalendarDefFromEventDate5: CalendarDefinitions; CalendarDefToEventDate5: CalendarDefinitions;

  acDefDestinationCountry: AutocompleteDefinitions;

  dataForAc1: any[];dataForAc2: any[];dataForAc3: any;dataForAc4: any[];dataForAc5: any[];
  dataForAc6: any[];dataForAc7: any[];dataForAc8: any[];dataForAc9: any[];dataForAc10: any[];
  dataForAc11: any[];dataForAc12: any[];dataForAc13: any[];dataForAc14: any[];dataForAc15: any[];
  dataForAc16: any[];dataForAc17: any[];dataForAc18: any[];dataForAc19: any[];
  

  dataForAcContinent: any[];// 12
  dataForAcShipmentType: any[];// 13
  dataForAcIncidentallyPprotest: any[];// 14
  dataForAcAInitiated: any[];// 15
  dataForAcReferenceType: any[];// 16
  dataForAcPreferenceDocument: any[];// 17
  dataForAcCssv: any[];// 18
  

  dataForAcEvent1: any[];// 19 
  dataForAcEvent2: any[];// 20 
  dataForAcEvent3: any[];// 21 
  dataForAcEvent4: any[];// 22 
  dataForAcEvent5: any[];// 23 

  acDataSelected1: any;acDataSelected2: any;acDataSelected3: any;acDataSelected4: any;acDataSelected5: any;
  acDataSelected6: any;acDataSelected7: any;

  acDataSelected9: any;acDataSelected10: any;
  acDataSelected11: any;acDataSelected12: any;acDataSelected13: any;acDataSelected14: any;acDataSelected15: any;
  acDataSelected16: any;acDataSelected17: any;acDataSelected18: any;acDataSelected19: any;

  acDataSelectedDestinationCountry:  any;// 11
  acDataSelectedContinent:  any;// 12
  acDataSelectedShipmentType:  any;// 13
  acDataSelectedIncidentallyPprotest:  any;// 14
  acDataSelectedAInitiated:  any;// 15
  acDataSelectedReferenceType:  any;// 16
  acDataSelectedPreferenceDocument:  any;// 17    
  acDataSelectedCssv:  any;// 18   

  acDataSelectedEvent1:  any;// 19  
  acDataSelectedEvent2:  any;// 20  
  acDataSelectedEvent3:  any;// 21  
  acDataSelectedEvent4:  any;// 22  
  acDataSelectedEvent5:  any;// 23  


  calendarDataSelected1 = '';
  calendarDataSelected2 = '';
  calendarDataSelected3 = '';
  calendarDataSelected4 = '';
  calendarDataSelected5 = '';
  calendarDataSelected6 = '';
  calendarDataSelected7 = '';
  calendarDataSelected8 = '';
  
  res2: any;


  checkboxDefinitions: CheckboxDefinitions;

  resultData: any;

  str1='';
  openDateFrom: any;
  InputText1: InputtextDefinitions;



  //  
  constructor(private gf: GlobalFunctionsService, public translate: TranslateService, private cdref: ChangeDetectorRef ,
      public exportassistService: ExportassistService, private webAPI: CommunicationService) { }

      
  ngOnInit(): void {

    // this.getData();
    this.fieldsetsOpenStatus();
    // this.initDates();
    this.craeteEventsTable();
    this.initFields();
    this.getDefinitions();
    this.getLateData114();
  }

  fieldsetsOpenStatus() {
    this.exportassistService.getExportAssistByKey('700007')
    .then((assistData: any[]) =>{    
      if(assistData !== undefined) {        
        this.arrFieldsetIsOpen =  assistData;

        this.arrFieldsetIsOpen.forEach(item => {
          switch (item.code) {
            case '1':
              this.collapsed1 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '2':
              this.collapsed2 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '3':
              this.collapsed3 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '4':
              this.collapsed4 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '5':
              this.collapsed5 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '6':
              this.collapsed6 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '7':
              this.collapsed7 = this.gf.funcConvertToBoolean(item.name);
              break;
            case '8':
              this.collapsed8 = this.gf.funcConvertToBoolean(item.name);
                break;             
            default:
              break;
          }
        });

      }      
    });
    
  }


  initDates() {
    
    this.toOpenDate = this.gf.getdate(); 
    this.fromOpenDate = this.gf.addDays( this.toOpenDate , -30);

  }

  craeteEventsTable() {
    const columns: GridColumn[] = this.getColumns();
    this.gridEventsDefinition = new GridDefinitions({
      dataKey: 'EventNumber',
      columns,
      toolbar: true,
      selectionMode: 'single',
      exportToExcel: false,
      exportToPdf: false      
    });
  }


  getColumns() {
    const columns: GridColumn[] = [];
    const columnParams1: GridColumnParams = new GridColumnParams();
    columnParams1.addParam(AutocompleteProperties.dp_AutocompleteType, 0);
    columnParams1.addParam(AutocompleteProperties.multiple, false);
    columnParams1.addParam(AutocompleteProperties.dropdown, true);
    
    const column1 = new GridColumn({
      headername: this.translate.instant('event'), fieldname: 'name', fieldCode: 'code',
      type: this.gridColumnTypeEnum.autocomplete, columnParams: columnParams1,
      iseditable: true,
      ColumnDatasource: this.exportassistService.eventCodesList, 
      isMandatory: true
    });
  
    columns.push(column1);

    const columnParams2: GridColumnParams = new GridColumnParams();
    columnParams2.addParam(CheckboxProperties.disabled, 'true');
    const column2 = new GridColumn({
      headername: this.translate.instant('included') + ' / ' + this.translate.instant('notIncluded'),
      fieldname: 'IsActive',
      columnParams: columnParams2,
      type: this.gridColumnTypeEnum.checkbox,
      iseditable: true
    });
    columns.push(column2);


    const columnParams3: GridColumnParams = new GridColumnParams();
    columnParams3.addParam(CalendarProperties.showTime, false);
    const column3 = new GridColumn({
      headername: this.translate.instant('fromEventDate'), fieldname: 'DateAdded', type: this.gridColumnTypeEnum.calendar,
      columnParams: columnParams3, iseditable: true
    });
    columns.push(column3);


    const columnParams4: GridColumnParams = new GridColumnParams();
    columnParams4.addParam(CalendarProperties.showTime, false);
    const column4 = new GridColumn({
      headername: this.translate.instant('toEventDate'), fieldname: 'DateAdded', type: this.gridColumnTypeEnum.calendar,
      columnParams: columnParams4, iseditable: true
    });
    columns.push(column4);

    return columns;
  }

  // getColumns() {
  //   const columns: GridColumn[] = [];
  //   const columnParams1: GridColumnParams = new GridColumnParams();
  //   columnParams1.addParam(AutocompleteProperties.dp_AutocompleteType, 0);
  //   columnParams1.addParam(AutocompleteProperties.multiple, false);
  //   columnParams1.addParam(AutocompleteProperties.dropdown, true);

  //   const column1 = new GridColumn({
  //     headername: this.translate.instant('tableCustom.header1'), fieldname: 'ReferenceTypeName', fieldCode: 'ReferenceType',
  //     type: this.gridColumnTypeEnum.autocomplete, columnParams: columnParams1,
  //     iseditable: true,
  //     ColumnDatasource: this.exportassistService.referenceTypeList, 
  //     isMandatory: true
  //   });
  
  //   columns.push(column1);

  //   const columnParams2: GridColumnParams = new GridColumnParams();
  //   columnParams1.addParam(InputTextProperties.mode, 'basic');
  //   const column2 = new GridColumn({
  //     headername: this.translate.instant('tableCustom.header1'),
  //     fieldname: 'Reference',
  //     columnParams: columnParams2,
  //     iseditable: true
  //   });
  //   columns.push(column2);

  //   const columnParams5: GridColumnParams = new GridColumnParams();
  //   columnParams5.addParam(CalendarProperties.showTime, false);
  //   const column5 = new GridColumn({
  //     headername: this.translate.instant('tableCustom.header1'), fieldname: 'DateAdded', type: this.gridColumnTypeEnum.calendar,
  //     columnParams: columnParams5, iseditable: true
  //   });
  //   columns.push(column5);

  //   return columns;
  // }


  initFields() {

    // this.UserDepartmnet = 'AE';
    // this.initUserDepartment ={ name: 'Air Export FC', code: 'AE' };


    this.UserDepartmnet = 'OE';
    this.initDepartmentByUser ={  code: 'OE' };
    

  }


  // getData() {
  //   this.dataForAc1 = [{ name: 'Air Import', code: 'AI' }, { name: 'Ocean Import', code: 'OI' }];
  // }




  handleAcResult(res: any, id: number) {
    if (res === undefined || id === undefined) {
      return;
    }

    switch (id) {
      case 1:
        this.acDataSelected1 = res;
        break;
      case 2:
        this.acDataSelected2 = res;
        break;
      case 3:
        this.acDataSelected3 = res;
        break;
      case 4:
        this.acDataSelected4 = res;
        break;
      case 5:
        this.acDataSelected5 = res;
        break;
      case 6:
        this.acDataSelected6 = res;
        break;
      case 7:
        this.acDataSelected7 = res;
        break;
      case 8:
        this.acDataCustomsHouseExports = res;
        break;

      case 11:
          this.acDataSelectedDestinationCountry = res;
          break;
      case 12:
        this.acDataSelectedContinent = res;
        break;
      case 13:
          this.acDataSelectedShipmentType = res;
          break;
      case 14:
        this.acDataSelectedIncidentallyPprotest = res;
        break;
      case 15:
          this.acDataSelectedAInitiated = res;
          break;
      case 16:
        this.acDataSelectedReferenceType = res;
        break;
      case 17:
        this.acDataSelectedPreferenceDocument = res;
        break;
       case 18:
          this.acDataSelectedCssv = res;
          break;
      case 19:
        this.acDataSelectedEvent1 = res;
        break;
      case 20:
          this.acDataSelectedEvent2 = res;
          break;
      case 21:
        this.acDataSelectedEvent3 = res;
        break;
      case 22:
        this.acDataSelectedEvent4 = res;
        break;
       case 23:
          this.acDataSelectedEvent5 = res;
          break;

          

          // acDefContinent: AutocompleteDefinitions;// 12
          // acDefShipmentType: AutocompleteDefinitions;// 13
          // acDefIncidentallyPprotest: AutocompleteDefinitions;// 14
          // acDefAInitiated: AutocompleteDefinitions;// 15
          // acDefReferenceType: AutocompleteDefinitions;// 16
          // acDefPreferenceDocument: AutocompleteDefinitions;// 17       
          // acDefCssv: AutocompleteDefinitions;// 18       

    }

    // if (id === 'data3' && res !== undefined) {
    //   this.acDataSelected3 = res;
    // }

    this.cdref.detectChanges();
  }



  getDefinitions() {

    this.InputNumberDef = new InputNumberDefinitions({min:0, mode: 'currency'});

    this.acDefDepartment = new AutocompleteDefinitions({
      inputId: 'test_department', 
      field: 'name',
      dp_AutocompleteType: 0, minLength: 1
      , dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData1();
      }
    });


    // this.acDefOperationalCustomer = new AutocompleteDefinitions({
    //   inputId: 'ac3', 
    //   field: 'name',
    //   dp_AutocompleteType: 1, minLength: 1
    //   , dropdown: true
    //   , dpAutocompleteLateDataLoadFunc: () => {
    //     this.getLateData3();
    //   }
    // });

      this.acDefOperationTeam= new AutocompleteDefinitions({
             dropdown: true,
           }); 

    this.acDefOperationalCustomer = new AutocompleteDefinitions({
      inputId: 'acOperationalCustomer', 
      field: 'Customer_Code',
      dp_AutocompleteType: 1
      , dropdown: true
    });

    this.acDefBindingCustomer = new AutocompleteDefinitions({
      inputId: 'ac4', 
      field: 'Customer_Code',
      dp_AutocompleteType: 1
      , dropdown: true
    });

    this.acDefDestinationCountry = new AutocompleteDefinitions({
      inputId: 'ac11', 
      dropdown: true
    }); 

    this.CalendarDefFromOpenDate = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefFromETD = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefFromATD = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToOpenDate = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToETD = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToATD = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });

    /*
    this.CalendarDefFromEventDate1 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefFromEventDate2 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefFromEventDate3 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefFromEventDate4 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefFromEventDate5 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    
    this.CalendarDefToEventDate1 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToEventDate2 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToEventDate3 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToEventDate4 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    this.CalendarDefToEventDate5 = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });
    */
    
    this.acDefDeclarationType = new AutocompleteDefinitions({
      inputId: 'acDeclarationType', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData6();
      }
    });


    this.acDefProcessCode = new AutocompleteDefinitions({
      inputId: 'acProcessCode', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData7();
      }
    });
    

    this.acDefCustomsHouseExports = new AutocompleteDefinitions({
      inputId: 'acCustomsHouseExports', 
      field: 'name',
       dropdown: true,
       multiple: true
       ,dp_AutocompleteType: 0, minLength: 1
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData8();
      }
    });
    
    this.acDefCargoIdType = new AutocompleteDefinitions({
      inputId: 'acCargoIdType', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData9();
      }
    });
    
    this.acDefIncoterms = new AutocompleteDefinitions({
      inputId: 'acIncoterms', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData10();
      }
    });
    
    this.acDefStorageSiteType = new AutocompleteDefinitions({
      inputId: 'acStorageSiteType', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData11();
      }
    });

    this.acDefStorageSiteCode = new AutocompleteDefinitions({
      inputId: 'acStorageSiteCode', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData12();
      }
    });

    this.acDefInternalPassages = new AutocompleteDefinitions({
      inputId: 'acInternalPassages', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateData13();
      }
    });



    this.acDefContinent = new AutocompleteDefinitions({
      inputId: 'acContinent', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataContinent(); //12
      }
    });


    

    this.acDefShipmentType = new AutocompleteDefinitions({
      inputId: 'acShipmentType', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataShipmentType(); //13
      }
    });




    this.acDefIncidentallyPprotest = new AutocompleteDefinitions({
      inputId: 'acIncidentallyPprotest', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataIncidentallyPprotest(); //14
      }
    });

    this.acDefAInitiated = new AutocompleteDefinitions({
      inputId: 'acAInitiated', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataAInitiated(); //15
      }
    });

    this.acDefReferenceType = new AutocompleteDefinitions({
      inputId: 'acReferenceType', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataReferenceType(); //16
      }
    });

    this.acDefPreferenceDocument = new AutocompleteDefinitions({
      inputId: 'acPreferenceDocument', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataPreferenceDocument(); //17
      }
    });

    this.acDefCssv = new AutocompleteDefinitions({
      inputId: 'acCssv', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataCssv(); //18
      }
    });


    this.acDefEvent1 = new AutocompleteDefinitions({
      inputId: 'acEvent1', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataEvent1(); //19
      }
    });
   

    this.acDefEvent2 = new AutocompleteDefinitions({
      inputId: 'acEvent2', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataEvent2(); //20
      }
    });

    this.acDefEvent3 = new AutocompleteDefinitions({
      inputId: 'acEvent3', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataEvent3(); //21
      }
    });
   

    this.acDefEvent4 = new AutocompleteDefinitions({
      inputId: 'acEvent4', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataEvent4(); //22
      }
    });

    this.acDefEvent5 = new AutocompleteDefinitions({
      inputId: 'acEvent5', 
      field: 'name',
       dropdown: true
      , dpAutocompleteLateDataLoadFunc: () => {
        this.getLateDataEvent5(); //23
      }
    });
   


    this.checkboxDefinitions = new CheckboxDefinitions({});

    this.btnDef1 = new ButtonDefinitions({ label: this.translate.instant('search') });


    this.columns1 = this.getColumns1();

    this.gridShipmentsQueryDefinition = new GridDefinitions({
      dataKey: 'ShipmentNumber', columns: this.columns1, toolbar:true
    });


  }





  getColumns1() {
    const columns: GridColumn[] = [];

    const columnParams1: GridColumnParams = new GridColumnParams();
    const column1 = new GridColumn({
      headername: this.translate.instant('shipmentNumber'), fieldname: 'shipmentNumber', columnParams: columnParams1
    });
    columns.push(column1);

    const columnParams2: GridColumnParams = new GridColumnParams();
    const column2 = new GridColumn({
      headername: this.translate.instant('openDate'), fieldname: 'openDate', columnParams: columnParams2
    });
    columns.push(column2);

    const columnParams3: GridColumnParams = new GridColumnParams();
    const column3 = new GridColumn({
    headername: this.translate.instant('date') + ' ETD', fieldname: 'ETD', columnParams: columnParams3
    });
    columns.push(column3);

    const columnParams4: GridColumnParams = new GridColumnParams();
    const column4 = new GridColumn({
      headername: this.translate.instant('date') + ' ATD', fieldname: 'ATD', columnParams: columnParams4
    });
    columns.push(column4);

    const columnParams5: GridColumnParams = new GridColumnParams();
    const column5 = new GridColumn({
      headername: this.translate.instant('declarationId'), fieldname: 'declarationId', columnParams: columnParams5
    });
    columns.push(column5);

    return columns;
  }





  getLateData1() {

    // this.dataForAc1 = [{ name: 'Air Export FC', code: 1 }, { name: 'Ocean Export FC', code: 2 }, { name: 'Fedex Export', code: 3 }];

    // this.dataForAc1 = this.exportassistService.getExportAssistByKey('50000');

    this.exportassistService.getExportAssistByKey('50000')
    .then((assistData: any[]) =>{
      if(assistData !== undefined) {
        this.dataForAc1 = assistData;     
      }      
    });

     // assist 50000
      // this.countryService.getCountries().then(countries => {
      //   this.dataForAc4 = countries;
      // });
    }

    getLateData3() {

      // this.dataForAc3 = [{ name: 'Air Export FC', code: 1 }, { name: 'Ocean Export FC', code: 2 }, { name: 'Fedex Export', code: 3 }];

       // assist 50000
        // this.countryService.getCountries().then(countries => {
        //   this.dataForAc4 = countries;
        // });
      }

      getLateData6() {
        this.exportassistService.getExportAssistByKey('')  // ?????
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc6 =  assistData  ;        
          }      
        });

      }


      getLateData7() {
        this.exportassistService.getExportAssistByKey('601354')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc7 =  assistData  ;        
          }      
        });
      }

      getLateData8() {
        this.exportassistService.getExportAssistByKey('50000')  // ????/ 602011
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc8 =  assistData  ;        
          }      
        });
      }    



      getLateData9() {
        this.exportassistService.getExportAssistByKey('601259')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc9 =  assistData  ;        
          }      
        });
      }    

      getLateData10() {
        // // incoterms 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc10 =  assistData  ;        
          }      
        });
      }    

      getLateData11() {
        // acDefStorageSiteType 
        this.exportassistService.getExportAssistByKey('601434')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc11 =  assistData  ;        
          }      
        });
      }    
                    
      getLateData12() {
        // acDefStorageSiteCode 
        this.exportassistService.getExportAssistByKey('602012')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc12 =  assistData  ;        
          }      
        });
      }    

      getLateData13() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('602013')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAc13 =  assistData  ;        
          }      
        });
      }    

      
      getLateData114() {

        // this.dataForAc3 = [{ name: 'Air Export FC', code: 1 }, { name: 'Ocean Export FC', code: 2 }, { name: 'Fedex Export', code: 3 }];
        
        // this.exportassistService.getExportAssistByKey('700002', true)
        // .then((assistData: any) =>{          
        //   this.res2 = assistData;
        // });
        
      // console.log(this.res2);
        
        }


      
      getLateDataContinent() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcContinent  =  assistData  ;        
          }      
        });
      }    

      getLateDataShipmentType() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcShipmentType  =  assistData  ;        
          }      
        });
      }    

      getLateDataIncidentallyPprotest() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcIncidentallyPprotest  =  assistData  ;        
          }      
        });
      }      

      getLateDataAInitiated() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcAInitiated  =  assistData  ;        
          }      
        });
      }      


      getLateDataReferenceType() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcReferenceType  =  assistData  ;        
          }      
        });
      }          

      getLateDataPreferenceDocument() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcReferenceType  =  assistData  ;        
          }      
        });
      }   

      getLateDataCssv() {
        // acDefInternalPassages 
        this.exportassistService.getExportAssistByKey('')
        .then((assistData: any[]) =>{    
          if(assistData !== undefined) {
            this.dataForAcCssv  =  assistData  ;        
          }      
        });
      }   

/////////////

  getLateDataEvent1() {
    // acDefInternalPassages 
    this.exportassistService.getExportAssistByKey('')
    .then((assistData: any[]) =>{    
      if(assistData !== undefined) {
        this.dataForAcEvent1 =  assistData  ;        
      }      
    });
  }   


getLateDataEvent2() {
  // acDefInternalPassages 
  this.exportassistService.getExportAssistByKey('')
  .then((assistData: any[]) =>{    
    if(assistData !== undefined) {
      this.dataForAcEvent2 =  assistData  ;        
    }      
  });
}   


getLateDataEvent3() {
  // acDefInternalPassages 
  this.exportassistService.getExportAssistByKey('')
  .then((assistData: any[]) =>{    
    if(assistData !== undefined) {
      this.dataForAcEvent3  =  assistData  ;        
    }      
  });
}   

getLateDataEvent4() {
  // acDefInternalPassages 
  this.exportassistService.getExportAssistByKey('')
  .then((assistData: any[]) =>{    
    if(assistData !== undefined) {
      this.dataForAcEvent4  =  assistData  ;        
    }      
  });
}   


getLateDataEvent5() {
  // acDefInternalPassages 
  this.exportassistService.getExportAssistByKey('')
  .then((assistData: any[]) =>{    
    if(assistData !== undefined) {
      this.dataForAcEvent5  =  assistData  ;        
    }      
  });
}   
      
      

  onSubmit(form) {

    debugger;
    this.isShowParams = false;

    console.log(form);

    // console.log(this.model);
    // console.log(form.value);

    try {
      
      // this.webAPI.RunQuery('302', form.value)

      const formNew = this.cleanIt(form);

      this.webAPI.RunQuery('302', formNew)
        .then((data: { Status: string; result: any }) => {
          if (data.Status === 'OK') {
            if (data.result !== undefined ) {
   
              alert('got data');
              this.gridData1 = JSON.parse(data.result);
              // var elmnt = document.getElementById("element_to_scroll");
              // elmnt.scrollIntoView();             
            }
            else{
              alert('no data');
              this.gridData1 = undefined; 
            }
          }
          else {
            throw new Error(data.Status + ' : ' + data.result);
          }
        });



      }
    catch (error) {
      throw new Error(error);
    }

  }

  cleanIt(form) {

    return form;
  }

  showMoreExporterBnNumbers(){
    this.isCloseMoreExporterBnNumbers = false;
  }
  showLessExporterBnNumbers(){
    this.isCloseMoreExporterBnNumbers = true;
  }
}
