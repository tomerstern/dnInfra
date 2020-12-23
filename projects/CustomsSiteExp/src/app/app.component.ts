import { Component, OnInit } from '@angular/core';
import { ExportassistService } from './core/services/exportassist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ExportassistService]
})
export class AppComponent implements OnInit {
  constructor(public exportassistService: ExportassistService) {
    this.fetchArr.push(this.exportassistService.getAllCustomers());
    this.fetchArr.push(this.exportassistService.getCountriesList());
    this.fetchArr.push(this.exportassistService.getCountryGroupsList());
    this.fetchArr.push(this.exportassistService.getAllTeams());
    this.fetchArr.push(this.exportassistService.getAllIncoTerms());
    this.fetchArr.push(this.exportassistService.getAllContainerTypes());
    this.fetchArr.push(this.exportassistService.getAllUsingTypes());
    this.fetchArr.push(this.exportassistService.getAllDeclarationSources());
    this.fetchArr.push(this.exportassistService.getAllReferenceTypes());

  Promise.all(this.fetchArr).then((data: Array<any>) => {
    this.exportassistService.setCustomers(data[0]);
    this.exportassistService.setCountries(data[1]);
    this.exportassistService.setCountryGroups(data[2]);
    this.exportassistService.setTeams(data[3]);
    this.exportassistService.setIncoTerms(data[4]);
    this.exportassistService.setContainerTypes(data[5]);
    this.exportassistService.setUsingTypes(data[6]);
    this.exportassistService.setDeclarationSources(data[7]);
    this.exportassistService.setReferenceTypes(data[8]);
    });
  }
  title = 'CustomsSiteExp';
  isRtl = false;
  fetchArr = [];
  

  ngOnInit(): void {

    if (localStorage.getItem('dDirection') !== null && localStorage.getItem('dDirection').toLowerCase() === 'rtl') {
      this.isRtl = true;

     
    }



  


}

}
