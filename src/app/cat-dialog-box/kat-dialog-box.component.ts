import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Kategorije } from '../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Transakcija } from '../interfaces/transaction.interface';
import { KategorijaaResponse } from '../interfaces/transaction.interface';

@Component({
  selector: 'app-kat-dialog-box',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogModule,
    MatDialogActions,],
  templateUrl: './kat-dialog-box.component.html',
  styleUrl: './kat-dialog-box.component.scss'
})
export class KatDialogBoxComponent implements OnInit {
  allItems: Kategorije[] = [];
  categories: Kategorije[] = [];
  subcategories: Kategorije[] = [];

  selectedCategory!: Kategorije;
  selectedSubCategory!: Kategorije;

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<KatDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { transactions: Transakcija[] }) { }

  ngOnInit(): void {
    this.http.get<KategorijaaResponse>('assets/catMock.json').subscribe((res) => {
      this.allItems = res.items;
      this.categories = res.items.filter(item => item['parent-code'] === '');
    });
  }

  onCategoryChange(): void {
    this.subcategories = this.allItems.filter(
      item => item['parent-code'] === this.selectedCategory.code.toString()
    );

  }

  aplly(): void {

    for (const transaction of this.data.transactions) {
      transaction.catname = this.selectedCategory.name;
      if (this.selectedSubCategory) {
        transaction.catname += ' | ' + this.selectedSubCategory.name;
      }
    }
    this.dialogRef.close(this.data.transactions);
  }


}