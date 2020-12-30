export class Assist{
    TableID: number;
    AssistTableValueID: string;
    FieldName1: string;
    FieldName2: string;
    FieldName3: string;
    FieldName4: string;
    FieldName5: string;
    FieldName6: string;
    FieldName7: string;
    FieldName8: string;
    FieldName9: string;
    Activate: string;

    constructor(TableID: number, AssistTableValueID: string,
                FieldName1: string, FieldName2: string, FieldName3: string, FieldName4: string, FieldName5: string,
                FieldName6: string, FieldName7: string, FieldName8: string, FieldName9: string, Activate: string) {
        this.TableID = TableID;
        this.AssistTableValueID = AssistTableValueID;
        this.FieldName1 = FieldName1;
        this.FieldName2 = FieldName2;
        this.FieldName3 = FieldName3;
        this.FieldName4 = FieldName4;
        this.FieldName5 = FieldName5;
        this.FieldName6 = FieldName6;
        this.FieldName7 = FieldName7;
        this.FieldName8 = FieldName8;
        this.FieldName9 = FieldName9;
        this.Activate = Activate;
    }
}

export class AssistTableMin {
    code :string;
    name: string;
    description: string

    toString(){
      return this.name;
    }
  }
  export class AssistTableExport {
    AssistTableValueID :string;
    FieldName1 :string;
    FieldName2 :string;
    FieldName3 :string;
    FieldName4 :string;
  }

  


//   export class State {
//     State?: number;
//     constructor() {
//       this.State = 2;
//     }
//   }
