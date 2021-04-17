import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloHeaderComponent } from './modulo-header.component';

describe('ModuloHeaderComponent', () => {
  let component: ModuloHeaderComponent;
  let fixture: ComponentFixture<ModuloHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
