import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoproveedoresComponent } from './dialogoproveedores.component';

describe('DialogoproveedoresComponent', () => {
  let component: DialogoproveedoresComponent;
  let fixture: ComponentFixture<DialogoproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
