import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnologyComponent } from './list-technology.component';

describe('ListTechnologyComponent', () => {
  let component: ListTechnologyComponent;
  let fixture: ComponentFixture<ListTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
