import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedUserTrainingComponent } from './completed-user-training.component';

describe('CompletedUserTrainingComponent', () => {
  let component: CompletedUserTrainingComponent;
  let fixture: ComponentFixture<CompletedUserTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedUserTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedUserTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
