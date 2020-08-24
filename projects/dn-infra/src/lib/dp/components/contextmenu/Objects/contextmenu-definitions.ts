  export enum ContextmenuProperties {
    global = 'global',
    target = 'target',
    style = 'style',
    styleClass = 'styleClass',
    appendTo = 'appendTo',
    baseZIndex = 'baseZIndex',
    autoZIndex = 'autoZIndex',
    triggerEvent = 'triggerEvent'
  }

  export interface IContextmenuDefinitions {
    global?: boolean;
    target?: string;
    style?: string;
    styleClass?: string;
    appendTo?: any;
    baseZIndex?: number;
    autoZIndex?: boolean;
    triggerEvent?: string;
  }
  export class ContextmenuDefinitions implements IContextmenuDefinitions {
    global: boolean;
    target: string;
    style: string;
    styleClass: string;
    appendTo: any;
    baseZIndex: number;
    autoZIndex: boolean;
    triggerEvent: string;
    constructor(params: IContextmenuDefinitions) {
        this.global = (params.global == null ? false : params.global);
        this.target = (params.target == null ? params.target : params.target);
        this.style = (params.style == null ? params.style : params.style);
        this.styleClass = (params.styleClass == null ? params.styleClass : params.styleClass);
        this.appendTo = (params.appendTo == null ? params.appendTo : params.appendTo);
        this.baseZIndex = (params.baseZIndex == null ? 0 : params.baseZIndex);
        this.autoZIndex = (params.autoZIndex == null ? true : params.autoZIndex);
        this.triggerEvent = (params.triggerEvent == null ? 'contextmenu' : params.triggerEvent);
    }
  }
