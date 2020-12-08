export enum InputTextMode {
    basic = 'basic',
    float = 'float'
}

export enum InputTextProperties {
    mode = 'mode',
    id = 'id',
    size = 'size',
    disabled = 'disabled',
    floatMessage = 'floatMessage'
}

export interface IInputtextDefinitions {
    isStandAlone?: boolean;
    mode?: string;
    id?: string;
    size?: number;
    disabled?: boolean;
    floatMessage?: string;
}

export class InputtextDefinitions implements IInputtextDefinitions {
    isStandAlone: boolean;
    id: string;
    mode: string;
    size: number;
    disabled: boolean;
    floatMessage: string;
    constructor(params: IInputtextDefinitions) {
        this.id = params.id;
        this.isStandAlone = (params.isStandAlone == null ? true : params.isStandAlone);
        this.mode = (params.mode == null ? InputTextMode.basic : InputTextMode[params.mode]);
        this.size = (params.size == null ? 30 : params.size);
        this.disabled = (params.disabled == null ? false : params.disabled);
        this.floatMessage = (params.floatMessage == null ? '' : params.floatMessage);
    }
}
