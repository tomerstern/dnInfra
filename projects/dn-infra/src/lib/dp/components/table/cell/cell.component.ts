import { Component, OnInit, Input } from '@angular/core';
import { GridColumn, GridColumnType } from '../objects/grid-definitions';
import { CheckboxDefinitions } from '../../checkbox/objects/checkbox-definitions';
import { InputNumberProperties } from '../../inputnumber/objects/inputnumber-definitions';
import { TableStoreService } from '../../../services/table-store.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input()
  row: any;

  @Input()
  column: GridColumn;

  @Input()
  rowIndex: number;

  @Input()
  stateInstance: TableStoreService;

  gridColumnTypeEnum = GridColumnType;

  inputNumberProperties = InputNumberProperties;

  createCheckboxDefinition(column: GridColumn) {
    const checkboxDefinition = new CheckboxDefinitions({ binary: true });
    return checkboxDefinition;
  }

  // isRowValid(id: number, event: boolean){
  //   this.stateInstance.validate(id, event);
  // }

  ngOnInit(): void {
  }

  clickEvent(val) {
    if (this.column.onClick !== undefined) {
      this.column.onClick(val);
    }
  }
}



// this.countryService.getCountries().then(countries => {
//   this.countries = countries;
// });

