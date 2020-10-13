export class ICalendarDefinitions {
    isStandAlone?: boolean;
    selectionMode?: SelectionMode;
    showTime?: boolean;
    timeOnly?: boolean;
    showIcon?: boolean;
    readonlyInput?: boolean;
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: string;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    yearRange?: string;
    showButtonBar?: boolean;
    icon?: string;
}

export enum CalendarProperties {
    selectionMode = 'selectionMode',
    showTime = 'showTime',
    timeOnly = 'timeOnly',
    showIcon = 'showIcon',
    readonlyInput = 'readonlyInput',
    minDate = 'minDate',
    maxDate = 'maxDate',
    dateFormat = 'dateFormat',
    monthNavigator = 'monthNavigator',
    yearNavigator = 'yearNavigator',
    yearRange = 'yearRange',
    showButtonBar = 'showButtonBar',
    icon = 'icon'
  }

export enum SelectionMode {
    single = 'single',
    multiple = 'multiple',
    range = 'range'
}

export class CalendarDefinitions implements ICalendarDefinitions {
    isStandAlone: boolean;
    selectionMode: SelectionMode;
    showTime: boolean;
    timeOnly: boolean;
    showIcon: boolean;
    readonlyInput: boolean;
    minDate: Date;
    maxDate: Date;
    dateFormat: string;
    monthNavigator: boolean;
    yearNavigator: boolean;
    yearRange: string;
    showButtonBar?: boolean;
    icon: string;
    constructor(params: ICalendarDefinitions) {
        this.isStandAlone = (params.isStandAlone == null ? true : params.isStandAlone);
        this.selectionMode = (params.selectionMode == null ? SelectionMode.single : params.selectionMode);
        this.showTime = (params.showTime == null ? false : params.showTime);
        this.timeOnly = (params.timeOnly == null ? false : params.timeOnly);
        this.showIcon = (params.showIcon == null || params.showIcon === undefined ? true : params.showIcon);
        this.readonlyInput = (params.readonlyInput == null ? false : params.readonlyInput);
        this.minDate = (params.minDate == null ? new Date(1900, 1, 1) : params.minDate);
        this.maxDate = (params.maxDate == null ? new Date(2500, 1, 1) : params.maxDate);
        this.dateFormat = (params.dateFormat == null ? 'dd/mm/yy' : params.dateFormat);
        this.monthNavigator = (params.monthNavigator == null ? true : params.monthNavigator);
        this.yearNavigator = (params.yearNavigator == null ? true : params.yearNavigator);
        const defaultYearRange = (new Date().getFullYear() - 2) + ':' + (new Date().getFullYear() + 2);
        this.yearRange = (params.yearRange == null ? defaultYearRange : params.yearRange);
        this.showButtonBar = (params.showButtonBar == null ? true : params.showButtonBar);
        this.icon = (params.icon == null || params.icon === undefined ? 'pi pi-calendar' : params.icon);
    }
}




