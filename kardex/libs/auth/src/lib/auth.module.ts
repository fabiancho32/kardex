import { AuthLoginComponent } from './containers/auth-login/auth-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from './containers/containers.module';

//Services 
import { AuthService } from './services/auth.service';
@NgModule({
  imports: [
    CommonModule,
    ContainersModule
  ],
  exports: [
    AuthLoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}

