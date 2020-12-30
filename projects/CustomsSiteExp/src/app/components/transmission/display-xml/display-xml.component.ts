import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-display-xml',
  //templateUrl: './display-xml.component.html',
  template: `
    <div>{{xmlString}}</div>
    `,
  styles: [`div{
            font-size:12px;
            font-family: monospace;
            white-space: pre;}`]
  //styleUrls: ['./display-xml.component.scss']
})
export class DisplayXMLComponent implements OnInit {

  private errorMessage: string;
  xmlString: string;

  constructor(public config: DynamicDialogConfig) { }

  ngOnInit(): void {

    this.xmlString = this.config.data;
    console.log(this.config.data)
  }

}
