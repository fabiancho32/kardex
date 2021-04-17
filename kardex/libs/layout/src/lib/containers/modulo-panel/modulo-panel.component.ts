import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kardex-layout-modulo-panel',
  templateUrl: './modulo-panel.component.html',
  styleUrls: ['./modulo-panel.component.scss']
})
export class ModuloPanelComponent implements OnInit {

  constructor() { console.log('ModuloPanel'); }

  ngOnInit(): void {
    console.log('ModuloPanel');
  }

}
