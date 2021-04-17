import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../components/header/header.component';
import { ModuloHeaderComponent } from './modulo-header/modulo-header.component';

import { MenuComponent } from '../components/menu/menu.component';
import { ModuloMenuComponent } from './modulo-menu/modulo-menu.component';

import { PanelComponent } from '../components/panel/panel.component';
import { ModuloPanelComponent } from './modulo-panel/modulo-panel.component';

import { SizeDetectorComponent } from '../components/size-detector/size-detector.component';

import { PrimeModule } from '@kardex/prime';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ResizeService } from '../services/resize.service';
import { LayoutRoutingModule } from '../layout.routing.module';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CanActivateViaAuthGuard } from '@kardex/auth';



@NgModule({
  declarations: [
    HeaderComponent, 
    ModuloHeaderComponent,
    MenuComponent,
    ModuloMenuComponent,
    PanelComponent,
    ModuloPanelComponent,
    SizeDetectorComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    HttpClientModule,
    LayoutRoutingModule,
  ],
  exports: [
    ModuloHeaderComponent,
    ModuloPanelComponent,
    ModuloMenuComponent
  ],
  providers: [
    ResizeService, MessageService, ConfirmationService, CanActivateViaAuthGuard
  ],
})
export class ContainersModule {}
