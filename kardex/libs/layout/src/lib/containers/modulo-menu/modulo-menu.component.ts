import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kardex-layout-modulo-menu',
  templateUrl: './modulo-menu.component.html',
  styleUrls: ['./modulo-menu.component.scss']
})
export class ModuloMenuComponent implements OnInit {

  constructor() { console.log('ModuloMenu'); }

  ngOnInit(): void {
    console.log('ModuloMenu');
  }

}
