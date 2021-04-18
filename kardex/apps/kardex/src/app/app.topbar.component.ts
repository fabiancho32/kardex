import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { AuthService } from '@kardex/auth';
import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'kardex-app-topbar',
  template: `
    <div class="topbar clearfix">
      <div class="logo">
        <a href="#">
          <img src="assets/img/icono_blanco.png" />
        </a>
      </div>

      <a href="#">
        <img src="assets/img/logo_blanco.png" class="app-name" />
      </a>

      <a
        id="topbar-menu-button"
        href="#"
        (click)="appMain.onTopbarMenuButtonClick($event)"
      >
        <i class="pi pi-bars"></i>
      </a>

      <ul
        class="topbar-menu fadeInDown"
        [ngClass]="{ 'topbar-menu-visible': appMain.topbarMenuActive }"
      >
        <li
          #profile
          class="profile-item"
          [ngClass]="{
            'active-topmenuitem': appMain.activeTopbarItem === profile
          }"
        >
          <a href="#" (click)="appMain.onTopbarItemClick($event, profile)">
            <div class="profile-image">
              <img src="assets/layout/images/profile-image.png" />
            </div>
            <div class="profile-info">
              <span class="topbar-item-name profile-name">{{
                this.authService.getCurrentUser().realm
              }}</span>
              <span class="topbar-item-name profile-role">Administrador/a</span>
            </div>
          </a>

          <ul class="fadeInDown">
            <li role="menuitem">
              <a href="#" (click)="cerrarSesion()">
                <i class="pi pi-sign-out"></i>
                <span>Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </li>
        <li
          #search
          class="search-item"
          [ngClass]="{
            'active-topmenuitem': appMain.activeTopbarItem === search
          }"
          (click)="appMain.onTopbarItemClick($event, search)"
        >
          <span class="p-input-icon-right">
            <input type="text" pInputText placeholder="Buscar..." />
            <i class="topbar-icon pi pi-search"></i>
          </span>
        </li>
      </ul>
    </div>
  `,
})
export class AppTopbarComponent {
  constructor(
    public appMain: AppMainComponent,
    public authService: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirmar() {
    this.confirmationService.confirm({
      message:
        'Al cerrar sesión automaticamente se cerrara la caja actual ¿Desea cerrar sesión?',
      header: 'Cerrar Sesión',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Usted ha aceptado',
        });
        this.authService.logoutUser();
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'Error',
              summary: 'Rechazado',
              detail: 'Usted ha rechazado',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'Advertencia',
              summary: 'Cancelado',
              detail: 'Usted ha cancelado',
            });
            break;
        }
      },
    });
  }

  cerrarSesion() {
    this.authService.logoutUser();
  }
}
