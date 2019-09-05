import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTechListComponent } from './user-tech-list.component';

describe('UserTechListComponent', () => {
  let component: UserTechListComponent;
  let fixture: ComponentFixture<UserTechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTechListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
