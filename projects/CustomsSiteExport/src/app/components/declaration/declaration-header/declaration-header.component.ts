import { Component, OnInit } from '@angular/core';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { DeclarationDetails, ExportCustom } from '../../../models/declaration/container';
import { DeclarationService } from '../../../services/declaration.service';
@Component({
  selector: 'app-declaration-header',
  templateUrl: './declaration-header.component.html',
  styleUrls: ['./declaration-header.component.scss']
})
export class DeclarationHeaderComponent implements OnInit {

  declarationDetails: DeclarationDetails;
  exportCustom: ExportCustom;
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

  constructor(private declarationService: DeclarationService) { }


  ngOnInit(): void {
    this.direction = localStorage.getItem('dDirection');
    debugger;

    // this.declarationDetails = this.declarationService.getDeclarationDetails();
    // this.exportCustom = this.declarationService.getExportCustom();
    // this.direction = 'rtl';
    this.shipmentNumber = 111222;
    this.processCode = 'יצור מסחרי';
    this.customerName = 'תעשייה אווירית';
    this.team = 'רנדי';
    this.declarationId = '20041363300276';
    this.version = '1.0';
    this.declarationStatus = 'הותר';
    this.logisticStatus = 'זמין להתרה';
    this.isFileInProcess = true;
    this.isApprovedExporter = true;
    this.processTime = '1 ימים ו- 5 שעות';
    this.isAuthorized = true;
    this.isExporterDeposition = true;
    this.isDigitallyArchived = true;

    this.chkIsFileInProcessDefinition = new CheckboxDefinitions({disabled: true});
    this.chkIsFileInProcessChecked = true;
    this.chkIsApprovedExporterDefinition = new CheckboxDefinitions({disabled: true});
    this.chkIsAuthorizedDefinition = new CheckboxDefinitions({disabled: true});
    this.chkIsDigitallyArchivedDefinition = new CheckboxDefinitions({disabled: true});
    this.chkIsExporterDefinition = new CheckboxDefinitions({disabled: true});
  }
}
