import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoproductosComponent } from './dialogoproductos.component';

describe('DialogoproductosComponent', () => {
  let component: DialogoproductosComponent;
  let fixture: ComponentFixture<DialogoproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
