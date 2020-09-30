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
    // debugger
    // console.log(newState);
    this.changeState.next(newState);
  }

  // specific action on a row
  addRow(row: any): void {
    const key = this.getKey(6);
    row.dirty = { added: true, key };
    const newState = [...this.getDataState(), ...[row]];
    this.dataState.next(newState);
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'added');
  }

  validate(row: any, isValid: boolean): void {
    let key;
    row.dirty ? key = row.dirty.key : key = this.getKey(6);
    row.dirty = { valid: isValid, key, modified: true };
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, 'modified');
  }

   modifyRow(row: any): void {
    let isDeleteAddedRow;
    if (row.dirty && row.dirty.added) {
      isDeleteAddedRow = true;
    }
    let key;
    row.dirty ? key = row.dirty.key : key = this.getKey(6);
    row.dirty = { modified: true, key, valid: row.dirty.valid };
    // const newState = [...this.getDataState(), ...[row]];
    // עדכון אובייקט השינויים
    this.setChangeState(row, key, isDeleteAddedRow ? 'added' : 'modified');
  }

  // inside the action you get the current state
  deleteRow(id, row: any): void {
    let key;
    let isDeleteAddedRow;
    if (row.dirty && row.dirty.added) {
      isDeleteAddedRow = true;
    }

    row.dirty ? key = row.dirty.key : key = this.getKey(6);

    let table = this.getDataState();
    table = table.filter((val, i) => i !== id);
    this.dataState.next(table);

    if (isDeleteAddedRow) {
      const changes = this.getChanges();
      delete changes[key];
      this.changeState.next(changes);
      console.log(changes);

      return;
    }

    // עדכון אובייקט השינויים
    row.dirty = { deleted: true, key };
    this.setChangeState(row, key, 'deleted');
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
