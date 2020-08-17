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
export class AutocompleteDefinitions {
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
    showTransitionOptions: string;
    hideTransitionOptions: string;
    ariaLabel: string;
    ariaLabelledBy: string;
    unique: boolean;
    autocomplete: string;
    dp_AutocompleteTableFields: {IAutocompleteTableFields};  /* Extra data if needed for table fields */
    dp_AutocompleteMaxSuggestionsToShow: number;  /*custom type*/
    dp_AutocompleteImagesPath: string;
    dp_AutocompleteImageExtension: string;
    dp_AutocompleteImageContainerStyle: string;
    dp_AutocompleteImageTextStyle: string;
    dp_AutocompleteImageStyle: string;

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
    constructor(isStandAlone: boolean, inputId?: string, field?: any,  dp_AutocompleteType?: number, multiple?: boolean, minLength?: number,
        placeholder?: string, dropdown?: boolean, dp_AutocompleteImagesPath?: string,
        dp_AutocompleteImageExtension?: string, dp_AutocompleteImageContainerStyle?: string,
        dp_AutocompleteImageTextStyle?: string, dp_AutocompleteImageStyle?: string,
        dp_AutocompleteTableFields?: any
        , scrollHeight?: string, dropdownIcon?: string, delay?: number, style?: string,
        readonly?: boolean, disabled?: boolean, completeOnFocus?: boolean, autoHighlight?: boolean,
        type?: string, immutable?: boolean, required?: boolean, autofocus?: boolean,
        forceSelection?: boolean, dropdownMode?: string, baseZIndex?: number, autoZIndex?: boolean,
        showTransitionOptions?: string, hideTransitionOptions?: string, unique?: boolean, styleClass?: string
        , dp_AutocompleteMaxSuggestionsToShow?: number, emptyMessage?: string, name?: string) {
        /*, autocomplete?: string*/
        /*this.suggestions = (suggestions == null ? null : suggestions);*/
        this.isStandAlone = ( isStandAlone == null ? true : isStandAlone);
        // this.inputId = inputId;
        this.inputId = (inputId == null ||  inputId === undefined ? 'dynamicInputId' : inputId);
        this.field = (field == null ? null : field);
        this.dp_AutocompleteType = (dp_AutocompleteType == null ? AutocompleteType.Regular : dp_AutocompleteType);
        this.dropdown = (dropdown == null ? false : dropdown);
        // this.multiple = (multiple == null ? false : multiple);
        this.multiple = (dp_AutocompleteType !== 0 ? false :
            (multiple == null ? false : multiple)); /* if not regular, dont allow multiple */
        this.minLength = (minLength == null ? 1 : minLength);
        this.placeholder = placeholder;
        this.scrollHeight = (scrollHeight == null ? '200px' : scrollHeight);
        this.dropdownIcon = (dropdownIcon == null ? 'pi pi-caret-down' : dropdownIcon);
        this.delay = (delay == null ? 300 : delay);
        this.readonly = (readonly == null ? false : readonly);
        this.disabled = (disabled == null ? false : disabled);
        this.completeOnFocus = (dp_AutocompleteType === 1 ? true :
                (completeOnFocus == null ? false : completeOnFocus)); /* if tablse inside - open it on click*/
        /*this.completeOnFocus = (completeOnFocus == null ? false : completeOnFocus);*/
        this.autoHighlight = (autoHighlight == null ? false : autoHighlight);
        this.type = (type == null ? 'text' : type);
        this.immutable = (immutable == null ? true : immutable);
        this.required = (required == null ? false : required);
        this.autofocus = (autofocus == null ? false : autofocus);
        /* forceSelection - if true, clears the manual input if it does not match of the suggestions,  changed default from false to true*/
        this.forceSelection = (forceSelection == null ? true : forceSelection); /* change default to true */
        this.dropdownMode = (dropdownMode == null ? 'blank' : dropdownMode);
        this.baseZIndex = (baseZIndex == null ? 0 : baseZIndex);
        this.autoZIndex = (autoZIndex == null ? true : autoZIndex);
        this.showTransitionOptions = (showTransitionOptions == null ? '225ms ease-out' : 'showTransitionOptions');
        this.hideTransitionOptions = (hideTransitionOptions == null ? '195ms ease-in' : 'hideTransitionOptions');
        this.unique = (unique == null ? true : unique);
        this.styleClass = (this.dp_AutocompleteType === 1 ? 'clsWithTable' : styleClass);
        this.dp_AutocompleteMaxSuggestionsToShow = (dp_AutocompleteMaxSuggestionsToShow == null ? 300
            : dp_AutocompleteMaxSuggestionsToShow);

        this.emptyMessage = (emptyMessage == null ? 'No Suggestions found' : emptyMessage);
        this.dp_AutocompleteImagesPath = (dp_AutocompleteImagesPath == null ? '' : dp_AutocompleteImagesPath);
        this.dp_AutocompleteImageExtension = (dp_AutocompleteImageExtension == null ? 'png' : dp_AutocompleteImageExtension);

        this.dp_AutocompleteImageStyle = (dp_AutocompleteImageStyle == null
            ? 'width:32px;display:inline-block;margin:5px 0 2px 5px' : dp_AutocompleteImageStyle);

        this.dp_AutocompleteImageTextStyle = (dp_AutocompleteImageTextStyle == null
            ? 'font-size:18px;float:right;margin:10px 10px 0 0' : dp_AutocompleteImageTextStyle);

        this.dp_AutocompleteImageContainerStyle = (dp_AutocompleteImageContainerStyle == null
             ? 'border-bottom:1px solid #D5D5D5' : dp_AutocompleteImageContainerStyle);

        this.style = (style == null ||  style === undefined ? '' : style);
        this.dp_AutocompleteTableFields = (dp_AutocompleteTableFields == null ? undefined : dp_AutocompleteTableFields);

        this.name = (name == null ? this.inputId : name);

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
