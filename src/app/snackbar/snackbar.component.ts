import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Subject } from 'rxjs';

import { SnackbarOptions } from './models/snackbar-options.model';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('feedbackAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(100%)',
          opacity: 0
        })
      ),
      state(
        '*',
        style({
          transform: 'translateY(0)',
          opacity: 1
        })
      ),
      transition('* <=> void', animate(`400ms cubic-bezier(0.4, 0, 0.1, 1)`))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  private onDestroy = new Subject<void>();
  onDestroy$ = this.onDestroy.asObservable();
  message: string;
  options: SnackbarOptions;
  private durationTimeout: any;
  animationState: '*' | 'void' = 'void';

  constructor() { }

  ngOnInit() {
  }

  open(message: string, options: SnackbarOptions) {
    this.message = message;
    this.options = options;
    this.animationState = '*';
  }

  animateClose(): void {
    this.animationState = 'void';
    clearTimeout(this.durationTimeout);
  }

  animationDone(): void {
    if (this.animationState === 'void') {
      this.onDestroy.next();
    } else if (this.animationState === '*') {
      if (this.options) {
        this.dismissAfter(this.options.duration);
      }
    }
  }

  private dismissAfter(duration: number): void {
    if (!!duration && duration > 0) {
      this.durationTimeout = setTimeout(() => {
        this.animateClose();
      }, duration);
    }
  }

}
