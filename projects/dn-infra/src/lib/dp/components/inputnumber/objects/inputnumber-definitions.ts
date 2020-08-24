export enum InputNumberMode {
    integer = 1,
    decimal = 2,
    currency = 3
  }

  export enum InputNumberProperties {
    mode = 'mode',
    min = 'min',
    max = 'max',
    maxlength = 'maxlength',
    maxFractionDigits = 'maxFractionDigits',
    minFractionDigits = 'minFractionDigits',
    currency = 'currency',
    step = 'step',
    prefix = 'prefix',
    suffix = 'suffix',
    useGrouping = 'useGrouping',
    format = 'format'
  }

  export interface IInputNumberDefinitions {
    isStandAlone?: boolean;
    mode?: string;
    min?: number;
    max?: number;
    maxlength?: number;
    maxFractionDigits?: number;
    minFractionDigits?: number;
    currency?: string;
    step?: number;
    prefix?: string;
    suffix?: string;
    useGrouping?: boolean;
    format?: boolean;
  }

  export class InputNumberDefinitions implements IInputNumberDefinitions {
    isStandAlone: boolean;
    mode: string;
    min: number;
    max: number;
    maxlength: number;
    maxFractionDigits: number;
    minFractionDigits: number;
    currency: string;
    step: number;
    prefix: string;
    suffix: string;
    useGrouping: boolean;
    format: boolean;
    constructor(params: IInputNumberDefinitions) {
        this.isStandAlone = (params.isStandAlone == null ? true : params.isStandAlone);
        this.mode = (params.mode == null ? InputNumberMode[InputNumberMode.decimal] : InputNumberMode[InputNumberMode[this.mode]]);
        this.min = (params.min == null ? -9999999999 : params.min);
        this.max = (params.max == null ? 9999999999 : params.max);
        this.maxlength = (params.maxlength == null ? 15 : params.maxlength);
        this.maxFractionDigits = (params.maxFractionDigits == null ? 2 : params.maxFractionDigits);
        this.minFractionDigits = (params.minFractionDigits == null ? 2 : params.minFractionDigits);
        this.currency = (params.currency == null ? 'USD' : params.currency);
        this.step = (params.step == null ? 1 : params.step);
        this.prefix = (params.prefix == null ? '' : params.prefix);
        this.suffix = (params.suffix == null ? '' : params.suffix);
        this.useGrouping = (params.useGrouping == null ? true : params.useGrouping);
        this.format = (params.format == null ? true : params.format);
    }
  }
