// import { Component, OnInit, Input, forwardRef, Provider } from '@angular/core';
// import { GridColumn, GridColumnType } from '../objects/grid-definitions';
// import { CheckboxDefinitions } from '../../checkbox/objects/checkbox-definitions';
// import { InputNumberProperties } from '../../inputnumber/objects/inputnumber-definitions';
// import { TableStoreService } from '../../../services/table-store.service';
// import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// export const CELL_CONTROL_VALUE_ACCESSOR: Provider = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => CellComponent),
//   multi: true
// };

// @Component({ 
//   selector: 'app-cell',
//   templateUrl: './cell.component.html',
//   styleUrls: ['./cell.component.css'],
//   providers: [CELL_CONTROL_VALUE_ACCESSOR],

// })
// export class CellComponent implements OnInit, ControlValueAccessor {
//   @Input()
//   row: any;
 

//   @Input()
//   column: GridColumn;

//   @Input()
//   rowIndex: number;

//   @Input()
//   stateInstance: TableStoreService;

//   gridColumnTypeEnum = GridColumnType;

//   inputNumberProperties = InputNumberProperties;
//   private _innerValue: number;

//   private onChangeCallback: (_: number) => void = () => { };
//   private onTouchedCallback: () => void = () => { };

//   createCheckboxDefinition(column: GridColumn) {
//     const checkboxDefinition = new CheckboxDefinitions({ binary: true });
//     return checkboxDefinition;
//   }

//   // isRowValid(id: number, event: boolean){
//   //   this.stateInstance.validate(id, event);
//   // }

//   ngOnInit(): void {
//   }

//   clickEvent(val) {
//     if (this.column.onClick !== undefined) {
//       this.column.onClick(val);
//     }
//   }


//   public get innerValue(): number {
//     return this._innerValue;
//   }

//   public set innerValue(newValue: number) {
//     this._innerValue = newValue;
//     this.onChangeCallback(newValue);
//   }

//   public onBlur() {
//     this.onTouchedCallback();
//   }

//   public writeValue(value: number) {
//     if (value !== this.innerValue) {
//       this.innerValue = value;
//     }
//   }


//   public registerOnChange(callback: (_: number) => void) {
//     this.onChangeCallback = callback;
//   }


//   public registerOnTouched(callback: () => void) {
//     this.onTouchedCallback = callback;
//   }
// }



// // this.countryService.getCountries().then(countries => {
// //   this.countries = countries;
// // });

