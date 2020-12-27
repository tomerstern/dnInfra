import { Component, OnInit } from '@angular/core'; 
import { CooService } from '../../services/coo.service';

@Component({
  selector: 'app-coo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  direction: string;
  dateATD: string;
  dateETD: string;

  constructor(public cooService: CooService) {
    cooService.cooDataSubject$.subscribe(data => {
      
      if(data != undefined)
      {
        this.retrieveData();
        console.log(data);
      }
      
    })
  }

  retrieveData()
  {
      this.dateATD = this.cooService.fixDate(this.cooService.operationShipmentData.ATD);
      this.dateETD = this.cooService.fixDate(this.cooService.operationShipmentData.ETD);
  }
  
  ngOnInit(): void {}
    // if(this.cooService.operationShipmentData.ATD != undefined)
    // {
    //   this.dateATD = new Date(parseInt(this.cooService.operationShipmentData.ATD.substr(6))).toISOString().slice(0,10);
    // }

    // if(this.cooService.operationShipmentData.ETD != undefined)
    // {
    //   this.dateETD = new Date(parseInt(this.cooService.operationShipmentData.ETD.substr(6))).toISOString().slice(0,10);
    // }
  //}
}
