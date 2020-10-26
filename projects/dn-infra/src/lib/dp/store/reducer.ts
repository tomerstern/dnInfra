import { createReducer, on } from '@ngrx/store';
import { addRow, deleteRow, updateRow, updateTable, addValidationError } from './actions';
export const initialState: any = {};

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
        let newChanges = {};
        let key;
        let stateToSet;
        if (action.row.refKey) {
            key = action.row.refKey;
            state[action.tableId].changes[key].state === 4 ? stateToSet = 4 : stateToSet = 16;
        }
        else {
            key = getKey(5);
            stateToSet = 16;
        }
        const newRow = { ...action.row, refKey: key };
        newChanges = { ...state[action.tableId].changes, [key]: { ...newRow, state: stateToSet } };
        const newData = {
            data: [...state[action.tableId].data.slice(0, action.rowIndex),
                newRow, ...state[action.tableId].data.slice(action.rowIndex + 1)],
            changes: newChanges
        };
        const newTableData = { [action.tableId]: newData };
        return ({ ...state, ...newTableData });
    }),
    on(deleteRow, (state, action): any => {
        const tableData = state[action.data.tableId].data;
        const changes = { ...state[action.data.tableId].changes };
        let newChanges;
        let key = state[action.data.tableId].data[action.data.rowIndex].refKey;

        if (key && changes[key].state === 4) {
            delete changes[key];
            newChanges = changes;
        } else {
            if (!key) {
                key = getKey(5);
            }
            const newChangesRow = { ...tableData[action.data.rowIndex], refKey: key };
            newChanges = {
                ...state[action.data.tableId].changes,
                [key]: {
                    ...newChangesRow
                    , state: 8
                }
            };
        }
        const newTableData = {
            [action.data.tableId]:
            {
                data: [...tableData.slice(0, action.data.rowIndex),
                ...tableData.slice(action.data.rowIndex + 1)], changes: newChanges
            }
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
    on(addValidationError, (state, action): any => {
        const newData = {
            data: state[action.data.tableId].data,
            changes: state[action.data.tableId].changes,
            validationErrors: {
                ...state[action.data.tableId].validationErrors,
                [action.data.controlName]: action.data.control.errors
            }
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

export const removeFromObject = (obj, prop) => {
    const { [prop]: omit, ...res } = obj;
    return res;
};
