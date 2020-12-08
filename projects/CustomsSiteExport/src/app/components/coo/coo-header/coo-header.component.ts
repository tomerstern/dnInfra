import { Component, OnInit } from '@angular/core';
import { ShipmentDetail } from '../../../models/shipment';
import { ShipmentService } from '../../../services/shipment.service';
// import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';

@Component({
  selector: 'app-coo-header',
  templateUrl: './coo-header.component.html',
  styleUrls: ['./coo-header.component.scss']
})
export class CooHeaderComponent implements OnInit {

  LineNo: number;
  direction: string;
  entityNo: number;
  cooStatus: string;
  cooType: string;
  cooNo: string;
  CUSDECFile: string;
  destination: string;
  shipper: string;
  CNEE: string;
  ETD: string;
  ATD: string;
  CUSGTW: string;

  detail: ShipmentDetail;

  constructor(private shipmentService: ShipmentService) { }

  ngOnInit(): void {
    
   
    //this.detail = this.shipmentService.getShipmentDetails();

    //this.LineNo = this.shipmentService.cls_COOFormData.cooFormLineNo;
    this.direction = localStorage.getItem('dDirection');
    this.entityNo = 585895;
    //this.cooStatus =  this.shipmentService.cls_COOFormData.cooFormStatus;
    //this.cooType = this.shipmentService.cls_COOFormData.cooFormType;
    this.cooNo = 'CUS5555';
    //this.CUSDECFile = this.shipmentService.cls_COOFormData.cooShipmentKey;
    this.destination = 'NL - Nederland';
    this.shipper = 'CARMEL OLEFINS LTD.';
    this.CNEE = 'AMAFREN S.A.';
    this.ETD = '10/12/2020';
    this.ATD = '10/12/2020';
    this.CUSGTW = 'N';
  }

}


/*
<table class="HeaderTable1" cellspacing="5" dir={{direction}}>
    <tr>
        <td class="HeaderBG1">
            Entity No
            <!-- {{ 'coo.entityNo' | translate  }} -->
        </td>
        <td class="HeaderBG1">
            <label>
                {{entityNo}}
            </label>
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            Coo Type
            <!-- {{ 'coo.cooType' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            <label>
                {{cooType}}
            </label>
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            CUSDEC
            <!-- {{ 'coo.CUSDECFile' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{CUSDECFile}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            Shipper
            <!-- {{ 'coo.shipper' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{shipper}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            ETD
            <!-- {{ 'coo.ETD' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{ETD}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            CUSGTW
            <!-- {{ 'coo.CUSGTW' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{CUSGTW}}
        </td>
    </tr>
    <tr>
        <td class="HeaderBG1">
            Coo Status
            <!-- {{ 'coo.cooStatus' | translate  }} -->
        </td>
        <td class="HeaderBG1">
            {{cooStatus}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            Coo No
            <!-- {{ 'coo.cooNo' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{cooNo}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            Destination
            <!-- {{ 'coo.destination' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{destination}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            CNEE
            <!-- {{ 'coo.CNEE' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{CNEE}}
        </td>
        <td width="1" class="HeaderTableDelimiter1">
            <img width="1" height="1">
        </td>
        <td>
            ATD
            <!-- {{ 'coo.ATD' | translate  }}: -->
        </td>
        <td class="HeaderBG2">
            {{ATD}}
        </td>
    </tr>
</table>
<!-- <div class="p-grid">
    <div class="p-col-12 p-md-6">
        <div class="p-grid">
            <div class="p-col-12 p-md-2">
                111111
                </div>
            <div class="p-col-12 p-md-2">
                2222222
            </div>
            <div class="p-col-12 p-md-2">
                333333
            </div>
            <div class="p-col-12 p-md-2">
                4444444
            </div>
            <div class="p-col-12 p-md-2">
            555555
            </div>
            <div class="p-col-12 p-md-2">
                66666
                </div>
        </div>
    </div>
    <div class="p-col-12 p-md-6">
    </div>
</div> -->
*/
