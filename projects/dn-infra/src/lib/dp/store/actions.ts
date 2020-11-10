import { createAction, props } from '@ngrx/store';

const UPDATE_TABLE = 'Update table';
export const updateTable = createAction(UPDATE_TABLE, props<{ data: { tableId: string, tableData: any[] } }>());

const DELETE_ROW = 'Delete row';
export const deleteRow = createAction(DELETE_ROW, props<{ data: { tableId: string, rowIndex: number } }>());

const ADD_ROW = 'Add row';
export const addRow = createAction(ADD_ROW, props<{ data: { tableId: string, rowToAdd: object } }>());

const UPDATE_ROW = 'Update row';
export const updateRow = createAction(UPDATE_ROW, props<{ row: any, rowIndex: number, tableId: string }>());


// PLEASE REMOVE THIS ACTION LATER

const ADD_VALIDATION_ERROR = 'Add Validation Error';
export const addValidationError = createAction(ADD_VALIDATION_ERROR,
    props<{ data: { tableId: string, controlName: string, control: any } }>());


const CLEAR_STATE = 'Clear State';
export const clearStateChanges = createAction(CLEAR_STATE, props<{ data: { tableIds: string[] } }>());
