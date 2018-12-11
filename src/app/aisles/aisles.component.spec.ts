import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AislesComponent } from './aisles.component';

describe('AislesComponent', () => {
  let component: AislesComponent;
  let fixture: ComponentFixture<AislesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AislesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AislesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });
});
