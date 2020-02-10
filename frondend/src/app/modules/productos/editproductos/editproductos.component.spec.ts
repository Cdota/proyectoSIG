import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductosComponent } from './editproductos.component';

describe('EditproductosComponent', () => {
  let component: EditproductosComponent;
  let fixture: ComponentFixture<EditproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
