import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarAppComponent } from './snackbar-app/snackbar-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SnackbarComponent,
    SnackbarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent]
})
export class AppModule { }
