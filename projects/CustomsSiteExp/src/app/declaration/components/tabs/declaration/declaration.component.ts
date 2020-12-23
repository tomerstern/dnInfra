import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
  
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
