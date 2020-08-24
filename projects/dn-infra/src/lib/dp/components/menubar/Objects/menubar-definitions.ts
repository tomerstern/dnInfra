export enum MenubarProperties {
    model = 'model',
    style = 'style',
    styleClass = 'styleClass',
    baseZIndex = 'baseZIndex',
    autoZIndex = 'autoZIndex'
  }

  export interface IMenubarDefinitions {
    model?: any;
    style?: string;
    styleClass?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
  }
  export class MenubarDefinitions implements IMenubarDefinitions {
    model: any;
    style: string;
    styleClass: string;
    baseZIndex: number;
    autoZIndex: boolean;
    constructor(params: IMenubarDefinitions) {
        this.style = (params.style == null ? params.style : params.style);
        this.styleClass = (params.styleClass == null ? params.styleClass : params.styleClass);
        this.baseZIndex = (params.baseZIndex == null ? 0 : params.baseZIndex);
        this.autoZIndex = (params.autoZIndex == null ? true : params.autoZIndex);
    }
  }
