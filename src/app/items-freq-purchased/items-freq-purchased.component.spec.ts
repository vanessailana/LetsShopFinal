import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFreqPurchasedComponent } from './items-freq-purchased.component';

describe('ItemsFreqPurchasedComponent', () => {
  let component: ItemsFreqPurchasedComponent;
  let fixture: ComponentFixture<ItemsFreqPurchasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsFreqPurchasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsFreqPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });
});
