import { Component, OnInit } from '@angular/core';
import {
  faCoffee, faSpinner, faFileExcel
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component implements OnInit {

  constructor() { }

  faCoffee = faCoffee;
  faSpinner = faSpinner;
  faFileExcel = faFileExcel;




  tree = [{
    name: "Insights",
    nodeId: "tree-node-0"
  }, {
    name: "Level1",
    nodeId: "tree-node-1",
    parentId: "tree-node-0"
  }, {
    name: "Level2",
    nodeId: "tree-node-2",
    parentId: "tree-node-1"
  }, {
    name: "Details",
    nodeId: "tree-node-10"
  }, {
    name: "SubDetails",
    nodeId: "tree-node-11",
    parentId: "tree-node-10"
  }, {
    name: "Summary",
    nodeId: "tree-node-12",
    parentId: "tree-node-11"
  },

  ];

  ngOnInit(): void {
  }



  makeTree() {
    console.log(this.test('Summary', ''));
  }


  test(Name, testData) {
    var testData = testData || [];
    var node = this.tree.find(function (item) {
      return item.name == Name;
    });
    if (node) {
      testData.push(node.name);
      var parent = this.tree.find(function (item) {
        return item.nodeId === node.parentId;
      });
      if (parent) {
        return this.test(parent.name, testData);
      } else {
        return testData;
      }

    } else {
      return testData;
    }
  }

}
