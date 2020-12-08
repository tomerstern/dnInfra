import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {

  @Output()
  onSort: EventEmitter<any> = new EventEmitter();

  actions: Array<any> = [
    {
      id: 1,
      name: 'sort'
    },
    {
      id: 2,
      name: 'add'
    },
    {
      id: 3,
      name: 'remove'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSortClick(val: string) {
    this.onSort.emit(val);
  }

}
