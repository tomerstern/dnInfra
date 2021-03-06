import { ShipmentKey } from "../../core/models/shipment";

export class CooKey extends ShipmentKey {
    EntityNo: number;
    constructor() {
      super();
      this.EntityNo = 0;
    }
  }

export interface ICooData {
    CooBoxData: CooBox;
  }

export interface ICooHeadersData {
    headers: CooHeader[];
  }

export enum CooMode {
  New = 'NEW',
  Replace = 'REPLACE',
  Update = 'UPDATE',
  Cancel = 'CANCEL',
  View = 'VIEW'
}

export class CooBox extends CooKey {
    UserID: string;
    CooMode: string;
    Header: CooHeader;
    Invoices: COOInvoiceDetails[];
    GoodDetails: CooGoodsDetails[];
  }

export class CooHeader extends CooKey {
    OpenDate: string;
    OpenedBy: string;
    CustomerNo: string;
    AgentR_internalApplication :string; 
    AgentR_certificateOfOriginTypeCode :string; 
    AgentR_certificateOfOriginTypeName :string; 
    AgentR_certificateOfOriginStatusCode :string; 
    AgentR_requestReasonCode :string; 
    AgentR_certificateID :string; 
    AgentR_certificateIdToCancel :string; 
    AgentR_replacementReason :string; 
    AgentR_exportDeclarationNum :string; 
    COO_ExporterId :string; 
    COO_ExporterName :string; 
    COO_ExporterAddress :string; 
    COO_ExporterCountry :string; 
    COO_ConsigneeName :string; 
    COO_ConsigneeAddress :string; 
    COO_ConsigneeCountry :string; 
    COO_ConsigneeRemarks :string; 
    COO_IsConsigneeForPrint :number; 
    COO_TradeAgreementCountry1 :string; 
    COO_TradeAgreementCountry2 :string; 
    COO_TradeAgreementGroupOfCountries :string; 
    COO_OriginCountry :string; 
    COO_OriginGroupOfCountries :string; 
    COO_DestinationCountry :string; 
    COO_DestinationCountryName :string; 
    COO_DestinationGroupOfCountries :string; 
    COO_Transport :string; 
    COO_PortOfShipment :string; 
    COO_IsCumulation :number; 
    COO_CumulationCountry :string; 
    COO_CumulationGroupOfCountries :string; 
    COO_PlaceOfManufacture :string; 
    COO_ZipCodeOfManufacture :string; 
    COO_Observations :string; 
    COO_IsExportDecForPrint :number; 
    COO_CustomsHouse :string; 
    COO_CustomsHouseName :string; 
    COO_IssuingCountry :string; 
    COO_IssuingCountryHebName :string; 
    COO_IssuingCountryEngName :string; 
    COO_CityOfDeclaration :string; 
    COO_CityOfDeclarationName :string; 
    COO_CountryOfDeclaration :string; 
    COO_CountryOfDeclarationHebName :string; 
    COO_CountryOfDeclarationEngName :string; 
    COO_DateOfDeclaration: string; 
    COO_IsDeclaredByManufacturer: boolean; 
    COO_IsDeclaredByExporter: boolean; 
    NonMC_ExportDate :Date; 
    NonMC_ExportCountry :string; 
    NonMC_ImportBillOfLadingNum :string; 
    NonMC_ExportPort :string; 
    NonMC_ImportDate :Date; 
    NonMC_ExportBillOFLadingNum :string; 
    NonMC_TransirCountry :string; 
    NonMC_PortOfEntrance :string; 
    NonMC_ExpectedExitDate :Date; 
    NonMC_ExitPort :string; 
    NonMC_GoodsDescription :string; 
    NonMC_DeclaringCompany :string; 
    NonMC_DeclaringPerson :string; 
    NonMC_DeclaringPosition :string; 
    NonMC_ManifestNum :string; 
    FeedbackRemark :string; 
    rejectCancelReason :string; 
    QueryURL :string; 
    CUS_GTW :number;
    
  }

export class COOInvoiceDetails{
  EntityNo :number;	
  LineNumber: number;	
  InvoiceNum:number;
  InvoiceDate: Date;	
  InvoiceSum: Number;	
  CurrencyType: string;	
  DescriptionOfInvoice: string;	
  IsInvoicesForPrint: boolean;
  ConnectedNum: Number;

  isEqual(invoice: COOInvoiceDetails): boolean
  {
    return (invoice.EntityNo == this.EntityNo && invoice.InvoiceNum == this.InvoiceNum);
  }

  toString()
  {
    return "No: " + this.InvoiceNum + " Date: " + this.InvoiceDate.toDateString(); 
  }

}

export class CooGoodsDetails{
  EntityNo: number; 	
  LineNumber: number;	
  ItemSerial: number;	
  ItemId: number;	
  OriginCriterion: string;	
  MarksAndNumbers: string;	
  PackageQuantity: number;	
  PackageType: string;	
  ItemDescription: string;	
  Weight: number;	
  MeasureType: string;
  Invoices: COOInvoiceDetails[];

  updateInvoices(invoices: COOInvoiceDetails[])
  {
    this.Invoices = invoices;
  }

  clone(): CooGoodsDetails {
    //let currentObj = <CooGoodsDetails>this;
    let object = new CooGoodsDetails();
    for (let prop in <CooGoodsDetails>this) {
      object[prop] = this[prop];
    }
    return object;
  } 

  //Connected: bool = this.Invoices.length > 0;
}