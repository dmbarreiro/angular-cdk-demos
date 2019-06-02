import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SnackbarAppComponent } from './snackbar-app/snackbar-app.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'overlay/snackbar', component: SnackbarAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
