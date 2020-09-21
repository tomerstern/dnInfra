import { MenuItem } from 'primeng';
export { MenuItem as DpMenuItem } from 'primeng/api';

// // tslint:disable-next-line: no-empty-interface
// export interface DpMenuItem extends MenuItem {
//   // description: string;
// }

export enum TabmenuProperties {
    activeItem = 'activeItem',
    style = 'style',
    styleClass = 'styleClass',
}

export interface ITabmenuDefinitions {
    activeItem?: MenuItem;
    style?: string;
    styleClass?: string;
}

export class TabmenuDefinitions implements ITabmenuDefinitions {
    activeItem: MenuItem;
    style: string;
    styleClass: string;
    constructor(params: ITabmenuDefinitions) {
        this.style = (params.style == null || params.style === undefined ? '' : params.style);
        this.styleClass = (params.styleClass == null || params.styleClass === undefined ? '' : params.styleClass);
     }

}
