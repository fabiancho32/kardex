import { CanActivateViaAuthGuard } from '@kardex/auth';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloHeaderComponent } from './containers/modulo-header/modulo-header.component';
import { ModuloMenuComponent } from './containers/modulo-menu/modulo-menu.component';
import { ModuloPanelComponent } from './containers/modulo-panel/modulo-panel.component';

export const layoutRoutes: Routes = [
  {
    path: 'header',
    component: ModuloHeaderComponent,
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: ModuloMenuComponent,
    pathMatch: 'full',
    canActivate: [CanActivateViaAuthGuard],
  },
  {
    path: 'panel',
    component: ModuloPanelComponent,
    pathMatch: 'full',
    canActivate: [CanActivateViaAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
