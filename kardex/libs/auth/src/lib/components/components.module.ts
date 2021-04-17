import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeModule } from '@kardex/prime';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, HttpClientModule, PrimeModule],
})
export class ComponentsModule {}
