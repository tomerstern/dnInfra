import { createReducer, on } from '@ngrx/store';
import { addRow, deleteRow, updateTable } from './actions';

export const initialState: any = {

};

const reducer = createReducer(initialState,
    on(updateTable, (state, action): any => {
        const newTableState = {
            [action.data.tableId]: {
                data: action.data.tableData
            }
        };
        const newState = { ...state, ...newTableState };
        return (newState);
    }),
    on(deleteRow, (state, action): any => {
        const tableData = state[action.data.tableId].data;

        const newTableData = {
            [action.data.tableId]:
                { data: [...tableData.slice(0, action.data.rowIndex), ...tableData.slice(action.data.rowIndex + 1)] }
        };

        return ({ ...state, ...newTableData });
    }),
    on(addRow, (state, action): any => {
        const tableData = state[action.data.tableId].data;
        const tableLength = state[action.data.tableId].data.length;
        const newData = { data: [...tableData.slice(0, tableLength), action.data.rowToAdd] };
        const newTableData = { [action.data.tableId]: newData };
        return ({ ...state, ...newTableData });
    }),
);

export function tableReducer(state: any | undefined, action: any) {
    return reducer(state, action);
}

