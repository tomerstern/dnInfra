import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { Observable, Subscription } from 'rxjs';
import { DeclarationService } from '../../../services/declaration.service';

@Component({
  selector: 'app-tab-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
  
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  
  constructor(public declarationService  : DeclarationService, 
    public exportassistService: ExportassistService, public translate: TranslateService) { 
      declarationService.declarationDataSubject$.subscribe(data => {console.log(data);})
    }

  ngOnInit(): void {
    
  }

}
