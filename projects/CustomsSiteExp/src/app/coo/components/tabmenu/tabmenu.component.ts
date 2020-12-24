import { Component, Input, OnInit } from '@angular/core';
import {
  TabmenuDefinitions,
  DpMenuItem
} from 'projects/dn-infra/src/lib/dp/components/tabmenu/Objects/tabmenu-definitions';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {
  constructor() {}
  private eventsSubscription: Subscription;
  tabItems: DpMenuItem[];
  tabMenuDefinition: TabmenuDefinitions;
  @Input() events: Observable<void>;
  eventsSubject: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    
    this.tabItems = [
      { label: 'General', id: 'general', routerLink: 'general' },
      { label: 'Header', id: 'header', routerLink: 'header' },
      { label: 'Details', id: 'details', routerLink: 'details' },
      { label: 'Goods', id: 'goods', routerLink: 'goods' },
      { label: 'Signature', id: 'signature', routerLink: 'signature'  },
      { label: 'Non Manip Cert', id: 'nonManipCer', routerLink: 'nonManipCer' }
      
    ];
    // <app-tabmenu [events]="eventsSubject.asObservable()"></app-tabmenu>
    this.tabMenuDefinition = new TabmenuDefinitions({
      activeItem: this.tabItems[0]
    });

    
  }
  
}
