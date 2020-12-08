import { Component, OnInit, Input } from '@angular/core';
import { CooHeader } from '../../models/coo'; 
import { CooService } from '../../services/coo.service';

@Component({
  selector: 'app-coo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() jsonCooHeader: any = {};
  direction: string;

  // header: CooHeader;

  // entityNo: number;
  // cooStatus: string;
  // cooType: string;
  // cooNo: string;
  // CUSDECFile: string;
  // destination: string;
  // shipper: string;
  // CNEE: string;
  // ETD: string;
  // ATD: string;
  // CUSGTW: string;


  constructor(public cooService: CooService) {}

  ngOnInit(): void {

    // this.header = this.cooService.getCooHeader();
    // this.direction = localStorage.getItem('dDirection');
    // this.entityNo = 585895;
    // this.cooStatus = 'New';
    // this.cooStatus = this.jsonCooHeader.cooStatus;
    // this.cooType = 'ERU-1';
    // this.cooNo = 'CUS5555';
    // this.cooNo = this.header.CustomerNo;
    // this.CUSDECFile = this.jsonCooHeader.CUSDECFile ; //'1-202564/2';
    // this.destination = this.jsonCooHeader.destination ; // 'NL - Nederland';
    // this.shipper = this.jsonCooHeader.shipper; // 'CARMEL OLEFINS LTD.';
    // this.CNEE = this.header.OpenedBy;
    // this.CNEE = 'AMAFREN S.A.';
    // this.ETD = '10/12/2020';
    // this.ATD = '10/12/2020';
    // this.CUSGTW = 'N';
  }
}
