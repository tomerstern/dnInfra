import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/CustomsSiteExp/src/environments/environment';
import { AssistTableMin, AssistTableExport } from '../../shared/models/assist';
import { CommunicationService } from '../../core/services/communication.service';

@Injectable({
  providedIn: 'root'
})
export class ExportassistService {

  constructor(private http: HttpClient, private webAPI: CommunicationService) { }
  public countriesList: AssistTableMin[];
  public countryGroupsList: AssistTableMin[];
  public customersList: AssistTableMin[];
  public teamsList: AssistTableMin[];
  public incoTermsList: AssistTableMin[];
  public containerTypeList: AssistTableMin[];
  public usingTypeList: AssistTableMin[];
  public declarationSourceList: AssistTableMin[];
  public referenceTypeList: AssistTableMin[];
  public assistList: AssistTableExport[];

  setCountries(jsonCountriesList: any)
  {
    this.countriesList = jsonCountriesList;
  }

  setCountryGroups(jsonCountryGroupsList: any)
  {
    this.countryGroupsList = jsonCountryGroupsList;
  }

  setCustomers(jsonCustomersList:any)
  {
    this.customersList = jsonCustomersList;
  }

  setTeams(jsonTeamsList:any)
  {
    this.teamsList = jsonTeamsList;
  }

  setIncoTerms(jsonTermsList:any)
  {
    this.incoTermsList = jsonTermsList;
  }

  setContainerTypes(jsonContainerTypes:any)
  {
    this.containerTypeList = jsonContainerTypes;
  }

  setUsingTypes(jsonUsingTypes:any)
  {
    this.usingTypeList = jsonUsingTypes;
  }

  setDeclarationSources(jsonDeclarationSources:any)
  {
    this.declarationSourceList = jsonDeclarationSources;
  }

  setReferenceTypes(jsonReferenceTypes:any)
  {
    this.referenceTypeList = jsonReferenceTypes;
  }

  // getExportAssistByKey(tableId: string,  getAll: boolean = false ):any {

  //   this.getExportAssistByKeyMain(tableId, getAll )
  //   .then((assistData: any[]) =>{       
  //     return assistData ;   
  //   });
  // }

// getExportAssistByKeyMain
  async getExportAssistByKey(tableId: string,  getAll: boolean = false ) {

    var jsonParam = {"tableId" : tableId, "getAll": getAll };
    return this.webAPI.sendWebRequest('Assist/GetExportAssist', JSON.stringify(jsonParam));

  }

  async getCountriesList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsCountries",{});
  }

  async getCountryGroupsList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsCountryGroups",{});
  }

  async getAllCustomers() {
    return this.webAPI.sendWebRequest("Assist/GetCustomers",{});
  }

  async getAllTeams() {
    return this.webAPI.sendWebRequest("Assist/GetTeams",{});
  }

  async getAllIncoTerms() {
    return this.webAPI.sendWebRequest("Assist/GetIncoTerms",{});
  }

  async getAllContainerTypes() {
    return this.webAPI.sendWebRequest("Assist/GetContainerTypes",{});
  }

  async getAllUsingTypes() {
      return this.webAPI.sendWebRequest("Assist/GetUsingTypes", {});
  }

  async getAllDeclarationSources() {
      return this.webAPI.sendWebRequest("Assist/GetDeclarationSources", {});
  }

  async getAllReferenceTypes() {
    return this.webAPI.sendWebRequest("Assist/GetReferenceTypes", {});
}

}
