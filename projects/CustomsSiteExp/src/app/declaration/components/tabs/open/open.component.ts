import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'projects/CustomsSiteExp/src/app/components/login/login.component';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { AutocompleteDefinitions } from '../../../../../../../dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { DeclarationService } from '../../../services/declaration.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

  constructor(public declarationService  : DeclarationService, 
    public exportassistService: ExportassistService, public translate: TranslateService) { 
      declarationService.declarationDataSubject$.subscribe(data => {console.log(data);})
    }

  acDefOperationalCustomer: AutocompleteDefinitions;
  acDefOperationalTeam: AutocompleteDefinitions;
  dataForOperationalCustomer: any[]; // Events
  selectedOperationalCustomer: string;
  selectebillCustomer: string;
  selectedOperationalTeam: string;


  getIt(event){
    console.log(event);
  }
  ngOnInit(): void {
    const ColumnsExtradata = [
      { ToSearch: true, columnStyle: 'min-width:100px;', ElementData: '' },
      { ToSearch: true, columnStyle: 'min-width:250px;', ElementData: '' },
      { ToSearch: true, columnStyle: 'min-width:300px;', ElementData: '' }
    ];

    this.acDefOperationalCustomer = new AutocompleteDefinitions({
      inputId: 'operationalCustomer', field: 'Customer_CodeName',
      dp_AutocompleteType: 1, dropdown: true, dp_AutocompleteTableFields: ColumnsExtradata
    });
    this.acDefOperationalTeam = new AutocompleteDefinitions({
       dropdown: true
     });
  }

  handleResult(res: any, id: string) {
    if (res === undefined || id === undefined) {
      return;
    }
    
    switch (id) {
      case 'operationalCustomer':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.CustomerName = res.Customer_CodeName;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.CustomerCode = res.Customer_Code;
        break;
      case 'billCustomer':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.BillToName = res.Customer_CodeName;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.BillToCode = res.Customer_Code;
        break;
      case 'operationalTeam':
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.OperationTeamName = res.name;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.OperationTeam = res.code;
        break;
    }
  }
}
