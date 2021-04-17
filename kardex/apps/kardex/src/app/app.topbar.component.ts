import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { AuthService } from '@kardex/auth';
import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'app-topbar',
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
              <span class="topbar-item-name profile-name">Claire White</span>
              <span class="topbar-item-name profile-role">System Admin</span>
            </div>
          </a>

          <ul class="fadeInDown">
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-user"></i>
                <span>Perfil</span>
                <span class="topbar-submenuitem-badge">5</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-lock"></i>
                <span>Privacidad</span>
                <span class="topbar-submenuitem-badge">2</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-cog"></i>
                <span>Configuración</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="cerrarSesion()">
                <i class="pi pi-sign-out"></i>
                <span>Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </li>
        <li
          #settings
          [ngClass]="{
            'active-topmenuitem': appMain.activeTopbarItem === settings
          }"
        >
          <a href="#" (click)="appMain.onTopbarItemClick($event, settings)">
            <i class="topbar-icon pi pi-cog"></i>
            <span class="topbar-item-name">Configuración</span>
          </a>
          <ul class="fadeInDown">
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-palette"></i>
                <span>Change Theme</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-heart"></i>
                <span>Favorites</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-lock"></i>
                <span>Lock Screen</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-image"></i>
                <span>Wallpaper</span>
              </a>
            </li>
          </ul>
        </li>
        <li
          #messages
          [ngClass]="{
            'active-topmenuitem': appMain.activeTopbarItem === messages
          }"
        >
          <a href="#" (click)="appMain.onTopbarItemClick($event, messages)">
            <i class="topbar-icon pi pi-envelope"></i>
            <span class="topbar-badge">5</span>
            <span class="topbar-item-name">Messages</span>
          </a>
          <ul class="fadeInDown">
            <li role="menuitem">
              <a
                href="#"
                class="topbar-message"
                (click)="appMain.onTopbarSubItemClick($event)"
              >
                <img src="assets/layout/images/avatar1.png" width="35" />
                <span>Give me a call</span>
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#"
                class="topbar-message"
                (click)="appMain.onTopbarSubItemClick($event)"
              >
                <img src="assets/layout/images/avatar2.png" width="35" />
                <span>Sales reports attached</span>
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#"
                class="topbar-message"
                (click)="appMain.onTopbarSubItemClick($event)"
              >
                <img src="assets/layout/images/avatar3.png" width="35" />
                <span>About your invoice</span>
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#"
                class="topbar-message"
                (click)="appMain.onTopbarSubItemClick($event)"
              >
                <img src="assets/layout/images/avatar2.png" width="35" />
                <span>Meeting today at 10pm</span>
              </a>
            </li>
            <li role="menuitem">
              <a
                href="#"
                class="topbar-message"
                (click)="appMain.onTopbarSubItemClick($event)"
              >
                <img src="assets/layout/images/avatar4.png" width="35" />
                <span>Out of office</span>
              </a>
            </li>
          </ul>
        </li>
        <li
          #notifications
          [ngClass]="{
            'active-topmenuitem': appMain.activeTopbarItem === notifications
          }"
        >
          <a
            href="#"
            (click)="appMain.onTopbarItemClick($event, notifications)"
          >
            <i class="topbar-icon pi pi-clock"></i>
            <span class="topbar-badge">4</span>
            <span class="topbar-item-name">Notifications</span>
          </a>
          <ul class="fadeInDown">
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-sliders-h"></i>
                <span>Pending tasks</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-calendar"></i>
                <span>Meeting today at 3pm</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-download"></i>
                <span>Download documents</span>
              </a>
            </li>
            <li role="menuitem">
              <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                <i class="pi pi-ticket"></i>
                <span>Book flight</span>
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
