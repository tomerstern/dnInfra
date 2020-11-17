import { Component, OnInit } from '@angular/core';
import { CalendarDefinitions } from 'projects/dn-infra/src/lib/dp/components/calendar/objects/calendar-definitions';
import { ShipmentService } from '../app/services/shipment.service';
import { Store } from '@ngrx/store';
import { getAppState } from 'projects/dn-infra/src/lib/dp/store/selectors';
import { addRow,
  deleteRow,
  updateRow,
  updateTable,
  clearStateChanges } from 'projects/dn-infra/src/lib/dp/store/actions';
import { map, take } from 'rxjs/operators';
import { Shipment } from '../app/models/shipment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomsSiteExport';
  isLoggedIn = false;
  constructor(
    private shipmentService: ShipmentService,
    private store: Store<any> ) { }

  // calendarData1: Date;
  // calendarDefinitions: CalendarDefinitions;

  ngOnInit(): void {
     console.log('gil12');
     console.log();
     if (sessionStorage.getItem('dpUserID') !== undefined && sessionStorage.getItem('dpUserID') !== '') {
      this.isLoggedIn = true;
     }
     console.log(sessionStorage.getItem('dpUserID'));
     console.log('this.isLoggedIn');
     console.log(this.isLoggedIn);
    // this.calendarDefinitions = new CalendarDefinitions({
    //   minDate: new Date(2019, 6, 12), showTime: false
    // });
    // this.calendarData1 = new Date();
  }

  updateShipment() {
    let shipment: any;
    if (sessionStorage.getItem('currentUpdShipment') != null)
    {
      shipment = JSON.parse(sessionStorage.getItem('currentUpdShipment'));
      shipment.G7Lines = [];
      shipment.GPLines = [];
      shipment.GTLines = [];
    }
    else
    {
      shipment = new Shipment();
    }

    const changes = [];
    this.store
      .select(getAppState)
      .pipe(
        take(1),
        map((state) => {
          Object.keys(state.tables).forEach((table) => {
            if (table === 'gpTableId')
            {
              const tableChangesGP = state.tables[table].changes;
              if (tableChangesGP) {
                Object.keys(tableChangesGP).forEach((key) => {
                  const copyGP = { ...tableChangesGP[key] };
                  delete copyGP.State;
                  shipment.GPLines.push(copyGP);
                });
              }
            }

            if (table === 'g7TableId')
            {
              const tableChangesG7 = state.tables[table].changes;
              if (tableChangesG7) {
                Object.keys(tableChangesG7).forEach((key) => {
                  const copyG7 = { ...tableChangesG7[key] };
                  delete copyG7.State;
                  shipment.G7Lines.push(copyG7);
                });
              }
            }

            if (table === 'gtTableId')
            {
              const tableChangesGT = state.tables[table].changes;
              if (tableChangesGT) {
                Object.keys(tableChangesGT).forEach((key) => {
                  const copyGT = { ...tableChangesGT[key] };
                  delete copyGT.State;
                  shipment.GTLines.push(copyGT);
                });
              }
            }
          });
        })
      )
      .subscribe();
    sessionStorage.setItem('currentUpdShipment', JSON.stringify(shipment));
    this.shipmentService.updateShipment(shipment).then(data => {
      if (data === 'OK')
      {
        const tables: string[] = ['gpTableId', 'g7TableId', 'gtTableId'];
        this.store.dispatch(clearStateChanges({ data: { tableIds: tables} }));
      }
      else{
        // errMes = errMes.replace('\u00277', '"');
        alert('Fail on Save:' + data);
      }
    });
  }
}
