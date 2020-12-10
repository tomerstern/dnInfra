import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Output() callCooSaveFunction:EventEmitter<any>=new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  saveData()
  {
    this.callCooSaveFunction.emit("erererer");
  }

}
