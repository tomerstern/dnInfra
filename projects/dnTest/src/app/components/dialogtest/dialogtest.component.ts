import { Component, OnInit } from '@angular/core';
import { DialogDefinitions, positionDpDialog, buttonsDpDialog, IDialogButtonsFields } from 'projects/dn-infra/src/lib/dp/components/dialog/Objects/dialog-definitions';

@Component({
  selector: 'app-dialogtest',
  templateUrl: './dialogtest.component.html',
  styleUrls: ['./dialogtest.component.scss']
})
export class DialogtestComponent implements OnInit {

  constructor() { }

  dialogDefinition1: DialogDefinitions;
  dialogDefinition2: DialogDefinitions;
  dialogDefinition3: DialogDefinitions;
  dialogDefinition4: DialogDefinitions;
  dialogDefinition5: DialogDefinitions;
  dialogDefinition6: DialogDefinitions;
  dialogDefinition7: DialogDefinitions;
  dialogDefinition8: DialogDefinitions;
  dialogDefinition9: DialogDefinitions;
  dialogDefinition10: DialogDefinitions;

  ngOnInit(): void {

    this.dialogDefinition1 = new DialogDefinitions({
      header: 'header text 1 ...'
      , dpDialogContext: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua</p>'
      // , dpDialogContext:   { <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p> }
    });

    this.dialogDefinition2 = new DialogDefinitions({ header: 'header 2 ...', position: 'left', dpDialogContext: 'text 2 ... text 2...' });

    this.dialogDefinition3 = new DialogDefinitions({ header: 'header 3 ...', position: positionDpDialog.bottom, dpDialogContext: 'text 3 ... text 3...' });

    this.dialogDefinition4 = new DialogDefinitions({ header: 'header 4 ...', position: positionDpDialog.topright, dpDialogContext: 'text 4 ... text 4...' });

    this.dialogDefinition5 = new DialogDefinitions({ header: 'header 5 ...', modal: true, dpDialogContext: 'text 5 ... text 5...' });

    this.dialogDefinition6 = new DialogDefinitions({ header: 'header 6 ...', maximizable: true, dpDialogContext: 'text 6 ... text 6...' });

    this.dialogDefinition7 = new DialogDefinitions({ showHeader: false, dpDialogContext: 'text 7 ... text 7...' });

    this.dialogDefinition8 = new DialogDefinitions({
      header: 'header 8 ...', closable: false, dpDialogContext: 'text 8 ... text 8...'
      , buttons: buttonsDpDialog.default
      , dpDialogFunc: (index) => {
        alert('in dpDialogFunc dialogDefinition8 , index=' + index);
        this.dialogDefinition8.visible = false; /* close the dialog */
      }
    });

    this.dialogDefinition9 = new DialogDefinitions({
      header: 'header 9 ...'
      , dpDialogContext: ' <h3>another header</h3>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit,<br>' +
        ' sed do eiusmod tempor incididunt ut labore et dolore <br> magna aliqua' +
        ' <h4 class="cssDialogtestH4">header h4 </h4> sed do eiusmod tempor incididunt ut labore et dolore <br><br>' +
        ' <b>   Bold Text   </b> <br>  <i>   Italic Text   </i> <br> <u>   Underline Text </u> <br><br>' +
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? '
      , buttons: buttonsDpDialog.default
      , dpDialogFunc: (index) => {
        alert('in dpDialogFunc dialogDefinition9 , index=' + index);
        this.dialogDefinition9.visible = false; /* close the dialog */
      }
    });

    const buttonsArr10 = [
      { index: 1, label: 'btn 1', class: 'ui-button-primary'},
      { index: 2, label: 'btn 2', class: 'ui-button-success'},
      { index: 3, label: 'btn 3', class: 'ui-button-warning'}
    ];

    this.dialogDefinition10 = new DialogDefinitions({
      header: 'header 10 ...',
      dpDialogContext: 'text 10 ... text 10... <br> text 10 ... text 10...'
      , buttons: buttonsDpDialog.custom
      , buttonsArr: buttonsArr10
      , dpDialogFunc: (index) => {
        alert('in dpDialogFunc dialogDefinition10 , index=' + index  ); 
        this.dialogDefinition10.visible = false; /* close the dialog */
      }
    });
  }

}
