import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPanelComponent } from './modulo-panel.component';

describe('ModuloPanelComponent', () => {
  let component: ModuloPanelComponent;
  let fixture: ComponentFixture<ModuloPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
