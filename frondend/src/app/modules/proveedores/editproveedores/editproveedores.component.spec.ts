import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproveedoresComponent } from './editproveedores.component';

describe('EditproveedoresComponent', () => {
  let component: EditproveedoresComponent;
  let fixture: ComponentFixture<EditproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
