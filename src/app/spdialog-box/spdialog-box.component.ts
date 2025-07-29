import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Kategorije } from '../interfaces/transaction.interface';
import { Transakcija } from '../interfaces/transaction.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Split } from '../interfaces/transaction.interface';
import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms'; 
import { Validators } from '@angular/forms';
import { KategorijaaResponse } from '../interfaces/transaction.interface';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-spdialog-box',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './spdialog-box.component.html',
  styleUrl: './spdialog-box.component.scss'
})
export class SPdialogBoxComponent implements OnInit {
   form: FormGroup;
  categories: Kategorije[] = [];
  i=0;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<SPdialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { transaction: Transakcija }
  ) {
    // 1) Dodajemo validator na ceo form group:
    this.form = this.fb.group({
      transactionRows: this.fb.array([
        this.createRow(),
        this.createRow()
      ])
    }, { validators: this.splitsSumValidator() }); // :contentReference[oaicite:2]{index=2}
  }

  ngOnInit(): void {
    this.http.get<KategorijaaResponse>('assets/catMock.json').subscribe((res) => {
      this.categories = res.items;
    });
  }

  get transactionRows(): FormArray {
    return this.form.get('transactionRows') as FormArray;
  }

   createRow(): FormGroup {
    return this.fb.group({
      value: ['', [Validators.required, Validators.min(0)]],
      category: [null, Validators.required]
    });
  }

  addRow() {
    this.transactionRows.push(this.createRow());
  }

  /** Validator koji proverava da li suma value polja jednak data.transaction.amount */
  private splitsSumValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const rows = (control.get('transactionRows') as FormArray).controls;
      const sum = rows
        .map(r => Number(r.get('value')?.value) || 0)
        .reduce((a, b) => a + b, 0);
      const expected = Number(this.data.transaction.amount);
      return sum === expected
        ? null
        : { sumMismatch: { actual: sum, expected } };
    };
  }

  submit() {
    if (this.form.invalid) return;
    this.data.transaction.splits = this.buildSplits();
    this.dialogRef.close(this.data.transaction);
  }

  private buildSplits(): Split[] {
    return this.transactionRows.controls.map(control => ({
      name: control.get('category')?.value.name,
      amount: Number(control.get('value')?.value)
    }));
    // ovo sluzi da napravi splitove da mozemo da ih prikazemo u tabeli iz forme
  }
  //brise red iz forme
   removeSplit(index: number): void {
    if (this.transactionRows.length > 1) {
      this.transactionRows.removeAt(index);
    }
  }
}