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

export class DeclarationContainer extends DeclarationKeys {

    DeclarationDetails: DeclarationDetails = new DeclarationDetails();
    ExportCustom: ExportCustom = new ExportCustom();
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
    LogisticStatusCode: number;
}

export class ExportCustom extends DeclarationKeys {

    OpenDate: Date;
    EntityId: string;
    ActivityId: string;
    ReshPrintDate: Date;
    CustomerCode: string;
    BillToCode: string;
    OperationTeam: string;
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
