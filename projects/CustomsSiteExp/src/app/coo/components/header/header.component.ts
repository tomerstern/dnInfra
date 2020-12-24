import { Component, OnInit } from '@angular/core'; 
import { CooService } from '../../services/coo.service';

@Component({
  selector: 'app-coo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  direction: string;

  constructor(public cooService: CooService) {
    cooService.cooDataSubject$.subscribe(data => {console.log(data);})
}
  ngOnInit(): void { }
}
