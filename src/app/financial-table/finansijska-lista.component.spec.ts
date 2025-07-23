import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansijskaListaComponent } from './finansijska-lista.component';

describe('FinansijskaListaComponent', () => {
  let component: FinansijskaListaComponent;
  let fixture: ComponentFixture<FinansijskaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinansijskaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinansijskaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
