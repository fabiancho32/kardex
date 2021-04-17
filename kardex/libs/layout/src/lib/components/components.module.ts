import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PanelComponent } from './panel/panel.component';
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { ResizeService }  from '../services/resize.service';
import { PrimeModule } from '@kardex/prime';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent, 
    MenuComponent, 
    PanelComponent, 
    SizeDetectorComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    HttpClientModule
  ],
  providers:[ 
    ResizeService
   ]
})
export class ComponentsModule { }
