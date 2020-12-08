import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-generaltest',
    templateUrl: './generaltest.component.html',
    styleUrls: ['./generaltest.component.scss']
})
export class GeneraltestComponent implements OnInit {


    sales: any[];
    sales2: any[];
    lastYearTotal: number;

    thisYearTotal: number;

    ngOnInit() {
        this.sales = [
            { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
            { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
            { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
            { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
            { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
            { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
            { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
            { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
            { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
            { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
        ];

        this.sales2 = [
            {
                product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            },
            {
                product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533
                , lastYearSale1: 51, thisYearSale1: 40, lastYearProfit1: 54406, thisYearProfit1: 43342
            }
        ];
        this.calculateLastYearTotal();
        this.calculateThisYearTotal();
    }

    calculateLastYearTotal() {
        let total = 0;
        for (let sale of this.sales) {
            total += sale.lastYearProfit;
        }

        this.lastYearTotal = total;
    }

    calculateThisYearTotal() {
        let total = 0;
        for (let sale of this.sales) {
            total += sale.thisYearProfit;
        }

        this.thisYearTotal = total;
    }

    //   getSum (ind, tableDataSource) {
    //     let total = 0;
    //     for(let s of tableDataSource) {
    //         total += ;
    //     }
    //   }

    dpCalculateColumnSum(index, items): number {
        let sum = 0;
        console.log('index=');
        console.log(index);
        console.log('items.length=');
        console.log(items.length);
        console.log('aaaaaaaaaa=');
        console.log(items[1][3]);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < items.length; i++) {
            sum += items[i][index];
            console.log(items[i][index]);

        }
        return sum;
    }

    dpCalculateTotalRows(ind, tableDataSource) {

    }
}
