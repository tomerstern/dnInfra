export interface IFieldsetDefinitions {
    legend?: string;
    toggleable?: boolean;
  }

export class FieldsetDefinitions implements IFieldsetDefinitions {
    legend: string;
    toggleable: boolean;
    constructor(params: IFieldsetDefinitions) {
        this.toggleable = false;
    }
}
