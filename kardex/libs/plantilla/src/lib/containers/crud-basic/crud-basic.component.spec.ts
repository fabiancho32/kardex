import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBasicComponent } from './crud-basic.component';

describe('CrudBasicComponent', () => {
  let component: CrudBasicComponent;
  let fixture: ComponentFixture<CrudBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
