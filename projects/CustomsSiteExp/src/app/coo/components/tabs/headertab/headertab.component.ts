import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CooService } from '../../../services/coo.service';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { InputNumberDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputnumber/objects/inputnumber-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { RadioButtonDefinitions } from 'projects/dn-infra/src/lib/dp/components/radiobutton/objects/radiobutton-definitions';
import { Observable, Subscription } from 'rxjs';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { TranslateService } from '@ngx-translate/core';
import { AutocompleteComponent } from 'projects/dn-infra/src/public-api';

@Component({

  selector: 'app-header',
  templateUrl: './headertab.component.html',
  styleUrls: ['./headertab.component.scss']
})
export class HeaderTabComponent implements OnInit {
  @Output() callCooSaveFunction:EventEmitter<any>=new EventEmitter<any>()

  constructor(public cooService: CooService,
              public exportassistService: ExportassistService, 
              public translate: TranslateService) {

    this.cooService.cooDataSubject$.subscribe(data => {
      console.log(data);
    })
  }
  private eventsSubscription: Subscription;
  debugMode: boolean = true;
  @Input() events: Observable<void>;
  autocompleteDefinition1: AutocompleteDefinitions;
  acDefOperationalCustomer: AutocompleteDefinitions;  
  InputTextDef: InputtextDefinitions;
  InputTextDefDis: InputtextDefinitions;
  InputNumberDef: InputNumberDefinitions;
  calendarDef: CalendarDefinitions;
  checkboxDef: CheckboxDefinitions;
  radioButtonDef: RadioButtonDefinitions;
  countriesData: [];
  transportByData: any;
  fetchArr = [];
  headerTabData: any;
  neeType: string;
  yesNoData=[];
  cumulation:string;  
  
  ngOnInit(): void {
    
       this.autocompleteDefinition1 = new AutocompleteDefinitions({
        field: 'name',
        dp_AutocompleteType: 0, 
        minLength: 1, 
        dropdown: true
      
    });
    this.acDefOperationalCustomer = new AutocompleteDefinitions({
       field: 'CustomerID',
      dp_AutocompleteType: 1, dropdown: true,// dp_AutocompleteTableFields: ColumnsExtradata
    });
    this.InputTextDef = new InputtextDefinitions({ size: 25 });
    this.InputTextDefDis = new InputtextDefinitions({ size: 25, disabled: true});
    this.InputNumberDef = new InputNumberDefinitions({});
    this.calendarDef = new CalendarDefinitions({minDate: new Date(2019, 6, 12), showTime: false});
    this.checkboxDef = new CheckboxDefinitions({});
    this.radioButtonDef = new RadioButtonDefinitions({});
    this.neeType ="CNEE";

    this.transportByData = [{ name: 'Air', code: 'Air' }, { name: 'Ocean', code: 'Ocean' }];
    this.yesNoData = [{ name: 'Yes', code: 'True' }, { name: 'No', code: 'False' }];
    
    this.initUpdatedObj();
     //this.eventsSubscription = this.events.subscribe(() => this.sendDataToParent());
  }

  COO_TradeAgreementCountry2:any;
    filteredCountries: any[];
    filterCountries(event) {
      this.filteredCountries = [];
      for(let i = 0; i < this.exportassistService.countriesList.length; i++) {
          let COO_ExporterCountry = this.exportassistService.countriesList[i];
          if (COO_ExporterCountry.name.indexOf(event.query.toLowerCase()) == 0) {
              this.filteredCountries.push(COO_ExporterCountry);
          }
      }
     } 



  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cooService.cooData.CooBoxData.Header, null, 4));
  }

  initUpdatedObj(){
    this.cooService.cooUpdatedData = {};
    this.cooService.cooUpdatedData.Header = {};
  }

  onChangeNeeType()
  {
    
    switch (this.neeType) {
      case 'CNEE':
        this.setCOO_Consignee(this.cooService.operationShipmentData.CNEEName,
                              this.cooService.operationShipmentData.CNEEAddress1,
                              this.cooService.operationShipmentData.CNEEcountry
                              )
        break;

      case 'importer':
        this.setCOO_Consignee(this.cooService.operationShipmentData.ImporterName,
                              this.cooService.operationShipmentData.ImporterAddress1,
                              this.cooService.operationShipmentData.ImporterCountry
                              )
        break;  

      case 'Notify1':
        this.setCOO_Consignee(this.cooService.operationShipmentData.Notify1Name,
                              this.cooService.operationShipmentData.Notify1Address1,
                              this.cooService.operationShipmentData.Notify1Country
                              )
        break;  
  
      case 'Notify2':
        this.setCOO_Consignee(this.cooService.operationShipmentData.Notify2Name,
                              this.cooService.operationShipmentData.Notify2Address1,
                              this.cooService.operationShipmentData.Notify2Country
                              )
        break;  

      default:
        this.setCOO_Consignee("","","")
        break; 
    }
    
  }

  setCOO_Consignee(CneeName: string , CneeAddress: string, CneeCountry: string)
  {
    this.cooService.cooData.CooBoxData.Header.COO_ConsigneeName = CneeName;
    this.cooService.cooData.CooBoxData.Header.COO_ConsigneeAddress = CneeAddress;
    this.cooService.cooData.CooBoxData.Header.COO_ConsigneeCountry = CneeCountry;
  }

  sendDataToParent() {
    // alert('this is header tab');
    this.callCooSaveFunction.emit({name:'headertab', success:true, obj:this.headerTabData});
  }

  getChanges(event){
    // console.log(event);
  }

  showUpdated(param:any){
    //alert(this.cooService.cooData.CooBoxData.Header.COO_ExporterCountry);
    //alert(param)
    
     console.log(this.exportassistService.countriesList);
     console.log(this.exportassistService.customersList);
  }

  dropdownLoader = [];
  changeDropDown(res: any, id: string)
  {
    if (res != undefined && event.type != "load"){
    switch (id) {
      case "acExporterCountry":
      this.cooService.cooData.CooBoxData.Header.COO_ExporterCountry = res.code;
        this.cooService.cooUpdatedData.Header.COO_ExporterCountry = res.code;
      break;
      case "acTradeAgreementCountry1":
        this.cooService.cooData.CooBoxData.Header.COO_TradeAgreementCountry1 = res.code;
        this.cooService.cooUpdatedData.Header.COO_TradeAgreementCountry1 = res.code;
       // this.cooService.cooData.CooBoxData.Header.COO_CustomsHouseName = res.name;
      break;
      case "acTradeAgreementCountry2":
        this.cooService.cooData.CooBoxData.Header.COO_TradeAgreementCountry2 = res.code;
        this.cooService.cooUpdatedData.Header.COO_TradeAgreementCountry2 = res.code;
      break;
      case "acTradeAgreementGroupOdCountries":
        this.cooService.cooData.CooBoxData.Header.COO_TradeAgreementGroupOfCountries = res.code;
        this.cooService.cooUpdatedData.Header.COO_TradeAgreementGroupOfCountries = res.code;
      break;
      case "acCNEECountry":
        this.cooService.cooData.CooBoxData.Header.COO_ConsigneeCountry = res.code;
        this.cooService.cooUpdatedData.Header.COO_ConsigneeCountry = res.code;
      break;
      case "acOriginCountry":
        this.cooService.cooData.CooBoxData.Header.COO_OriginCountry = res.code;
        this.cooService.cooUpdatedData.Header.COO_OriginCountry = res.code;
      break;
      case "acOriginGroupOfCountries":
        this.cooService.cooData.CooBoxData.Header.COO_OriginGroupOfCountries = res.code;
        this.cooService.cooUpdatedData.Header.COO_OriginGroupOfCountries = res.code;
      break;
      case "acDestinationCountry":
        this.cooService.cooData.CooBoxData.Header.COO_DestinationCountry = res.code;
        this.cooService.cooUpdatedData.Header.COO_DestinationCountry = res.code;
      break;
      case "acDestinationGroupOfCountries":
        this.cooService.cooData.CooBoxData.Header.COO_DestinationGroupOfCountries = res.code;
        this.cooService.cooUpdatedData.Header.COO_DestinationGroupOfCountries = res.code;
      break;
      case "acTransportBy":
        this.cooService.cooData.CooBoxData.Header.COO_Transport = res.code;
        this.cooService.cooUpdatedData.Header.COO_Transport = res.code;
      break;
      case "acCumulationCountry":
        this.cooService.cooData.CooBoxData.Header.COO_CumulationCountry = res.code;
        this.cooService.cooUpdatedData.Header.COO_CumulationCountry = res.code;
      break;
      case "acCumulationGroupOfCountries":
        this.cooService.cooData.CooBoxData.Header.COO_CumulationGroupOfCountries = res.code;
        this.cooService.cooUpdatedData.Header.COO_CumulationGroupOfCountries = res.code;
      break;
      case "acCustomer":
        this.cooService.cooData.CooBoxData.Header.CustomerNo = res.CustomerID;
        this.cooService.cooData.CooBoxData.Header.COO_ExporterName = res.CustomerName;
        this.cooService.cooUpdatedData.Header.CustomerNo = res.CustomerID;
      break;
      default:
        break;
    }
   }
  }
 
}
