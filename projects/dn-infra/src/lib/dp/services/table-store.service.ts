import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// STATE STRUCTURE
export interface Row {
  rowState: 'deleted' | 'modified' | 'added';
  rowData: any;
}
export interface TableState {
  [key: string]: Row;
}

@Injectable({
  providedIn: 'root'
})
export class TableStoreService {

  // Make state private so it's not accessible from the outside,
  // expose it as tableState$ observable (read-only) instead.
  // Write to state only through specified store methods below.

  // STATE INIT
  private readonly changeState = new BehaviorSubject<TableState>({});

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
    const state = this.getChanges();
    const obj1 = { [key]: { rowState: lastAction, rowData: row } };
    const obj2 = { ...obj1[key] };
    const newState = { ...state, ...{ [key]: obj2 } };
    console.log(newState);
    this.changeState.next(newState);
  }

  // specific action on a row
  addRow(row: any): void {
    const key = this.getKey(6);
    row.state = { added: true, key };
    const newState = [...this.getDataState(), ...[row]];
    this.dataState.next(newState);
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'added');
  }

  // inside the action you get the current state
  deleteRow(id, row: any): void {
    let key;
    row.state ? key = row.state.key : key = this.getKey(6);
    console.log(row);
    let table = this.getDataState();
    row.state = { deleted: true, key };
    table = table.filter((val, i) => i !== id);
    this.dataState.next(table);

    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'deleted');
  }

  modifyRow(row: any): void {
    if (row.state && row.state.added) {
      return;
    }
    let key;
    row.state ? key = row.state.key : key = this.getKey(6);
    const newState = [...this.getDataState(), ...[row]];
    this.dataState.next(newState);

    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'modified');
  }

  getKey(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
