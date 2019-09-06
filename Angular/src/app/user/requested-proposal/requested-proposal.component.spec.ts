import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedProposalComponent } from './requested-proposal.component';

describe('RequestedProposalComponent', () => {
  let component: RequestedProposalComponent;
  let fixture: ComponentFixture<RequestedProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
