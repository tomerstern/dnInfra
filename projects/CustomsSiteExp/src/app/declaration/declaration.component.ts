import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeclarationService } from './services/declaration.service';
import { Subject } from 'rxjs';
import { DeclarationKeys, DeclarationMode, IDeclarationData } from './models/container';
import { ExportassistService } from '../core/services/exportassist.service';
import { DpDialogService } from 'projects/dn-infra/src/lib/dp/components/dynamicdialog/Objects/dynamicdialog-definitions';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { ToastComponent } from 'projects/dn-infra/src/public-api';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss'],
  providers: [DpDialogService]
})

export class DeclarationComponent implements OnInit {

  showApp = false;
  constructor(public declarationService: DeclarationService, private activatedRoute: ActivatedRoute, private route: Router) {}
  fetchArr = [];
  declarationKey: DeclarationKeys = new DeclarationKeys();
  eventsSubject: Subject<void> = new Subject<void>();
  declarationMode: string = 'New';
  @ViewChild('toast') toast: ToastComponent;
  toastDefinition: ToastDefinitions;
  
  ngOnInit(): void {
    this.declarationKey.ShipmentNumber = 1;
    this.declarationKey.CusDecOrder = 1;
    this.declarationKey.DeptCode = '1'; 


// http://localhost:4262/declaration;ShipmentNumber=1;DeptCode=1;CusDecOrder=1;declarationMode=UPDATE

    this.activatedRoute.params.subscribe( async data =>
      {
        // this.checkErrorPage(data)
        if (data['declarationMode'] === undefined)
        {
            // Open error page
            this.route.navigate(['/error']);
        }
        this.declarationMode = data['declarationMode'].toString().toUpperCase();

        switch (this.declarationMode) {
          case DeclarationMode.Update:
          case DeclarationMode.New:
          {
            
            this.declarationKey = this.setAndCheckCooKey(data['ShipmentNumber'], data['DeptCode'], data['CusDecOrder']);
            if (this.declarationKey === undefined){
              this.showApp = true;
              this.route.navigate(['/error']);
            }
            
            this.declarationService.getDeclarationBoxFromServer(this.declarationKey)
            .then((response: string) => {              
              if(response != '')
              {
                this.showApp = true;
                // this.toast.dp_showToast('Error on search data:', '' + response , 'error', 4000);
              }              
            });
            // this.cooService.cooDataSubject$.subscribe((result: ICooData) => { 
            //   this.fetchArr.push(this.cooService.getCustomsOfficeList());
            //   Promise.all(this.fetchArr).then((data: Array<any>) => {
            //     this.cooService.setCustomsOffice(data[0]);
            //     this.showApp = true;
            //   });
                            
            // });
            break;
          }
          
          default: {
             break;
          }
       }
      }
    );











    // this.declarationService.getDeclarationBoxFromServer(this.declarationKey);
    this.declarationService.declarationDataSubject$.subscribe((result: IDeclarationData) => {
    
     // this.declarationService.customerList = this.getAllCustomers();
      // this.fetchArr.push(this.declarationService.getCountriesList());
      // this.fetchArr.push(this.declarationService.getCustomers());
      // Promise.all(this.fetchArr).then((data: Array<any>) => {
       
      //   this.declarationService.setCountries(data[0]);
      //   this.declarationService.setCustomers(data[1]);
      //   //console.log(data[1]);
        
      //   this.showApp = true;
          
      //  });  
    });
    // this.declarationService.declarationDataSubject$.subscribe((serverResult: string) => {
    //   console.log(serverResult);
    //   if (serverResult !== undefined) {
    //     this.showApp = true;
    //       // alert('Server error');
    //   }
    // });
  }

  setAndCheckCooKey(shipmentNumber: string, deptCode: string, cusDecOrder: string){
    
    const result: DeclarationKeys = new DeclarationKeys();
    if (shipmentNumber === undefined || !shipmentNumber.isNumber)
    {
      result.ShipmentNumber = 0;
    }
    else
    {
      result.ShipmentNumber = +shipmentNumber;
    }
    
    if (deptCode == undefined || !deptCode.isNumber)
    {
      result.DeptCode = '';
    }
    else
    {
      result.DeptCode = deptCode;
    }

    if (cusDecOrder === undefined || !cusDecOrder.isNumber)
    {
      result.CusDecOrder = 0;
    }
    else
    {
      result.CusDecOrder = +cusDecOrder;
    }

   return result;
  }

}
