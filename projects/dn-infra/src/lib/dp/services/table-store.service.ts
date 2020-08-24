import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// OLD STATE STRUCTURE
export interface TableState {
  modifiedRows: Array<any>;
  addedRows: Array<any>;
  deletedRows: Array<any>;
}

// NEW STATE STRUCTURE
// export interface Row{
//   rowData: any;
//   rowState: 'clean' | 'deleted' | 'modified' | 'added';
// }
// export interface TableState {
//  rows: Row[];
// }

@Injectable({
  providedIn: 'root'
})
export class TableStoreService {

  // Make state private so it's not accessible from the outside,
  // expose it as tableState$ observable (read-only) instead.
  // Write to state only through specified store methods below.

  // OLD STATE INIT
  private readonly state = new BehaviorSubject<TableState>({
    modifiedRows: [],
    addedRows: [],
    deletedRows: []
  });

  // NEW STATE INIT
  //   private readonly state = new BehaviorSubject<TableState>({rows: [{
  //     rowData: null,
  //     rowState: 'clean'
  //   }]});

  // Exposed observable (read-only).
  readonly tableState$ = this.state.asObservable();

  constructor() { }

  // Get last value without subscribing to the puppies$ observable (synchronously).
  getState(): any {
    return this.state.getValue();
  }

  private setState(state: any): void {
    const newState = { ...this.getState(), ...state };
    this.state.next(newState);
  }

  addRow(row: any): void {
    const newState = [...this.getState().addedRows, ...[row]];
    this.setState({ addedRows: newState });
  }

  deleteRow(row: any): void {
    const newState = [...this.getState().deletedRows, ...[row]];
    this.setState({ deletedRows: newState });
  }

}
