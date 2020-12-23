import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, ViewEncapsulation,
  SimpleChanges, AfterViewInit, ChangeDetectorRef
} from '@angular/core';
import { GridDefinitions, GridColumnType } from './objects/grid-definitions';
import { TableStoreService, TableState } from '../../services/table-store.service';
import { Subscription, Observable, fromEvent, Subject } from 'rxjs';
import { Table } from 'primeng/table';
import {
  faThumbtack, faFileExcel, faFilePdf, faFilter, faPlus,
  faColumns
} from '@fortawesome/free-solid-svg-icons';
import { InputNumberProperties } from '../inputnumber/objects/inputnumber-definitions';
import { select, Store } from '@ngrx/store';
import { addRow, deleteRow, updateRow, updateTable, sortColumn } from '../../store/actions';
import { getTableStateById, getTableLengthById, getAppState } from '../../store/selectors';
import { debounceTime, distinctUntilChanged, map, take } from 'rxjs/operators';
import { DpDialogService, DpDynamicDialogRef } from '../dynamicdialog/Objects/dynamicdialog-definitions';
import { ColumnSelectionComponent } from './columnSelection/column-selection/column-selection.component';
import { MessageService } from 'primeng/api'; /* only for showing return value */
import { FormArray, NgForm } from '@angular/forms';

