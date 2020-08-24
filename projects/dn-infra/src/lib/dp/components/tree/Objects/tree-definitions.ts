export enum TreeProperties {
  value = 'value',
  selectionMode = 'selectionMode',
  selection = 'selection',
  style = 'style',
  styleClass = 'styleClass',
  layout = 'layout',
  metaKeySelection = 'metaKeySelection',
  loading = 'loading',
  loadingIcon = 'loadingIcon',
  emptyMessage = 'emptyMessage',
  ariaLabel = 'ariaLabel',
  filter = 'filter',
  filterBy = 'filterBy',
  filterMode = 'filterMode',
  filterPlaceholder = 'filterPlaceholder'
}

export interface ITreeDefinitions {
  value?: any;
  selectionMode?: string;
  selection?: any;
  style?: string;
  styleClass?: string;
  layout?: string;
  metaKeySelection?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  emptyMessage?: string;
  ariaLabel?: string;
  filter?: boolean;
  filterBy?: string;
  filterMode?: string;
  filterPlaceholder?: string;
}
export class TreeDefinitions implements ITreeDefinitions {
  value: any;
  selectionMode: string;
  selection: any;
  style: string;
  styleClass: string;
  layout: string;
  metaKeySelection: boolean;
  loading: boolean;
  loadingIcon: string;
  emptyMessage: string;
  ariaLabel: string;
  filter: boolean;
  filterBy: string;
  filterMode: string;
  filterPlaceholder: string;
  constructor(params: ITreeDefinitions) {
    // this.value = (params.value == null ? false : params.value);
    this.selectionMode = (params.selectionMode == null ? params.selectionMode : params.selectionMode);
    // this.style = (params.style == null ? params.style : params.style);
    // this.styleClass = (params.styleClass == null ? params.styleClass : params.styleClass);
    // this.appendTo = (params.appendTo == null ? params.appendTo : params.appendTo);
    // this.baseZIndex = (params.baseZIndex == null ? 0 : params.baseZIndex);
    // this.autoZIndex = (params.autoZIndex == null ? true : params.autoZIndex);
    // this.triggerEvent = (params.triggerEvent == null ? 'contextmenu' : params.triggerEvent);
  }
}
