import { createAction, props } from '@ngrx/store';

const UPDATE_TABLE = 'Update table';
export const updateTable = createAction(UPDATE_TABLE, props<{ data: { tableId: string, tableData: any[] } }>());

const DELETE_ROW = 'Delete row';
export const deleteRow = createAction(DELETE_ROW, props<{ data: { tableId: string, rowIndex: number } }>());

const DELETE_ROW_BY_COLUMN_VALUE = 'Delete row by column values';
export const deleteRowByColumnValue = 
    createAction(DELETE_ROW_BY_COLUMN_VALUE, 
                    props<{ data: { tableId: string, columnRecord: Record<string, any> } }>());

const ADD_ROW = 'Add row';
export const addRow = createAction(ADD_ROW, props<{ data: { tableId: string, rowToAdd: object } }>());

const UPDATE_ROW = 'Update row';
export const updateRow = createAction(UPDATE_ROW, props<{ row: any, rowIndex: number, tableId: string }>());

const UPDATE_ROW_BY_COLUMN_VALUE = 'Update row by column values';
export const updateRowByColumnValue = createAction(UPDATE_ROW_BY_COLUMN_VALUE, props<{ data: { tableId: string, 
                                        columnToSearchRecord: Record<string, any>, columnToReplaceRecord: Record<string, any> } }>());

const CLEAR_STATE = 'Clear State';
export const clearStateChanges = createAction(CLEAR_STATE, props<{ data: { tableIds: string[] } }>());

const SORT_COLUMN = 'Sort Column';
export const sortColumn = createAction(SORT_COLUMN, props<{ tableId: string, fieldname: string }>());
