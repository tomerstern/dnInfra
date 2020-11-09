import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
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
  }

}
