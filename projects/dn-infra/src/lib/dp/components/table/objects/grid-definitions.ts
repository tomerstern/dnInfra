export interface IGridDefinition {
    dataKey: string;
    columns: IGridColumn[];
    rowHover?: boolean;
    rows?: number;
    rowsPerPageOptions?: object;
    paginator?: boolean;
    currentPageReportTemplate?: string;
    editMode?: string;
    toolbar?: boolean;
    exportToExcel?: boolean;
    exportToPdf?: boolean;
    selectColumns?: boolean;
    selectionMode?: string;
    onBeforeDelete?: Function;
    onAfterDelete?: Function;
    onAfterAdd?: Function;
    checkMandatory?: Function;
    // isFooter?: boolean;
    // FreezeHeader?: boolean;
    FreezeHeaderTableHeight?: string;
    scrollable?: boolean;
    HeadersMergeGroupsHtml?: string;
    isFreezeColumns?: boolean;
    // isFreezeColumnActive?: boolean;
    HideBtnsCol?: boolean;
    HeaderColGroup?: string;
    isRoundedInputs?: boolean;
    pdfHeaderText?: string;
    pdfFooterText?: string;
    isHideHeader?: boolean ;
}

export interface IGridColumn {
    headername: string;
    fieldname: string;
    type?: GridColumnType;
    iseditable?: boolean;
    isMandatory?: boolean;
    width?: number;
    height?: number;
    align?: string;
    columnParams?: GridColumnParams;
    style?: string;
    clickColumnName?: string;
    class?: string;
    onClick?: Function;
    ColumnDatasource?: any[];
    ColumnSum?: boolean;
    ColumnTotal?: boolean;
    LocaleString?: boolean;
    HeaderClassNames?: string; /*for frozen columns*/
    fieldCode?: string;
    filterMatchMode?: string;
}


export enum GridColumnType {
    span = 10,
    checkbox = 11,
    button = 12,
    autocomplete = 13,
    dropdown = 14,
    image = 15,
    inputnumber = 16,
    calendar = 17
}

export class GridDefinitions implements IGridDefinition {
    dataKey: string;
    columns: IGridColumn[];
    rowHover: boolean;
    rows: number;
    rowsPerPageOptions: object;
    paginator: boolean;
    currentPageReportTemplate: string;
    editMode: string;
    toolbar: boolean;
    exportToExcel: boolean;
    exportToPdf: boolean;
    selectColumns: boolean;
    selectionMode: string;
    onBeforeDelete: Function;
    onAfterDelete: Function;
    onAfterAdd: Function;
    checkMandatory: Function;
    // isFooter: boolean;
    FreezeHeaderTableHeight: string;
    scrollable: boolean;
    HeadersMergeGroupsHtml: string;
    // isFreezeColumnActive: boolean;
    isFreezeColumns: boolean;
    HideBtnsCol: boolean;
    HeaderColGroup: string;
    isRoundedInputs: boolean;
    pdfHeaderText: string;
    pdfFooterText: string;
    isHideHeader: boolean;
    constructor(params: IGridDefinition) {
        this.dataKey = params.dataKey;
        this.columns = params.columns;
        this.rowHover = (params.rowHover == null ? true : params.rowHover);
        this.rows = (params.rows == null ? 10 : params.rows);
        this.rowsPerPageOptions = (params.rowsPerPageOptions == null ? [10, 25, 50] : params.rowsPerPageOptions);
        this.paginator = (params.paginator == null ? true : params.paginator);
        this.currentPageReportTemplate = (params.currentPageReportTemplate == null ?
            'Showing {first} to {last} of {totalRecords} entries' : params.currentPageReportTemplate);
        this.editMode = (params.editMode == null ? 'cell' : params.editMode);
        this.toolbar = (params.toolbar == null ? false : params.toolbar);
        this.exportToExcel = (params.exportToExcel == null ? true : params.exportToExcel);
        this.exportToPdf = (params.exportToPdf == null ? true : params.exportToPdf);
        this.selectColumns = (params.selectColumns == null ? true : params.selectColumns);
        this.selectionMode = params.selectionMode;
        this.onBeforeDelete = params.onBeforeDelete;
        this.onAfterDelete = params.onAfterDelete;
        this.onAfterAdd = params.onAfterAdd;
        this.checkMandatory = params.checkMandatory;
        // this.isFooter = (params.isFooter == null || params.isFooter === undefined ? false : params.isFooter);
        this.FreezeHeaderTableHeight = (params.FreezeHeaderTableHeight == null
            || params.FreezeHeaderTableHeight === undefined ? '' : params.FreezeHeaderTableHeight);
        // this.scrollable = (this.FreezeHeaderTableHeight === '' ? '' : 'true');
        this.scrollable = ((params.scrollable == null
            || params.scrollable === undefined ) &&
            (params.isFreezeColumns  == null   || params.isFreezeColumns === undefined  || params.isFreezeColumns === false)
            ? false : params.scrollable);
        this.HeadersMergeGroupsHtml = (params.HeadersMergeGroupsHtml == null
            || params.HeadersMergeGroupsHtml === undefined ? '' : params.HeadersMergeGroupsHtml);
        // this.isFreezeColumnActive = (params.isFreezeColumnActive == null
        //     || params.isFreezeColumnActive === undefined ? false : params.isFreezeColumnActive);
        this.HideBtnsCol = (params.HideBtnsCol == null
            || params.HideBtnsCol === undefined ? false : params.HideBtnsCol);
        this.isFreezeColumns = (params.isFreezeColumns == null
            || params.isFreezeColumns === undefined ? false : params.isFreezeColumns);
        this.HeaderColGroup = (params.HeaderColGroup == null
            || params.HeaderColGroup === undefined ? '' : params.HeaderColGroup);
        this.isRoundedInputs = (params.isRoundedInputs == null
            || params.isRoundedInputs === undefined ? true : params.isRoundedInputs);
        this.pdfHeaderText = (params.pdfHeaderText === undefined || params.pdfHeaderText == null ? '' : params.pdfHeaderText);
        this.pdfFooterText = (params.pdfFooterText === undefined || params.pdfFooterText == null ? '' : params.pdfFooterText);
        this.isHideHeader = (params.isHideHeader == null
            || params.isHideHeader === undefined ? false : params.isHideHeader);  
    }
}

