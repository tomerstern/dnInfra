import { Component, OnInit } from '@angular/core';
import { CheckboxDefinitions } from 'projects/dn-infra/src/lib/dp/components/checkbox/objects/checkbox-definitions';
import { DeclarationContainer } from '../../../models/declaration/container';
import { DeclarationService } from '../../../services/declaration.service';

@Component({
  selector: 'app-main-declaration',
  templateUrl: './main-declaration.component.html',
  styleUrls: ['./main-declaration.component.scss']
})
export class MainDeclarationComponent implements OnInit {

  declarationHeader: DeclarationContainer;
  showApp = false;

  constructor(private declarationService: DeclarationService) { }

  ngOnInit(): void {
    debugger;
    this.declarationService.declarationDataSubject.subscribe((serverResult: string) => {
      if (serverResult !== undefined) {
        this.showApp = true;
          // alert('Server error');
      }
    });
    // this.declarationService.getDefaultDeclarationFromServer();
    setTimeout('', 3000);
    this.declarationHeader = this.declarationService.declarationContainer;
  }

}
