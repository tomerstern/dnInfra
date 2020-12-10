// import {RadioButtonModule} from 'primeng/radiobutton';
// export { MessageService as DpMessageService } from 'primeng/api';



export enum RadioButtonProperties {
label = 'label',
name="name",
value="value" ,
disabled ="disabled",
tabindex ="tabindex",
inputId="inputId",
ariaLabelledBy="ariaLabelledBy",
style = 'style',
styleClass="styleClass",
labelStyleClass="labelStyleClass"
 
}

export interface IRadioButtonDefinitions {
  label?: string;
  name?: string;
  value?: any;
  disabled?: boolean;
  tabindex?: number;
  inputId?: string;
  ariaLabelledBy?: string;
  style?: string;
  styleClass?: string;
  labelStyleClass?: string;
}
export class RadioButtonDefinitions implements IRadioButtonDefinitions {
    label: string;
    name: string;
    value: any;
    disabled: boolean;
    tabindex: number;
    inputId: string;
    ariaLabelledBy: string;
    style: string;
    styleClass: string;
    labelStyleClass: string;

  constructor(params: IRadioButtonDefinitions) {
    this.label = (params.label == null ? params.label : params.label);
    this.name = (params.name == null ? params.name : params.name);
    this.value = (params.value == null ? params.value : params.value);
    this.disabled = (params.disabled == null ? false : params.disabled);
    this.tabindex = (params.tabindex == null ? params.tabindex : params.tabindex);
    this.inputId = (params.inputId == null ? params.inputId : params.inputId);
    this.ariaLabelledBy = (params.ariaLabelledBy == null ? params.ariaLabelledBy : params.ariaLabelledBy);
    this.style = (params.style == null ? '' : params.style);
    this.styleClass = (params.styleClass == null ? params.styleClass : params.styleClass);
    this.labelStyleClass = (params.labelStyleClass == null ? params.labelStyleClass : params.labelStyleClass);
  }
}
