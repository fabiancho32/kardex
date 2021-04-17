import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './containers/auth-login/auth-login.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule], 
})
export class AuthRoutingModule {}
