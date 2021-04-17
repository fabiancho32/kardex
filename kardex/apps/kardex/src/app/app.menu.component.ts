import { AuthService } from '@kardex/auth';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu-scroll-content">
			<ul class="navigation-menu">
				<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
			</ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {
constructor(private authService: AuthService){ console.log('Menu');}
    public model: any[];


    ngOnInit() {
        this.model = this.authService.getMenu(); 
    }
}
