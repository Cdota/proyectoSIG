import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductosComponent } from './addproductos.component';

describe('AddproductosComponent', () => {
  let component: AddproductosComponent;
  let fixture: ComponentFixture<AddproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
