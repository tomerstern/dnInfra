import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TreeDefinitions, TreeProperties } from './Objects/tree-definitions';

import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'dp-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() definition: TreeDefinitions;
  @Input() datasource: any = [];

  constructor() { }

  ngOnInit(): void {
  }


}
