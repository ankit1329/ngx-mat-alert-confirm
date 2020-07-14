import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
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
    CommonModule,
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