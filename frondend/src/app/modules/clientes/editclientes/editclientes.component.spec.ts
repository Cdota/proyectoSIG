import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientesComponent } from './editclientes.component';

describe('EditclientesComponent', () => {
  let component: EditclientesComponent;
  let fixture: ComponentFixture<EditclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
