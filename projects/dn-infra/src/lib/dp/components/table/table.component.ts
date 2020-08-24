import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridDefinitions } from './objects/grid-definitions';
import { TableStoreService, TableState } from '../../services/table-store.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'dp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableStoreService]
})
export class TableComponent implements OnInit {

  @Input() definition: GridDefinitions;
  @Input() datasource: Array<any> = [];
  @Output() stateChanges: EventEmitter<TableState> = new EventEmitter();
  exportColumns: any[];
  first = 0;
  isEditable: boolean;
  selectedEntity: any;
  sub: Subscription;
  constructor(private tableStore: TableStoreService) { }


  ngOnInit() {
    this.exportColumns = this.definition.columns.map(col => ({ title: col.headername, dataKey: col.fieldname }));
    this.setIsEditable();
    this.sub = this.tableStore.tableState$.subscribe(newState => {
      this.stateChanges.emit(newState);
    });
  }

  // if at least one of the columns is editable then the grid is editable and we add add and delete buttons
  setIsEditable() {
    this.isEditable = false;
    let isColumnEditable = false;
    this.definition.columns.forEach((column) => {
      if (column.iseditable) {
        isColumnEditable = true;
      }
    });
    if (isColumnEditable) {
      this.isEditable = true;
    }
  }

  deleteRow(id, row) {
    this.datasource = this.datasource.filter((val, i) => i !== id);
    this.tableStore.deleteRow(row);
  }

  addRow(table) {
    const newRow = this.newRow();
    table.value.push(newRow);
    this.setLastPage();
    this.tableStore.addRow(newRow);
  }

  newRow() {
    const row = {};
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
    alert(boo[0].id);
  }
}
