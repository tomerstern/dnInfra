import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ConfirmdialogDefinitions } from './Objects/confirmdialog-definitions';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'dp-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.scss'],
  providers: [ConfirmationService]
})
export class ConfirmdialogComponent implements OnInit {


  @Input() definition: ConfirmdialogDefinitions;

  // msgs: Message[] = [];

  // position: string;

   constructor(private confirmationService: ConfirmationService) {}
  // constructor() {}

  ngOnInit(): void {

  }

  dp_confirm() {
    this.confirmationService.confirm(this.definition);
  }


}
