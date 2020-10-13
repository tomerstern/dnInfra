import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges,
  ChangeDetectionStrategy, SimpleChanges
} from '@angular/core';
import { GridDefinitions, GridColumnType } from './objects/grid-definitions';
import { TableStoreService, TableState } from '../../services/table-store.service';
import { Subscription, Observable, fromEvent, Subject } from 'rxjs';
import { Table } from 'primeng/table';
import { InputNumberProperties } from '../inputnumber/objects/inputnumber-definitions';
import { Store } from '@ngrx/store';
import { addRow, deleteRow, updateTable } from '../../store/actions';
import { getAppState, getTableStateById } from '../../store/selectors';
import { debounceTime, distinctUntilChanged, map, take } from 'rxjs/operators';
import { DpDialogService, DpDynamicDialogRef } from '../dynamicdialog/Objects/dynamicdialog-definitions';
import { ColumnSelectionComponent } from './columnSelection/column-selection/column-selection.component';
import { MessageService } from 'primeng/api'; /* only for showing return value */

@Component({
  selector: 'dp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableStoreService, DpDialogService, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TableComponent implements OnInit, OnChanges {

  @Input() definition: GridDefinitions;
  @Input() datasource: Array<any> = [];
  @Input() tableId: string;
  @Output() stateChanges: EventEmitter<TableState> = new EventEmitter();
  data$: Observable<any>;

  exportColumns: any[];
  first = 0;
  toggleFilter: boolean;
  isEditable: boolean;
  isFooter = false;
  selectedEntity: any;
  obj = {};
  sub: Subscription;
  newRow = {};
  inputNumberProperties = InputNumberProperties;
  gridColumnTypeEnum = GridColumnType;
  @ViewChild('dt') table: Table;
  @ViewChild('testEl') testEl: ElementRef;
  private inputDebouncer$: Subject<string> = new Subject();
  ref1: DpDynamicDialogRef;
  sourceList: any[] = [];
  //targetList: any[] = [];

  constructor(public dialogService: DpDialogService, public messageService: MessageService, private store: Store<any>) { 
  }

  ngOnInit() {
    this.obj = { background: 'red', color: 'green' };
    this.exportColumns = this.definition.columns.map(col => ({ title: col.headername, dataKey: col.fieldname }));
    this.setIsEditable();
    this.setIsFooter();

    this.inputDebouncer$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((val: string) => {
      // Remember value after debouncing
      console.log(val);

      // Do the actual search
    });
    //this.targetList = this.definition.columns;
  }

  showDynamicdialog1() {
    debugger
    const Tlist = this.definition.columns;
    this.ref1 = this.dialogService.open(ColumnSelectionComponent, {
      header: 'Choose Columns',
      width: '70%',
      data: {
        sourceList: this.sourceList,
        //targetList: this.targetList
        targetList: Tlist
        //id: '154'
      },
    });

    this.ref1.onClose.subscribe((ReturnObj) => {

      debugger;
      if (ReturnObj) {
        this.definition.columns = ReturnObj;
        // this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
      }
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.ref1) {
      this.ref1.close();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tableId && this.datasource && changes.datasource.previousValue === null) {
      this.store.dispatch(updateTable({ data: { tableId: this.tableId, tableData: this.datasource } }));
      this.data$ = this.store.select(getTableStateById(this.tableId));
    } else {
      // alert('you must supply an ID for each table');
    }
  }

  toggleFn(el: HTMLElement) {
    // console.log(el);
  }

  updateRow(columnField: string, row: object, val: string, rowIndex: number) {
    // console.log(columnField, row)
    this.newRow = { ...row, ...{ [columnField]: val } };
    this.inputDebouncer$.next(val);
    // console.log();
    // this.inputDebouncer$.next([rowIndex, newRow]);
    // if (event.target) {
    // }

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

  // checkMandatory() {
  //   const emptyMandatoryFieldNames: string[] = [];
  //   const mandatoryFieldNames: string[] = this.getMandatoryFieldNames();
  //   const rows = this.data.source['_value'];
  //   this.loopRows(rows, mandatoryFieldNames, emptyMandatoryFieldNames);
  //   // debugger
  // }

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

  deleteRow(id) {
    // delete this.datasource[id];
    this.store.dispatch(deleteRow({ data: { tableId: this.tableId, rowIndex: id } }));
  }

  addRow() {
    // const newRow = this.newEmptyRow();
    // this.datasource.push(newRow);
    this.store.dispatch(addRow({ data: { tableId: this.tableId, rowToAdd: this.newEmptyRow() } }));
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
    this.data$.pipe(take(1), map(x => x)).subscribe(data => {
      import('jspdf').then((jspdf: any) => {
        import('jspdf-autotable').then(x => {
          const doc = new jspdf.default('l', 'mm', [305, 250]);
          doc.autoTable(this.exportColumns, data);
          doc.save('products.pdf');
        });
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
