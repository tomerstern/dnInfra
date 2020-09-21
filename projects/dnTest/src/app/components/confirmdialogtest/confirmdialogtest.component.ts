import { Component, OnInit, ViewEncapsulation, SimpleChanges, AfterViewChecked , AfterViewInit  } from '@angular/core';
import { ConfirmdialogDefinitions, positionDpConfirmdialog } from 'projects/dn-infra/src/lib/dp/components/confirmdialog/Objects/confirmdialog-definitions';
// import { position } from '../../components/toast/Objects/toast-definitions';
// import { ConfirmationService } from 'primeng/api';
// import { Message } from 'primeng/api';

@Component({
  selector: 'app-confirmdialogtest',
  templateUrl: './confirmdialogtest.component.html',
  styleUrls: ['./confirmdialogtest.component.scss'],
  encapsulation: ViewEncapsulation.None/*,
  providers: [ConfirmationService]*/
})
export class ConfirmdialogtestComponent implements OnInit {

  // msgs: Message[] = [];

  selectedValue: string;

  constructor() { }
  // constructor(private confirmationService: ConfirmationService) { }

  confirmdialogDef1: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'message header 1 ... ', message: 'message text 1 ... ',
    accept: () => {
      alert('You have accepted 1');
    },
    reject: () => {
      alert('You have rejected 1');
    }
  });

  confirmdialogDef2: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'message header 2 ... ', message: 'message text 2 ... ',
    icon: 'pi pi-exclamation-triangle',
    dp_positionDpConfirmdialog: positionDpConfirmdialog.left,
    accept: () => {
      alert('You have accepted 2');
    },
    reject: () => {
      alert('You have rejected 2');
    }/*,
    key: 'positionDialog'*/
  });

  confirmdialogDef3: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'message header 3 ... ', message: 'message text 3 ... ',
    icon: 'pi pi-exclamation-triangle',
    dp_positionDpConfirmdialog: positionDpConfirmdialog.bottom,
    accept: () => {
      alert('You have accepted 3');
    },
    reject: () => {
      alert('You have rejected 3');
    }/*,
    key: 'positionDialog'*/
  });

  confirmdialogDef4: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'message header 4 ... ', message: 'message text 4 ... ',
    icon: 'pi pi-exclamation-triangle',
    dp_positionDpConfirmdialog: positionDpConfirmdialog.topright,
    accept: () => {
      alert('You have accepted 4');
    },
    reject: () => {
      alert('You have rejected 4');
    }/*,
    key: 'positionDialog'*/
  });

  confirmdialogDef5: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'message header 5 ... ', message: 'message text 5 ... ',
    icon: 'pi pi-exclamation-triangle',
    dp_positionDpConfirmdialog: 'topcenter',
    style: { width: '1200px' },
    acceptButtonStyleClass: 'ui-button-success',
    rejectButtonStyleClass: 'ui-button-danger',
    acceptLabel: 'looking good',
    rejectLabel: 'No way',
    styleClass: 'clsConfirmdialog5',
    accept: () => {
      alert('You have accepted 5');
    },
    reject: () => {
      alert('You have rejected 5');
    }/*,
    key: 'positionDialog'*/
  });


  confirmdialogDef6: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'confirm option 7 ... ', message: 'confirm option 7 ? ',
    accept: () => {
      alert('You have accepted 7');
    },
    reject: () => {
      alert('You have rejected 7');
    }
  });

  confirmdialogDef7: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'confirm option 7 ... ', message: 'confirm option 7 ? ',
    accept: () => {
      alert('You have accepted 7');
    },
    reject: () => {
      alert('You have rejected 7');
    }
  });


  confirmdialogDef8: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'confirm option 8 ... ',
    message: 'confirm option 8 ? ',
    accept: () => {
      alert('You have accepted 1');
    },
    reject: () => {
      alert('You have rejected 1');
    }
  });

  ngOnInit(): void {

  }


}
