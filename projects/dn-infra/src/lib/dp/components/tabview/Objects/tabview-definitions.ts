export enum TabviewProperties {
    orientation = 'orientation', /* for TabView */
    activeIndex = 'activeIndex',
    style = 'style',
    styleClass = 'styleClass',
}

export enum TabpanelProperties {
    header = 'header', /* for TabPanel */
    selected = 'selected',
    disabled = 'disabled',
    headerStyle = 'headerStyle',
    headerStyleClass = 'headerStyleClass',
    tooltip = 'tooltip',
    tooltipStyleClass = 'tooltipStyleClass',
    tooltipPosition = 'tooltipPosition',
    tooltipPositionStyle = 'tooltipPositionStyle'
}

export enum orientationDpTab {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right'
}

export enum tooltipPositionDpTab {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right'
}


export interface ITabviewDefinitions {
    orientation?: string;
    activeIndex?: number;
    style?: string;
    styleClass?: string;
}


export interface ITabpanelDefinitions {
    header?: string;
    selected?: boolean;
    disabled?: boolean;
    headerStyle?: string;
    headerStyleClass?: string;
    tooltip?: any;
    tooltipStyleClass?: string;
    tooltipPosition?: string;
    tooltipPositionStyle?: string;
}

export class TabviewDefinitions implements ITabviewDefinitions {
    orientation: string;
    activeIndex: number;
    style: string;
    styleClass: string;

    constructor(params: ITabviewDefinitions) { /* fix case sensitive */
        this.orientation =
            (params.orientation == null ? 'top' :
                (params.orientation.toLowerCase() === 'top' ? 'top' :
                    (params.orientation.toLowerCase() === 'right' ? 'right' :
                        (params.orientation.toLowerCase() === 'left' ? 'left' :
                            (params.orientation.toLowerCase() === 'bottom' ? 'bottom' :
                                'top'
                            )
                        )
                    )
                )
            );

        this.activeIndex = (params.activeIndex == null ? params.activeIndex : params.activeIndex);

        // this.style = (params.style === undefined ? '' : params.style);
        // this.styleClass = (params.styleClass  == null ? params.styleClass : params.styleClass);

    }


}


export class TabpanelDefinitions implements ITabpanelDefinitions {

    header: string;
    selected: boolean;
    disabled: boolean;
    headerStyle: string;
    headerStyleClass: string;
    tooltip: any;
    tooltipStyleClass: string;
    tooltipPosition: string;
    tooltipPositionStyle: string;

    constructor(params: ITabpanelDefinitions) { /* fix case sensitive */

        this.tooltipPosition =
            (params.tooltipPosition == null ? 'top' :
                (params.tooltipPosition.toLowerCase() === 'top' ? 'top' :
                    (params.tooltipPosition.toLowerCase() === 'right' ? 'right' :
                        (params.tooltipPosition.toLowerCase() === 'left' ? 'left' :
                            (params.tooltipPosition.toLowerCase() === 'bottom' ? 'bottom' :
                                'top'
                            )
                        )
                    )
                )
            );

        this.header = (params.header == null || params.header === undefined ? '' : params.header);
        this.selected = (params.selected == null ? false : params.selected);
        this.disabled = (params.disabled == null ? false : params.disabled);
        this.tooltip = (params.tooltip == null ? undefined : params.tooltip);
        // this.headerStyle = (params.headerStyle == null ? '' : params.headerStyle);
        // this.headerStyleClass = (params.headerStyleClass == null ? params.styleClass : params.headerStyleClass);
        // this.tooltipStyleClass = (params.tooltipStyleClass  == null ? '' : params.tooltipStyleClass);
        // this.tooltipPositionStyle = (params.tooltipPositionStyle  == null ? params.tooltipPositionStyle : params.styleClass);

    }


}
