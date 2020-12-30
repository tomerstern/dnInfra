
//export class ShipmentKeys extends BaseObject{
export class State {
    State?: number;
    constructor() {
        this.State = 2;
    }
    }
    
    export class ShipmentKey extends State {
        ShipmentNumber: number;
        DeptCode: string;
        CusDecOrder: number;
        constructor() {
        super();
        this.ShipmentNumber = 0;
        this.DeptCode = '';
        this.CusDecOrder = 0;
        }
    }

export interface IOperationShipmentData {
    OperationShipmentData: OperationShipmentData;
    }

export interface IOperationGoodDetailsData {
    OperationGoodDetailsData: OperationGoodDetailsData;
}

export interface IOperationInvoiceData {
    OperationInvoiceData: OperationInvoiceData;
    }

export class OperationShipmentData {

    ShipmentNumber: number;
    WaybillType: string;
    WaybillNumber: string;
    BLType: string;
    OpenDate: Date;
    OriginPort: string;
    Destination: string;
    ShippingAgent: string;
    ShipperCode: string;
    ShipperName: string;
    ShipperAddress1: string;
    ShipperAddress2: string;
    ShipperExporterId: string;
    ShipperCountry: string;
    CNEECode: string;
    CNEEName: string;
    CNEEAddress1: string;
    CNEEAddress2: string;
    CNEEcountry: string;
    Notify1Code: string;
    Notify1Name: string;
    Notify1Address1: string;
    Notify1Address2: string;
    Notify1Country: string;
    Notify2Code: string;
    Notify2Name: string;
    Notify2Address1: string;
    Notify2Address2: string;
    Notify2Country: string;
    ImporterCode: string;
    ImporterName: string;
    ImporterAddress1: string;
    ImporterAddress2: string;
    ImporterCountry: string 
    ETD: string;
    ATD: string;
}

export class OperationGoodDetailsData {
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
  
    //Connected: bool = this.Invoices.length > 0;
  }

export class OperationInvoiceData{
    EntityNo :number;	
    LineNumber: number;	
    InvoiceNum:number;
    InvoiceDate: Date;	
    InvoiceSum: Number;	
    CurrencyType: string;	
    DescriptionOfInvoice: string;	
    IsInvoicesForPrint: boolean;
  }
  
 

