import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { DeclarationService } from '../../../../services/declaration.service';

@Component({
  selector: 'app-declaration-details',
  templateUrl: './declaration-details.component.html',
  styleUrls: ['./declaration-details.component.scss']
})
export class DeclarationDetailsComponent implements OnInit {

  constructor(public declarationService  : DeclarationService, 
    public exportassistService: ExportassistService, public translate: TranslateService) { 
      declarationService.declarationDataSubject$.subscribe(data => {console.log(data);})
    }

  ngOnInit(): void {
  }

}
