import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMetadataComponent } from './order-metadata.component';

describe('OrderMetadataComponent', () => {
  let component: OrderMetadataComponent;
  let fixture: ComponentFixture<OrderMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
