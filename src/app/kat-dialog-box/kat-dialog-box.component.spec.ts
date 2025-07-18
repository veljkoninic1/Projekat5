import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatDialogBoxComponent } from './kat-dialog-box.component';

describe('KatDialogBoxComponent', () => {
  let component: KatDialogBoxComponent;
  let fixture: ComponentFixture<KatDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KatDialogBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KatDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
