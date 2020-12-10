import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'projects/CustomsSiteExp/src/app/components/login/login.component';
import { ExportassistService } from 'projects/CustomsSiteExp/src/app/core/services/exportassist.service';
import { AutocompleteDefinitions } from '../../../../../../../dn-infra/src/lib/dp/components/autocomplete/Objects/autocomplete-definitions';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

  constructor(private exportassistService: ExportassistService) { }

  acDefOperationalCustomer: AutocompleteDefinitions;
  dataForOperationalCustomer: any[]; // Events

  ngOnInit(): void {
    this.acDefOperationalCustomer = new AutocompleteDefinitions({
      inputId: 'elem_table5', field: 'Event Code',
      dp_AutocompleteType: 1, dropdown: true
    });
    // this.exportassistService.getAllCustomers().then(x => {
    //   debugger
    //   this.dataForOperationalCustomer = x;
    // });
    try {
      this.exportassistService.getAllCustomers()
        .then((data: { Status: string; result: any }) => {
          if (data.Status === 'OK') {
            if (data.result !== undefined) {
              this.dataForOperationalCustomer = data.result;
            }
          }
          else {
            throw new Error(data.Status + ' : ' + data.result);
          }
        });
    }
    catch (error) {
      throw new Error(error);
    }


    // let cust = this.exportassistService.getAllCustomers();
    // console.log(cust);
  
  }

  

}
