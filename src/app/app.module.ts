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
  MatSelectModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  NgxMatAlertConfirmService,
  NgxMatAlertConfirmModule
} from 'ngx-mat-alert-confirm';

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
    NgxMatAlertConfirmModule
  ],
  providers: [NgxMatAlertConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule {}