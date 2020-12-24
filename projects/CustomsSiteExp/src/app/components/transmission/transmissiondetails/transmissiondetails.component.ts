import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transmissiondetails',
  templateUrl: './transmissiondetails.component.html',
  styleUrls: ['./transmissiondetails.component.scss']
})
export class TransmissiondetailsComponent implements OnInit {

  @Input() jsonTransmissionData: any;
  constructor() { }
  DeclarationTypeName: string = "kuku";
  DeclarationID: string = "1";
  DeclarationOfficeText: string = "2";
  DeclarationStatusText: string = "3";
  LogisticStatusText: string ="4";
  FinancialStatusText: string = "5";
  HandledWorker:string = "6";
  sHeaderMessageToHTML: string;

  ngOnInit(): void {
    this.sHeaderMessageToHTML = "     תיק: 4397291 ;   הצהרה: 20041392871826";
  }



}
