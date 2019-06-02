import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-snackbar-app',
  templateUrl: './snackbar-app.component.html',
  styleUrls: ['./snackbar-app.component.scss']
})
export class SnackbarAppComponent implements OnInit {

  constructor(private snabarService: SnackbarService) { }

  ngOnInit() {
  }

  showInfo(): void {
    this.snabarService.openSnackbar(
      'This is an info message'
    );
  }

  showWarn(): void {
    this.snabarService.openSnackbar(
      'This is a warning message',
      {
        severity: 'warn',
      }
    );
  }

  showError(): void {
    this.snabarService.openSnackbar(
      'This is an error message',
      {
        severity: 'error',
        closable: false
      }
    );
  }
}
