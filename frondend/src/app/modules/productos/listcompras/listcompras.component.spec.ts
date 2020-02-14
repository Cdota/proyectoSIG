import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomprasComponent } from './listcompras.component';

describe('ListcomprasComponent', () => {
  let component: ListcomprasComponent;
  let fixture: ComponentFixture<ListcomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
