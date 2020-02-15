import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarventasComponent } from './editarventas.component';

describe('EditarventasComponent', () => {
  let component: EditarventasComponent;
  let fixture: ComponentFixture<EditarventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
