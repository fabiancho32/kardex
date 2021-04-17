import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCrudResponsiveComponent } from './prime-crud-responsive.component';

describe('PrimeCrudResponsiveComponent', () => {
  let component: PrimeCrudResponsiveComponent;
  let fixture: ComponentFixture<PrimeCrudResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeCrudResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeCrudResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
