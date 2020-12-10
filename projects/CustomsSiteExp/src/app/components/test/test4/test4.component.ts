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



  ngOnInit(): void {
  }



}
