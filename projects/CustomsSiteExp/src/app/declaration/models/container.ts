export class DeclarationKeys {
    ShipmentNumber: number;
    DeptCode: string;
    CusDecOrder: number;

    // constructor(ShipmentNumber: number, DeptCode: string, CusDecOrder: number) {
    //     this.ShipmentNumber = ShipmentNumber;
    //     this.DeptCode = DeptCode;
    //     this.CusDecOrder = CusDecOrder;
    // }
}

export interface IDeclarationData {
    dataDeclaration: DeclarationContainer;
    updatedDeclaration: DeclarationContainer;
}

export class DeclarationContainer extends DeclarationKeys {

    DeclarationDetails: DeclarationDetails = new DeclarationDetails();
    ExportCustoms: ExportCustoms = new ExportCustoms();
}

export class DeclarationDetails extends DeclarationKeys {

    DeclarationID: string;
    TypeCode: string;
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
    BillToCode: string;
    OperationTeam: string;
    OperationTeamName: string;
    IncoTerms: string;
    UsingType: string;
    ContainerType: string;
    ETD: Date;
    ATD: Date;
    DeclarationSource: string;
    SHMRNumber: string;
    SHMPNumber: string;
    WaybillNumberDate: Date;
    DestinationCountry: string;
}
