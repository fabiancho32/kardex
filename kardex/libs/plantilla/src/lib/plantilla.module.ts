import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudBasicComponent } from './containers/crud-basic/crud-basic.component';
import { PrimeCrudComponent } from './components/prime-crud/prime-crud.component';
import { PrimeModule } from '@kardex/prime';
import { PrimeCrudResponsiveComponent } from './components/prime-crud-responsive/prime-crud-responsive.component';


@NgModule({
  imports: [
    CommonModule,
    PrimeModule,
  ],
  declarations: [
    CrudBasicComponent, 
    PrimeCrudComponent, 
    PrimeCrudResponsiveComponent,
  ],
  exports:[
    CrudBasicComponent,
  ]
})
export class PlantillaModule {}
