import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { Subscription } from 'rxjs';
import { DeclarationDetails, ExportCustoms, IDeclarationData } from '../../models/container';
import { DeclarationService } from '../../services/declaration.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-declaration-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  declarationDetails: DeclarationDetails;
  exportCustoms: ExportCustoms;
  direction: string;
  isFileInProcess: boolean;
  isApprovedExporter: boolean;
  processTime: string;
  isAuthorized: boolean;
  isExporterDeposition: boolean;
  isDigitallyArchived: boolean;
  chkIsFileInProcessDefinition: CheckboxDefinitions;
  chkIsFileInProcessChecked: boolean;
  chkIsApprovedExporterDefinition: CheckboxDefinitions;
  chkIsAuthorizedDefinition: CheckboxDefinitions;
  chkIsDigitallyArchivedDefinition: CheckboxDefinitions;
  chkIsExporterDefinition: CheckboxDefinitions;
  sub: Subscription;
  constructor(public declarationService: DeclarationService, public translate: TranslateService) { }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

    this.sub = this.declarationService.declarationDataSubject$.subscribe();
    this.direction = localStorage.getItem('dDirection');

    this.isFileInProcess = true;
    this.isApprovedExporter = true;
    this.processTime = '1 ימים ו- 5 שעות';
    this.isAuthorized = true;
    this.isExporterDeposition = true;
    this.isDigitallyArchived = true;

    this.chkIsFileInProcessDefinition = new CheckboxDefinitions({
      disabled: true,
    });
    this.chkIsFileInProcessChecked = true;
    this.chkIsApprovedExporterDefinition = new CheckboxDefinitions({
      disabled: true,
    });
    this.chkIsAuthorizedDefinition = new CheckboxDefinitions({
      disabled: true,
    });
    this.chkIsDigitallyArchivedDefinition = new CheckboxDefinitions({
      disabled: true,
    });
    this.chkIsExporterDefinition = new CheckboxDefinitions({ disabled: true });
  }
}