import { ConfirmationService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { ConfirmdialogDefinitions } from '../confirmdialog/Objects/confirmdialog-definitions';

interface MultiselectOptions {
  value?: string;
}

@Component({
  selector: 'dp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableStoreService, DpDialogService, MessageService, ConfirmationService],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() definition: GridDefinitions;
  @Input() datasource: Array<any> = [];
  @Input() tableId: string;
  @Input() showDirty = false;
  @Output() stateChanges: EventEmitter<TableState> = new EventEmitter();
  @Output() getErrors: EventEmitter<any> = new EventEmitter();
  data$: Observable<any>;
  exportColumns: any[];
  first = 0;
  toggleFilter: boolean;
  isEditable: boolean;
  isFooter = false;
  isfrozenCols = false;
  frozenColsIndex = 0;
  initiated = false;
  frozenCols: any[];
  scrollableCols: any[]; /* non frozen Cols*/
  selectedEntity: any;
  frozenWidth = 0;
  freezeObj = {};
  frozenColsCounter = -1;
  frozenButtonText = 'גרור אותי להקפיא עמודות';
  frozenButtonClasses = 'clsBtnFreezeCols';
  HeadersHeight = '74px';
  isColumnsWidthDefined = false;
  isFreezeColumnActive = false;
  IsTableHScroll = false;
  ArrFooterCells: string[];
  errors = {
  };
  @ViewChild('myForm') public tableForm: NgForm;

  // jsonFooterArr = [];
  FooterArrObj = {};
  ArrDatasourceKeys: string[] = [];
  ngForm: any;
  loaded = false;
  obj = {};
  sub: Subscription;
  newRow = {};
  inputNumberProperties = InputNumberProperties;
  gridColumnTypeEnum = GridColumnType;
  filterCheckboxInitialValue = false;
  @ViewChild('dt') table: Table;
  @ViewChild('testEl') testEl: ElementRef;

  private inputDebouncer$: Subject<any> = new Subject();
  ref1: DpDynamicDialogRef;
  sourceList: any[] = [];

  faThumbtack = faThumbtack;
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;
  faFilter = faFilter;
  faPlus = faPlus;
  faColumns = faColumns;
  multiselectOptions: MultiselectOptions[];
  selectedOptions: string[] = [];
  index: any;

  constructor(
    public dialogService: DpDialogService,
    public messageService: MessageService,
    private store: Store<any>,
    private confirmationService: ConfirmationService,
    private http: HttpClient
  ) { }

  confirmdialogDef: ConfirmdialogDefinitions = new ConfirmdialogDefinitions({
    header: 'מחיקת שורה', message: '?האם אתה בטוח',
    accept: () => {
      this.deleteRow(this.index);
      this.getFormValidationErrors();
    },
    reject: () => {
      return;
    }
  });

  delete(ind, cd, myForm) {
    this.index = ind;
    this.tableForm = myForm;
    cd.dp_confirm();
  }

  ngAfterViewInit() {
    this.IsTableHScroll = this.dpIsHScroll(this.table);
    // changeDetection: ChangeDetectionStrategy.OnPush  that exixst fixes "Expression has changed after it was checked."

    // this.table.native
    // document.querySelectorAll('.')
    // debugger
    // const tableEl: HTMLElement = this.table.el.nativeElement;
    // tableEl.querySelectorAll('.ui-table-wrapper')[0].setAttribute('max-height', '200px');
    // tableEl.querySelectorAll('.ui-table-wrapper')[0].setAttribute('style', 'max-height:199px;');
    // wrap.;

  }


  ngOnInit() {
    this.obj = { background: 'red', color: 'green' };
    this.exportColumns = this.definition.columns.map(col => ({ title: col.headername, dataKey: col.fieldname }));
    this.checkLocalStorage();

    this.setIsEditable();
    this.setIsFooter();
    this.isColumnsWidthDefined = this.ColumnsWidthDefined();

    this.inputDebouncer$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((val: any) => {

      // Remember value after debouncing

      // Do the actual search

      this.store.dispatch(updateRow(val));

    });
    this.scrollableCols = this.definition.columns;
    this.frozenCols = [
      this.definition.columns[0]
    ];
    this.dpCreateFooterData();

    if (this.definition.isFreezeColumns === true) {
      this.definition.scrollable = true;
    }

    // this.frozenWidth = 0;

    // setTimeout(() => {
    //   this.frozenCols = [
    //     this.definition.columns[1]
    //   ];
    //   this.frozenWidth = '500px';

    // }, 3000);

  }
  checkLocalStorage() {
    // check if Table's selected Columns are in Local Storage
    if ((this.tableId + '_trgt' in localStorage) && (this.tableId + '_src' in localStorage)) {
      const lsColumns: any[] = JSON.parse(localStorage.getItem(this.tableId + '_src'));
      for (const column of lsColumns) {
        const columnName = column.fieldname; // Item to remove
        this.definition.columns = this.definition.columns.filter(obj => obj.fieldname !== columnName);
      }
    }
  }

  updateRow(columnField: string, row: object, val: any, rowIndex: number, columnFieldCode?: string) {
    if (val === undefined) {
      return;
    }
    // tslint:disable-next-line: no-debugger
    // debugger;
    let newRow;
    if (val === null || val.code === undefined) {
      newRow = { ...row, ...{ [columnField]: val } };
    }
    else {
      // autocomplete
      newRow = { ...row, ...{ [columnFieldCode]: val.code, [columnField]: val.name } };
    }
    // const newRow = { ...row, ...{ [columnField]: val } };

    this.store.dispatch(updateRow({ row: newRow, rowIndex, tableId: this.tableId }));
    this.getFormValidationErrors();
  }

  // updateCalendar(columnField: string, row: object, val: any, columnFieldCode?: string){
  //   // this.updateRow()
  // }

  showDynamicdialog1() {
    const Tlist = this.definition.columns;
    this.ref1 = this.dialogService.open(ColumnSelectionComponent, {
      header: 'Choose Columns',
      width: '70%',
      data: {
        tableId: this.tableId,
        sourceList: this.sourceList,
        // targetList: this.targetList
        targetList: Tlist
        // id: '154'
      },
    });

    this.ref1.onClose.subscribe((ReturnObj) => {

      // debugger;
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

    this.dpCreateFooterData();

    if (this.tableId && this.datasource && !this.initiated) {
      this.store.dispatch(updateTable({ data: { tableId: this.tableId, tableData: this.datasource } }));
      this.data$ = this.store.select(getTableStateById(this.tableId));
      this.initiated = true;
    }

    // if (
    //   changes.tableId.previousValue === undefined &&
    //   changes.tableId.currentValue &&
    //   changes.dataSource.previousValue === undefined &&
    //   changes.dataSource.currentValue
    // ) {
    //   this.store.dispatch(
    //     updateTable({
    //       data: { tableId: this.tableId, tableData: this.datasource },
    //     })
    //   );
    //   this.data$ = this.store.select(getTableStateById(this.tableId));
    // } else {
    //   // alert('you must supply an ID for each table');
    // }

  }

  toggleFn(el: HTMLElement) {
    console.log(el);
  }

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
    this.store.dispatch(deleteRow({ data: { tableId: this.tableId, rowIndex: id } }));
  }

  addRow() {
    this.store.dispatch(addRow({ data: { tableId: this.tableId, rowToAdd: this.newEmptyRow() } }));
    this.setLastPage();
  }

  newEmptyRow() {
    const row: any = {};
    row[this.definition.dataKey] = '';
    this.definition.columns.forEach((column) => {
      const columnName = column.fieldname;
      row[columnName] = '';
    });
    return row;
  }

  setLastPage() {
    this.store.select(getTableLengthById(this.tableId)).pipe(take(1), map(x => x)).subscribe(len => {
      const totalRows = len;
      const rowsPerPage = this.definition.rows;
      const pages = totalRows / rowsPerPage;
      const lastPage = (pages % 1 === 0 ? Math.floor(pages) : Math.floor(pages) + 1);
      this.first = (lastPage * rowsPerPage) - rowsPerPage;
    });
  }

  paginate(x) {
    // console.log(x);
  }

  exportPdf() {
    this.http.get('assets/Files/Arimo.txt', { responseType: 'text' })
      .subscribe(data =>
        this.exportPdfMain(data)
      );
  }

  exportPdfMain(Arimo) {

    this.data$.pipe(take(1), map(x => x)).subscribe(data => {
      import('jspdf').then((jspdf: any) => {
        import('jspdf-autotable').then(x => {
          const doc = new jspdf.default('l', 'mm', [305, 250]);  // [wide , high]

          // doc.addFileToVFS('Arimo.ttf', environment.Arimo);
          doc.addFileToVFS('Arimo.ttf', Arimo);
          doc.addFont('Arimo.ttf', 'Arimo', 'normal');
          doc.setFont('Arimo');


          /* for first page  */
          // add Image start
          // const img = new Image();
          // img.src = '/assets/Images/collection_png_32x32/flags/flag_israel.png';
          // addImage(image, format, xPosition, yPosition, width, height).
          // doc.addImage(img, 'png', 12, 1, 12, 15);
          // add Image end
          // doc.text('This is First Page Header', 30, 10); // add header

          doc.autoTable(this.exportColumns, data, {
            margin: { top: 25, bottom: 35 },
            // styles: { fillColor: [255, 0, 0] },
            /*  styles, headStyles, bodyStyles , footStyles, alternateRowStyles, columnStyles */
            styles: {
              font: 'Arimo',
              fontStyle: 'normal',
              lineWidth: 0.2
            },
            headStyles: { fillColor: [33, 33, 33], textColor: [255, 255, 255], fontSize: 11, lineWidth: 0.5 },
          });

          doc.setFontSize(10);
          // doc.autoTable(this.exportColumns, data, { margin: { top: 25, bottom: 35 } }); /* working */

          const imgHeader = new Image();
          // imgHeader.src = '/assets/Images/collection_png_32x32/flags/flag_israel.png';
          imgHeader.src = '/assets/Images/Logos/LogoExcel.png';
          const pages = doc.internal.getNumberOfPages();
          const pageWidth = doc.internal.pageSize.width;
          const pageHeight = doc.internal.pageSize.height;

          const HeaderText = this.definition.pdfHeaderText;
          const FooterText = this.definition.pdfFooterText;

          // const HeaderText = 'This is כותרת פנימית / Inner Page Header';
          // doc.setTextColor(44, 222, 0);

          for (let j = 1; j < pages + 1; j++) {

            // addImage(imageData, format, x, y, width, height, alias, compression, rotation)
            doc.addImage(imgHeader, 'png', 14, 3, 66, 19);

            if (HeaderText !== '') {
              doc.setFontSize(14);
              doc.text(HeaderText, 110, 16); // add header
            }

            const horizontalPos = pageWidth / 2;
            const verticalPos = pageHeight - 10;

            if (FooterText !== '') {
              doc.text(FooterText, 10, verticalPos - 15, { textColor: [33, 33, 33] }); // add footer
            }

            doc.setPage(j);
            doc.setFontSize(10);
            doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, { align: 'center' });
          }

          doc.save('table.pdf');
        });
      });
    });
  }

  clickEvent(column, val) {
    if (column.onClick !== undefined) {
      column.onClick(val);
    }
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.datasource);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'table');
    });
  }


  // exportExcel() {
  //     import('xlsx').then(xlsx => {
  //   // Using same variables as the above answer
  //     var Heading = [
  //       ["FirstName", "Last Name", "Email"],
  //     ];
  //     var Footer = [
  //       ["Footer Text", "More Text"],
  //     ];

  //     var Data = [
  //       {firstName:"Jack", lastName: "Sparrow", email: "abc@example.com"},
  //       {firstName:"Harry", lastName: "Potter", email: "abc@example.com"},
  //     ];

  //     //Had to create a new workbook and then add the header
  //     const ws = xlsx.utils.book_new();
  //     xlsx.utils.sheet_add_aoa(ws, Heading);

  //     //Starting in the second row to avoid overriding and skipping headers
  //     const worksheet = xlsx.utils.sheet_add_json(ws, Data, { origin: 'A2', skipHeader: true });


  //     // xlsx.utils.sheet_add_aoa(ws, Footer);

  //     // const worksheet = xlsx.utils.json_to_sheet(this.datasource);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //     const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
  //     this.saveAsExcelFile(excelBuffer, 'table');
  //   });
  // }


  exportExcel99() {
    import('xlsx').then(xlsx => {

      const ws_data = [
        ['very long text... very long text... very long text... very long text... very long text... very long text... ']
        , ['A2', 'B2', 'C2']
      ];

      var merge = { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } };


      // const ws = xlsx.utils.aoa_to_sheet(ws_data);

      const ws = xlsx.utils.book_new();
      xlsx.utils.sheet_add_aoa(ws, ws_data);

      // const ws =  xlsx.utils.sheet_add_aoa(ws_data, );

      if (!ws['!merges']) {
        ws['!merges'] = [];
      }
      ws['!merges'].push(merge);


      const worksheet = xlsx.utils.json_to_sheet(this.datasource);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'table');
    });
  }

  // exportExcel_ok() {
  //   import('xlsx').then(xlsx => {



  //     var wb = xlsx.utils.book_new();

  //     const ws_name = "SheetJS";


  //     const ws_data = [
  //       ['very long text... very long text... very long text... very long text... very long text... very long text... '],
  //       [1, 2, 3, 4]
  //     ];

  //     var merge = { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } };

  //     const ws = xlsx.utils.aoa_to_sheet(ws_data);

  //     if(!ws['!merges']) ws['!merges'] = [];
  //     ws['!merges'].push(merge);

  //     /* Add the worksheet to the workbook */
  //     xlsx.utils.book_append_sheet(wb, ws, ws_name);

  //     const excelBuffer: any = xlsx.write(wb, { bookType: 'xlsx', type: 'array' });
  //     this.saveAsExcelFile(excelBuffer, 'table');
  //   });
  // }

  exportExcel_ok() {
    import('xlsx').then(xlsx => {


      // const wsdata = [['hello' , 'world']];
      // const ws = xlsx.utils.aoa_to_sheet(wsdata);

      // // const worksheet = xlsx.utils.table_to_sheet(dt.el.nativeElement);
      // const worksheet = xlsx.utils.json_to_sheet(this.datasource);
      // const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };


      var wb = xlsx.utils.book_new();

      const ws_name = "SheetJS";


      const ws_data = [
        ['very long text... very long text... very long text... very long text... very long text... very long text... '],
        [1, 2, 3, 4]
      ];

      var merge = { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } };

      const ws = xlsx.utils.aoa_to_sheet(ws_data);

      if (!ws['!merges']) ws['!merges'] = [];
      ws['!merges'].push(merge);

      /* Add the worksheet to the workbook */
      xlsx.utils.book_append_sheet(wb, ws, ws_name);

      const excelBuffer: any = xlsx.write(wb, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'table');
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



  // exportPdf() {
  //   this.data$.pipe(take(1), map(x => x)).subscribe(data => {
  //     import('jspdf').then((jspdf: any) => {
  //       import('jspdf-autotable').then(x => {
  //         const doc = new jspdf.default('l', 'mm', [305, 250]);
  //         doc.autoTable(this.exportColumns, data);
  //         doc.save('products.pdf');
  //       });
  //     });
  //   });
  // }

  // exportExcel() {
  //   import('xlsx').then(xlsx => {
  //     const worksheet = xlsx.utils.json_to_sheet(this.datasource);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //     const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
  //     this.saveAsExcelFile(excelBuffer, 'products');
  //   });
  // }

  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   import('file-saver').then(FileSaver => {
  //     const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //     const EXCEL_EXTENSION = '.xlsx';
  //     const data: Blob = new Blob([buffer], {
  //       type: EXCEL_TYPE
  //     });
  //     FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  //   });
  // }

  onRowSelect(event) {
    const boo = this.selectedEntity;
  }

  onDateSelect(value, fieldname) {
    this.table.filter(value, fieldname, 'equals');
  }

  filterMultiselect(event, column) {
    event.value.forEach(function (x) {
      this.selectedOptions.push(x.value);
    }, this);

    this.table.filter(this.selectedOptions, column.fieldname, 'in');
    this.selectedOptions = [];
  }

  setOptions(column) {
    this.multiselectOptions = [];
    this.store.select(getAppState).pipe(take(1), map(state => {
      Object.keys(state.tables).forEach(table => {
        if (table === this.tableId) {
          const tableData = state.tables[table].data;
          tableData.forEach(function (x) {
            const newOption = { value: x[column.fieldname] };
            this.multiselectOptions.push(newOption);
          }, this);
        }
      });
    })).subscribe();
  }

  onFilterCheckbox(value, fieldname) {
    let filter = 'true';
    if (value == null) {
      filter = 'false';
    }
    else if (!value) {
      filter = '';
    }

    this.table.filter(filter, fieldname, 'equals');
  }

  dpInitArrDatasourceKeys() {
    if (this.datasource !== undefined) {
      const jsonData = this.datasource[0];
      // tslint:disable-next-line: forin
      for (const myIndex in jsonData) {
        const key = myIndex;
        this.ArrDatasourceKeys.push(key);
      }
    }
  }

  getFormValidationErrors(): void {
    this.errors = {};
    setTimeout(() => {
      const form = (this.tableForm.form.controls[this.tableId] as FormArray).controls;
      // we can check what the form status is before looping over it
      if (this.tableForm.form.controls[this.tableId].status === 'INVALID') {
        this.errors[this.tableId] = {};
        Object.keys(form).forEach(key => {
          if (form[key].status === 'INVALID') {
            this.errors[this.tableId][key] = {};
            Object.keys(form[key].controls).forEach(columName => {
              if (form[key].controls[columName].status === 'INVALID') {
                this.errors[this.tableId][key][columName] = form[key].controls[columName].errors;
              }
            });
          }
        });
      }
      this.getErrors.emit(this.errors);
    }, 0);
    return;

  }

  isValid(tableId, ngm, index, column) {
    // if (ngm.control.status === 'INVALID') {
    //   const obj = { [index]: 'INVALID' };
    //   this.errors.columns[column] = { ...this.errors.columns[column], ...obj };
    //   console.log(this.errors);
    // } else {
    //   const obj = { [index]: null };
    //   this.errors.columns[column] = { ...this.errors.columns[column], ...obj };
    //   console.log(this.errors);
    // }
  }

  dpCreateFooterData() {
    if (!this.ArrDatasourceKeys.length) {
      this.dpInitArrDatasourceKeys();
    }
    let tmpStr1 = '';
    let tmpStr2 = '';
    let i = 0;

    this.ArrFooterCells = [];

    this.definition.columns.forEach((column) => {
      tmpStr1 = '';
      tmpStr2 = '';
      if (column.ColumnSum) {

        tmpStr1 = this.dpCalculateColumnSum(i, {}, this.table, column.LocaleString);
      }
      if (column.ColumnTotal) {
        tmpStr2 = this.dpCalculateTotalRows(i, {}, this.table, column.LocaleString);
        if (tmpStr2 !== '') { tmpStr2 = 'Total:' + tmpStr2; }
        if (tmpStr1 !== '') { tmpStr2 = '  ' + tmpStr2; }
      }

      this.ArrFooterCells.push(tmpStr1 + tmpStr2);
      this.FooterArrObj[column.fieldname] = tmpStr1 + tmpStr2;

      // this.jsonFooterArr.push({
      //   id: column.fieldname,
      //   optionValue: tmpStr1 + tmpStr2
      // });

      i++;
    });

    // console.log(this.ArrFooterCells);
    // console.log(this.jsonFooterArr);

  }

  dpCalculateTotalRows(ind, column, table, LocaleString): string {
    let strSum = '';
    this.store.pipe(select(getTableStateById(this.tableId)), take(1), map(data => data)).subscribe(tableData => {
      strSum = (LocaleString ? tableData.length.toLocaleString() : tableData.length.toString());
    });
    return strSum;
  }

  dpCalculateColumnSum(index, column, table, LocaleString): string {
    let sum = 0;
    let strSum = '0';
    let i = 0;
    this.store.pipe(select(getTableStateById(this.tableId)), take(1), map(data => data)).subscribe(tableData => {
      for (i = 0; i < tableData.length; i++) {
        if (tableData[i][this.ArrDatasourceKeys[index]] !== undefined) {
          if (typeof tableData[i][this.ArrDatasourceKeys[index]] === 'number') {
            sum += tableData[i][this.ArrDatasourceKeys[index]];
          }
        }
      }
      if (this.isInteger(sum)) { /* dont format .00*/
        strSum = (LocaleString ? sum.toLocaleString() : sum.toString());
      } else {
        strSum = (LocaleString ? (Math.round(sum * 100) / 100).toFixed(2).toLocaleString() : (Math.round(sum * 100) / 100).toFixed(2));
      }
    });

    return strSum;
  }

  dpCalculateColumnSum_ByDataSource(index, column, table, LocaleString): string {

    let sum = 0;
    let strSum = '0';
    let i = 0;

    try {
      const t0 = performance.now();
      // console.log('t0=' + t0 + ' , index=' + index);

      if (this.datasource !== undefined) {


        // tslint:disable-next-line: prefer-for-of
        //   for (i = 0; i < this.datasource.length; i++) {
        //     if (this.datasource[i][table.columns[index].fieldname] !== undefined) {
        //       if (typeof this.datasource[i][table.columns[index].fieldname] === 'number') {
        //         sum += this.datasource[i][table.columns[index].fieldname];
        //       }
        //     }
        //   }
        // }

        for (i = 0; i < this.datasource.length; i++) {
          if (this.datasource[i][this.ArrDatasourceKeys[index]] !== undefined) {
            if (typeof this.datasource[i][this.ArrDatasourceKeys[index]] === 'number') {
              sum += this.datasource[i][this.ArrDatasourceKeys[index]];
            }
          }
        }
      }

      if (this.isInteger(sum)) { /* dont format .00*/
        strSum = (LocaleString ? sum.toLocaleString() : sum.toString());
      } else {
        strSum = (LocaleString ? (Math.round(sum * 100) / 100).toFixed(2).toLocaleString() : (Math.round(sum * 100) / 100).toFixed(2));
      }

      const t1 = performance.now();
      // console.log('t1=' + t1);
      console.log('Function took ' + (t1 - t0) + ' milliseconds.');

      return strSum;
    } catch (error) {
      console.log(error);
    }
  }


  dpCalculateTotalRows_ByDataSource(ind, column, table, LocaleString): string {
    let strSum = '';
    if (this.datasource !== undefined) {
      strSum = (LocaleString ? this.datasource.length.toLocaleString() : this.datasource.length.toString());
    }
    return strSum;
  }

  isInteger(n) {
    // tslint:disable-next-line: no-bitwise
    return n === +n && n === (n | 0);
  }

  dpFreezeColumns(dt, LocFrozenWidth) {
    // console.log('frozenColsCounter=' + this.frozenColsCounter);
    // this.frozenCols = this.definition.columns.slice(0, this.frozenColsCounter + 1);
    // this.scrollableCols = this.definition.columns.slice(this.frozenColsCounter + 1, this.definition.columns.length);
    // this.isFreezeColumnActive = true;
    // this.frozenWidth = LocFrozenWidth;
    console.log('hey');

    // const Elems = dt.el.nativeElement.querySelectorAll('.ui-table-scrollable-view');
    // const Elem = Elems[1];
    // Elem.setAttribute('style', 'max-height:199px;');

    // const wrappers = dt.table.el.nativeElement.querySelectorAll('.ui-table-wrapper');
    // tableEl.querySelectorAll('.ui-table-wrapper')[0].setAttribute('max-height', '200px');
    // tableEl.querySelectorAll('.ui-table-wrapper')[0].setAttribute('style', 'max-height:199px;');

  }

  log(val) { console.log(val); }
  // {{log('repeat')}}

  dpIsHScroll(dt): boolean {
    try {
      if (dt === undefined) {
        return false;
      }
      const header = dt.el.nativeElement.querySelectorAll('thead');
      if (header !== undefined && header.length) {
        const tableScrollWidth = header[0].scrollWidth;

        const tableContainerForm = dt.el.nativeElement.parentElement;
        if (tableContainerForm !== undefined && tableContainerForm.length) {
          // const formScrollWidth = tableContainerForm.clientWidth;
          const formScrollWidth = tableContainerForm.offsetWidth;
          if (tableScrollWidth > formScrollWidth) {
            // this.definition.scrollable = 'true';
            return true;
          } else {
            return false;
          }
        }

      }
      // return this.definition.isFreezeColumns;

      return false;

      // const header = dt.el.nativeElement.querySelectorAll('thead');
      // const scrollWidth = header[0].scrollWidth;
      // const clientWidth = header[0].clientWidth;
      // const offsetWidth = header[0].offsetWidth;


      // const tfoot = dt.el.nativeElement.querySelectorAll('tfoot');
      // const scrollWidth1 = tfoot[0].scrollWidth;
      // const clientWidth1 = tfoot[0].clientWidth;
      // const offsetWidth1 = tfoot[0].offsetWidth;

      // if (scrollWidth1 === clientWidth1) {
      //   return false;
      // } else {
      //   return true;
      // }
    } catch (error) {
      return false;
      console.log(error);
    }
  }

  sortColumn(fieldname: string) {
    this.store.dispatch(sortColumn({ tableId: this.tableId, fieldname }));
  }

  dpFreezeColumndrop(colName: string, th: HTMLElement) {

    const fc = [];
    const sc = [];
    let width = 0;
    let reached = false;

    this.definition.columns.forEach((column, index) => {
      if (!reached) {
        fc.push(column);
        const el = document.getElementById(column.fieldname);
        width += el.clientWidth;
        if (column.fieldname === colName) {
          reached = true;
        }
      } else {
        sc.push(column);
      }
    });

    this.frozenWidth = width;

    this.frozenButtonText = 'לחץ עלי לבטל נעילה';
    this.frozenCols = fc;
    this.scrollableCols = sc;

    // console.log(fc, sc);

    // console.log(id);
    // // console.log(sc);


    // const table = document.querySelector(`[tableid = ${this.tableId}]`);
    // const frozen = table.getElementsByClassName('ui-table-unfrozen-view')[0];
    // const arr = frozen.querySelectorAll('thead > tr th');

    // console.log(arr);

    // console.log(th.clientWidth);



    // if (this.frozenColsCounter >= 0) {
    //   return;
    // }

    // this.frozenButtonClasses = 'clsBtnFreezeCols clsBtnFreezeColsSelected';
    // this.frozenColsCounter = columnInd;

    // if (this.dpIsHScroll(dt) === false) {
    //   return;
    // }

    // let LocWidth = 0;
    // this.HeadersHeight = this.dpCalcHeadersHeight(dt);

    // // make sure table is scrollable:true before freezing columns
    // // if (this.definition.isFreezeColumns === true) {
    // //    this.definition.scrollable = true;
    // // }
    // // this.definition.scrollable = true;

    // LocWidth = this.dpCalcFreezeColumnsWidth(dt);
    // this.dpFreezeColumns(dt, LocWidth + 'px');

    // // this.dpCreateFooterData();


  }

  dpUnFreezeCols() {

    this.scrollableCols = this.definition.columns;
    // this.frozenColsCounter = -1;
    // this.frozenButtonClasses = 'clsBtnFreezeCols';

    this.frozenButtonText = 'גרור אותי להקפיא עמודות';

    // this.frozenCols = null;
    // this.scrollableCols = this.definition.columns;
    // this.isFreezeColumnActive = false;
    this.frozenWidth = 0;

  }

  dpCalcFreezeColumnsWidth(dt) {
    let LocWidth = 0;
    let i: number;
    const headers = dt.el.nativeElement.querySelectorAll('thead > tr th');
    for (i = 0; i < headers.length; ++i) {
      if (this.frozenColsCounter < i) {
        break;
      }
      // LocWidth +=  headers[i].clientWidth;
      LocWidth += headers[i].offsetWidth;
    }
    // console.log('LocWidth=' + LocWidth);

    return LocWidth;
  }

  dpCalcHeadersHeight(dt) {
    let LocHeight = '';
    const headers = dt.el.nativeElement.querySelectorAll('thead > tr > th');
    if (headers.length) {
      const header = headers[0];
      LocHeight = header.offsetHeight + 'px';
    }
    return LocHeight;
  }

  ColumnsWidthDefined() {
    return true;
  }


  isChecked(e) {
    alert("On Change:" + e.checked);
  }
}
