import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeclarationService } from './services/declaration.service';


@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

  showApp = false;
  constructor(public declarationService: DeclarationService) {

   }

  ngOnInit(): void {
    this.declarationService.getDefaultDeclarationFromServer();
    // this.declarationService.declarationDataSubject$.subscribe((serverResult: string) => {
    //   console.log(serverResult);
    //   if (serverResult !== undefined) {
    //     this.showApp = true;
    //       // alert('Server error');
    //   }
    // });
  }

}
