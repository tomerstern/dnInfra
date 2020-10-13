


export enum ToastProperties {
    severity = 'key',
    header = 'header',
    body = 'body',
    key = 'key',
    style = 'style',
    styleClass = 'styleClass',
    position = 'position',
    baseZIndex = 'baseZIndex',
    autoZIndex = 'autoZIndex',
    preventOpenDuplicates = 'preventOpenDuplicates',
    preventDuplicates = 'preventDuplicates',
    // dpToastFunc = 'dpToastFunc',

}

export enum positionDpToast {
    'topRight' = 'top-right',
    'topLeft' = 'top-left',
    'bottomRight' = 'bottom-right',
    'bottomLeft' = 'bottom-left',
    'topCenter' = 'top-center',
    'bottomCenter' = 'bottom-center',
    'center' = 'center'
}


export enum severityDpToast {
    'success' = 'success',
    'info' = 'info',
    'warn' = 'warn',
    'error' = 'error'
    // ,'customDesign' = 99
}

export interface iToastDefinitions {
    severity?: string;
    header?: string;
    body?: string;
    key?: string;
    style?: string;
    styleClass?: string;
    position?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    preventOpenDuplicates?: boolean;
    preventDuplicates?: boolean;
    // dpToastFunc?: Function;

}
export class ToastDefinitions implements iToastDefinitions {
    severity: string;
    header: string;
    body: string;
    key: string;
    style: string;
    styleClass: string;
    position: string;
    baseZIndex: number;
    autoZIndex: boolean;
    preventOpenDuplicates: boolean;
    preventDuplicates: boolean;
    // dpToastFunc: Function;

  constructor(params: iToastDefinitions) {

    this.position =
    (params.position == null || params.position === undefined  ? 'top-right' :
        (params.position.toLowerCase() === 'center' ? 'center' :
            (params.position.toLowerCase() === 'top-left' ? 'top-left' :
                (params.position.toLowerCase() === 'top-right' ? 'top-right' :
                    (params.position.toLowerCase() === 'bottom-left' ? 'bottom-left' :
                        (params.position.toLowerCase() === 'bottom-right' ? 'bottom-right' :
                            (params.position.toLowerCase() === 'top-center' ? 'top-center' :
                                (params.position.toLowerCase() === 'bottom-center' ? 'bottom-center' :
                                    'top-right'
                                )
                            )
                        )
                    )
                )
            )
        )
    );

    this.baseZIndex = (params.baseZIndex == null || params.baseZIndex === undefined  ? 50000 :  params.baseZIndex );

    this.severity =
    (params.severity == null  || params.severity === undefined ? 'info' :
        (params.severity.toLowerCase() === 'success' ? 'success' :
            (params.severity.toLowerCase() === 'warn' ? 'warn' :
                (params.severity.toLowerCase() === 'error' ? 'error' :
                    'info'
                )
            )
        )
    );

    this.header = (params.header == null || params.header === undefined  ? 'Default Header' : params.header);
    this.body = (params.body == null || params.body === undefined  ? 'Default Message' : params.body);
    // this.dpToastFunc = params.dpToastFunc;

    this.autoZIndex = (params.autoZIndex == null || params.autoZIndex === undefined  ? true : params.autoZIndex);
    this.baseZIndex = (params.baseZIndex == null || params.baseZIndex === undefined  ? 0 : params.baseZIndex);


  }
}














// export interface IToastDefinition {
//     /*rowHover: boolean;
//     rows: number;
//     rowsPerPageOptions: object;
//     paginator: boolean;
//     currentPageReportTemplate: string;
//     columns: IGridColumn[];*/
// }

/*export interface IGridColumn {
    headername: string;
    fieldname: string;
    iseditable: boolean;
    //type: GridColumnType;
}*/

// export enum severity {
//     'success' = 10,
//     'info' = 12,
//     'warn' = 14,
//     'error' = 16,
//     'customDesign' = 99
// }

// export enum position_dp_toast {
//     'top-right' = 0,
//     'top-left' = 1,
//     'bottom-right' = 2,
//     'bottom-left' = 3,
//     'top-center' = 4,
//     'bottom-center' = 5,
//     'center' = 6
// }
// export enum dhl_ToastType {
//     'Regular' = 0,
//     'Confirm' = 1,
//     'Templating' = 2
// }

// export class ToastDefinitions implements IToastDefinition {
//     summary: string;
//     detail: string;

//     constructor(summary?: string,  detail?: string) {
//         this.summary = (summary == null ? '' : summary);
//         this.detail = (detail == null ? '' : detail);
//     }
// }

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
