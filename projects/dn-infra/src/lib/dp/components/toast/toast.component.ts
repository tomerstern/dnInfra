import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
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

  }


  dp_showToast(summary?: string, detail?: string, severity?: string, life?: number) {
    summary = (summary == null || summary === undefined ? 'Default Header' : summary );
    detail = (detail == null || detail === undefined ? 'Default Mesaage' : detail );
    severity = (severity == null || severity === undefined ? 'info' : severity );
    life = (life == null || life === undefined ? 3000 : life );
    // this.messageService.add({ severity: this.definition.severity, summary: this.definition.header, detail: this.definition.body });
    this.messageService.add({ severity, summary, detail, life });
  }

  // dpToastFunc(defToast) {
  //   // debugger
  //   console.log('in 1111111111111111111');
  //   // this.dp_showToast();
  // }

  ngMsg() {
    console.log('in ngMsg');
  }

}
