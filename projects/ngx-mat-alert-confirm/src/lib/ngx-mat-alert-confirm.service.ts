import {
  Injectable
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import {
  AlertSnackbarToasterComponent
} from './alert-confirm/alert-snackbar-toaster/alert-snackbar-toaster.component';
import {
  AlertDialogueConfirmComponent
} from './alert-confirm/alert-dialogue-confirm/alert-dialogue-confirm.component';


export interface ToasterConfig {

  title: string,
    titleSize ? : number,
    message ? : string,
    messageSize ? : number,
    duration ? : number,
    horizontalPosition ? : 'left' | 'right' | 'center',
    verticlePosition ? : 'top' | 'bottom',
    width ? : number,
    backgroundColor ? : string,
    textColor ? : string,
    matIcon ? : string,
    iconColor ? : string,
    // iconSize ? : 'small' | 'medium' | 'large',
    showProgressBar ? : boolean
  progressBarColor ? : 'primary' | 'accent' | 'warn',
    progressBarType ? : 'increasing' | 'decreasing',
    pauseProgressBarOnHover ? : boolean,
    closeOnClick ? : boolean,
    showCloseButton ? : boolean,
    closeButtonColor ? : 'primary' | 'accent' | 'warn',
    showActionButton ? : boolean,
    actionButtonText ? : string,
    actionButtonColor ? : 'primary' | 'accent' | 'warn',

}

export interface ConfirmButtonConfig {
  id: string,
    text ? : string,
    color ? : 'primary' | 'accent' | 'warn'
  type ? : 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'minifab',
    icon ? : string
}

export interface ConfirmConfig {

  title: string,
    titleSize ? : number,
    message ? : string,
    messageSize ? : number,
    matIcon ? : string,
    iconColor ? : string,
    buttons ? : Array < ConfirmButtonConfig > ,
    disableClose ? : boolean,
    autoFocus ? : boolean,
    restoreFocus ? : boolean,
    width ? : number,
    iconAnimation ? : 'bounce' | 'flash' | 'pulse' | 'rubberBand' | 'shake' | 'swing' | 'tada' | 'wobble' | 'jello' | 'heartBeat' | 'headShake' | 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' | 'bounceInUp' | 'bounceOut' | 'bounceOutDown' | 'bounceOutLeft' | 'bounceOutRight' | 'bounceOutUp' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeInUp' | 'fadeInUpBig' | 'fadeOut' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'fadeOutUp' | 'fadeOutUpBig' | 'flip' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY' | 'lightSpeedIn' | 'lightSpeedOut' | 'rotateIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'rotateInUpLeft' | 'rotateInUpRight' | 'rotateOut' | 'rotateOutDownLeft' | 'rotateOutDownRight' | 'rotateOutUpLeft' | 'rotateOutUpRight' | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideOutUp' | 'slideOutDown' | 'slideOutLeft' | 'slideOutRight' | 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomInUp' | 'zoomOut' | 'zoomOutDown' | 'zoomOutLeft' | 'zoomOutRight' | 'zoomOutUp' | 'hinge' | 'jackInTheBox' | 'rollIn' | 'rollOut' | 'collapse' | 'rotate' | 'hueRotate'
}

@Injectable({
  providedIn: 'root'
})

export class NgxMatAlertConfirmService {

  constructor(private snackBar: MatSnackBar, private dialogue: MatDialog) {}

  public toaster(config: ToasterConfig) {
    let snackbarConfig: MatSnackBarConfig = {
      horizontalPosition: config.horizontalPosition || 'right',
      verticalPosition: config.verticlePosition || 'top',
      data: {
        title: config.title,
        titleSize: config.titleSize || null,
        message: config.message || null,
        messageSize: config.messageSize || null,
        width: config.width || null,
        backgroundColor: config.backgroundColor || null,
        textColor: config.textColor || null,
        matIcon: config.matIcon || null,
        iconColor: config.iconColor || null,
        // iconSize: config.iconSize || 'medium',
        showProgressBar: config.showProgressBar || false,
        progressBarColor: config.progressBarColor || 'accent',
        progressBarType: config.progressBarType || 'increasing',
        pauseProgressBarOnHover: config.pauseProgressBarOnHover || false,
        closeOnClick: config.closeOnClick || false,
        showCloseButton: config.showCloseButton || false,
        closeButtonColor: config.closeButtonColor || '',
        showActionButton: config.showActionButton || false,
        actionButtonText: config.actionButtonText || 'OK',
        actionButtonColor: config.actionButtonColor || 'primary',
        duration: config.duration || 5000
      },
      panelClass: 'toastPanel'
    };

    let snackBarRef = this.snackBar.openFromComponent(AlertSnackbarToasterComponent, snackbarConfig);
    return snackBarRef;
  }

  public confirm(config: ConfirmConfig) {
    let dialogueRef = this.dialogue.open(AlertDialogueConfirmComponent, {
      autoFocus: config.autoFocus === false ? false : true,
      width: config.width ? config.width + 'px' : undefined,
      minWidth: '300px',
      // minHeight: '150px',
      closeOnNavigation: true,
      panelClass: 'custom-panel',
      data: {
        title: config.title,
        titleSize: config.titleSize + 'px' || '20px',
        message: config.message || null,
        messageSize: config.messageSize + 'px' || '14px',
        matIcon: config.matIcon || null,
        iconColor: config.iconColor || null,
        buttons: config.buttons && config.buttons.length ? config.buttons : [{
          id: 'default',
          text: 'OK',
          color: 'accent',
          type: 'raised'
        }],
        iconAnimation: config.iconAnimation || undefined
      },
      disableClose: config.disableClose === false ? false : true,
      restoreFocus: config.restoreFocus === false ? false : true,
    });
    return dialogueRef;
  }
}