import { Injectable, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/CustomsSiteExp/src/environments/environment';
import { AssistTableMin, AssistTableExport } from '../../shared/models/assist';
import { CommunicationService } from '../../core/services/communication.service';
import { BehaviorSubject } from 'rxjs';

export interface assistServiceState {
  countriesList: any;
  countryGroupsList: any;
  customersList: any;
  teamsList: any;
  incoTermsList: any;
  containerTypeList: any;
  usingTypeList: any;
  declarationSourceList: any;
  referenceTypeList: any;
  assistList: any;
  eventCodesList: any;
  agentRoleList: any;
  declarationTypeList: any;

}

const INITIAL_STATE: assistServiceState = {
  countriesList: null,
  countryGroupsList: null,
  customersList: null,
  teamsList: null,
  incoTermsList: null,
  containerTypeList: null,
  usingTypeList: null,
  declarationSourceList: null,
  referenceTypeList: null,
  assistList: null,
  eventCodesList: null,
  agentRoleList: null,
  declarationTypeList: null
};

@Injectable({
  providedIn: 'root'
})
export class ExportassistService {

  private exportState$ = new BehaviorSubject<assistServiceState>(INITIAL_STATE);

  assistState = this.exportState$.asObservable();

  constructor(private http: HttpClient, private webAPI: CommunicationService) {
 
  }

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
  public eventCodesList: AssistTableMin[];
  public agentRoleList: AssistTableMin[];
  public declarationTypeList: AssistTableMin[];

  assistSubject$ = new BehaviorSubject<any>({
    countriesList: null,
    countryGroupsList: null,
    customersList: null,
    teamsList: null,
    incoTermsList: null,
    containerTypeList: null,
    usingTypeList: null,
    declarationSourceList: null,
    referenceTypeList: null,
    assistList: null,
    eventCodesList: null
  });

  setCountries(jsonCountriesList: any) {
    this.countriesList = jsonCountriesList;
  }

  setCountryGroups(jsonCountryGroupsList: any) {
    this.countryGroupsList = jsonCountryGroupsList;
  }

  setCustomers(jsonCustomersList: any) {
    this.customersList = jsonCustomersList;
  }

  setTeams(jsonTeamsList: any) {
    this.teamsList = jsonTeamsList;
  }

  setIncoTerms(jsonTermsList: any) {
    this.incoTermsList = jsonTermsList;
  }

  setContainerTypes(jsonContainerTypes: any) {
    this.containerTypeList = jsonContainerTypes;
  }

  setUsingTypes(jsonUsingTypes: any) {
    this.usingTypeList = jsonUsingTypes;
  }

  setDeclarationSources(jsonDeclarationSources: any) {
    this.declarationSourceList = jsonDeclarationSources;
  }

  setReferenceTypes(jsonReferenceTypes: any) {
    this.referenceTypeList = jsonReferenceTypes;
    const newState = { ...INITIAL_STATE, ...{ referenceTypeList: jsonReferenceTypes } };
    this.exportState$.next(newState);
  }

  setEventCodes(jsonEventCodes: any) {
    this.eventCodesList = jsonEventCodes;
  }

  setAgentRoles(json: any)
  {
    this.agentRoleList = json;
  }

  setDeclarationTypes(json: any)
  {
    this.declarationTypeList = json;
  }


  async getExportAssistByKey(tableId: string, getAll: boolean = false) {
    return this.webAPI.sendWebRequest('Assist/GetExportAssist', { "tableId": tableId, "getAll": getAll });
  }

  async getCountriesList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsCountries", {});
  }

  async getCountryGroupsList() {
    return this.webAPI.sendWebRequest("Assist/GetCustomsCountryGroups", {});
  }

  async getAllCustomers() {
    return this.webAPI.sendWebRequest("Assist/GetCustomers", {});
  }

  async getAllTeams() {
    return this.webAPI.sendWebRequest("Assist/GetTeams", {});
  }

  async getAllIncoTerms() {
    return this.webAPI.sendWebRequest("Assist/GetIncoTerms", {});
  }

  async getAllContainerTypes() {
    return this.webAPI.sendWebRequest("Assist/GetContainerTypes", {});
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

  async getAllEventCodes() {
    return this.webAPI.sendWebRequest("General/GetAllEventCodes", {});
  }

  async getAllAgentRoles() {
    return this.webAPI.sendWebRequest("Assist/GetAgentRoles",{});
  }

  async getAllDeclarationTypes() {
    return this.webAPI.sendWebRequest("Assist/GetDeclarationTypes",{});
  }
  
}
