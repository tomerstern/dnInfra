import { Component, OnInit } from '@angular/core';

import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  // selector: 'app-dynamicdialogsrc1test',
  // templateUrl: './dynamicdialogsrc1test.component.html',
  // styleUrls: ['./dynamicdialogsrc1test.component.scss']
  template: `
        <p-table [value]="cars" [paginator]="true" [rows]="5" [responsive]="true">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="vin">Vin <p-sortIcon field="vin"></p-sortIcon></th>
                    <th pSortableColumn="year">Year <p-sortIcon field="year"></p-sortIcon></th>
                    <th pSortableColumn="brand">Brand <p-sortIcon field="brand"></p-sortIcon></th>
                    <th pSortableColumn="color">Color <p-sortIcon field="color"></p-sortIcon></th>
                    <th style="width:4em"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-car>
                <tr>
                    <td><span class="ui-column-title">Vin</span>{{car.vin}}</td>
                    <td><span class="ui-column-title">Year</span>{{car.year}}</td>
                    <td><span class="ui-column-title">Brand</span>{{car.brand}}</td>
                    <td><span class="ui-column-title">Color</span>{{car.color}}</td>
                    <td>
                        <button class="ui-button ui-button-dp" pButton icon="pi pi-search" (click)="selectCar(car)"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class Dynamicdialogsrc1testComponent implements OnInit {

  cars: any[];

    constructor( public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.getData();
    }

    selectCar(car) {
        this.ref.close(car);
    }


    getData() {
      this.cars =  [
        {brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff'},
        {brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345'},
        {brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr'},
        {brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh'},
        {brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34'},
        {brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj'},
        {brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr'},
        {brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34'},
        {brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5'},
        {brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s'}
    ]
    }

}
