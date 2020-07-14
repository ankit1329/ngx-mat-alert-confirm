import {
  Component
} from '@angular/core';
import {
  ToasterConfig,
  ConfirmButtonConfig,
  ConfirmConfig,
  NgxMatAlertConfirmService
} from 'ngx-mat-alert-confirm';

@Component({
  selector: 'mat-alert-confirm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-mat-alert-confirm';
  animations = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
    'headShake',
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'flip',
    'flipInX',
    'flipInY',
    'flipOutX',
    'flipOutY',
    'lightSpeedIn',
    'lightSpeedOut',
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',
    'slideInUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideOutUp',
    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
    'zoomOut',
    'zoomOutDown',
    'zoomOutLeft',
    'zoomOutRight',
    'zoomOutUp',
    'hinge',
    'jackInTheBox',
    'rollIn',
    'rollOut',
    'collapse',
    'rotate',
    'hueRotate'
  ]
  toasterConfig: ToasterConfig = {
    title: 'Toaster',
    titleSize: 16,
    message: 'This is a sample toaster!',
    messageSize: 14,
    duration: 5000,
    horizontalPosition: 'right',
    verticlePosition: 'top',
    width: 0,
    backgroundColor: 'white',
    textColor: '',
    matIcon: '',
    iconColor: '',
    showProgressBar: true,
    progressBarColor: undefined,
    progressBarType: undefined,
    pauseProgressBarOnHover: true,
    closeOnClick: true,
    showCloseButton: true,
    closeButtonColor: undefined,
    showActionButton: false,
    actionButtonText: '',
    actionButtonColor: undefined
  }

  buttonArr: Array < ConfirmButtonConfig > = [{
    id: 'default',
    text: 'OK',
    color: 'primary',
    type: 'basic',
    icon: ''
  }]

  confirmConfig: ConfirmConfig = {
    title: 'Are You Sure?',
    titleSize: 28,
    message: 'This action cannot be reversed!',
    messageSize: 16,
    matIcon: 'access_alarm',
    iconAnimation: 'shake',
    iconColor: '',
    buttons: [],
    disableClose: true,
    autoFocus: true,
    restoreFocus: true,
    width: undefined,
  }
  constructor(
    private alertService: NgxMatAlertConfirmService
  ) {}


  addBtn() {
    this.buttonArr.push({
      id: '1',
      text: 'OK',
      color: 'primary',
      type: 'basic',
      icon: ''
    })
  }

  removeBtn(idx) {
    this.buttonArr.splice(idx, 1);
  }

  openToaster(title ? , message ? ) {
    let toasterRef = this.alertService.toaster(
      this.toasterConfig
    );
    toasterRef.afterDismissed().subscribe(() => {
      console.log('The toaster was dismissed!');
    });


    toasterRef.onAction().subscribe(() => {
      console.log('Toaster action button was clicked!');
    });
  }

  openConfirmDialogue() {
    this.confirmConfig.buttons = this.buttonArr;
    console.log(this.confirmConfig.buttons)
    const dialogueRef = this.alertService.confirm(
      this.confirmConfig
    );

    dialogueRef.afterClosed().subscribe(confirmResult => {
      console.log(confirmResult)
    });
  }

}