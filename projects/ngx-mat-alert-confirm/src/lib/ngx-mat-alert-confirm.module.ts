import {
  NgModule
} from '@angular/core';
import {
  NgxMatAlertConfirmComponent
} from './ngx-mat-alert-confirm.component';
import {
  AlertDialogueConfirmComponent
} from './alert-confirm/alert-dialogue-confirm/alert-dialogue-confirm.component';
import {
  AlertSnackbarToasterComponent
} from './alert-confirm/alert-snackbar-toaster/alert-snackbar-toaster.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [NgxMatAlertConfirmComponent, AlertDialogueConfirmComponent, AlertSnackbarToasterComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [NgxMatAlertConfirmComponent],
  entryComponents: [AlertDialogueConfirmComponent, AlertSnackbarToasterComponent]
})
export class NgxMatAlertConfirmModule {}