import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-declaration2',
  templateUrl: './declaration2.component.html',
  styleUrls: ['./declaration2.component.scss']
})
export class Declaration2Component implements OnInit {
  
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
