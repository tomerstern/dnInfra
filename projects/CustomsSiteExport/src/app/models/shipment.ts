export class ShipmentKeys{
    ShipmentNumber: number;
    Dept_Code : string;
    Shlifa_Order : number;

    constructor(ShipmentNumber: number, Dept_Code : string, Shlifa_Order: number) {
        this.ShipmentNumber = ShipmentNumber;
        this.Dept_Code = Dept_Code;
        this.Shlifa_Order = Shlifa_Order;
    }
}
export class ShipmentDetail extends ShipmentKeys {
    OpenDate: string;
    EntityId: string;
    ActivityId: string;
    IsOld: string;
    e_commerce_y_n : number;

    constructor(ShipmentNumber: number, Dept_Code: string, Shlifa_Order: number,
        OpenDate: string, EntityId: string, ActivityId: string, IsOld: string, e_commerce_y_n: number) {
        super(ShipmentNumber, Dept_Code, Shlifa_Order);
        this.OpenDate = OpenDate;
        this.EntityId = EntityId;
        this.ActivityId = ActivityId;
        this.IsOld = IsOld;
        this.e_commerce_y_n = e_commerce_y_n;
    }
}

export class ShipmentGP extends ShipmentKeys {
    // tslint:disable-next-line: variable-name
    GP_LineNumber: number;
    GP_MIS_SIDURI: number;
    GP_KAMUT_ARIZOT: number;
    GP_SUG_ARIZA: string;
    GP_MISHKAL_BRUTO: number;
    GP_NEFACH_BRUTO: number;
    GP_SIMANIM: string;

    // tslint:disable-next-line: variable-name
    constructor(ShipmentNumber: number, Dept_Code: string, Shlifa_Order: number,
        // tslint:disable-next-line: variable-name
        GP_LineNumber: number, GP_MIS_SIDURI: number, GP_KAMUT_ARIZOT: number, GP_SUG_ARIZA: string,
        GP_MISHKAL_BRUTO: number, GP_NEFACH_BRUTO: number, GP_SIMANIM: string) {
        super(ShipmentNumber, Dept_Code, Shlifa_Order);
        this.GP_LineNumber = GP_LineNumber;
        this.GP_MIS_SIDURI = GP_MIS_SIDURI;
        this.GP_KAMUT_ARIZOT = GP_KAMUT_ARIZOT;
        this.GP_SUG_ARIZA = GP_SUG_ARIZA;
        this.GP_MISHKAL_BRUTO = GP_MISHKAL_BRUTO;
        this.GP_NEFACH_BRUTO = GP_NEFACH_BRUTO;
        this.GP_SIMANIM = GP_SIMANIM;
    }
}

export class ShipmentG7 extends ShipmentKeys {
    G7_LineNumber: number;
    G7_MIS_SIDURI: number;
    G7_PRAT_MECHES: string;
    G7_YECHIDAT_MIDA: number;
    G7_KAMUT: number;
    G7_MECHIR_YECHIDA: number;
    G7_ERECH_SCHORA: number;

    constructor(ShipmentNumber: number, Dept_Code: string, Shlifa_Order: number,
        G7_LineNumber: number, G7_MIS_SIDURI: number, G7_PRAT_MECHES: string, 
        G7_YECHIDAT_MIDA: number, G7_KAMUT: number, G7_MECHIR_YECHIDA: number, G7_ERECH_SCHORA: number) {
        super(ShipmentNumber, Dept_Code, Shlifa_Order);
        this.G7_LineNumber = G7_LineNumber;
        this.G7_MIS_SIDURI = G7_MIS_SIDURI;
        this.G7_PRAT_MECHES = G7_PRAT_MECHES;
        this.G7_YECHIDAT_MIDA = G7_YECHIDAT_MIDA;
        this.G7_KAMUT = G7_KAMUT;
        this.G7_MECHIR_YECHIDA = G7_MECHIR_YECHIDA;
        this.G7_ERECH_SCHORA = G7_ERECH_SCHORA;
    }
}

export class Shipment extends ShipmentKeys {
    detail: ShipmentDetail;
    gpList: ShipmentGP[];
    g7List: ShipmentG7[];

    constructor(ShipmentNumber: number, Dept_Code: string, Shlifa_Order: number,
        detail: ShipmentDetail, gpList: ShipmentGP[], g7List: ShipmentG7[]) {
        super(ShipmentNumber, Dept_Code, Shlifa_Order);
        this.detail = detail;
        this.gpList = gpList;
        this.g7List = g7List;
    }
}