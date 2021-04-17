import { Component, OnInit } from '@angular/core';
import { AuthService } from '@kardex/auth';

@Component({
  selector: 'kardex-layout-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    console.log('PanelComponent');
  }

}
