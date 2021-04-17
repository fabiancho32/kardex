import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloMenuComponent } from './modulo-menu.component';

describe('ModuloMenuComponent', () => {
  let component: ModuloMenuComponent;
  let fixture: ComponentFixture<ModuloMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
