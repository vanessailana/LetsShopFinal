import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentsComponent } from './edit-departments.component';

describe('EditDepartmentsComponent', () => {
  let component: EditDepartmentsComponent;
  let fixture: ComponentFixture<EditDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
