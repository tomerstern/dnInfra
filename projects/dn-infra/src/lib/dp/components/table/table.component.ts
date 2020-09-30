import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, forwardRef, Provider } from '@angular/core';
import { GridDefinitions, GridColumnType } from './objects/grid-definitions';
import { TableStoreService, TableState } from '../../services/table-store.service';
import { Subscription, Observable } from 'rxjs';
import { Table } from 'primeng/table';
import { InputNumberProperties } from '../inputnumber/objects/inputnumber-definitions';



@Component({
  selector: 'dp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableStoreService],

})
export class TableComponent implements OnInit, OnChanges {

  @Input() definition: GridDefinitions;
  @Input() datasource: Array<any> = [];
  @Input() tableId: string;
  @Output() stateChanges: EventEmitter<TableState> = new EventEmitter();
  data: Observable<any>;

  exportColumns: any[];
  first = 0;
  toggleFilter: boolean;
  isEditable: boolean;
  isFooter = false;
  selectedEntity: any;
  obj = {};
  sub: Subscription;
  inputNumberProperties = InputNumberProperties;
  gridColumnTypeEnum = GridColumnType;
  @ViewChild('dt') table: Table;
  @ViewChild('testEl') testEl: ElementRef;
  dataState$: Observable<any> = this.tableStore.dataState$;
  constructor(public tableStore: TableStoreService) { }

  ngOnInit() {
    this.data = this.tableStore.dataState$;
    this.obj = { background: 'red', color: 'green' };
    this.exportColumns = this.definition.columns.map(col => ({ title: col.headername, dataKey: col.fieldname }));
    this.setIsEditable();
    this.setIsFooter();
    this.sub = this.tableStore.tableState$.subscribe(newState => {
      this.stateChanges.emit(newState);
    });
  }

  ngOnChanges() {
    this.tableStore.setDataState(this.datasource);
  }

  toggleFn(el: HTMLElement) {
    // console.log(el);
  }

  // if at least one of the columns is editable then the grid is editable and we add add and delete buttons
  setIsEditable() {
    for (const column of this.definition.columns) {
      if (column.iseditable) {
        this.isEditable = true;
        break;
      }
    }
  }

  getIt(x) {
    console.log(x);
  }

  setIsFooter() {
    for (const column of this.definition.columns) {
      if (column.ColumnSum || column.ColumnTotal) {
        this.isFooter = true;
        break;
      }
    }
  }

  checkMandatory() {
    const emptyMandatoryFieldNames: string[] = [];
    const mandatoryFieldNames: string[] = this.getMandatoryFieldNames();
    const rows = this.data.source['_value'];
    this.loopRows(rows, mandatoryFieldNames, emptyMandatoryFieldNames);
    // debugger
  }

  loopRows(rows, mandatoryFieldNames, emptyMandatoryFieldNames) {
    for (const row of rows) {
      this.loopMandatoryFields(row, mandatoryFieldNames, emptyMandatoryFieldNames);
    }
  }

  loopMandatoryFields(row, mandatoryFieldNames, emptyMandatoryFieldNames) {
    for (const fieldName of mandatoryFieldNames) {
      if (row[fieldName] === '' || row[fieldName] === undefined || row[fieldName] == null) {
        if (!emptyMandatoryFieldNames.includes(fieldName)) {
          emptyMandatoryFieldNames.push(fieldName);
        }
      }
    }
  }

  getMandatoryFieldNames() {
    const mandatoryFieldNames: string[] = [];
    for (const column of this.definition.columns) {
      if (!column.isMandatory) {
        continue;
      }
      mandatoryFieldNames.push(column.fieldname);
    }
    return mandatoryFieldNames;
  }

  deleteRow(id, row) {
    delete this.datasource[id];
  }

  addRow() {
    const newRow = this.newEmptyRow();
    this.datasource.push(newRow);
  }

  newEmptyRow() {
    const row = {};
    row[this.definition.dataKey] = '';
    this.definition.columns.forEach((column) => {
      const columnName = column.fieldname;
      row[columnName] = '';
    });
    return row;
  }

  setLastPage() {
    const totalRows = this.datasource.length;
    const rowsPerPage = this.definition.rows;
    const pages = totalRows / rowsPerPage;
    const lastPage = (pages % 1 === 0 ? Math.floor(pages) : Math.floor(pages) + 1);
    this.first = (lastPage * rowsPerPage) - rowsPerPage;
  }

  exportPdf() {
    import('jspdf').then((jspdf: any) => {
      import('jspdf-autotable').then(x => {
        const doc = new jspdf.default('l', 'mm', [305, 250]);
        doc.autoTable(this.exportColumns, this.datasource);
        doc.save('products.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.datasource);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
  onRowSelect(event) {
    const boo = this.selectedEntity;
  }

  onDateSelect(value) {
    this.table.filter(value, 'date', 'equals');
  }

}
