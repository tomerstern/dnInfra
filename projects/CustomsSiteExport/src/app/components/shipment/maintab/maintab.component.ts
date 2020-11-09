import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ExportassistService } from '../../../services/exportassist.service';
import { ShipmentService } from '../../../services/shipment.service';
import { TabmenuDefinitions, DpMenuItem } from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';
import { Store } from '@ngrx/store';
import { getAppState } from 'projects/dn-infra/src/lib/dp/store/selectors';
import { map, take } from 'rxjs/operators';


@Component({
  selector: 'app-maintab',
  templateUrl: './maintab.component.html',
  styleUrls: ['./maintab.component.scss']
})
export class MaintabComponent implements OnInit {

  constructor(
    private shipmentService: ShipmentService,
    private exportassistService: ExportassistService,
    private store: Store<any> ) { }

  tabItems: DpMenuItem[];
  tabMenuDefinition: TabmenuDefinitions;

  ngOnInit(): void {
    this.tabItems = [
      { label: 'Details', id: 'details', routerLink: 'details' },
      { label: 'GP', id: 'gp', routerLink: 'gp' },
      { label: 'G7', id: 'p7', routerLink: 'p7' },
      { label: 'GT', id: 'gt', routerLink: 'gt' }];

    this.tabMenuDefinition = new TabmenuDefinitions({ activeItem: this.tabItems[1] });
    // this.shipmentService.getCountries().then(countries => {
    //   this.data_for_ac1 = countries;
    // });
    // this.exportassistService.getExportAssistByKey('1234');
    this.GetShipment();
  }

  async GetShipment() {
    const response: any = await this.shipmentService.getShipmentFromServer();
  }
}
