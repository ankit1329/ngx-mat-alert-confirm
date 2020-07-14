import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressBarModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  NgxMatAlertConfirmModule,
  NgxMatAlertConfirmService
} from 'projects/ngx-mat-alert-confirm/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    MatSelectModule,
    NgxMatAlertConfirmModule,
    MatFormFieldModule
  ],
  providers: [NgxMatAlertConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule {}