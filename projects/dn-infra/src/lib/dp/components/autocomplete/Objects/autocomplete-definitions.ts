
export enum AutocompleteProperties {
    // isStandAlone = 'isStandAlone',
    // suggestions = 'suggestions',
    dp_AutocompleteType = 'dp_AutocompleteType',
    field = 'field',
    scrollHeight = 'scrollHeight',
    dropdown = 'dropdown',
    multiple = 'multiple',
    dropdownIcon = 'dropdownIcon',
    minLength = 'minLength',
    delay = 'delay',
    completeOnFocus = 'completeOnFocus',
    style = 'style',
    inputStyle = 'inputStyle',
    panelStyle = 'panelStyle',
    styleClass = 'styleClass',
    inputStyleClass = 'inputStyleClass',
    panelStyleClass = 'panelStyleClass',
    inputId = 'inputId',
    name = 'name',
    placeholder = 'placeholder',
    readonly = 'readonly',
    disabled = 'disabled',
    maxlength = 'maxlength',
    size = 'size',
    appendTo = 'appendTo',
    tabindex = 'tabindex',
    dataKey = 'dataKey',
    autoHighlight = 'autoHighlight',
    type = 'type',
    emptyMessage = 'emptyMessage',
    immutable = 'immutable',
    required = 'required',
    autofocus = 'autofocus',
    forceSelection = 'forceSelection',
    dropdownMode = 'dropdownMode',
    baseZIndex = 'baseZIndex',
    autoZIndex = 'autoZIndex',
    dpAutocompleteMaxSuggestionsToShow = 'dpAutocompleteMaxSuggestionsToShow',
    dp_AutocompleteImagesPath = 'dp_AutocompleteImagesPath',
    dp_AutocompleteImageExtension = 'dp_AutocompleteImageExtension',
    dp_AutocompleteImageContainerStyle = 'dp_AutocompleteImageContainerStyle',
    dp_AutocompleteImageTextStyle = 'dp_AutocompleteImageTextStyle',
    dp_AutocompleteImageStyle = 'dp_AutocompleteImageStyle',
    dp_AutocompleteTableFields = 'dp_AutocompleteTableFields',
    dpAutocompleteLazyDataFunc = 'dpAutocompleteLazyDataFunc',
    initialValues = 'initialValues'
}


export interface iAutocompleteDefinitions {
    isStandAlone?: boolean;
    dp_AutocompleteType?: number;
    // suggestions?: array;
    field?: any;
    scrollHeight?: string;
    dropdown?: boolean;
    multiple?: boolean;
    dropdownIcon?: string;
    minLength?: number;
    delay?: number;
    completeOnFocus?: boolean;
    style?: string;
    inputStyle?: string;
    panelStyle?: string;
    styleClass?: string;
    inputStyleClass?: string;
    panelStyleClass?: string;
    inputId?: string;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    maxlength?: number;
    size?: number;
    appendTo?: any;
    tabindex?: number;
    dataKey?: string;
    autoHighlight?: boolean;
    type?: string;
    emptyMessage?: string;
    immutable?: boolean;
    required?: boolean;
    autofocus?: boolean;
    forceSelection?: boolean;
    dropdownMode?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    dpAutocompleteMaxSuggestionsToShow?: number;
    dp_AutocompleteImagesPath?: string;
    dp_AutocompleteImageExtension?: string;
    dp_AutocompleteImageContainerStyle?: string;
    dp_AutocompleteImageTextStyle?: string;
    dp_AutocompleteImageStyle?: string;
    dp_AutocompleteTableFields?: any;
    dpAutocompleteLazyDataFunc?: Function;
    initialValues?: any;
    // dpColumnDatasource: any = [];
}
// export interface IAutocompleteDefinition {
/*rowHover: boolean;
rows: number;
rowsPerPageOptions: object;
paginator: boolean;
currentPageReportTemplate: string;
columns: IGridColumn[];*/
// }

export interface IAutocompleteTableFields {
    ToSearch?: boolean; /* do we search in this column */
    columnStyle?: string; /* mainly for column width */
    ElementData?: string; /* Unique Element that will get the data from this selected column */
}


/*
export interface IGridColumn {
    headername: string;
    fieldname: string;
    iseditable: boolean;
    type: GridColumnType;
}

export enum GridColumnType {
    span = 10,
    checkbox = 11,
    button = 12,
    autocomplete = 13,
    dropdown = 14
}

*/



export enum AutocompleteType {
    'Regular' = 0,
    'Table' = 1,
    'WithImage' = 2
}

// Field Extra Data
// "data": [
//     {
//       "column": "0",
//       "ShowInElementId" : "",
//       "SearchInField": "Y",
//       "width": "50px"
//     }, {
//         "column": "1",
//         "ShowInElementId" : "txtHebDesc",
//         "SearchInField": "Y",
//         "width": "80px"
//     }, {
//         "column": "2",
//         "ShowInElementId" : "",
//         "SearchInField": "N",
//         "width": "10px"
//     }
//   ]

// export class AutocompleteDefinitions implements IAutocompleteDefinition {

