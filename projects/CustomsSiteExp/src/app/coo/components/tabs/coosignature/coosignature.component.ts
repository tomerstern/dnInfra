import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { Observable, Subscription } from 'rxjs';
import { CooService } from '../../../services/coo.service';
import { ExportassistService } from '../../../../core/services/exportassist.service';
import { undistributeHeight } from '@fullcalendar/core';

@Component({
  selector: 'app-coosignature',
  templateUrl: './coosignature.component.html',
  styleUrls: ['./coosignature.component.scss']
})
export class CoosignatureComponent implements OnInit {
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  @Output() callCooSaveFunction:EventEmitter<any>=new EventEmitter<any>()
  customsOfficeSelected:any;
  constructor(public cooService : CooService, public exportassistService: ExportassistService,) { 
    cooService.cooDataSubject$.subscribe(data => {console.log(data);})
  }
  autocompleteDefinition1: AutocompleteDefinitions;
  autocompleteDefinition2: AutocompleteDefinitions;
  CalendarDef1: CalendarDefinitions;
  declarationBy: string;
  stateSavingMode: number = 0;

  ngOnInit(): void {

     // this.eventsSubscription = this.events.subscribe(() => this.sendDataToParent());

      this.getDefinitions();
    }

    getDefinitions() {
      this.autocompleteDefinition1 = new AutocompleteDefinitions({
       // inputId: 'acCountryList_HeaderTab', 
        field: 'name',
        dp_AutocompleteType: 0, 
        minLength: 1, 
        dropdown: true
      });

      this.autocompleteDefinition2 = new AutocompleteDefinitions({
       // inputId: 'acCustomOfficeList_HeaderTab', 
        field: 'name',
        dp_AutocompleteType: 0, 
        minLength: 1, 
        dropdown: true
      });

      this.CalendarDef1 = new CalendarDefinitions({
        minDate: new Date(2019, 6, 12), showTime: false
      });   
         
      if( this.cooService.cooData?.CooBoxData != undefined )
      {
        if( this.cooService.cooData?.CooBoxData?.Header.COO_IsDeclaredByExporter )
          this.declarationBy = 'Exporter';

        if( this.cooService.cooData?.CooBoxData?.Header.COO_IsDeclaredByManufacturer )
          this.declarationBy = 'Manufacturer';
      }
      //this.test.row = this.cooService.cooBox.Header.COO_DateOfDeclaration;
      //alert(this.cooService.cooBox.Header.COO_DateOfDeclaration) ;
      
      //this.COO_IssuingCountry = { name: 'ISRAEL', code: this.cooService.cooBox.Header.COO_IssuingCountry };


  }

  sendDataToParent() {
    this.callCooSaveFunction.emit({name:'signature tab', success:true, obj:this.stateSavingMode});
  }

  
  handleChange(res: any, id: string)
  {
    if(res === undefined){
      return;
    }
    this.stateSavingMode = 1;
    switch (id) {
      case 'declarationBy':
        if( this.declarationBy == 'Exporter'  ){
          this.cooService.cooData.CooBoxData.Header.COO_IsDeclaredByExporter = true;
          this.cooService.cooData.CooBoxData.Header.COO_IsDeclaredByManufacturer = false;
        }
         
        if( this.declarationBy == 'Manufacturer' ){
          this.cooService.cooData.CooBoxData.Header.COO_IsDeclaredByManufacturer = true;
          this.cooService.cooData.CooBoxData.Header.COO_IsDeclaredByExporter = false;
        }
                      
        break;
      
      case 'customsHouse':
        this.cooService.cooData.CooBoxData.Header.COO_CustomsHouse = res.code;
        //this.cooService.cooData.CooBoxData.Header.COO_CustomsHouseName = res.name;
        break;

      case 'issuingCountry':
        this.cooService.cooData.CooBoxData.Header.COO_IssuingCountry = res.code;
        break;  

      case 'cityOfDeclaration':
        this.cooService.cooData.CooBoxData.Header.COO_CityOfDeclaration = res.code;
        break;  

      case 'countryOfDeclaration':
        this.cooService.cooData.CooBoxData.Header.COO_CountryOfDeclaration = res.code;
        break;  
    
      default:
        break;
    }
  }
}
