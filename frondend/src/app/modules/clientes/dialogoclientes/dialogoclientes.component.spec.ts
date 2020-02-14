import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoclientesComponent } from './dialogoclientes.component';

describe('DialogoclientesComponent', () => {
  let component: DialogoclientesComponent;
  let fixture: ComponentFixture<DialogoclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
