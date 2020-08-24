export enum ConfirmdialogProperties {
    message = 'message',
    key = 'key',
    icon = 'icon',
    header = 'header',
    dp_Confirmdialog_Position = 'dp_Confirmdialog_Position',
    accept = 'accept',
    reject = 'reject',
    acceptLabel = 'acceptLabel',
    rejectLabel = 'rejectLabel',
    acceptIcon = 'acceptIcon',
    rejectIcon = 'rejectIcon',
    acceptButtonStyleClass = 'acceptButtonStyleClass',
    rejectButtonStyleClass = 'rejectButtonStyleClass',
    acceptVisible = 'acceptVisible',
    rejectVisible = 'rejectVisible',
    style = 'style',
    styleClass = 'styleClass'
    // maskStyleClass = 'maskStyleClass',
    // blockScroll = 'blockScroll',
    // defaultFocus = 'defaultFocus'
  }

  export enum Confirmdialog_Position {
    center = 'center',
    right = 'right',
    left = 'left',
    top = 'top',
    topleft = 'topleft',
    topright = 'topright',
    bottom = 'bottom',
    bottomleft = 'bottomleft',
    bottomright = 'bottomright'
  }


  export interface IConfirmdialogDefinitions {
    message?: string;
    key?: string;
    icon?: string;
    header?: string;
    dp_Confirmdialog_Position?: string;
    accept?: Function;
    reject?: Function;
    acceptLabel?: string;
    rejectLabel?: string;
    acceptIcon?: string;
    rejectIcon?: string;
    acceptButtonStyleClass?: string;
    rejectButtonStyleClass?: string;
    acceptVisible?: boolean;
    rejectVisible?: boolean;
    style?: object;
    styleClass?: string;
    // maskStyleClass?: string;
    // blockScroll?: boolean;
    // defaultFocus?: string;
  }

  export class ConfirmdialogDefinitions implements IConfirmdialogDefinitions {
    message: string;
    key: string;
    icon: string;
    header: string;
    dp_Confirmdialog_Position: string;
    accept: Function;
    reject: Function;
    acceptLabel: string;
    rejectLabel: string;
    acceptIcon: string;
    rejectIcon: string;
    acceptButtonStyleClass: string;
    rejectButtonStyleClass: string;
    acceptVisible: boolean;
    rejectVisible: boolean;
    style: object;
    styleClass: string;
    maskStyleClass: string;
    blockScroll: boolean;
    defaultFocus: string;
    constructor(params: IConfirmdialogDefinitions) { /* fix case sensitive */
      this.dp_Confirmdialog_Position =
        (params.dp_Confirmdialog_Position == null ? 'center' :
          (params.dp_Confirmdialog_Position.toLowerCase() === 'center' ? 'center' :
            (params.dp_Confirmdialog_Position.toLowerCase() === 'right' ? 'right' :
              (params.dp_Confirmdialog_Position.toLowerCase() === 'left' ? 'left' :
                (params.dp_Confirmdialog_Position.toLowerCase() === 'top' ? 'top' :
                  (params.dp_Confirmdialog_Position.toLowerCase() === 'topright' ? 'topright' :
                    (params.dp_Confirmdialog_Position.toLowerCase() === 'topleft' ? 'topleft' :
                      (params.dp_Confirmdialog_Position.toLowerCase() === 'bottom' ? 'bottom' :
                        (params.dp_Confirmdialog_Position.toLowerCase() === 'bottomright' ? 'bottomright' :
                          (params.dp_Confirmdialog_Position.toLowerCase() === 'bottomleft' ? 'bottomleft' :
                            'center'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
      );
      this.header = (params.header == null ? params.header : params.header);
      this.message = params.message;
      this.style = (params.style === undefined ? {width: '50vw'} : params.style);
      this.styleClass = (params.styleClass == null ? params.styleClass : params.styleClass);
      this.acceptButtonStyleClass = (params.acceptButtonStyleClass == null ? params.acceptButtonStyleClass : params.acceptButtonStyleClass);
      this.rejectButtonStyleClass = (params.rejectButtonStyleClass == null ? params.rejectButtonStyleClass : params.rejectButtonStyleClass);

      this.reject = params.reject;
      this.accept = params.accept;
      this.key = (params.key == null ? params.key : params.key);
      this.icon = (params.icon == null ? params.icon : params.icon);
      this.acceptLabel = (params.acceptLabel == null ? params.acceptLabel : params.acceptLabel);
      this.rejectLabel = (params.rejectLabel == null ? params.rejectLabel : params.rejectLabel);
      this.acceptIcon = (params.acceptIcon == null ? params.acceptIcon : params.acceptIcon);
      this.rejectIcon = (params.rejectIcon == null ? params.rejectIcon : params.rejectIcon);
      this.acceptVisible = (params.acceptVisible == null ? true : params.acceptVisible);
      this.rejectVisible = (params.rejectVisible == null ? true : params.rejectVisible);

      // this.maskStyleClass = (params.maskStyleClass == null ? params.maskStyleClass : params.maskStyleClass);
      // this.blockScroll = (params.blockScroll == null ? true : params.blockScroll);
      // this.defaultFocus = (params.defaultFocus == null ? 'accept' : params.defaultFocus);
    }

    // get getConfirmdialog_Position(): string {
    //   const ret_val = 'bottomleft';
    //   return ret_val;
    // }

  }
