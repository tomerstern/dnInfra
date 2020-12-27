import { Component, OnInit, ViewChild } from '@angular/core';
import { DeclarationService } from '../../services/declaration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DpDialogService, DpDynamicDialogRef } from 'projects/dn-infra/src/lib/dp/components/dynamicdialog/Objects/dynamicdialog-definitions';
import { ToastComponent } from 'projects/dn-infra/src/lib/dp/components/toast/toast.component';
import { ToastDefinitions } from 'projects/dn-infra/src/lib/dp/components/toast/Objects/toast-definitions';
import { TransmissionlogComponent } from '../../../components/transmission/transmissionlog/transmissionlog.component';
import { Store } from '@ngrx/store';
import { getAppState } from 'projects/dn-infra/src/lib/dp/store/selectors';
import { clearStateChanges, deleteRowByColumnValue, updateRowByColumnValue } from 'projects/dn-infra/src/lib/dp/store/actions';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('toast') toast: ToastComponent;
  toastDefinition: ToastDefinitions;

  constructor(public declarationService: DeclarationService, private route: Router, public dialogService: DpDialogService,
    private store: Store<any>) { }
  
  
  ref1: DpDynamicDialogRef;

  ngOnInit(): void {
    this.toastDefinition = new ToastDefinitions({ position: "center" });
  }

  // saveData()
  // {
  //   this.declarationService.updateDeclarationData().then((data) => {
  //     //alert(data);
  //     if (data === 'OK') {
  //       this.toast.dp_showToast('Saving:', 'Successfully' , 'info', 1600);
  //     }
  //     else {
  //       this.toast.dp_showToast('Saving Error:', '' + data , 'error', 4000);
  //     }
  //   });    
  // }

deleteByColumn(){
  this.store.dispatch(deleteRowByColumnValue({ data: { tableId: 'references', columnName: 'Reference', columnValue: '666' } }));
}

updateByColumn(){
  this.store.dispatch(updateRowByColumnValue({ data: { tableId: 'references', 
                                                columnNameToSearch: 'Reference', columnValueToSearch: '111',
                                                columnNameToReplace: 'ReferenceType', columnValueToReplace: '2' } }));
}

saveData()
{
  this.deleteByColumn()
  // this.updateByColumn()
  this.updateTableChanges();  
  this.callSave();
}

updateTableChanges(){  
  const changes = [];
  this.store.select(getAppState).pipe(take(1), map(state => {
    Object.keys(state.tables).forEach(table => {
      const tableChanges = state.tables[table].changes;
      if (tableChanges) {
        Object.keys(tableChanges).forEach(key => {
          const copyRowChanges = { ...tableChanges[key] };
          delete copyRowChanges.State;
          changes.push(copyRowChanges);
        });
        console.log(changes);        
        this.declarationService.declarationData.DeclarationBox.ReferenceList = changes;
        // this.callSave();
      }
    });
  })).subscribe();
}

callSave(){
  this.declarationService.updateDeclarationData().then((data) => {
    if (data === 'OK') {
      this.toast.dp_showToast('Saving:', 'Successfully' , 'info', 1600);
      this.clearStateChanges();
    }
    else {
      this.toast.dp_showToast('Saving Error:', '' + data , 'error', 4000);
    }
  });
}

clearStateChanges(){
  const tables: string[] = ['references'];
  this.store.dispatch(clearStateChanges({ data: { tableIds: tables } }));
}

tansmissionLog(){
  // this.route.navigate(['/transmission']);
  this.ref1 = this.dialogService.open(TransmissionlogComponent, {
    header: 'Tansmission Log ... ',
    width: '80%',
    height: '80%'
  });

  this.ref1.onClose.subscribe((retVals) => {
    // console.log(retVals)
  });
}

}
