import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclientesComponent } from './listclientes.component';

describe('ListclientesComponent', () => {
  let component: ListclientesComponent;
  let fixture: ComponentFixture<ListclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
