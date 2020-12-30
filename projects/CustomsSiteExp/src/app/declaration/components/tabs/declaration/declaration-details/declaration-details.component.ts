import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { AutocompleteDefinitions } from 'projects/dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';
import { InputtextDefinitions } from 'projects/dn-infra/src/lib/dp/components/inputtext/objects/inputtext-definitions';
import { DeclarationService } from '../../../../services/declaration.service';

@Component({
  selector: 'app-declaration-details',
  templateUrl: './declaration-details.component.html',
  styleUrls: ['./declaration-details.component.scss']
})
export class DeclarationDetailsComponent implements OnInit {

  InputTextDef: InputtextDefinitions;
  acDefAgentRole: AutocompleteDefinitions;

  constructor(public declarationService  : DeclarationService, 
    public exportassistService: ExportassistService, public translate: TranslateService) { 
      declarationService.declarationDataSubject$.subscribe(data => {console.log(data);})
    }

  ngOnInit(): void {
    this.InputTextDef = new InputtextDefinitions({ size: 25 });
    this.acDefAgentRole = new AutocompleteDefinitions({
       dropdown: true
     });
  }

  handleResult(res: any, id: string) {

    if (res === undefined || id === undefined) {
      return;
    }
    
    switch (id) {
      case 'agentRole':
        this.declarationService.declarationData.DeclarationBox.DeclarationAgent.AgentRoleName = res.name;
        this.declarationService.declarationData.DeclarationBox.ExportCustoms.CustomerCode = res.code;
        break;
      case 'declarationType':
        this.declarationService.declarationData.DeclarationBox.DeclarationDetails.TypeName = res.name;
        this.declarationService.declarationData.DeclarationBox.DeclarationDetails.TypeCode = res.code;
        break;
      case 'previousDocumentType':
        this.declarationService.declarationData.DeclarationBox.DeclarationDetails.PreviousDocumentTypeName = res.name;
        this.declarationService.declarationData.DeclarationBox.DeclarationDetails.PreviousDocumentTypeCode = res.code;
        break;                
    }
  }

}
