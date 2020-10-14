import { createReducer, on } from '@ngrx/store';
import { addRow, deleteRow, updateRow, updateTable } from './actions';

// interface State {

// }

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
    on(updateRow, (state, action): any => {
        const newData = {
            data: [...state[action.tableId].data.slice(0, action.rowIndex),
            action.row, ...state[action.tableId].data.slice(action.rowIndex + 1)],
            changes: state[action.tableId].changes
        };
        const newTableData = { [action.tableId]: newData };
        return ({ ...state, ...newTableData });
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
        const key = getKey(5);
        const newRow = { ...action.data.rowToAdd, refKey: key };
        const tableData = state[action.data.tableId].data;
        const tableLength = state[action.data.tableId].data.length;
        const newData = {
            data: [...tableData.slice(0, tableLength),
                newRow],
            changes: { ...state[action.data.tableId].changes, [key]: { ...action.data.rowToAdd, state: 4 } }
        };
        const newTableData = { [action.data.tableId]: newData };
        return ({ ...state, ...newTableData });
    }),
);

export function tableReducer(state: any | undefined, action: any) {
    return reducer(state, action);
}

export function getKey(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

