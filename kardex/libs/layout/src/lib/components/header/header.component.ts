import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ResizeService } from '../../services/resize.service';
import { SCREEN_SIZE } from '../size-detector/screen-size.enum';
import { delay } from 'rxjs/operators';
import { AuthService } from '@kardex/auth';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'kardex-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  itemsPopup: MenuItem[];

  size: SCREEN_SIZE;
  
  items: MenuItem[];
  
  constructor(private resizeSvc: ResizeService, public authService : AuthService, private router: Router,private menuService: MenuService) {
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
      });
  }


  getMenu(){
    this.items = this.authService.getMenu(); 
  }



  ngOnInit(): void {
    this.getMenu();
    this.itemsPopup = [
      {
         label:'Mi perfil',
         icon:'pi pi-fw pi-user'
      },
      {
         label:'Configuracion',
         icon:'pi pi-fw pi-sliders-h'
      },
      {
         label:'Cerrar sesion',
         icon:'pi pi-fw pi-power-off',
         command: (event) => {
          this.router.navigate(['/auth/modulo']); 
          this.onLogout();
        }
      }
  ];
  }

   onLogout():void{
      this.authService.logoutUser();
   }
}



