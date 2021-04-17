import { CanActivateViaAuthGuard } from '@kardex/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from './containers/containers.module';
import { ModuloHeaderComponent } from './containers/modulo-header/modulo-header.component';
import { ModuloPanelComponent } from './containers/modulo-panel/modulo-panel.component';
import { ModuloMenuComponent } from './containers/modulo-menu/modulo-menu.component';
@NgModule({
  imports: [
    CommonModule,
    ContainersModule
  ],
  exports:[
  ModuloHeaderComponent,
  ModuloPanelComponent,
  ModuloMenuComponent
  ],
  providers: [
    CanActivateViaAuthGuard
  ]
})
export class LayoutModule {}
