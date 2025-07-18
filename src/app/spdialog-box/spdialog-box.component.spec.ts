import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPdialogBoxComponent } from './spdialog-box.component';

describe('SPdialogBoxComponent', () => {
  let component: SPdialogBoxComponent;
  let fixture: ComponentFixture<SPdialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPdialogBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPdialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
