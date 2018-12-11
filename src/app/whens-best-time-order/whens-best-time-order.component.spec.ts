import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhensBestTimeOrderComponent } from './whens-best-time-order.component';

describe('WhensBestTimeOrderComponent', () => {
  let component: WhensBestTimeOrderComponent;
  let fixture: ComponentFixture<WhensBestTimeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhensBestTimeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhensBestTimeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });
});
