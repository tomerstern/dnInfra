import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ExportassistService } from '../../../services/exportassist.service';
import { ShipmentService } from '../../../services/shipment.service';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';


@Component({
  selector: 'app-maintab',
  templateUrl: './maintab.component.html',
  styleUrls: ['./maintab.component.scss']
})
export class MaintabComponent implements OnInit {

  constructor(private shipmentService: ShipmentService, private exportassistService: ExportassistService ) { }

  tabItems: DpMenuItem[];
  tabMenuDefinition: TabmenuDefinitions;

  ngOnInit(): void {
    this.tabItems = [
      { label: 'Details', id: 'details', routerLink: 'details' },
      { label: 'GP', id: 'gp', routerLink: 'gp' },
      { label: 'G7', id: 'p7', routerLink: 'p7' }];

    this.tabMenuDefinition = new TabmenuDefinitions({ activeItem: this.tabItems[1] });
    // this.shipmentService.getCountries().then(countries => {
    //   this.data_for_ac1 = countries;
    // });    
    // this.exportassistService.getExportAssistByKey('1234');
    this.GetShipment();
  }

  async GetShipment() {
    // const response: any = await this.shipmentService.getShipmentFromServer();
    // if (response.Status === 'OK')
    // {
    //   this.shipments = response.result;
    // }
  }
}
