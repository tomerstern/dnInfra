import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SplitbuttonDefinitions } from 'projects/dn-infra/src/lib/dp/components/splitbutton/Objects/splitbutton-definitions';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-splitbuttontest',
  templateUrl: './splitbuttontest.component.html',
  styleUrls: ['./splitbuttontest.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class SplitbuttontestComponent implements OnInit {


  // items1: MenuItem[];
  items1: any[];
  items2: any[];
  items3: any[];
  items4: MenuItem[];
  // items4: any[];

  splitbuttonDefinition1: SplitbuttonDefinitions;
  splitbuttonDefinition2: SplitbuttonDefinitions;
  splitbuttonDefinition3: SplitbuttonDefinitions;
  splitbuttonDefinition5: SplitbuttonDefinitions;
  splitbuttonDefinition6: SplitbuttonDefinitions;
  splitbuttonDefinition7: SplitbuttonDefinitions;


  splitbuttonDefinition4: SplitbuttonDefinitions;

  // constructor() { }
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDefinitions();
    this.getData();
  }

  // label="Save" icon="pi pi-plus"

  getDefinitions() {
    this.splitbuttonDefinition1 = new SplitbuttonDefinitions({
      label: 'Save - 1', icon: 'pi pi-plus',
      styleClass: 'ui-button-success'
    });

    this.splitbuttonDefinition2 = new SplitbuttonDefinitions({
      label: 'Save - 2', icon: 'pi pi-check',
      styleClass: 'ui-button-warning'
    });

    this.splitbuttonDefinition3 = new SplitbuttonDefinitions({
      label: 'Save - 3', icon: 'pi pi-times',
      styleClass: 'ui-button-danger'
    });

    this.splitbuttonDefinition5 = new SplitbuttonDefinitions({
      label: 'Save - 5', icon: 'pi pi-file',
      styleClass: 'ui-button-primary'
    });

    this.splitbuttonDefinition6 = new SplitbuttonDefinitions({
      label: 'Save - 6', icon: 'pi pi-check',
      styleClass: 'ui-button-secondary'
    });

    this.splitbuttonDefinition7 = new SplitbuttonDefinitions({
      label: 'Custom', icon: 'pi pi-times',
      styleClass: 'clsSplitBtnCustom'
    });

    this.splitbuttonDefinition4 = new SplitbuttonDefinitions({
      label: 'Save 4'
    });
  }

  getData() {
    this.items1 = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/page1'] }
    ];

    this.items2 = this.items1;
    this.items3 = this.items1;

    this.items4 = [
      {
        label: 'item 1'
      },
      {
        label: 'item 2'
      },
      { label: 'item 3' },
      { label: 'i look disabled', disabled: true },
    ];

  }


  save(severity: string) {
    alert('save: ' + severity);
    // this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    alert('In update');
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    alert('In delete');
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }

}
