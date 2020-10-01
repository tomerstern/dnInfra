import { createSelector } from '@ngrx/store';

const getAppState = createSelector(
  (state: any) => state,
  (state: any): any => state
);

const getTableStateById = (id) => createSelector(
    getAppState,
    (appState): any => appState.tables[id].data
  );


export { getAppState, getTableStateById };
