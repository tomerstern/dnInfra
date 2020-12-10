import { Component, OnDestroy, OnInit } from '@angular/core';

import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { Subscription } from 'rxjs';
import { DeclarationDetails, ExportCustoms } from '../../models/container';
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

  shipmentNumber: number;
  processCode: string;
  customerName: string;
  team: string;
  declarationId: string;
  version: string;
  declarationStatus: string;
  logisticStatus: string;
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
  // anything$ = null;
  constructor(public declarationService: DeclarationService, public translate: TranslateService) {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    // GET FROM TS
    // this.sub = this.declarationService.data$.subscribe((x) => {

    this.sub = this.declarationService.declarationDataSubject$.subscribe(
      (declarationData) => {
        this.declarationDetails =
          declarationData.updatedDeclaration.DeclarationDetails;
        // this.sub.unsubscribe();
      }
    );


    // WORDS WITH BEHAVIOUR SUBJECT
    // this.declarationService.declarationData.updatedDeclaration.DeclarationDetails.ShipmentNumber = 123;

    // this.declarationDetails = this.declarationService.declarationData.dataDeclaration.DeclarationDetails;
    // this.anything$ = this.declarationService.declarationDataSubject$;

    this.direction = localStorage.getItem('dDirection');

    this.declarationDetails = this.declarationService.getDeclarationDetails();
    this.exportCustoms = this.declarationService.getExportCustoms();
    this.shipmentNumber = this.declarationDetails.ShipmentNumber;
    // this.processCode = 'יצור מסחרי';
    // this.customerName = 'תעשייה אווירית';
    // this.team = 'רנדי';
    // this.declarationId = '20041363300276';
    // this.version = '1.0';
    // this.declarationStatus = 'הותר';
    // this.logisticStatus = 'זמין להתרה';
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
