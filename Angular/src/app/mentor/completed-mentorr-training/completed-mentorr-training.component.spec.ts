import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedMentorrTrainingComponent } from './completed-mentorr-training.component';

describe('CompletedMentorrTrainingComponent', () => {
  let component: CompletedMentorrTrainingComponent;
  let fixture: ComponentFixture<CompletedMentorrTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedMentorrTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedMentorrTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
