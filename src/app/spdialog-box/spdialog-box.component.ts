import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Kategorije } from '../interfaces/transaction.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spdialog-box',
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './spdialog-box.component.html',
  styleUrl: './spdialog-box.component.scss'
})
export class SPdialogBoxComponent implements OnInit {
  form: FormGroup;
  categories: string[]=[];


  ngOnInit(): void {
    this.http.get<KategorijaaResponse>('assets/katMock.json')
    .pipe(
        map(res => res.items.map(item => item.name))
      )
    .subscribe((res)=>{
      this.categories= res;
    });
  }
  

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      transactionRows: this.fb.array([
        this.createRow(),
        this.createRow()
      ])
    });
  }

  get transactionRows() {
    return this.form.get('transactionRows') as FormArray;
  }

  createRow(): FormGroup {
    return this.fb.group({
      value: [''],
      category: ['']
    });
  }

  addRow() {
    this.transactionRows.push(this.createRow());
  }

  submit() {
    console.log(this.form.value);
  }
  

}

  interface KategorijaaResponse {
  items: Kategorije[];
}

