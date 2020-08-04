import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-alert-snackbar-toaster',
  templateUrl: './alert-snackbar-toaster.component.html',
  styleUrls: ['./alert-snackbar-toaster.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertSnackbarToasterComponent implements OnInit {
  timer;
  timerPaused = false;
  timerinMilSec;
  initialDuration = this.data.duration
  constructor(
    private snackbarRef: MatSnackBarRef < AlertSnackbarToasterComponent > ,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private zone: NgZone,
    private changeDetectionRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
    if (data.progressBarType === 'decreasing') {
      this.timer = 100;
      this.timerinMilSec = this.initialDuration;
    } else {
      this.timer = 0;
      this.timerinMilSec = 0;
    }
  }
  ngOnInit() {
    if (this.data.message) {
      this.data.message = this.sanitizer.bypassSecurityTrustHtml(this.data.message)
    }
    if (this.data.width) {
      let MIN = 250;
      let MAX = 400;
      let parsed = parseInt(this.data.width)
      this.data.width = Math.min(Math.max(parsed, MIN), MAX) + 'px'
    } else {
      this.data.width = '250px';
    }
    if (this.data.titleSize) {
      this.data.titleSize = this.data.titleSize + 'px';
    }
    if (this.data.messageSize) {
      this.data.messageSize = this.data.messageSize + 'px';
    }
    this.startTimer(this.initialDuration);
  }
  pauseTimer() {
    if (this.data.pauseProgressBarOnHover) {
      this.timerPaused = true;
      let intervalRef = setInterval(() => {
        this.data.duration += 50;
        if (!this.timerPaused) {
          clearInterval(intervalRef);
        }
      }, 50)
    }
  }
  resumeTimer() {
    if (this.data.pauseProgressBarOnHover) {
      this.timerPaused = false;
      this.startTimer(this.initialDuration);
    }
  }
  closeSelf(event) {
    event.stopPropagation();
    this.snackbarRef.dismiss();
  }
  closeOnClick(event) {
    if (this.data.closeOnClick) {
      event.stopPropagation();
      this.snackbarRef.dismiss();
    }
  }
  closeWithAction() {
    event.stopPropagation();
    this.snackbarRef.dismissWithAction();
  }

  startTimer(duration) {
    if (this.data.progressBarType == "decreasing") {
      let intervalRef = setInterval(() => {
        this.zone.run(() => {
          this.timerinMilSec -= 50;
          let newVal = (this.timerinMilSec / duration) * 100;
          this.timer = newVal;
          this.changeDetectionRef.markForCheck();
          if (this.timer == 0) {
            clearInterval(intervalRef);
            this.snackbarRef.dismiss();
          }
          if (this.timerPaused) {
            clearInterval(intervalRef);
          }
        });
      }, 50);
    } else {
      let intervalRef = setInterval(() => {
        this.zone.run(() => {
          this.timerinMilSec += 50;
          let newVal = (this.timerinMilSec / duration) * 100;
          this.timer = newVal;
          this.changeDetectionRef.markForCheck();
          if (this.timer == 100) {
            clearInterval(intervalRef)
            this.snackbarRef.dismiss();
          }
          if (this.timerPaused) {
            clearInterval(intervalRef)
          }
        });
      }, 50);
    }
  }

}