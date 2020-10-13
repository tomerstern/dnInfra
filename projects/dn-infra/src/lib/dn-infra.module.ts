import { NgModule } from '@angular/core';
import { DnInfraComponent } from './dn-infra.component';
import { CalendarComponent } from './dp/components/calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './dp/components/checkbox/checkbox.component';
import {
  CheckboxModule, AutoCompleteModule, ContextMenuModule, SplitButtonModule,
  ToastModule, ConfirmDialogModule, MenubarModule, DialogModule,
  TabViewModule,
  TreeModule,
  ButtonModule, InputTextModule, InputNumberModule, TableModule, TabMenuModule, PickListModule
  ,DynamicDialogModule
} from 'primeng';
import { ChartModule } from 'primeng/chart';
import { AutocompleteComponent } from './dp/components/autocomplete/autocomplete.component';
import { ContextmenuComponent } from './dp/components/contextmenu/contextmenu.component';
import { SplitbuttonComponent } from './dp/components/splitbutton/splitbutton.component';
import { ToastComponent } from './dp/components/toast/toast.component';
import { ConfirmdialogComponent } from './dp/components/confirmdialog/confirmdialog.component';
import { MenubarComponent } from './dp/components/menubar/menubar.component';
import { DialogComponent } from './dp/components/dialog/dialog.component';
import { TabviewComponent } from './dp/components/tabview/tabview.component';
import { TreeComponent } from './dp/components/tree/tree.component';
import { InputtextComponent } from './dp/components/inputtext/inputtext.component';
import { InputnumberComponent } from './dp/components/inputnumber/inputnumber.component';
import { ButtonComponent } from './dp/components/button/button.component';
import { TableComponent } from './dp/components/table/table.component';
import { CellComponent } from './dp/components/table/cell/cell.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DatePipe } from '@angular/common';
import { TabmenuComponent } from './dp/components/tabmenu/tabmenu.component';
import { StoreModule } from '@ngrx/store';
import { tableReducer } from './dp/store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PicklistComponent } from './dp/components/picklist/picklist.component';
import { ColumnSelectionComponent } from './dp/components/table/columnSelection/column-selection/column-selection.component';
import { DynamicdialogComponent } from './dp/components/dynamicdialog/dynamicdialog.component';

@NgModule({
  declarations: [DnInfraComponent, CalendarComponent, CheckboxComponent, AutocompleteComponent,
    ContextmenuComponent, SplitbuttonComponent, ToastComponent, ConfirmdialogComponent,
    MenubarComponent, DialogComponent, TabviewComponent, TreeComponent
    , InputtextComponent, InputnumberComponent, ButtonComponent, TableComponent, CellComponent
    , TabmenuComponent, PicklistComponent, ColumnSelectionComponent, DynamicdialogComponent],
  imports: [
    CalendarModule,
    FormsModule,
    ChartModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AutoCompleteModule, ContextMenuModule, SplitButtonModule, ToastModule, ConfirmDialogModule,
    MenubarModule, DialogModule, TabViewModule, TreeModule, ButtonModule,
    InputTextModule,
    PickListModule,
    InputNumberModule,
    TableModule,
    ToolbarModule,
    TabMenuModule,
    DynamicDialogModule,
    StoreModule.forRoot({
      tables: tableReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true
    })
  ],
  exports: [ /* Components start */
    DnInfraComponent, CalendarComponent, CheckboxComponent, AutocompleteComponent
    , ContextmenuComponent, SplitbuttonComponent, ToastComponent, ConfirmdialogComponent
    , MenubarComponent, DialogComponent, TabviewComponent, TreeComponent, ButtonModule,
    InputnumberComponent, ButtonComponent, TableComponent, CellComponent, ToolbarModule, ButtonModule,
    InputtextComponent, TabmenuComponent, DynamicdialogComponent,
    /* Modules start */
    CalendarModule,
    FormsModule,
    ChartModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AutoCompleteModule, ContextMenuModule, SplitButtonModule, ToastModule, ConfirmDialogModule,
    MenubarModule, DialogModule, TabViewModule, TreeModule, ButtonModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    ToolbarModule,
    TabMenuModule,
    PickListModule,
    DynamicDialogModule
  ],
  providers: [DatePipe]
})
export class DnInfraModule { }
