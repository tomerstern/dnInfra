
    export interface IMalamMainData {
        MalamMainData: MalamMain[];
      }

      export class MalamMain  {
       RequestInternalNo: number;
       RequestDate: Date;
       RequestType: string;
       Department: string;
       UserID: number;
       Priority: number;
       RequestStatus: number;
       RequestHandleCount: number;
       AnswerDate: Date;
       SendPipeLine: any;
       ReceivePipeLine: any;
       SendFileFullName: string;
       SendFileBody: string;
       ReceiveFileFullName: string;
       ReceiveFileBody: string;
       SendRemarks: string;
       ReceiveRemarks: string;
       Params1: string;
       Params2: string;
       Params3: string;
       RequestExternalNo: any;
       ModuleID: string;
       Direction: string;
       CoSignUserName: string;
       MontierCorrelationID: string;
       MontierBackendTime: number;
       TehilaResponse: string;
       ServerName: string;
       BatchId: string
    }


