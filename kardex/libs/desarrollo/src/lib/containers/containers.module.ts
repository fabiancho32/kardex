import { PrimeModule } from '@kardex/prime';
import { ProductoService } from './../services/producto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCrudComponent } from './producto-crud/producto-crud.component';

@NgModule({
  declarations: [ProductoCrudComponent],
  imports: [CommonModule, PrimeModule],
  providers: [ProductoService],
  exports: [ProductoCrudComponent],
})
export class ContainersModule {}
