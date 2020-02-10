import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductosComponent } from './listproductos.component';

describe('ListproductosComponent', () => {
  let component: ListproductosComponent;
  let fixture: ComponentFixture<ListproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
