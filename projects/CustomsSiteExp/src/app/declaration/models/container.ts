export class State {
    State?: number;
    constructor() {
        this.State = 2;
    }
}
export class DeclarationKeys extends State {
    ShipmentNumber: number;
    DeptCode: string;
    CusDecOrder: number;

    // constructor(ShipmentNumber: number, DeptCode: string, CusDecOrder: number) {
    //     this.ShipmentNumber = ShipmentNumber;
    //     this.DeptCode = DeptCode;
    //     this.CusDecOrder = CusDecOrder;
    // }
}

export enum DeclarationMode {
    New = 'NEW',
    Replace = 'REPLACE',
    Update = 'UPDATE',
    Cancel = 'CANCEL'
}

export interface IDeclarationData {
    DeclarationBox: DeclarationBox;
}

export class DeclarationBox extends DeclarationKeys {
    DeclarationDetails: DeclarationDetails = new DeclarationDetails();
    ExportCustoms: ExportCustoms = new ExportCustoms();
    DeclarationAgent: DeclarationAgent = new DeclarationAgent();
    ReferenceList: References[];
}

export class AssistTable {
    code: string;
    name: string;
    description: string
}

export class DeclarationDetails extends DeclarationKeys {

    DeclarationID: string;
    TypeCode: string;
    TypeName: string;
    DeclarationOfficeID: string;
    AcceptanceDateTime: Date;
    IssueDateTime: Date;
    DeclarationCurrentCode: string;
    VersionID: string;
    ReferenceDateTime: Date;
    ReleaseDateTime: Date;
    DepartureDateTime: Date;
    AgentFileReferenceID: string;
    ExternalDeclarationID: string;
    DestinationCountry: string;
    ShipID: string;
    TransferDeclarationToDestinationCountry: boolean;
    AutonomyRegionType: string;
    FirstCargoID: string;
    CargoIdentifierType: string;
    SecondCargoID: string;
    ThirdCargoID: string;
    ExpenseLoadingFactor: number;
    ExpenseLoadingFactorType: string;
    TotalDealValueAmountNIS: number;
    CifValueNIS: number;
    TaxAssessedAmount: number;
    TotalMadDealValueAmountNIS: number;
    PreviousDocumentID: string;
    PreviousDocumentTypeCode: string;
    PreviousDocumentTypeName: string;
    DeclarationStatusCode: number;
    DeclarationStatusName: string;
    LogisticStatusCode: number;
    LogisticStatusName: string;
}

export class ExportCustoms extends DeclarationKeys {

    OpenDate: Date;
    EntityId: string;
    ActivityId: string;
    ReshPrintDate: Date;
    CustomerCode: string;
    CustomerName: string;
    CustomerJson: string;
    BillToCode: string;
    BillToName: string;
    OperationTeam: string;
    OperationTeamName: string;
    IncoTerms: string;
    UsingType: string;
    UsingTypeName: string;
    ContainerType: string;
    ContainerTypeName: string;
    ETD: Date;
    ATD: Date;
    DeclarationSource: string;
    DeclarationSourceName: string;
    SHMRNumber: string;
    SHMPNumber: string;
    WaybillNumberDate: Date;
    DestinationCountry: string;
    DestinationCountryName: string;
}

export class DeclarationAgent extends DeclarationKeys {

    AgentID: string;
    AgentRoleCode: string;
    AgentRoleName: string;
}

export class References extends DeclarationKeys {

    LineNumber: number;
    ReferenceType: string;
    Reference: string;
    DateAdded: Date;
}