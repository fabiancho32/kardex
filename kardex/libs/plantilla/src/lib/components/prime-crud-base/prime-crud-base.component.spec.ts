import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCrudBaseComponent } from './prime-crud-base.component';

describe('PrimeCrudBaseComponent', () => {
  let component: PrimeCrudBaseComponent;
  let fixture: ComponentFixture<PrimeCrudBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeCrudBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeCrudBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
