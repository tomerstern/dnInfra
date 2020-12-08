import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { TreeDefinitions, TreeProperties } from './Objects/tree-definitions';

// import { TreeNode } from 'primeng/api';

@Component({
  selector: 'dp-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() definition: TreeDefinitions;
  @Input() datasource: any = [];
  @Output() getSelected: EventEmitter<any> = new EventEmitter();

  treeSelectedValues: any[];
  constructor() { }

  ngOnInit(): void {
  }

  onTreeNodeSelect(LocSelection, LocSelectionMode, LocEvent) {
    try {

      let retTreeNodesData;
      console.log(LocEvent.node);
      console.log('finish');

      if ( LocSelection == null) {
        this.getSelected.emit('');
      } else {
        if (LocSelectionMode === 'single') {
          retTreeNodesData = LocSelection.data;
        } else if (LocSelectionMode === 'checkbox' || LocSelectionMode === 'multiple') {
          retTreeNodesData = [...new Set(LocSelection.map(it => it.data))];
        }

        if (retTreeNodesData !== undefined) {
          this.getSelected.emit(retTreeNodesData);
        } else {
          this.getSelected.emit('');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }



}
