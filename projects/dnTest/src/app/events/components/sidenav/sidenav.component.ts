import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customerservice';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  someList: Array<any>;

  constructor(public cs: CustomerService) { }

  ngOnInit(): void {

  }

}
