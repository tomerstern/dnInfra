import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coo-toolbar',
  templateUrl: './coo-toolbar.component.html',
  styleUrls: ['./coo-toolbar.component.scss']
})
export class CooToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*
<p-toolbar styleClass="p-mb-4">
    <div class="p-toolbar-group-left">
            <button pButton pRipple label="Save"
                icon="pi pi-save"
                class="ui-button ui-button-dp p-mr-2"
            ></button>
            <button pButton pRipple label="Request COO"
            icon="pi pi-save"
            class="ui-button ui-button-dp p-mr-2"
            ></button>
            <button pButton pRipple label="Transmission Log"
                icon="pi pi-save"
                class="ui-button ui-button-dp p-mr-2"
            ></button>
            <button pButton pRipple label="Doc View"
            icon="pi pi-save"
            class="ui-button ui-button-dp p-mr-2"
            ></button>
            <button pButton pRipple label="Events"
                icon="pi pi-save"
                class="ui-button ui-button-dp p-mr-2"
            ></button>
            <button pButton pRipple label="History"
            icon="pi pi-save"
            class="ui-button ui-button-dp p-mr-2"
            ></button>
    </div>
</p-toolbar>
*/
