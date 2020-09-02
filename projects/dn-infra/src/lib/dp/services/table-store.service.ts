import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// STATE STRUCTURE
export interface Row {
  rowState: 'deleted' | 'modified' | 'added';
  rowData: any;
}
export interface TableState {
  rows: { [id: string]: Row };
}

@Injectable({
  providedIn: 'root'
})
export class TableStoreService {

  // Make state private so it's not accessible from the outside,
  // expose it as tableState$ observable (read-only) instead.
  // Write to state only through specified store methods below.

  // STATE INIT
  private readonly changeState = new BehaviorSubject<TableState>({ rows: null });

  private readonly dataState = new BehaviorSubject<any>([]);

  // Exposed observable (read-only).
  readonly tableState$ = this.changeState.asObservable();
  readonly dataState$ = this.dataState.asObservable();

  constructor() { }

  // Get last value without subscribing to the puppies$ observable (synchronously).
  // אובייקט השינויים
  getChanges(): any {
    return this.changeState.getValue();
  }

  // סטייס הדאטה בטבלה
  getDataState(): any {
    return this.dataState.getValue();
  }

  setDataState(datasource) {
    this.dataState.next(datasource);
  }

  // setstate is actually the changes object
  private setChangeState(row: any, key, lastAction): void {
    const addedRow: any = { [key]: { rowState: lastAction, rowData: row } };
    const newState = { ...this.getChanges().rows, ...addedRow };
    this.changeState.next(newState);
    console.log(this.getChanges());
  }

  // specific action on a row
  addRow(row: any): void {
    const key = this.getKey();
    row.state = { added: true, key };
    const newState = [...this.getDataState(), ...[row]];
    this.dataState.next(newState);
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'added');
  }

  // inside the action you get the current state
  deleteRow(id, row: any): void {
    let key;
    row.state ? key = row.state.key : key = this.getKey();
    let table = this.getDataState();
    row.state = { deleted: true, key };
    table = table.filter((val, i) => i !== id);
    this.dataState.next(table);
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'deleted');
  }

  modifyRow(row: any): void {
    debugger
   
    if (row.state && row.state.added){
      return;
    }
    let key;
    row.state ? key = row.state.key : key = this.getKey();
    const newState = [...this.getDataState(), ...[row]];
    this.dataState.next(newState);
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'modified');
  }

  getKey(): any {
    const rand = Math.random();
    return 'dso' + rand;
  }

}
