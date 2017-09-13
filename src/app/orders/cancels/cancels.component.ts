import {Component} from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-dialog-cancels',
  templateUrl: './cancels.component.html'
})
export class DialogCancelsComponent {
  dialogRef: MdDialogRef<CancelsDialogComponent>;
  lastCloseResult: string;
  config: MdDialogConfig = {
    disableClose: true,
    width: '75%',
    height: '100%',
    backdropClass:'cdk-overlay-custom-backdrop',// no initial value - picks up default class for basic modal
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
  constructor(public dialog: MdDialog) {}
  openCancels() {
    this.dialogRef = this.dialog.open(CancelsDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }
}

@Component({
  selector: 'app-cancels-dialog',
  styles: [``],
  template: `
    <h2 md-dialog-title>I am the Cancels Dialog</h2>
    <md-dialog-content>My event handler is inside the router-outlet for the customer.component layout
      <ul>
        <li>Width:75%</li>
        <li>Height: 100%</li>
        <li>disableClose: true (must click on close from dialog</li>
        <li>backdropClass= "cdk-overlay-custom-backdrop". We will be making this the default override for all overlays.</li>
      </ul>
      <p> <strong>{{ customMessage }} </strong></p>
    </md-dialog-content>
    <md-dialog-actions>
      <button md-button [md-dialog-close]="true">Close</button>
    </md-dialog-actions>
  `
})
export class CancelsDialogComponent {
  customMessage = 'I can be passed into the modal with custom content';
  constructor(public dialogRef: MdDialogRef <CancelsDialogComponent> ) {}
}
