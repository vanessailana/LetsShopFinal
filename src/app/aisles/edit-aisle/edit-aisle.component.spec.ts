import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAisleComponent } from './edit-aisle.component';

describe('EditAisleComponent', () => {
  let component: EditAisleComponent;
  let fixture: ComponentFixture<EditAisleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAisleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAisleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });
});
