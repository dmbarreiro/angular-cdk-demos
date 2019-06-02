import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';

import { SnackbarComponent } from './snackbar.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { SnackbarOptions } from './models/snackbar-options.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private overlayRef: OverlayRef;
  private snackbarComponent: SnackbarComponent;
  private readonly CORNER_OFFSET = '2rem';
  private readonly DEFAULT_OPTIONS: SnackbarOptions = {
    severity: 'info',
    closable: true,
    duration: 4000, // with duration 0 it never disappears
  };

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      // hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      // positionStrategy: this.overlay.position().global().right(this.CORNER_OFFSET).bottom(this.CORNER_OFFSET),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
  }

  openSnackbar(message: string, options?: Partial<SnackbarOptions>) {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    const portal = new ComponentPortal(SnackbarComponent);
    const componentRef = this.overlayRef.attach(portal);
    this.snackbarComponent = componentRef.instance;
    this.snackbarComponent.open(message, {...this.DEFAULT_OPTIONS, ...options});
    this.snackbarComponent.onDestroy$.subscribe(() => {
      this.overlayRef.detach();
    });
    // Close snackbar on backdrop click
    // this.overlayRef.backdropClick().subscribe(() => {
    //   this.snackbarComponent.animateClose();
    // });
  }
}
