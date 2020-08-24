import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TableState {
  modifiedRows: Array<any>;
  addedRows: Array<any>;
  deletedRows: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class TableStoreService {

  // Make state private so it's not accessible from the outside,
  // expose it as puppies$ observable (read-only) instead.
  // Write to state only through specified store methods below.
  private readonly state = new BehaviorSubject<TableState>({
    modifiedRows: [],
    addedRows: [],
    deletedRows: []
  });

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
