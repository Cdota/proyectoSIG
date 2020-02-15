import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddventasComponent } from './addventas.component';

describe('AddventasComponent', () => {
  let component: AddventasComponent;
  let fixture: ComponentFixture<AddventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
