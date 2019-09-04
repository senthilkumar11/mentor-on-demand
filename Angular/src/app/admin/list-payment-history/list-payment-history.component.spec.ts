import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentHistoryComponent } from './list-payment-history.component';

describe('ListPaymentHistoryComponent', () => {
  let component: ListPaymentHistoryComponent;
  let fixture: ComponentFixture<ListPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
