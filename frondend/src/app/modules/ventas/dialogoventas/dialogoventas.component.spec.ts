import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoventasComponent } from './dialogoventas.component';

describe('DialogoventasComponent', () => {
  let component: DialogoventasComponent;
  let fixture: ComponentFixture<DialogoventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
