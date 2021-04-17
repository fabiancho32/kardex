import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kardex-layout-modulo-header',
  templateUrl: './modulo-header.component.html',
  styleUrls: ['./modulo-header.component.scss']
})
export class ModuloHeaderComponent implements OnInit {

  constructor() { console.log('ModuloHeader'); }

  ngOnInit(): void {
    console.log('ModuloHeader');
  }

}
