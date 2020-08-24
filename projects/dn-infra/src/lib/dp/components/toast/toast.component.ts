import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';
import { ToastDefinitions } from './Objects/toast-definitions';

@Component({
  selector: 'dp-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit {


  @Input()
  definition: ToastDefinitions;

  /*@Input()
  datasource: [];*/

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    console.log('in ngOnInit in toast.component');
    this.ngMsg();
    this.showSuccess('aaaaaaa', 'bbbbbbbb');
  }


  ngMsg(){
    console.log('in ngMsg');
  }

  showSuccess(t_summary:string = 'Success Message', t_detail:string = 'Success'  ) {
    this.messageService.add({severity:'success', summary: t_summary, detail:t_detail});
  }
  
  showInfo(t_summary:string = 'info Message', t_detail:string = 'info') {
    this.messageService.add({severity:'info', summary: t_summary, detail:t_detail});
  }
  
  showWarn(t_summary:string = 'warn Message' ,t_detail:string = 'warn' ) {
    this.messageService.add({severity:'warn', summary: t_summary, detail:t_detail});
  }
  
  showError(t_summary:string = 'error Message', t_detail:string = 'failed') {
    this.messageService.add({severity:'error', summary: t_summary, detail:t_detail});
  }


}
