export enum DialogProperties {
    header = 'header',
    draggable = 'draggable',
    keepInViewport = 'keepInViewport',
    resizable = 'resizable',
    contentStyle = 'contentStyle',
    visible = 'visible',
    modal = 'modal',
    position = 'position',
    blockScroll = 'blockScroll',
    closeOnEscape = 'closeOnEscape',
    dismissableMask = 'dismissableMask',
    rtl = 'rtl',
    closable = 'closable',
    appendTo = 'appendTo',
    style = 'style',
    styleClass = 'styleClass',
    maskStyleClass = 'maskStyleClass',
    contentStyleClass = 'contentStyleClass',
    showHeader = 'showHeader',
    maximizable = 'maximizable',
    dpDialogContext = 'dpDialogContext',
    dpDialogFunc = 'dpDialogFunc',
    buttons = 'buttons', /* added */
    buttonsArr = 'buttonsArr' /* added */
}

export enum buttonsDpDialog {
    none = 'none',
    default = 'default',
    custom = 'custom'
}
export enum positionDpDialog {
    center = 'center',
    right = 'right',
    left = 'left',
    top = 'top',
    topleft = 'topleft',
    topright = 'topright',
    bottom = 'bottom',
    bottomleft = 'bottomleft',
    bottomright = 'bottomright'
}

export enum DialogButtonsFields {
    index = 'index',
    label = 'label',
    class = 'class'
}

export interface IDialogDefinitions {
    header?: string;
    draggable?: boolean;
    keepInViewport?: boolean;
    resizable?: boolean;
    contentStyle?: object; //////////////
    visible?: boolean;
    modal?: boolean;
    position?: string;
    blockScroll?: boolean;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    closable?: boolean;
    appendTo?: any;
    style?: object;
    styleClass?: string;
    maskStyleClass?: string;
    // contentStyleClass?: string;
    showHeader?: boolean;
    maximizable?: boolean;
    dpDialogContext?: string;
    dpDialogFunc?: Function;
    buttons?: string;
    buttonsArr?: any[];
}



export interface IDialogButtonsFields {
    index: number;
    label: string;
    class?: string;
}


export class DialogDefinitions implements IDialogDefinitions {
    header: string;
    draggable: boolean;
    keepInViewport: boolean;
    resizable: boolean;
    contentStyle: object;
    visible: boolean;
    modal: boolean;
    position: string;
    blockScroll: boolean;
    closeOnEscape: boolean;
    dismissableMask: boolean;
    rtl: boolean;
    closable: boolean;
    appendTo: any;
    style: object;
    styleClass: string;
    maskStyleClass: string;
    // contentStyleClass: string;
    showHeader: boolean;
    maximizable: boolean;
    dpDialogContext: string;
    dpDialogFunc: Function;
    buttons: string;
    buttonsArr: any[]; //  { IDialogButtonsFields }

    constructor(params: IDialogDefinitions) { /* fix case sensitive */
        this.position =
            (params.position == null ? 'center' :
                (params.position.toLowerCase() === 'center' ? 'center' :
                    (params.position.toLowerCase() === 'right' ? 'right' :
                        (params.position.toLowerCase() === 'left' ? 'left' :
                            (params.position.toLowerCase() === 'top' ? 'top' :
                                (params.position.toLowerCase() === 'topright' ? 'topright' :
                                    (params.position.toLowerCase() === 'topleft' ? 'topleft' :
                                        (params.position.toLowerCase() === 'bottom' ? 'bottom' :
                                            (params.position.toLowerCase() === 'bottomright' ? 'bottomright' :
                                                (params.position.toLowerCase() === 'bottomleft' ? 'bottomleft' :
                                                    'center'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );

        this.header = (params.header == null || params.header === undefined  ? '' : params.header);
        this.draggable = (params.draggable == null ? true : params.draggable );
        this.keepInViewport = (params.keepInViewport == null ? true : params.keepInViewport);
        this.resizable = (params.resizable == null ? true : params.resizable);
        this.contentStyle = (params.contentStyle == null ? params.contentStyle : params.contentStyle);
        this.visible = (params.visible == null ? false : params.visible);
        this.modal = (params.modal == null ? false : params.modal);
        this.blockScroll = (params.blockScroll == null ? false : params.blockScroll);
        this.closeOnEscape = (params.closeOnEscape == null ? true : params.closeOnEscape);
        this.dismissableMask = (params.dismissableMask == null ? false : params.dismissableMask);
        this.rtl = (params.rtl == null ? false : params.rtl);
        this.closable = (params.closable == null ? true : params.closable);
        this.appendTo = (params.appendTo == null ? params.appendTo : params.appendTo);
        this.style = (params.style === undefined ? {width: '50vw'} : params.style);
        this.styleClass = (params.styleClass == null ? params.styleClass : params.styleClass);
        this.maskStyleClass = (params.maskStyleClass == null ? params.maskStyleClass : params.maskStyleClass);
        // this.contentStyleClass = (params.contentStyleClass == null ? params.contentStyleClass : params.contentStyleClass);
        this.showHeader = (params.showHeader == null ? true : params.showHeader);
        this.maximizable = (params.maximizable == null ? false : params.maximizable);
       // this.dpDialogContext = (params.dpDialogContext === undefined ? {} : params.dpDialogContext);
        this.dpDialogContext = (params.dpDialogContext === null || params.dpDialogContext === undefined  ? '' : params.dpDialogContext);
        this.dpDialogFunc = params.dpDialogFunc;
        this.buttons = (params.buttons === null || params.buttons === undefined  ? buttonsDpDialog.none : params.buttons);
        this.buttonsArr = (params.buttonsArr == null ? undefined : params.buttonsArr);
    }



}
