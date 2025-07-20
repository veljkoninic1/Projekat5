import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleTransactionsComponent } from './select-multiple-transactions.component';

describe('SelectMultipleTransactionsComponent', () => {
  let component: SelectMultipleTransactionsComponent;
  let fixture: ComponentFixture<SelectMultipleTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMultipleTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMultipleTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
