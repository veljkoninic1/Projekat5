import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacijaComponent } from './paginacija.component';

describe('PaginacijaComponent', () => {
  let component: PaginacijaComponent;
  let fixture: ComponentFixture<PaginacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginacijaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
