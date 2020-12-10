import { Component, OnInit, Input } from '@angular/core';
import { CooHeader } from '../../models/coo'; 
import { CooService } from '../../services/coo.service';

@Component({
  selector: 'app-coo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() jsonCooHeader: any = {};
  direction: string;

  constructor(public cooService: CooService) {}

  ngOnInit(): void { }
}
