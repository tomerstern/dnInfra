export interface IToastDefinition {
    /*rowHover: boolean;
    rows: number;
    rowsPerPageOptions: object;
    paginator: boolean;
    currentPageReportTemplate: string;
    columns: IGridColumn[];*/
}

/*export interface IGridColumn {
    headername: string;
    fieldname: string;
    iseditable: boolean;
    //type: GridColumnType;
}*/

export enum severity {
    'success' = 10,
    'info' = 12,
    'warn' = 14,
    'error' = 16,
    'customDesign' = 99
}

export enum position_dp_toast {
    'top-right' = 0,
    'top-left' = 1,
    'bottom-right' = 2,
    'bottom-left' = 3,
    'top-center' = 4,
    'bottom-center' = 5,
    'center' = 6
}
export enum dhl_ToastType {
    'Regular' = 0,
    'Confirm' = 1,
    'Templating' = 2
}

export class ToastDefinitions implements IToastDefinition {
    summary: string;
    detail: string;

    constructor(summary?: string,  detail?: string) {
        this.summary = (summary == null ? '' : summary);
        this.detail = (detail == null ? '' : detail);
    }
}

/*export class GridColumn implements IGridColumn {
    headername: string;
    fieldname: string;
    iseditable: boolean;
    type: GridColumnType;
    constructor(headername: string, fieldname: string, type: GridColumnType, iseditable?: boolean) {
        this.headername = headername;
        this.fieldname = fieldname;
        this.iseditable = (iseditable == null ? false : iseditable);
        this.type = type;
    }
}*/