// export class AutocompleteDefinitions implements iAutocompleteDefinitions{
export class AutocompleteDefinitions implements iAutocompleteDefinitions {
    isStandAlone: boolean;
    dp_AutocompleteType: number;  /*custom type*/
    inputId: string;
    field: any;
    scrollHeight: string;
    dropdown: boolean;
    multiple: boolean;
    dropdownIcon: string;
    minLength: number;
    delay: number;
    completeOnFocus: boolean;
    style: string;
    inputStyle: string;
    panelStyle: string;
    styleClass: string;
    inputStyleClass: string;
    panelStyleClass: string;
    /*inputId: string;*/
    name: string;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    maxlength: number;
    size: number;
    appendTo: any;
    tabindex: number;
    dataKey: string;
    autoHighlight: boolean;
    type: string;
    emptyMessage: string;
    immutable: boolean;
    required: boolean;
    autofocus: boolean;
    forceSelection: boolean;
    dropdownMode: string;
    baseZIndex: number;
    autoZIndex: boolean;
    // showTransitionOptions: string;
    // hideTransitionOptions: string;
    ariaLabel: string;
    ariaLabelledBy: string;
    autocomplete: string;
    dp_AutocompleteTableFields: { IAutocompleteTableFields };  /* Extra data if needed for table fields */
    dpAutocompleteMaxSuggestionsToShow: number;  /*custom type*/
    dp_AutocompleteImagesPath: string;
    dp_AutocompleteImageExtension: string;
    dp_AutocompleteImageContainerStyle: string;
    dp_AutocompleteImageTextStyle: string;
    dp_AutocompleteImageStyle: string;
    dpAutocompleteLazyDataFunc: Function;
    initialValues: any;
    /*
    dataKey: string;
    rowHover: boolean;
    rows: number;
    rowsPerPageOptions: object;
    */

    /*constructor(dataKey: string,  rowHover?: boolean, rows?: number, rowsPerPageOptions?: object,
        paginator?: boolean, currentPageReportTemplate?: string) {
        this.dataKey = dataKey;
        this.rowHover = (rowHover == null ? true : rowHover);
        this.rows = (rows == null ? 10 : rows);
        this.rowsPerPageOptions = (rowsPerPageOptions == null ? [10, 25, 50] : rowsPerPageOptions);
        this.paginator = (paginator == null ? true : paginator);
        this.currentPageReportTemplate = (currentPageReportTemplate == null ?
            'Showing {first} to {last} of {totalRecords} entries' : currentPageReportTemplate);
    }*/

