export { MenuItem as DpMenuItem} from 'primeng/api';
export { MessageService as DpMessageService } from 'primeng/api';

// // tslint:disable-next-line: no-empty-interface
// export interface DpMenuItem extends MenuItem {
//   // description: string;
// }

export enum SplitbuttonProperties {
  label = 'label',
  icon = 'icon',
  styleClass = 'styleClass',
  iconPos = 'iconPos',
  style = 'style',
  menuStyle = 'menuStyle',
  menuStyleClass = 'menuStyleClass',
  appendTo = 'appendTo',
  disabled = 'disabled',
  dir = 'dir'
  // tabindex = 'tabindex',
  // showTransitionOptions = 'showTransitionOptions',
  // hideTransitionOptions = 'hideTransitionOptions',

}

export interface ISplitbuttonDefinitions {
  label?: string;
  icon?: string;
  styleClass?: string;
  iconPos?: string;
  style?: string;
  menuStyle?: string;
  menuStyleClass?: string;
  appendTo?: any;
  disabled?: boolean;
  dir?: string;
  // tabindex?: number;
  // showTransitionOptions?:	string;
  // hideTransitionOptions?:	string;

}
export class SplitbuttonDefinitions implements ISplitbuttonDefinitions {
  label: string;
  icon: string;
  styleClass: string;
  iconPos: string;  // valid values are "left" and "right".
  style: string;
  menuStyle: string;
  menuStyleClass: string;
  appendTo: any;
  disabled: boolean;
  dir: string;

  // tabindex: number;
  // showTransitionOptions: string;
  // hideTransitionOptions: string;
  constructor(params: ISplitbuttonDefinitions) {
    this.label = (params.label == null ? params.label : params.label);
    this.icon = (params.icon == null ? params.icon : params.icon);
    this.styleClass = (params.styleClass == null ? 'ui-button-primary' : params.styleClass);
    this.iconPos = (params.iconPos == null ? 'left' : params.iconPos);
    this.style = (params.style == null ? '' : params.style);
    this.menuStyle = (params.menuStyle == null ? '' : params.menuStyle);
    this.menuStyleClass = (params.menuStyleClass == null ? '' : params.menuStyleClass);
    this.appendTo = (params.appendTo == null ? '' : params.appendTo);
    this.disabled = (params.disabled == null ? false : params.disabled);
    this.dir = (params.dir == null ? '' : params.dir);

    // this.tabindex = (params.tabindex == null ? params.tabindex : params.tabindex);
    // this.showTransitionOptions = (params.showTransitionOptions == null ? '225ms ease-out' : params.showTransitionOptions);
    // this.hideTransitionOptions = (params.hideTransitionOptions == null ? '195ms ease-in' : params.hideTransitionOptions);
  }
}
