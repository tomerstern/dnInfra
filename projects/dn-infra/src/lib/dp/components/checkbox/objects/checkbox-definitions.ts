export interface ICheckboxDefinitions {
    isStandAlone?: boolean;
    binary?: boolean;
    disabled?: boolean;
}

export class CheckboxDefinitions implements ICheckboxDefinitions {    
    isStandAlone: boolean;
    binary: boolean;
    disabled: boolean;
    constructor(params: ICheckboxDefinitions) {
        this.isStandAlone = (params.isStandAlone == null ? true : params.isStandAlone);
        this.binary = (params.binary == null ? true : params.binary);
        this.disabled = (params.disabled == null ? false : params.disabled);
    }
}

export enum CheckboxProperties {
    disabled = 'disabled',
    binary = 'binary'
  }
