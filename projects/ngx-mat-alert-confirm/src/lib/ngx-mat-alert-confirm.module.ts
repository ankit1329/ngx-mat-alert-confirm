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
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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