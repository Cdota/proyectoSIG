import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproveedoresComponent } from './listproveedores.component';

describe('ListproveedoresComponent', () => {
  let component: ListproveedoresComponent;
  let fixture: ComponentFixture<ListproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
