import { MenuService } from './../../services/menu.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { MenuItem} from 'primeng/api';
import { ResizeService } from '../../services/resize.service';
import { SCREEN_SIZE } from '../size-detector/screen-size.enum';
import { delay } from 'rxjs/operators';
import { AuthService } from '@kardex/auth';

@Component({
  selector: 'kardex-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  @Input() active = true;

   size: SCREEN_SIZE;
   menu = {};
   model: MenuItem[];
   cadenaMenu = '';
   
   constructor(private resizeSvc: ResizeService,public authService : AuthService, private menuService: MenuService) {
      this.resizeSvc.onResize$
       .pipe(delay(0))
       .subscribe(x => {
         this.size = x;
       });

   }

    getMenu(){
    this.model = this.authService.getMenu(); 
  }



  ngOnInit(){
    this.getMenu();
  }

}
