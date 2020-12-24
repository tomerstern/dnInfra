import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/objects/autocomplete-definitions';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
// import { GlobalFunctionsService } from 'projects/CustomsSiteExp/src/app/core/services/global-functions.service';
import { CommunicationService } from '../../../core/services/communication.service';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { ButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/button/objects/button-definitions';
import { GridColumn, GridDefinitions, GridColumnParams} from 'projects/dn-infra/src/lib/dp/components/table/objects/grid-definitions';

import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';

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

  model: any = {};

  initDepartmentByUser: any;
  UserDepartmnet: string;


  acDefDepartment: AutocompleteDefinitions;acDefOperationTeam: AutocompleteDefinitions;acDefOperationalCustomer: AutocompleteDefinitions;acDefBindingCustomer: AutocompleteDefinitions;  autocompleteDefinition5: AutocompleteDefinitions;
  acDefDeclarationType: AutocompleteDefinitions;acDefProcessCode: AutocompleteDefinitions;acDefCustomsHouseExports: AutocompleteDefinitions;acDefCargoIdType: AutocompleteDefinitions; acDefIncoterms: AutocompleteDefinitions;
  acDefStorageSiteType: AutocompleteDefinitions;acDefStorageSiteCode: AutocompleteDefinitions;acDefInternalPassages: AutocompleteDefinitions;autocompleteDefinition14: AutocompleteDefinitions;  autocompleteDefinition15: AutocompleteDefinitions;
  autocompleteDefinition16: AutocompleteDefinitions;autocompleteDefinition17: AutocompleteDefinitions;autocompleteDefinition18: AutocompleteDefinitions;autocompleteDefinition19: AutocompleteDefinitions; acDefOperationTeam0: AutocompleteDefinitions;

  btnDef1: ButtonDefinitions;

  CalendarDefFromOpenDate: CalendarDefinitions;
  CalendarDef2: CalendarDefinitions;


  acDefDestinationCountry: AutocompleteDefinitions;

  dataForAc1: any[];dataForAc2: any[];dataForAc3: any;dataForAc4: any[];dataForAc5: any[];
  dataForAc6: any[];dataForAc7: any[];dataForAc8: any[];dataForAc9: any[];dataForAc10: any[];
  dataForAc11: any[];dataForAc12: any[];dataForAc13: any[];dataForAc14: any[];dataForAc15: any[];
  dataForAc16: any[];dataForAc17: any[];dataForAc18: any[];dataForAc19: any[];
  
  acDataSelected1: any;acDataSelected2: any;acDataSelected3: any;acDataSelected4: any;acDataSelected5: any;
  acDataSelected6: any;acDataSelected7: any;acDataSelected8: any;acDataSelected9: any;acDataSelected10: any;
  acDataSelected11: any;acDataSelected12: any;acDataSelected13: any;acDataSelected14: any;acDataSelected15: any;
  acDataSelected16: any;acDataSelected17: any;acDataSelected18: any;acDataSelected19: any;


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


  columns1: GridColumn[];
  gridData1: any[];
  gridDefinition1: GridDefinitions;
  //  private gf: GlobalFunctionsService,
  constructor(public translate: TranslateService, private cdref: ChangeDetectorRef ,
      public exportassistService: ExportassistService, private webAPI: CommunicationService) { }

  ngOnInit(): void {
    // this.getData();


    this.initFields();

    this.getDefinitions();

    this.getLateData114();

  }

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
        this.acDataSelected8 = res;
        break;

      case 11:
          this.acDefDestinationCountry = res;
          break;
        
    }

    // if (id === 'data3' && res !== undefined) {
    //   this.acDataSelected3 = res;
    // }

    this.cdref.detectChanges();
  }



  getDefinitions() {

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
             dropdown: true
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
      dropdown: true,
      field: 'description'
    }); 

    this.CalendarDefFromOpenDate = new CalendarDefinitions({
      minDate: new Date(2019, 1, 1), showTime: false
    });



    
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
       dropdown: true
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




    this.checkboxDefinitions = new CheckboxDefinitions({});

    this.btnDef1 = new ButtonDefinitions({ label: this.translate.instant('search') });


    this.columns1 = this.getColumns1();

    this.gridDefinition1 = new GridDefinitions({
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


    console.log(this.exportassistService.getExportAssistByKey('50000'));



    this.exportassistService.getExportAssistByKey('50000')
    .then((assistData: any[]) =>{    
      if(assistData !== undefined) {
        this.dataForAc1 =  assistData  ;        
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

        this.exportassistService.getExportAssistByKey('602011')  // ????/
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
        // incoterms 
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



  onSubmit(form) {

    console.log(form);
    console.log(this.model);
    console.log(form.value);

    try {
      
      // this.webAPI.RunQuery('302', form.value)
      this.webAPI.RunQuery('302', form)
        .then((data: { Status: string; result: any }) => {
          if (data.Status === 'OK') {
            if (data.result !== undefined ) {
   
              alert('got data');
              this.gridData1 = JSON.parse(data.result);
       
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



}
