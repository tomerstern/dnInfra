import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { CalendarDefinitions, CalendarProperties } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { InputtextDefinitions, InputTextProperties } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { DeclarationService } from '../../../../services/declaration.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ShipmentDetailsComponent implements OnInit {

  constructor(public declarationService  : DeclarationService, public exportassistService: ExportassistService) { }

  openDate: Date;
  openDateCalendarDef: CalendarDefinitions;
  countriesData: [];
  NonManCerData: any;
  acDefDestinationCountry: AutocompleteDefinitions;
  acDefContainerType: AutocompleteDefinitions;
  fetchArr = [];
  acDefIncoTerms: AutocompleteDefinitions;
  InputTextDef: InputtextDefinitions;

  ngOnInit(): void {
    this.acDefDestinationCountry = new AutocompleteDefinitions({
       dropdown: true
     });
     this.acDefContainerType = new AutocompleteDefinitions({
      dropdown: true
    });     
    this.acDefIncoTerms = new AutocompleteDefinitions({
      dropdown: true
    });
    this.openDateCalendarDef = new CalendarDefinitions({minDate: new Date(2019, 6, 12), showTime: false});
    this.InputTextDef = new InputtextDefinitions({ size: 25 });

    // this.openDate = new Date(Number(this.declarationService.declarationData.DeclarationBox.ExportCustoms.OpenDate));
    // this.openDate = new Date(parseInt(this.declarationService.declarationData.DeclarationBox.ExportCustoms.OpenDate.substr(6)));
    // this.fetchArr.push(this.declarationService.getCountriesList());
    // this.fetchArr.push(this.declarationService.getNonManCer());
    // Promise.all(this.fetchArr).then((data: Array<any>) => {
    //   this.countriesData = data[0];
    //   this.NonManCerData = data[1];
    // }).catch(err => {
    //   console.log(err);
    // });
  }

    handleChange(res: any, id: string)
  {    
    switch (id) {      
      case 'destinationCountry':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.DestinationCountry = res.code;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.DestinationCountryName = res.name;
        break;  
      case 'containerType':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.ContainerType = res.code;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.ContainerTypeName = res.name;
        break;      
      case 'usingTypes':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.UsingType = res.code;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.UsingTypeName = res.name;
        break;     
      case 'declarationSource':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.DeclarationSource = res.code;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.DeclarationSourceName = res.name;
        break;                                 
      default:
        break;
    }
  }
}
