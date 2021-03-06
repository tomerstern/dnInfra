import { createReducer, on } from '@ngrx/store';
import { addRow, deleteRow, deleteRowByColumnValue, updateRowByColumnValue, updateRow, updateTable, 
            clearStateChanges, sortColumn } from './actions';
export const initialState: any = {};

const reducer = createReducer(initialState,
    on(updateTable, (state, action): any => {

        // handle first table draw
        // if (state[action.data.tableId] !== undefined) {
            const newTableState = {
                [action.data.tableId]: {
                    data: action.data.tableData
                }
            };
            const newState = { ...state, ...newTableState };
            return (newState);
        // } else {
        //     return state;
        // }
    }),
    on(updateRow, (state, action): any => {
        return updateRowInState(state, action.tableId, action.row, action.rowIndex);
    }),
    on(updateRowByColumnValue, (state, action): any => {
        debugger
        let rowIndexes : number[] = getRowIndexes(state, action.data.tableId, action.data.columnToSearchRecord);        
        rowIndexes.forEach(rowIndex => {  
            let rowToUpdate = { ...state[action.data.tableId].data[rowIndex]};
            Object.entries(rowToUpdate).forEach(cell => {
                Object.values(action.data.columnToReplaceRecord).forEach(column => {
                    const currentCellName = cell[0];
                    let columnName = Object.keys(column)[0];
                    let columnValue = Object.values(column)[0];
    
                    if (currentCellName == columnName)
                    {
                        rowToUpdate[currentCellName] = columnValue;
                    }
                });
            });
            state = updateRowInState(state, action.data.tableId, rowToUpdate, rowIndex);
        });

        return state;

    }),    
    on(deleteRow, (state, action): any => {
        return deleteFromStateByIndex(action.data.tableId, state, action.data.rowIndex);
    }),
    on(deleteRowByColumnValue, (state, action): any => {

        let rowIndexes : number[] = getRowIndexes(state, action.data.tableId, action.data.columnRecord);
        let updatedState: any = {...state};
        rowIndexes.reverse().forEach(rowIndex => {            
            updatedState = deleteFromStateByIndex(action.data.tableId, updatedState, rowIndex);
        });

        return updatedState;
    }),    
    on(addRow, (state, action): any => {
        const key = getKey(5);
        const newRow = { ...action.data.rowToAdd, refKey: key };
        const tableData = state[action.data.tableId].data;
        const tableLength = state[action.data.tableId].data.length;
        debugger
        const newData = {
            data: [...tableData.slice(0, tableLength), newRow],
            changes: { ...state[action.data.tableId].changes, [key]: { ...action.data.rowToAdd, state: 4 }
                     },
            sortOrder: state[action.data.tableId].sortOrder            
        };
        const newTableData = { [action.data.tableId]: newData };
        return ({ ...state, ...newTableData });
    }),
    on(clearStateChanges, (state, action): any => {        
        for (const tableId of action.data.tableIds) {
            const newDataArray = [];
            // ziv - Maybe use a filter which removes all refKey elements?
            if (state[tableId] === undefined) {
                continue;
            }
            for (const row of state[tableId].data) {
                const newRow = { ...row };
                delete newRow.refKey;
                newDataArray.push(newRow);
            }
            const newNewData = {
                data: newDataArray
            };
            const newTableData = { [tableId]: newNewData };
            state = { ...state, ...newTableData };
        }

        return state;
    }),
    on(sortColumn, (state, action): any => {
        const fieldSortOrder = getSortOrder(state, action);
        const dataCopy = state[action.tableId].data.slice();
        const direction = (fieldSortOrder === 'asc') ? -1 : 1;
        const field = action.fieldname;

        dataCopy.sort((a, b) => {
            if (a[field] < b[field]) {
                return 1 * direction;
            }
            else if (a[field] > b[field]) {
                return -1 * direction;
            }
            else {
                return 0;
            }
        });

        const newTableData = {
            [action.tableId]:
            {
                data: dataCopy,
                changes: state[action.tableId].changes,
                sortOrder: { [action.fieldname]: fieldSortOrder }
            }
        };

        return ({ ...state, ...newTableData });
    })
);

function updateRowInState(state: any, tableId: string, rowToUpdate, rowIndex: number){
    
    let newChanges = {};
    let key;
    let stateToSet;
    if (rowToUpdate.refKey) {
        key = rowToUpdate.refKey;
        state[tableId].changes[key].state === 4 ? stateToSet = 4 : stateToSet = 16;
    }
    else {
        key = getKey(5);
        stateToSet = 16;
    }
    const newRow = { ...rowToUpdate, refKey: key };
    newChanges = { ...state[tableId].changes, [key]: { ...newRow, state: stateToSet } };
    const newData = {
        data: [...state[tableId].data.slice(0, rowIndex),
            newRow, ...state[tableId].data.slice(rowIndex + 1)],
        changes: newChanges,
        sortOrder: state[tableId].sortOrder
    };
    const newTableData = { [tableId]: newData };

    return ({ ...state, ...newTableData });
}

function getRowIndexes(state: any, tableId: string, columnRecord: Record<string, any>){

    const tableData = state[tableId].data;
    const columnRecordLength =  Object.keys(columnRecord).length;
    let rowIndexes : number[] = [];
    let rowIndex = 0;
    let matchCount = 0;    

    tableData.forEach(row => {            
        Object.entries(row).forEach(cell => {

            Object.values(columnRecord).forEach(column => {
                const currentCellName = cell[0];
                const currentCellValue = cell[1];
                const columnName = Object.keys(column)[0];
                const columnValue = Object.values(column)[0];

                if (currentCellName == columnName && currentCellValue == columnValue)
                {
                    matchCount += 1;
                    return;
                }
            });
        });

        if (matchCount == columnRecordLength)
        {
            rowIndexes.push(rowIndex);            
        }

        rowIndex +=1;
        matchCount = 0;
    });

    return rowIndexes;
}

export function deleteFromStateByIndex(tableId: string, updatedState: any, rowIndex: number){

    let newChanges;
    let key = updatedState[tableId].data[rowIndex].refKey;
    const tableData = updatedState[tableId].data;
    let slicedTableData = tableData.map(object => ({ ...object }))

    if (!key) {
        key = getKey(5);
    }
    const newChangesRow = { ...slicedTableData[rowIndex], refKey: key };
    newChanges = {
        ...updatedState[tableId].changes,
        [key]: {
            ...newChangesRow
            , state: 8
        }
    };
    slicedTableData = [...slicedTableData.slice(0, rowIndex), ...slicedTableData.slice(rowIndex + 1)];
    const newTableData = {
        [tableId]:
        {
            data: slicedTableData,
            changes: newChanges,
            sortOrder: updatedState[tableId].sortOrder
        }
    };
    
    return ({ ...updatedState, ...newTableData });
}

export function getSortOrder(state, action) {
    if (state[action.tableId].sortOrder === undefined ||
        state[action.tableId].sortOrder[action.fieldname] === undefined) {
        return 'asc';
    }

    return (state[action.tableId].sortOrder[action.fieldname] === 'asc' ? 'desc' : 'asc');
}

export function mySort(obj1: any, obj2: any) {
    return obj1;
}

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


export const sortTable = (arr) => {
    return arr.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};
