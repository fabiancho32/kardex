import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoCrudComponent } from './containers/producto-crud/producto-crud.component';
import { PrimeModule } from '@kardex/prime';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductoCrudComponent, ProductoComponent],
  imports: [CommonModule, PrimeModule, FormsModule],
  exports: [ProductoCrudComponent],
})
export class DesarrolloModule {}
