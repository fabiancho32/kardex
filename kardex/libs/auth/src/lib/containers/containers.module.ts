import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';

import { PrimeModule } from '@kardex/prime';

import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from '../auth.routing.module';
import { MessageService, ConfirmationService } from 'primeng/api';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [LoginComponent, AuthLoginComponent],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [AuthLoginComponent],
  providers: [AuthService, MessageService, ConfirmationService],
})
export class ContainersModule {}