export interface IGridColumnParam {
    key: string;
    value: any;
}

export class GridColumnParam implements IGridColumnParam {
    key: string;
    value: any;
    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }
}

export class GridColumnParams {
    params: GridColumnParam[];

    constructor() {
        this.params = [];
    }

    addParam(key: string, value: any) {
        const newParam: GridColumnParam = new GridColumnParam(key, value);
        this.params.push(newParam);
    }

    isKeyExist(key: string) {
        const result = this.getValueByKey(key);
        if (result !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    getValueByKey(key: string) {
        const foundParam = this.params.find(i => i.key === key);
        if (foundParam !== undefined) {
            return foundParam.value;
        } else {
            return undefined;
        }
    }
}

export class GridColumn implements IGridColumn {
    headername: string;
    fieldname: string;
    iseditable: boolean;
    isMandatory: boolean;
    type: GridColumnType;
    width: number;
    height: number;
    align: string;
    columnParams: GridColumnParams;
    style: string;
    clickColumnName: string;
    class: string;
    onClick: Function;
    ColumnDatasource: any[];
    ColumnSum: boolean;
    ColumnTotal: boolean;
    LocaleString: boolean;
    HeaderClassNames: string; /*for Frozen Cols*/
    fieldCode: string;
    filterMatchMode: string;
    constructor(params: IGridColumn) {
        this.headername = params.headername;
        this.fieldname = params.fieldname;
        this.fieldCode = params.fieldCode;
        this.type = (params.type == null ? GridColumnType.span : params.type);
        this.iseditable = (params.iseditable == null ? false : params.iseditable);
        this.isMandatory = (params.isMandatory == null ? false : params.isMandatory);
        this.width = (params.width == null ? 17 : params.width);
        // this.width = (params.width == null ? 17 : params.width);
        this.width = (params.width);
        // this.height = (params.height == null ? 17 : params.height);
        this.align = (this.type === GridColumnType.image ? 'center' : (params.align == null ? 'left' : params.align));
        this.columnParams = (params.columnParams == null ? new GridColumnParams() : params.columnParams);
        this.style = params.style;
        this.clickColumnName = params.clickColumnName;
        this.class = params.class;
        this.onClick = params.onClick;
        this.ColumnDatasource = params.ColumnDatasource;
        this.ColumnSum = (params.ColumnSum == null || params.ColumnSum === undefined ? false : params.ColumnSum);
        this.ColumnTotal = (params.ColumnTotal == null || params.ColumnTotal === undefined ? false : params.ColumnTotal);
        this.LocaleString = (params.LocaleString == null || params.LocaleString === undefined ? false : params.LocaleString);
        this.HeaderClassNames = (params.HeaderClassNames == null || params.HeaderClassNames === undefined ? '' : params.HeaderClassNames);
        this.filterMatchMode = (params.filterMatchMode == null ? 'contains' : params.filterMatchMode);
    }
}