    /*if default value is null' no need to use in constructor*/
    constructor(params: iAutocompleteDefinitions) {
        // constructor(isStandAlone?: boolean, inputId?: string, field?: any, dp_AutocompleteType
        // ?: number, multiple?: boolean, minLength?: number,
        //     placeholder?: string, dropdown?: boolean, dp_AutocompleteImagesPath?: string,
        //     dp_AutocompleteImageExtension?: string, dp_AutocompleteImageContainerStyle?: string,
        //     dp_AutocompleteImageTextStyle?: string, dp_AutocompleteImageStyle?: string,
        //     dp_AutocompleteTableFields?: any
        //     , scrollHeight?: string, dropdownIcon?: string, delay?: number, style?: string,
        //     readonly?: boolean, disabled?: boolean, completeOnFocus?: boolean, autoHighlight?: boolean,
        //     type?: string, immutable?: boolean, required?: boolean, autofocus?: boolean,
        //     forceSelection?: boolean, dropdownMode?: string, baseZIndex?: number, autoZIndex?: boolean,
        //     showTransitionOptions?: string, hideTransitionOptions?: string, styleClass?: string
        //     , dpAutocompleteMaxSuggestionsToShow?: number, emptyMessage?: string, name?: string) {
        /*, autocomplete?: string*/
        /*this.suggestions = (suggestions == null ? null : suggestions);*/
        this.isStandAlone = (params.isStandAlone == null || params.isStandAlone === undefined ? true : params.isStandAlone);
        // this.inputId = inputId;
        this.inputId = (params.inputId == null || params.inputId === undefined ? 'dynamicInputId' : params.inputId);
        this.field = (params.field == null  || params.field === undefined  ? 'name' : params.field);
        this.initialValues = (params.initialValues == null  || params.initialValues === undefined  ? null : params.initialValues);
        
        this.dp_AutocompleteType = (params.dp_AutocompleteType == null ? AutocompleteType.Regular : params.dp_AutocompleteType);
        this.dropdown = (params.dropdown == null ? false : params.dropdown);
        // this.multiple = (multiple == null ? false : multiple);
        this.multiple = (params.dp_AutocompleteType !== 0 ? false :
            (params.multiple == null ? false : params.multiple)); /* if not regular, dont allow multiple */
        this.minLength = (params.minLength == null ? 1 : params.minLength);
        this.placeholder = params.placeholder;
        this.scrollHeight = (params.scrollHeight == null ? '200px' : params.scrollHeight);
        this.dropdownIcon = (params.dropdownIcon == null ? 'pi pi-caret-down' : params.dropdownIcon);
        this.delay = (params.delay == null ? 300 : params.delay);
        this.readonly = (params.readonly == null ? false : params.readonly);
        this.disabled = (params.disabled == null ? false : params.disabled);
        this.completeOnFocus = (params.dp_AutocompleteType === 1 ? true :
            (params.completeOnFocus == null ? false : params.completeOnFocus)); /* if tablse inside - open it on click*/
        /*this.completeOnFocus = (completeOnFocus == null ? false : completeOnFocus);*/
        this.autoHighlight = (params.autoHighlight == null ? false : params.autoHighlight);
        this.type = (params.type == null ? 'text' : params.type);
        this.immutable = (params.immutable == null ? true : params.immutable);
        this.required = (params.required == null ? false : params.required);
        this.autofocus = (params.autofocus == null ? false : params.autofocus);
        /* forceSelection - if true, clears the manual input if it does not match of the suggestions,  changed default from false to true*/
        this.forceSelection = (params.forceSelection == null ? true : params.forceSelection); /* change default to true */
        this.dropdownMode = (params.dropdownMode == null ? 'blank' : params.dropdownMode);
        this.baseZIndex = (params.baseZIndex == null ? 0 : params.baseZIndex);
        this.autoZIndex = (params.autoZIndex == null ? true : params.autoZIndex);
        // this.showTransitionOptions = (params.showTransitionOptions == null ? '225ms ease-out' : 'showTransitionOptions');
        // this.hideTransitionOptions = (params.hideTransitionOptions == null ? '195ms ease-in' : 'hideTransitionOptions');        
        this.styleClass = (this.dp_AutocompleteType === 1 ? 'clsWithTable' : params.styleClass);
        this.dpAutocompleteMaxSuggestionsToShow = (params.dpAutocompleteMaxSuggestionsToShow == null ? 300
            : params.dpAutocompleteMaxSuggestionsToShow);

        this.emptyMessage = (params.emptyMessage == null ? 'No Suggestions found' : params.emptyMessage);
        this.dp_AutocompleteImagesPath = (params.dp_AutocompleteImagesPath == null ? '' : params.dp_AutocompleteImagesPath);
        this.dp_AutocompleteImageExtension = (params.dp_AutocompleteImageExtension == null ? 'png' : params.dp_AutocompleteImageExtension);

        this.dp_AutocompleteImageStyle = (params.dp_AutocompleteImageStyle == null
            ? 'width:32px;display:inline-block;margin:5px 0 2px 5px' : params.dp_AutocompleteImageStyle);

        this.dp_AutocompleteImageTextStyle = (params.dp_AutocompleteImageTextStyle == null
            ? 'font-size:18px;float:right;margin:10px 10px 0 0' : params.dp_AutocompleteImageTextStyle);

        this.dp_AutocompleteImageContainerStyle = (params.dp_AutocompleteImageContainerStyle == null
            ? 'border-bottom:1px solid #D5D5D5' : params.dp_AutocompleteImageContainerStyle);

        this.style = (params.style == null || params.style === undefined ? '' : params.style);
        this.dp_AutocompleteTableFields = (params.dp_AutocompleteTableFields == null ? undefined : params.dp_AutocompleteTableFields);

        // this.name = (name == null ? this.inputId : name);

        this.dpAutocompleteLazyDataFunc = params.dpAutocompleteLazyDataFunc;

        /*this.autocomplete = (autocomplete == null ? 'off' : autocomplete);*/
        /*
        this.suggestions = (suggestions == null ? null : suggestions);
        this.field = (field == null ? null : field);

        this.dropdown = (dropdown == null ? false : dropdown);
        this.multiple = (multiple == null ? false : multiple);


        this.inputStyle = (inputStyle == null ? null : inputStyle);
        this.panelStyle = (panelStyle == null ? null : panelStyle);
        this.styleClass = (styleClass == null ? null : styleClass);
        this.inputStyleClass = (inputStyleClass == null ? null : inputStyleClass);
        this.panelStyleClass = (panelStyleClass == null ? null : panelStyleClass);
        this.inputId = (inputId == null ? null : inputId);

        this.placeholder = (placeholder == null ? null : placeholder);

        this.maxlength = (maxlength == null ? null : maxlength);
        this.size = (size == null ? null : size);
        this.appendTo = (appendTo == null ? null : appendTo);
        this.tabindex = (tabindex == null ? null : tabindex);
        this.dataKey = (dataKey == null ? null : dataKey);


        this.ariaLabel = (ariaLabel == null ? null : ariaLabel);
        this.ariaLabelledBy = (ariaLabelledBy == null ? null : ariaLabelledBy);

        this.autocomplete = (autocomplete == null ? null : autocomplete);
               */




        /*this.rows = (rows == null ? 10 : rows);
        this.rowsPerPageOptions = (rowsPerPageOptions == null ? [10, 25, 50] : rowsPerPageOptions);
        this.paginator = (paginator == null ? true : paginator);
        this.currentPageReportTemplate = (currentPageReportTemplate == null ?
            'Showing {first} to {last} of {totalRecords} entries' : currentPageReportTemplate);*/
    }
}

/*
export class GridColumn implements IGridColumn {
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
}
*/
